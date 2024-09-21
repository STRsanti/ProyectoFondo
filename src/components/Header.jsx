// src/components/Header.jsx
import { Link } from 'react-router-dom';
import { FaAngleDown } from "react-icons/fa";
import '../stylesheets/Header.css';
import Dropdown from 'react-bootstrap/Dropdown';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">Fondos.com</div>
      <nav className="nav">
        <Link className="navItem" to="/"> Home </Link>
        <Link className="navItem" to="/contacto">Contacto</Link>
        <Link className="navItem" to="/servicioa">Servicios 
        
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Dropdown Button
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        </Link>
        <div className="navButtons">
        <Link to="/login">
          <button className="btn login-btn">Log In</button>
          </Link>
          <button className="btn get-started-btn">Get Started</button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
