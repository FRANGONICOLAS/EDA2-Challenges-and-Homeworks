import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import PrivateRoute from './Components/PrivateRoute';
import NavbarComponent from './Components/Navbar';
import Home from './page/Home';
import Login from './page/Login';
import Dashboard from './page/Dashboard';

const App = () => {
  const { state, dispatch } = useAuth();

  useEffect(() => {
    const lastVisitedPage = localStorage.getItem('lastVisitedPage');
    if (lastVisitedPage) {
      dispatch({ type: 'SET_LAST_VISITED_PAGE', payload: lastVisitedPage });
    }
  }, [dispatch]);

  return (
    <AuthProvider>
      <Router>
        <NavbarComponent />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/dashboard" element={<PrivateRoute element={Dashboard} />} />
          <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;