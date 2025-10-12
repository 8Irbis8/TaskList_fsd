import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { TaskPage } from 'pages/tasks';
import { SignInPage } from 'pages/signin';

export const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TaskPage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/tasks" element={<TaskPage />} />

        <Route path="*" element={<div>Страница не найдена</div>} />
      </Routes>
    </BrowserRouter>
  );
};