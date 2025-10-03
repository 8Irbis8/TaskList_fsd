// импорт по заданию
/* eslint-disable @conarti/feature-sliced/layers-slices */
import { TaskList } from 'widgets/taskList';

import React from 'react';

import classes from './TaskWidget.module.css';

export const TaskWidget: React.FC = () => {
  return (
    <div className={`${classes.widget}`}>
      <TaskList />
    </div>
  );
};
