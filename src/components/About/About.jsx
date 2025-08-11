import React from 'react';
import './About.css';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  return (
    <section className="about-section" data-aos="fade-up" data-aos-duration="1200">
      <div className="container">
        <h2 data-aos="fade-up" data-aos-delay="100">
          {t('about.title', 'Trabajo robótico en tuberías de todo el mundo')}
        </h2>
        <p data-aos="fade-up" data-aos-delay="300">
          {t(
            'about.text',
            'En Netronik con jettyrobot desarrollamos soluciones robóticas para inspección y limpieza de ductos, optimizando eficiencia, seguridad y transformación industrial.'
          )}
        </p>
      </div>
    </section>
  );
};

export default About;
