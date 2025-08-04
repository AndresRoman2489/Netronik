// src/components/Features/Features.jsx
import React from 'react';
import './Feature.css';

const features = [
  { title: 'Automatización Inteligente', description: 'Integramos tecnologías que simplifican procesos.' },
  { title: 'Diseño Futurista', description: 'Experiencia visual de vanguardia para tu marca.' },
  { title: 'Escalabilidad Garantizada', description: 'Pensado para crecer contigo y tu negocio.' },
];

const Features = () => {
  return (
    <section className="features-section">
      <h2>Nuestras Ventajas</h2>
      <div className="features-container">
        {features.map((item, i) => (
          <div key={i} className="feature-card">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
