import React from 'react';
import './Feature.css';

import oilGasImg from '../../assets/img/oil-and-gas.jpg';
import HVACImg from '../../assets/img/HVAC.jpg';
import powerImg from '../../assets/img/Power.jpg';
import waterImg from '../../assets/img/Water.png';

const features = [
  { title: 'Petróleo y gas', image: oilGasImg, link: '#' },
  { title: 'Ventilación y Aire Acondicionado (HVAC)', image: HVACImg, link: '#' },
  { title: 'Generación de energía', image: powerImg, link: '#' },
  { title: 'Tratamiento de agua', image: waterImg, link: '#' },
];

const Features = () => {
  return (
    <section className="features-section">
      <h2 className="tittle" data-aos="fade-up">Industrias en las que trabajamos</h2> 
      <div className="features-container">
        {features.map((item, i) => (
          <div
  key={i}
  className="feature-card"
  data-aos="zoom-in"
  data-aos-delay={i * 150}
  data-aos-duration="1000"
>
  <div
    className="feature-inner"
    style={{ backgroundImage: `url(${item.image})` }}
  >
    <div className="feature-overlay">
      <h3>{item.title}</h3>
    </div>
  </div>
</div>
        ))}
      </div>
    </section>
  );
};

export default Features;

