import React from 'react';

import classes from './TaskCard.module.css';

export interface TaskCardProps {
  /** Заголовок задачи */
  title: string;
  /** Статус задачи */
  completed: boolean;
}

/**
 * Презентационный компонент карточки задачи
 * Отображает заголовок и статус задачи
 */
export const TaskCard: React.FC<TaskCardProps> = ({ title, completed }) => {
  console.log('render');
  return (
    <div className={`${classes.card} ${completed ? classes.completed : ''}`} role='button'>
      <div className={classes.content}>
        <h3 className={classes.title}>{title}</h3>
        <div className={classes.status}>
          <span
            className={`${classes.statusIcon} ${completed ? classes.checked : classes.unchecked}`}
          >
            {completed ? '✓' : '○'}
          </span>
          <span className={classes.statusText}>{completed ? 'Выполнено' : 'В процессе'}</span>
        </div>
      </div>
    </div>
  );
};


