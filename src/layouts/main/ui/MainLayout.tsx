import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from 'widgets/header';
import styles from './MainLayout.module.css';

export const MainLayout: React.FC = () => {
  return (
    <div className={styles.layout}>
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
};