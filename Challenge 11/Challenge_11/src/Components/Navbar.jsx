import React from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavbarComponent = () => {
  const { state, dispatch } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' });
    navigate('/login');
  };

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/home">Home</Nav.Link>
          {state.isAuthenticated && <Nav.Link href="/dashboard">Dashboard</Nav.Link>}
        </Nav>
        {state.isAuthenticated ? (
          <Nav>
            <Navbar.Text>
              Signed in as: <a href="#login">{state.user}</a>
            </Navbar.Text>
            <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
          </Nav>
        ) : (
          <Nav.Link href="/login">Login</Nav.Link>
        )}
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;