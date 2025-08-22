import React from "react";
import { useTranslation } from "react-i18next";
import "../../Industries/Hero/HeroIndustries.css";                 // reutilizamos el MISMO CSS
import heroBg from "../../../assets/img/jettyrobot_cover.jpg";

export default function HeroServices() {
  const { t } = useTranslation("costumers");

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

      {/* Filtro oscuro + degradado superior */}
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
            {t("hero.title.line1")}{" "}
            <span className="accent">{t("hero.title.line2")}</span>
          </h1>

          <p
            className="ind-hero__lead"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {t("hero.lead1")}
          </p>

          <p
            className="ind-hero__lead"
            data-aos="fade-up"
            data-aos-delay="260"
          >
            {t("hero.lead2")}
          </p>
        </div>
      </div>
    </section>
  );
}
