import React, { useEffect, useRef, useState } from 'react';
import './Hero.css';
import heroMp4 from '../../assets/video/hero-bg.mp4';
import fallbackImg from '../../assets/img/alt.jpeg';
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";

function Hero() {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const videoRef = useRef(null);

  const { t } = useTranslation();
  const subtitle = t('hero.subtitle');

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    v.muted = true;
    v.playsInline = true;
    v.autoplay = true;
    v.loop = true;

    const tryPlay = () => {
      const p = v.play?.();
      if (p && typeof p.then === 'function') p.catch(() => {});
    };

    const onLoadedData = () => {
      setVideoLoaded(true);
      tryPlay();
    };
    const onError = () => setVideoError(true);

    v.addEventListener('loadeddata', onLoadedData);
    v.addEventListener('error', onError);
    v.addEventListener('canplay', tryPlay, { once: true });

    const unlock = () => {
      tryPlay();
      cleanupUnlock();
    };
    const cleanupUnlock = () => {
      document.removeEventListener('touchstart', unlock);
      document.removeEventListener('click', unlock);
      document.removeEventListener('keydown', unlock);
    };
    document.addEventListener('touchstart', unlock, { once: true, passive: true });
    document.addEventListener('click', unlock, { once: true });
    document.addEventListener('keydown', unlock, { once: true });

    const onVis = () => {
      if (document.visibilityState === 'visible') tryPlay();
    };
    document.addEventListener('visibilitychange', onVis);

    tryPlay();

    return () => {
      v.removeEventListener('loadeddata', onLoadedData);
      v.removeEventListener('error', onError);
      document.removeEventListener('visibilitychange', onVis);
      cleanupUnlock();
    };
  }, []);

  return (
    <section className="hero">
      {!videoLoaded && !videoError && (
        <div className="video-fallback">
          <img src={fallbackImg} alt="Fondo estático" className="hero-fallback-img" />
        </div>
      )}

      {!videoError ? (
        <video
          ref={videoRef}
          className={`hero-video ${videoLoaded ? 'visible' : 'hidden'}`}
          preload="metadata"
          poster={fallbackImg}
          playsInline
          muted
          loop
          autoPlay
        >
          <source src={heroMp4} type="video/mp4" />
          Tu navegador no soporta el video.
        </video>
      ) : (
        <img src={fallbackImg} alt="Fondo estático" className="hero-fallback-img" />
      )}

      {/* Capa decorativa: sin eventos */}
      <p className="hero-invert" data-text={subtitle} aria-hidden="true">
        {subtitle}
      </p>

      {/* Overlay: sin eventos */}
      <div className="hero-overlay" />

      {/* Contenido interactivo por encima */}
      <div className="hero-content">
        <p className="sr-only">{subtitle}</p>

        {/* Usa Link directamente y estilízalo como botón */}
        <Link
          to="/robots"
          className="hero-cta"
          data-aos="zoom-in"
          data-aos-delay="600"
          data-aos-duration="1000"
        >
          {t('hero.cta', 'Nuestros Robots')}
        </Link>
      </div>
    </section>
  );
}

export default Hero;
