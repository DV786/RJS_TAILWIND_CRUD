import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ProtectedRoute from './ProctectedRoute';
import PublicRoute from './PublicRoute';

import DashboardPage from '../pages/dashboard';
import LoginPage from '../pages/auth/login';
import SignupPage from '../pages/auth/signup';
import PageNotFound from '../components/PageNotFound';
import CartPage from '../pages/cart';

export const RouterContainer = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route element={<PublicRoute />}>
        <Route path='/' element={<LoginPage />} />
        <Route path='/signup' element={<SignupPage />} />
      </Route>
      <Route element={<ProtectedRoute />}>
        <Route path='/dashboard' element={<DashboardPage/>} />
        <Route path='/cart' element={<CartPage />} />
      </Route>
      <Route
          path="*"
          element={<Navigate to={'/404'} />}
        />
        <Route
          path="/404"
          element={<PageNotFound />}
        />
    </Routes>
  </BrowserRouter>
  )
}