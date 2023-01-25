import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { HomePage } from '../pages/HomePage/HomePage.jsx';
import { ContactPage } from '../pages/ContactPage';
import { LoginForm } from '../pages/LoginForm/LoginForm';
// import { RegisterForm } from '../pages/RegisterForm/RegisterForm';
import { Layout } from './Layout/Layout';
import { fetchCurrentUser } from '../redux/auth/auth-operations';
import { PrivateRoute } from '../Route/PrivateRoute';
import { PublicRoute } from '../Route/PublicRoute';
import { selectisFetchCurrentUser } from '../redux/auth/auth-selectors';
import { Register } from '../pages/RegisterForm/Register';

import Particle from './Particles/Particles.jsx';

export const App = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectisFetchCurrentUser);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      {!currentUser && (
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route
              index
              element={
                <PublicRoute>
                  <HomePage />
                </PublicRoute>
              }
            />
            <Route
              path="contacts"
              element={
                <PrivateRoute>
                  <ContactPage />
                </PrivateRoute>
              }
            />
            <Route
              path="register"
              element={
                <PublicRoute restricted>
                  <Register />
                </PublicRoute>
              }
            />
            <Route
              path="login"
              element={
                <PublicRoute restricted>
                  <LoginForm />
                </PublicRoute>
              }
            />
          </Route>
        </Routes>
      )}
      <Particle />
    </>
  );
};
