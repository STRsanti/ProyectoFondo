// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Eventos from './paginas/eventos';
import ContactForm from './paginas/formcontact';
import Login from './paginas/login';

function App() {
  return (
    <Router>
      <div className="background-container">
        <div className="outer-container">
          <Routes>
            <Route
              path="/*"
              element={
                <>
                  <Header />
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/contacto" element={<Eventos />} />
                    <Route path="/control-social" element={<ContactForm />} />
                  </Routes>
                </>
              }
            />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </div>

      <div className='Content1'>

      </div>
    </Router>
  );
}

export default App;
