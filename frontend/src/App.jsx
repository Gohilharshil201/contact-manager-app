import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';

const isAuthenticated = () => !!localStorage.getItem('token');

const PrivateRoute = ({ children }) => {
  return isAuthenticated() ? children : <Navigate to="/login" replace />;
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Root path redirect based on auth */}
        <Route
          path="/"
          element={
            <Navigate to={isAuthenticated() ? '/dashboard' : '/login'} replace />
          }
        />

        {/* Public routes */}
        <Route
          path="/register"
          element={
            isAuthenticated() ? <Navigate to="/dashboard" replace /> : <RegisterPage />
          }
        />
        <Route
          path="/login"
          element={
            isAuthenticated() ? <Navigate to="/dashboard" replace /> : <LoginPage />
          }
        />

        {/* Protected route */}
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <DashboardPage />
            </PrivateRoute>
          }
        />

        {/* Catch-all redirect */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
