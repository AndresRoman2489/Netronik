import React, { useState } from 'react';
import './DemoSection.css';
import demoVideo from '../../assets/video/demo.mp4';
import fallbackImg from '../../assets/img/alt.jpeg';
import { useTranslation } from 'react-i18next';

function DemoSection() {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const { t } = useTranslation();

  return (
    <section className="demo-section" data-aos="fade-up">
      <div className="demo-content">
        <h2 data-aos="fade-up" data-aos-delay="100">
          {t('demo.title', 'Trabajo robot en Movimiento')}
        </h2>

        <p data-aos="fade-up" data-aos-delay="250">
          {t('demo.text', 'Descubre cómo nuestra tecnología redefine los estándares de eficiencia e innovación industrial.')}
        </p>

        <div className="demo-video-container" data-aos="zoom-in" data-aos-delay="400">
          {!videoLoaded && !videoError && (
            <div className="video-fallback" aria-live="polite">
              <p>{t('demo.loading', 'Cargando video...')}</p>
            </div>
          )}

          {!videoError ? (
            <video
              className={`demo-video ${videoLoaded ? 'visible' : 'hidden'}`}
              src={demoVideo}
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              onCanPlay={() => setVideoLoaded(true)}
              onError={() => setVideoError(true)}
            />
          ) : (
            <img
              src={fallbackImg}
              alt={t('demo.alt', 'Trabajo robótico')}
              className="demo-fallback-img"
            />
          )}
        </div>
      </div>
    </section>
  );
}

export default DemoSection;
