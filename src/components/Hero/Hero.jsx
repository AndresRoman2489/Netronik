import React from 'react';
import './Hero.css';
import heroVideo from '../../assets/video/hero-bg.mp4'; // ajusta la ruta si es necesario

function Hero() {
  return (
    <section className="hero">
      <video className="hero-video" autoPlay loop muted playsInline>
        <source src={heroVideo} type="video/mp4" />
        Tu navegador no soporta el video.
      </video>
      <div className="hero-overlay"></div>


      <div className="hero-content">
        <h1>Conectando el Futuro</h1>
        <p>Explora tecnología avanzada con soluciones autónomas para industrias modernas.</p>
        <button>Explorar catálogo</button>
      </div>
    </section>
  );
}

export default Hero;
