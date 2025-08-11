import React from 'react';
import './CTA.css';
import { useTranslation } from 'react-i18next';

const CTA = () => {
  const { t } = useTranslation();

  return (
    <section className="cta-section">
      <h2 data-aos="zoom-in">
        {t('cta.headline', '¿Quieres encargar un trabajo robótico en tus tuberías?')}
      </h2>
      <a
        data-aos="zoom-in"
        href="#contacto"
        className="cta-btn"
      >
        {t('cta.button', 'Contáctanos')}
      </a>
    </section>
  );
};

export default CTA;
