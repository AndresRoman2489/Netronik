import React from 'react';
import './Footer.css';
import { FaFacebookF, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import jettyLogo from '../../assets/img/jettyrobot-logo.png';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-brand">
          <h2><a className='Net'>Net</a>ronik<div><img src={jettyLogo} alt="JettyRobot" className="logo-jetty" /></div></h2>
          <p>{t('footer.tagline', 'Innovación que transforma.')}</p>
          
        </div>

        <div className="footer-links">
          <a href="#home">{t('footer.links.home', 'Inicio')}</a>
          <a href="#services">{t('footer.links.services', 'Servicios')}</a>
          <a href="#about">{t('footer.links.about', 'Nosotros')}</a>
          <a href="#contact">{t('footer.links.contact', 'Contacto')}</a>
        </div>

        <div className="footer-social">
          <a
            href="https://www.facebook.com/"
            target="_blank" rel="noopener noreferrer"
            aria-label={t('footer.social.facebook', 'Facebook')}
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank" rel="noopener noreferrer"
            aria-label={t('footer.social.instagram', 'Instagram')}
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank" rel="noopener noreferrer"
            aria-label={t('footer.social.linkedin', 'LinkedIn')}
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.youtube.com/"
            target="_blank" rel="noopener noreferrer"
            aria-label={t('footer.social.youtube', 'YouTube')}
          >
            <FaYoutube />
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Netronik. {t('footer.rights', 'Todos los derechos reservados')}</p>
      </div>
    </footer>
  );
};

export default Footer;
