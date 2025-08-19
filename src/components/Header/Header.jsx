import React, { useState, useEffect, useRef } from 'react';
import './Header.css';
import logo from '../../assets/img/netronik.png';
import jettyLogo from '../../assets/img/jettyrobot-logo.png';
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  const headerRef = useRef(null);
  const langRef = useRef(null);

  const { t, i18n } = useTranslation();
  const currentLng = (i18n.resolvedLanguage || i18n.language || 'es').toLowerCase();
  const isES = currentLng.startsWith('es');

  // 1) Scroll: SOLO marca "scrolled" (no cierres el menú aquí)
useEffect(() => {
  const onScroll = () => setScrolled(window.scrollY > 32);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
  return () => window.removeEventListener('scroll', onScroll);
}, []);

// 2) Cerrar menú tras el PRIMER scroll REAL luego de abrirse
useEffect(() => {
  if (!menuOpen) return;

  let armed = false;                  // se “arma” después del pequeño delay
  const startY = window.scrollY;
  const armTimer = setTimeout(() => { armed = true; }, 120);

  const onScrollToClose = () => {
    if (!armed) return;
    const delta = Math.abs(window.scrollY - startY);
    if (delta > 10) {                 // umbral para ignorar micro-movimientos
      setMenuOpen(false);
    }
  };

  window.addEventListener('scroll', onScrollToClose, { passive: true });
  return () => {
    clearTimeout(armTimer);
    window.removeEventListener('scroll', onScrollToClose);
  };
}, [menuOpen]);

 

  // 3) Click/touch FUERA del header: cierra menú (igual que ya tenías)
useEffect(() => {
  const onPointerDown = (e) => {
    if (!menuOpen) return;
    const headerEl = headerRef.current;
    if (headerEl && !headerEl.contains(e.target)) {
      setMenuOpen(false);
    }
  };
  document.addEventListener('pointerdown', onPointerDown);
  return () => document.removeEventListener('pointerdown', onPointerDown);
}, [menuOpen]);

  const changeLang = async (lng) => {
    await i18n.changeLanguage(lng);
    setLangOpen(false);
    document.documentElement.lang = lng;
    window.location.reload();
  };

  return (
    <header
      ref={headerRef}
      className={`header ${scrolled ? 'scrolled' : ''} ${menuOpen ? 'menu-open' : ''}`}
    >
      <div className="header-left">
        <div className="brand">
          <Link
            to="/"
            className="brand-link"
            aria-label="Ir al inicio"
            onClick={() => setMenuOpen(false)}
          >
            <img src={logo} alt="Netronik" className="logo" />
          </Link>

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

      <button
        className="hamburger"
        aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen(o => !o)}
      >
        <i className="fas fa-bars"></i>
      </button>

      {/* Al hacer click en cualquier link/botón del menú, lo cerramos (menos el selector de idioma) */}
      <nav
        className={`header-right ${menuOpen ? 'open' : ''}`}
        onClick={(e) => {
          if (e.target.closest('.language')) return;
          if (e.target.closest('a, button')) setMenuOpen(false);
        }}
      >
        <Link to="/industries" onClick={() => setMenuOpen(false)}>
  {t('nav.industry', 'Industria')}
</Link>
        <Link to="/services" onClick={() => setMenuOpen(false)}>{t('nav.services', 'Servicios')}</Link>
        <Link to="/robots" onClick={()=> setMenuOpen(false)}>{t('nav.robots', 'Nuestros Robots')}</Link>
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
            onClick={() => setLangOpen(v => !v)}
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
