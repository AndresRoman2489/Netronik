import React from "react";
import "./HeroIndustries.css";
import { useTranslation } from "react-i18next";
import heroBg from "../../../assets/img/jettyrobot_cover.jpg";

export default function HeroIndustries() {
  const { t } = useTranslation("industries");

  return (
    <section className="ind-hero">
      {/* Imagen como fondo (mejor LCP) */}
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

      {/* capa oscura y degradado */}
      <div  className="ind-hero__overlay" aria-hidden="true" />
      <div className="ind-hero__grad" aria-hidden="true" />

      {/* contenido */}
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
