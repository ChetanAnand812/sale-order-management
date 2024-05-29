import React, { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AuthContext } from './context/AuthContext';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import { ThemeProvider, ThemeToggle } from './context/ThemeContext';

const App = () => {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <ThemeProvider>
      <ThemeToggle />
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={isAuthenticated ? <HomePage /> : <Navigate to="/login" />} />
      </Routes>
    </ThemeProvider>
  );
};

export default App;
