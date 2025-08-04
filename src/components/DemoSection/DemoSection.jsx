import React from 'react';
import './DemoSection.css';
import demoVideo from '../../assets/video/demo.mp4';
// Puedes usar una imagen si prefieres

function DemoSection() {
  return (
    <section className="demo-section">
      <div className="demo-content">
        <h2>Conectividad en Movimiento</h2>
        <p>
          Descubre cómo nuestra tecnología redefine los estándares de eficiencia e innovación industrial.
        </p>
        <div className="demo-video-container">
         <video src={demoVideo} autoPlay muted loop playsInline />
        </div>
      </div>
    </section>
  );
}

export default DemoSection;
