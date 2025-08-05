import React from 'react';
import './Feature.css';

import oilGasImg from '../../assets/img/oil-and-gas.jpg';
import HVACImg from '../../assets/img/HVAC.jpg';
import powerImg from '../../assets/img/Power.jpg'

const features = [
  { title: 'Petróleo y gas', image: oilGasImg },
  { title: 'Ventilación y Aire Acondicionado(HVAC)', image: HVACImg },
  { title: 'Escalabilidad Garantizada', image:powerImg },
];

const Features = () => {
  return (
    <section className="features-section">
      <h2>Industrias en la que trabaja</h2>
      <div className="features-container">
        {features.map((item, i) => (
          <div
            key={i}
            className="feature-card"
            style={{ backgroundImage: `url(${item.image})` }}
          >
            <div className="feature-overlay">
              <h3>{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
