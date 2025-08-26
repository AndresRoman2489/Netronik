import React, { useState, useEffect, useRef } from 'react';
import './Header.css';
import logo from '../../assets/img/netronik.png';
import jettyLogo from '../../assets/img/jettyrobot-logo.png';
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // dropdowns
  const [langOpen, setLangOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  const headerRef = useRef(null);
  const langRef   = useRef(null);
  const aboutRef  = useRef(null);

  const { t, i18n } = useTranslation(); // default ns = "common"
  const currentLng = (i18n.resolvedLanguage || i18n.language || 'es').toLowerCase();
  const isES = currentLng.startsWith('es');

  // 1) Sólo marca "scrolled"
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // 2) Si el menú está abierto, se cierra con el primer scroll real
  useEffect(() => {
    if (!menuOpen) return;

    let armed = false;
    const startY = window.scrollY;
    const armTimer = setTimeout(() => { armed = true; }, 120);

    const onScrollToClose = () => {
      if (!armed) return;
      const delta = Math.abs(window.scrollY - startY);
      if (delta > 10) {
        setMenuOpen(false);
        setAboutOpen(false);
        setLangOpen(false);
      }
    };

    window.addEventListener('scroll', onScrollToClose, { passive: true });
    return () => {
      clearTimeout(armTimer);
      window.removeEventListener('scroll', onScrollToClose);
    };
  }, [menuOpen]);

  // 3) Click/touch fuera del header: cierra menús
  useEffect(() => {
    const onPointerDown = (e) => {
      const headerEl = headerRef.current;
      if (headerEl && !headerEl.contains(e.target)) {
        setMenuOpen(false);
        setLangOpen(false);
        setAboutOpen(false);
      }
    };
    document.addEventListener('pointerdown', onPointerDown);
    return () => document.removeEventListener('pointerdown', onPointerDown);
  }, []);

  // 4) Click fuera de los popovers individuales
  useEffect(() => {
    const onDown = (e) => {
      if (langOpen && langRef.current && !langRef.current.contains(e.target)) {
        setLangOpen(false);
      }
      if (aboutOpen && aboutRef.current && !aboutRef.current.contains(e.target)) {
        setAboutOpen(false);
      }
    };
    document.addEventListener('pointerdown', onDown);
    return () => document.removeEventListener('pointerdown', onDown);
  }, [langOpen, aboutOpen]);

  const changeLang = async (lng) => {
    await i18n.changeLanguage(lng);
    setLangOpen(false);
    document.documentElement.lang = lng;
    // No necesitamos recargar la página.
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
            onClick={() => { setMenuOpen(false); setAboutOpen(false); setLangOpen(false); }}
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
          <a href="https://www.facebook.com/profile.php?id=100038810928238#" target="_blank" rel="noreferrer" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
          <a href="https://www.youtube.com/channel/UCiZ0oWgrVoEvxdiv7EujwSw" target="_blank" rel="noreferrer" aria-label="YouTube"><i className="fab fa-youtube"></i></a>
          <a href="https://www.linkedin.com/company/jettyrobot/" target='_blank' rel="noreferrer" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
          <a href="https://www.instagram.com/jettyrobot/" target='_blank' rel="noreferrer" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
        </div>
      </div>

      <button
        className="hamburger"
        aria-label={menuOpen ? t('header.nav.closeMenu', 'Cerrar menú') : t('header.nav.openMenu', 'Abrir menú')}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen(o => !o)}
      >
        <i className="fas fa-bars"></i>
      </button>

      {/* Menú principal */}
      <nav
        className={`header-right ${menuOpen ? 'open' : ''}`}
        onClick={(e) => {
          if (e.target.closest('.language')) return;
          if (e.target.closest('.about')) return;

          if (e.target.closest('a, button')) {
            setMenuOpen(false);
            setAboutOpen(false);
            setLangOpen(false);
          }
        }}
      >
        <Link to="/industries" onClick={() => setMenuOpen(false)}>
          {t('header.nav.industry')}
        </Link>

        <Link to="/services" onClick={() => setMenuOpen(false)}>
          {t('header.nav.services')}
        </Link>

        <Link to="/robots" onClick={() => setMenuOpen(false)}>
          {t('header.nav.robots')}
        </Link>

        {/* === About dropdown === */}
        <div className={`about ${aboutOpen ? 'open' : ''}`} ref={aboutRef}>
          <button
            className="about-toggle"
            type="button"
            aria-haspopup="menu"
            aria-expanded={aboutOpen}
            onClick={() => setAboutOpen(v => !v)}
          >
            {t('header.nav.about')}
            <i className="fas fa-chevron-down small-icon"></i>
          </button>

          <div className="about-menu" role="menu" aria-label="About menu">
            <Link to="/company" className="about-item" role="menuitem" onClick={() => setAboutOpen(false)}>
              {t('header.nav.aboutMenu.company')}
            </Link>
            <Link to="/references" className="about-item" role="menuitem" onClick={() => setAboutOpen(false)}>
              {t('header.nav.aboutMenu.references')}
            </Link>
            <Link to="/costumers" className="about-item" role="menuitem" onClick={() => setAboutOpen(false)}>
              {t('header.nav.aboutMenu.customers')}
            </Link>
          </div>
        </div>

        <a href="#contact">{t('header.nav.contact')}</a>

        {/* === Selector de idioma === */}
        <div className={`language ${langOpen ? 'open' : ''}`} ref={langRef}>
          <button
            className="lang-toggle"
            type="button"
            onClick={() => setLangOpen(v => !v)}
            aria-haspopup="menu"
            aria-expanded={langOpen}
            aria-label={t('header.nav.changeLanguage', 'Cambiar idioma')}
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
