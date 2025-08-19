import React from "react";
import { useTranslation } from "react-i18next";
import "./HeroRobots.css";

/* Coloca tu imagen en esta ruta (puede ser .jpg/.png/.webp) */
import heroRobots from "../../../assets/img/jettyrobot_cover.jpg";

export default function HeroRobots() {
  const { t } = useTranslation("robots");

  return (
    <section
      className="rb-hero"
      style={{ "--hero-bg": `url(${heroRobots})` }}
    >
      {/* Capa imagen + filtros */}
      <div data-aos="fade-up" className="rb-hero__overlay" aria-hidden="true" />

      <div className="rb-hero__inner">
        <div className="rb-hero__content">
          <h1 data-aos="fade-up" className="rb-hero__title">{t("hero.title")}</h1>
          <p  data-aos="fade-up" className="rb-hero__lead">{t("hero.lead")}</p>
        </div>
      </div>
    </section>
  );
}
