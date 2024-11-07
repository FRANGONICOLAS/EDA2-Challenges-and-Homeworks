import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Login = () => {
  const [username, setUsername] = useState('');
  const { state, dispatch } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    const lastVisitedPage = state.lastVisitedPage || '/dashboard';
    dispatch({ type: 'LOGIN', payload: { user: username, lastVisitedPage } });
    localStorage.setItem('lastVisitedPage', lastVisitedPage);
    navigate(lastVisitedPage);
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;