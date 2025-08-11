import React, { useState } from 'react';
import './Hero.css';
import heroMp4 from '../../assets/video/hero-bg.mp4';
import fallbackImg from '../../assets/img/alt.jpeg';
import { useTranslation } from 'react-i18next';

function Hero() {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);
  

 const { t } = useTranslation();
const subtitle = t('hero.subtitle')
  return (
    <section className="hero">
      {!videoLoaded && !videoError && (
        <div className="video-fallback">
          <img src={fallbackImg} alt="Fondo estático" className="hero-fallback-img" />
        </div>
      )}

      {!videoError ? (
        <video
          className={`hero-video ${videoLoaded ? 'visible' : 'hidden'}`}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          onCanPlay={() => setVideoLoaded(true)}
          onError={() => setVideoError(true)}
        >
          <source src={heroMp4} type="video/mp4" />
          Tu navegador no soporta el video.
        </video>
      ) : (
        <img src={fallbackImg} alt="Fondo estático" className="hero-fallback-img" />
      )}

      {/* TEXTO VISUAL para el efecto (mezcla con el video) */}
      <p className="hero-invert" data-text={subtitle} aria-hidden="true">
        {subtitle}
      </p>

      {/* Overlay (oscurece la escena). Si quieres que NO afecte al texto,
          deja el overlay por debajo de .hero-invert (z-index menor) */}
      <div className="hero-overlay" />

      {/* Contenido “real” (accesible) por encima del overlay */}
      <div className="hero-content">
        <p className="sr-only">{subtitle}</p>

        <button
          className="hero-cta"
          data-aos="zoom-in"
          data-aos-delay="600"
          data-aos-duration="1000"
        >
         {t('hero.cta')}
        </button>
      </div>
    </section>
  );
}

export default Hero;
