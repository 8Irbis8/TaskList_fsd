import React from 'react';
import { TaskList } from 'widgets/taskList';

import classes from './TaskWidget.module.css';

export const TaskWidget: React.FC = () => {
  return (
    <div className={`${classes.widget}`}>
      <TaskList />
    </div>
  );
};