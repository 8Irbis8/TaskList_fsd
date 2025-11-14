import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { TaskPage } from 'pages/tasks';
import { SignInPage } from 'pages/signin';
import { SubscriptionPage } from 'pages/subscription';
import { MainLayout } from 'layouts/main';
import { RefExamplesPage } from 'pages/refExamples';

export const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<TaskPage />} />
          <Route path="signin" element={<SignInPage />} />
          <Route path="subscription" element={<SubscriptionPage />} />
          <Route path="refExamples" element={<RefExamplesPage />} />
          <Route path="tasks" element={<TaskPage />} />
          <Route path="*" element={<div>Страница не найдена</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};