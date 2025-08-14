import React from "react";
import "./HeroIndustries.css";
import { useTranslation } from 'react-i18next';
import heroBg from "../../../assets/img/Industry.jpg"; // usa tu imagen de tuberías

export default function HeroIndustries() {
  const { t } = useTranslation('industries');

  return (
    <section
      className="ind-hero"
      style={{ "--hero-bg": `url(${heroBg})` }}
      data-aos="fade-up"
    >
      <div className="ind-hero__overlay" aria-hidden="true" />
      <div className="ind-hero__inner">
        <div className="ind-hero__content">
          <h1 data-aos="fade-up" data-aos-delay="100">
            {t('hero.title')}
          </h1>
          <p className="lead" data-aos="fade-up" data-aos-delay="200">
            {t('hero.subtitle')}
          </p>
        </div>
      </div>
    </section>
  );
}
