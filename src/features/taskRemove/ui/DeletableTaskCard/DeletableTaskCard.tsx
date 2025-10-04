import { TaskCard } from 'entities/task';
import type { Task } from 'entities/task';
import { DeleteButton } from 'shared/ui/DeleteButton/DeleteButton';

import React, { useCallback } from 'react';

import classes from './DeletableTaskCard.module.css';

export interface DeletableTaskCardProps {
  task: Task;
  onClickDelete: (id: string) => void;
}

const DeletableTaskCardComponent: React.FC<DeletableTaskCardProps> = ({ task, onClickDelete }) => {
  const handleDeleteMemo = useCallback(() => {
    onClickDelete(task.id);
  }, [task?.id, onClickDelete]);

  return (
    <div className={classes.card} role='button'>
      <TaskCard {...task} />
      {!!onClickDelete && <DeleteButton onClick={handleDeleteMemo} />}
    </div>
  );
};

export const DeletableTaskCard = React.memo(DeletableTaskCardComponent);
