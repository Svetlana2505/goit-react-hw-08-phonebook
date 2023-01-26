import { Routes, Route } from 'react-router-dom';
import { useEffect, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Layout } from './Layout/Layout';
import { fetchCurrentUser } from '../redux/auth/auth-operations';
import { PrivateRoute } from '../Route/PrivateRoute';
import { PublicRoute } from '../Route/PublicRoute';
import { selectisFetchCurrentUser } from '../redux/auth/auth-selectors';


import Particle from './Particles/Particles.jsx';

const HomePage = lazy(() => import('pages/HomePage/HomePage.jsx'));
const ContactPage = lazy(() => import('pages/ContactPage'));
const LoginForm = lazy(() => import('pages/LoginForm/LoginForm'));
const Register = lazy(() => import('pages/RegisterForm/Register'));

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
