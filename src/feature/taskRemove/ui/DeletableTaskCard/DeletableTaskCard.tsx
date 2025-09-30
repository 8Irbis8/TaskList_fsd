import { TaskCard } from 'entities/Task';
import type { Task } from 'entities/Task';
import { DeleteButton } from 'shared/ui/DeleteButton/DeleteButton';

import React, { useCallback } from 'react';

import classes from './DeletableTaskCard.module.css';

export interface DeletableTaskCardProps {
  task: Task;
  onClickDelete: (id: string) => void;
}

export const DeletableTaskCard: React.FC<DeletableTaskCardProps> = ({ task, onClickDelete }) => {
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
