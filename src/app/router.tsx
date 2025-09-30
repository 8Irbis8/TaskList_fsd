import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { TaskPage } from 'pages/tasks';

export const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TaskPage />} />
        <Route path="/tasks" element={<TaskPage />} />
        {/* Можно добавить другие маршруты */}
        <Route path="*" element={<div>Страница не найдена</div>} />
      </Routes>
    </BrowserRouter>
  );
};