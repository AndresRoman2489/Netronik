import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about-section" data-aos="fade-up" data-aos-duration="1200">
      <div className="container">
        <h2 data-aos="fade-up" data-aos-delay="100">
          Trabajo robótico en tuberías de todo el mundo
        </h2>
        <p data-aos="fade-up" data-aos-delay="300">
          En Netronik desarrollamos soluciones robóticas para inspección y limpieza de ductos,
          optimizando eficiencia, seguridad y transformación industrial.
        </p>
      </div>
    </section>
  );
};

export default About;
