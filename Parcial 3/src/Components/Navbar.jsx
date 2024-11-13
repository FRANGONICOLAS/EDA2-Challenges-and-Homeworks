import { useNavigate } from 'react-router-dom';
import '../assets/Navbar.css';

function Navbar() {
  const navigate = useNavigate();

  return (
    <header>
      <div className="blue-bar"></div>
      <nav className="navbar">
        <a href="/" className="navbar-logo">Parcial 3</a>
        <div className="navbar-buttons">
          <button className="navbar-button" onClick={() => navigate('/Pokemon')}>Pokemon</button>
          <button className="navbar-button register-button" onClick={() => navigate('/TodoApp')}>TodoApp</button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;