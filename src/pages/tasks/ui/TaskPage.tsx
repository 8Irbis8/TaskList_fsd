import { TaskWidget } from 'widgets/task';

import React from 'react';

import classes from './TaskPage.module.css';

export const TaskPage: React.FC = () => {
  return (
    <div className={classes.page}>
      <div className={classes.container}>
        <header className={classes.header}>
          <h1 className={classes.title}>Управление задачами</h1>
          <p className={classes.description}>
            Организуйте свои задачи эффективно с помощью нашего менеджера
          </p>
        </header>

        <main className={classes.main}>
          <TaskWidget />
        </main>
      </div>
    </div>
  );
};