import React from "react";
import "./HeroIndustries.css";
import { useTranslation } from 'react-i18next';
import heroBg from "../../../assets/img/jettyrobot_cover.jpg"; // usa tu imagen de tuberías

export default function HeroIndustries() {
  const { t } = useTranslation('industries');

  return (
    <section
      className="ind-hero"
      style={{ "--hero-bg": `url(${heroBg})` }}
    >
      <div data-aos="fade-up" className="ind-hero__overlay" aria-hidden="true" />
      <div className="ind-hero__inner">
        <div className="ind-hero__content">
          <h1 className="hero-tittle" data-aos="fade-up" data-aos-delay="100">
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
