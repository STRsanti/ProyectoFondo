
import React from 'react';
import '../stylesheets/login.css'; // Importar el CSS
import { FaEnvelope, FaLock } from 'react-icons/fa'; // Ejemplo de iconos

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-content">
        <h2>Iniciar sesión</h2>
        <form>
          <div className="input-group">
            
            <div className="input-with-icon">
              <input type="email" placeholder="Username" />
              <FaEnvelope className="icon" />
            </div>
          </div>
          <div className="input-group">
            
            <div className="input-with-icon">
              <input type="password" placeholder="Password" />
              <FaLock className="icon" />
            </div>
          </div>
          <button type="submit" className="login-button">Iniciar sesión</button>
        </form>
        <p className="signup-text">
          No tengo una cuenta <span className="signup-link">Crear cuenta</span>
        </p>
      </div>
    </div>
  );
};

export default Login;
