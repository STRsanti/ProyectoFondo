import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Eventos from './paginas/eventos';


function App() {
  return (
    <Router>
      
      <div className="background-container">  
        <div className="outer-container">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contacto" element={<Eventos />} />
              {/* Aquí puedes agregar más rutas en el futuro */}
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
