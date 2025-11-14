import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Header.module.css';

export const Header: React.FC = () => {
  const location = useLocation();

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link 
          to="/tasks" 
          className={`${styles.link} ${location.pathname === '/tasks' ? styles.active : ''}`}
        >
          Задачи
        </Link>
        <Link 
          to="/signin" 
          className={`${styles.link} ${location.pathname === '/signin' ? styles.active : ''}`}
        >
          Регистрация
        </Link>
        <Link 
          to="/subscription" 
          className={`${styles.link} ${location.pathname === '/subscription' ? styles.active : ''}`}
        >
          Подписка
        </Link>
        <Link 
          to="/refExamples" 
          className={`${styles.link} ${location.pathname === '/refExamples' ? styles.active : ''}`}
        >
          Дз по React.useRef
        </Link>
      </nav>
    </header>
  );
};