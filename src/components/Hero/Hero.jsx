import React, { useState } from 'react';
import './Hero.css';
import heroVideo from '../../assets/video/hero-bg.mp4';
import fallbackImg from '../../assets/img/alt.jpeg'; // imagen de respaldo opcional

function Hero() {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);

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
          onCanPlay={() => setVideoLoaded(true)}
          onError={() => setVideoError(true)}
        >
          <source src={heroVideo} type="video/mp4" />
          Tu navegador no soporta el video.
        </video>
      ) : (
        <img src={fallbackImg} alt="Fondo estático" className="hero-fallback-img" />
      )}

      <div className="hero-overlay"></div>

      <div className="hero-content">
        <h1
          data-aos="fade-down"
          data-aos-duration="1200"
          data-aos-delay="100"
        >
          Robótica que transforma
        </h1>
        <p
          data-aos="fade-up"
          data-aos-duration="1200"
          data-aos-delay="300"
        >
          Explora tecnología avanzada con robots autónomos para inspección y limpieza industrial.
        </p>
        <button
          data-aos="zoom-in"
          data-aos-delay="600"
          data-aos-duration="1000"
        >
          Nuestros Robots
        </button>
      </div>
    </section>
  );
}

export default Hero;


