import React, { useLayoutEffect } from "react";
import "../../Inspection/Hero/inspectionHero.css";
import { useTranslation } from "react-i18next";


export default function FlatHero({ className = '', subKey, sub }) {
  const { t } = useTranslation('foodb'); // carga el namespace 'inspection'
  return (
    <section  loading="eager"
        decoding="async"
        data-aos="fade-up"
        data-aos-delay="200" className={`flat-hero ${className}`} id="flat-hero" aria-label={t('hero.title')}>
      <div className="flat-hero__overlay" aria-hidden="true" />
      <div className="flat-hero__inner">
        <h1 className="flat-hero__title" data-aos="fade-up">
          {t('hero.title')}
        </h1>
        {(subKey || sub) && (
          <p className="flat-hero__sub" data-aos="fade-up" data-aos-delay="80">
            {subKey ? t(subKey) : sub}
          </p>
        )}
      </div>
    </section>
  );
}