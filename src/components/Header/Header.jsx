import React, { useState } from 'react';
import './Header.css';
import logo from '../../assets/img/netronik.png';


function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-left">
        <img src={logo} alt="Logo Netronik" className="logo" />
        <p className="slogan">Innovación que transforma la limpieza industrial</p>
        <div className="social-icons">
          <a href="#"><i className="fab fa-facebook-f"></i></a>
          <a href="#"><i className="fab fa-youtube"></i></a>
          <a href="#"><i className="fab fa-linkedin-in"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
        </div>
      </div>

      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <i className="fas fa-bars"></i>
      </div>

      <nav className={`header-right ${menuOpen ? 'open' : ''}`}>
        <a href="#">Industria</a>
        <a href="#">Servicios</a>
        <a href="#">Nuestros Robots</a>
        <a href="#">Acerca de notros <i className="fas fa-chevron-down small-icon"></i></a>
        <a href="#">Contactar</a>
        <div className="language">
          <img src="https://flagcdn.com/mx.svg" alt="EN" className="flag-icon" />
          <i className="fas fa-chevron-down small-icon"></i>
        </div>
      </nav>
    </header>
  );
}

export default Header;
