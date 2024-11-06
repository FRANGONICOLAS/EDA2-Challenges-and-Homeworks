import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Bienvenido a la Página Principal</h1>
      <p style={styles.description}>
        Esta es la página de inicio de nuestra aplicación. Navega por las diferentes secciones para explorar más.
      </p>
      <div style={styles.linksContainer}>
        <Link to="/about" style={styles.link}>Sobre Nosotros</Link>
        <Link to="/services" style={styles.link}>Servicios</Link>
        <Link to="/contact" style={styles.link}>Contacto</Link>
      </div>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    padding: '20px',
  },
  heading: {
    fontSize: '2em',
    color: '#333',
  },
  description: {
    fontSize: '1.2em',
    color: '#666',
    margin: '20px 0',
  },
  linksContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '15px',
  },
  link: {
    padding: '10px 20px',
    backgroundColor: '#4CAF50',
    color: 'white',
    textDecoration: 'none',
    borderRadius: '5px',
    transition: 'background-color 0.3s ease',
  },
};

export default Home;
