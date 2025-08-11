import React, { useState, useEffect, useRef } from 'react';
import './Header.css';
import logo from '../../assets/img/netronik.png';
import jettyLogo from '../../assets/img/jettyrobot-logo.png'; // ← nuevo import
import { useTranslation } from 'react-i18next';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef(null);

  const { t, i18n } = useTranslation();
  const currentLng = (i18n.resolvedLanguage || i18n.language || 'es').toLowerCase();
  const isES = currentLng.startsWith('es');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const onClickOutside = (e) => {
      if (langRef.current && !langRef.current.contains(e.target)) {
        setLangOpen(false);
      }
    };
    document.addEventListener('mousedown', onClickOutside);
    return () => document.removeEventListener('mousedown', onClickOutside);
  }, []);

  const changeLang = (lng) => {
    i18n.changeLanguage(lng);
    setLangOpen(false);
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-left">
        {/* logos agrupados */}
        <div className="brand">
          <img src={logo} alt="Netronik" className="logo" />
          <span className="jetty-wrap">
          <a href="https://www.jettyrobot.com" target="_blank" rel="noopener noreferrer">
          <img src={jettyLogo} alt="JettyRobot" className="logo-jetty" />
          <img src={jettyLogo} alt="" aria-hidden="true" className="logo-jetty text-white" />
          </a>
          </span>
        </div>

        <p className="slogan">
          {t('header.slogan', 'Innovación que transforma la limpieza industrial')}
        </p>

        <div className="social-icons">
          <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
          <a href="#" aria-label="YouTube"><i className="fab fa-youtube"></i></a>
          <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
          <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
        </div>
      </div>

      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Abrir menú">
        <i className="fas fa-bars"></i>
      </div>

      <nav className={`header-right ${menuOpen ? 'open' : ''}`}>
        <a href="#">{t('nav.industry', 'Industria')}</a>
        <a href="#">{t('nav.services', 'Servicios')}</a>
        <a href="#">{t('nav.robots', 'Nuestros Robots')}</a>
        <a href="#">
          {t('nav.about', 'Acerca de nosotros')}
          <i className="fas fa-chevron-down small-icon"></i>
        </a>
        <a href="#">{t('nav.contact', 'Contactar')}</a>

        {/* Selector de idioma */}
        <div className={`language ${langOpen ? 'open' : ''}`} ref={langRef}>
          <button
            className="lang-toggle"
            type="button"
            onClick={() => setLangOpen((v) => !v)}
            aria-haspopup="menu"
            aria-expanded={langOpen}
            aria-label="Cambiar idioma"
          >
            <img
              src={isES ? 'https://flagcdn.com/mx.svg' : 'https://flagcdn.com/us.svg'}
              alt={isES ? 'Español' : 'English'}
              className="flag-icon"
            />
            <i className="fas fa-chevron-down small-icon"></i>
          </button>

          <div className="lang-menu" role="menu">
            <button type="button" className="lang-item" onClick={() => changeLang('es')} role="menuitem">
              <img src="https://flagcdn.com/mx.svg" alt="Español" className="flag-icon" />
              <span>Español</span>
            </button>
            <button type="button" className="lang-item" onClick={() => changeLang('en')} role="menuitem">
              <img src="https://flagcdn.com/us.svg" alt="English" className="flag-icon" />
              <span>English</span>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
