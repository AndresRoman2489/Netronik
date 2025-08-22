import React from "react";
import "../../../components/Industries/Hero/HeroIndustries.css";               // reutilizamos el MISMO CSS
import { useTranslation } from "react-i18next";
import heroBg from "../../../assets/img/jettyrobot_cover.jpg"; // pon aquí tu imagen

export default function CompanyHero() {
  // usa el namespace de i18n para la página de Company
  const { t } = useTranslation("company");

  return (
    <section className="ind-hero">
      {/* Imagen como fondo (mejor para LCP) */}
      <img
        className="ind-hero__bg"
        src={heroBg}
        alt=""
        aria-hidden="true"
        loading="eager"
        decoding="async"
        data-aos="fade-up"
        data-aos-delay="200"
      />

      {/* Filtro oscuro + degradado (idéntico a Industries) */}
      <div className="ind-hero__overlay" aria-hidden="true" />
      <div className="ind-hero__grad" aria-hidden="true" />

      {/* Contenido */}
      <div className="ind-hero__inner">
        <div className="ind-hero__content">
          <h1
            className="ind-hero__title"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            {t("hero.title")}
          </h1>
          <p
            className="ind-hero__lead"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {t("hero.subtitle")}
          </p>
        </div>
      </div>
    </section>
  );
}
