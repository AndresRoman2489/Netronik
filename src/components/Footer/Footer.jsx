import React from 'react';
import './Footer.css';
import { FaFacebookF, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-brand">
          <h2>Netronik</h2>
          <p>Innovación que transforma.</p>
        </div>

        <div className="footer-links">
          <a href="#home">Inicio</a>
          <a href="#services">Servicios</a>
          <a href="#about">Nosotros</a>
          <a href="#contact">Contacto</a>
        </div>

        <div className="footer-social">
          <a href="#"><FaFacebookF /></a>
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaLinkedin /></a>
          <a href="#"><FaYoutube /></a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Netronik. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
