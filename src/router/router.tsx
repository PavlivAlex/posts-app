import React from 'react';

// helpers
import { routes } from './routes';
import { IRoute } from '../interfaces/router';

// components
import MainLayout from '../layouts/MainLayout';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';
import { Routes, Route } from 'react-router-dom';

const Router = () => {
  return (
    <Routes>
      {routes.map((route: IRoute) => (
        <Route
          key={route.path}
          path={route.path}
          element={
            <MainLayout>
              <route.component />
            </MainLayout>
          }
        />
      ))}
      <Route path='*' element={<NotFoundPage />} />
    </Routes>
  );
};

export default Router;
