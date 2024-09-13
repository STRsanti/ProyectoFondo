// src/components/Home.jsx
import React from 'react';
import '../stylesheets/Home.css';
const Home = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1>Proyecto de Fondos</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</p>
          <button className="hero-button">Conocer más</button>
        </div>
        <div className="hero-image">
          <img src="./src/money.jpg" alt="Descripción de la imagen" />
        </div>
      </div>
    </section>
  );
}

export default Home;
