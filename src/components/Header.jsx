// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaAngleDown } from "react-icons/fa";
import '../stylesheets/Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">Fondos.com</div>
      <nav className="nav">
        <Link className="navItem" to="/"> Home </Link>
        <Link className="navItem" to="/contacto">Contacto</Link>
        <Link className="navItem" to="/Corporativo">Corporativo</Link>
        <Link className="navItem" to="/contacto">
          <FaAngleDown className="icon" /> Documentos
        </Link>
        <Link className="navItem" to="/contacto">
          <FaAngleDown className="icon" /> Servicios
        </Link>
        <Link className="navItem" to="/contacto">Control Social</Link>
        <Link className="navItem" to="/contacto">
          <FaAngleDown className="icon" /> Emprendedores
        </Link>
        <div className="navButtons">
          <button className="btn login-btn">Log In</button>
          <button className="btn get-started-btn">Get Started</button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
