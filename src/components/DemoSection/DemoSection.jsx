import React, { useState } from 'react';
import './DemoSection.css';
import demoVideo from '../../assets/video/demo.mp4';
import fallbackImg from '../../assets/img/alt.jpeg'; // crea una imagen ligera de respaldo

function DemoSection() {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);

  return (
    <section className="demo-section" data-aos="fade-up">
      <div className="demo-content">
        <h2>Trabajo robot en Movimiento</h2>
        <p>
          Descubre cómo nuestra tecnología redefine los estándares de eficiencia e innovación industrial.
        </p>

        <div className="demo-video-container">
          {!videoLoaded && !videoError && (
            <div className="video-fallback">
              <p>Cargando video...</p> {/* o un spinner */}
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
            <img src={fallbackImg} alt="Trabajo robótico" className="demo-fallback-img" />
          )}
        </div>
      </div>
    </section>
  );
}

export default DemoSection;

