import React from "react";
import { useTranslation } from "react-i18next";
import "./HeroServices.css";

/**
 * Usa tu imagen fija. Por ahora apunto a alt.jpeg para no romper el build.
 * Cuando tengas tu imagen final, cámbiala por:
 *   import heroBg from "../../assets/img/services-hero.jpg";
 */
import heroBg from "../../../assets/img/jettyrobot_cover.jpg";

export default function HeroServices() {
  const { t } = useTranslation("services");

  return (
    <section
      className="srv-hero"
      style={{ "--hero-bg": `url(${heroBg})` }}
    >
      <div data-aos="fade-up" className="srv-hero__overlay" aria-hidden="true" />
      <div className="srv-hero__inner">
        <div className="srv-hero__content">
          <h1 data-aos="fade-up" data-aos-delay="100">
            {t("hero.title.line1")}{" "}
            <span className="accent">{t("hero.title.line2")}</span>
          </h1>
          <p className="lead" data-aos="fade-up" data-aos-delay="200">
            {t("hero.lead1")}
          </p>
          <p></p>
          <p className="lead" data-aos="fade-up" data-aos-delay="260">
            {t("hero.lead2")}
          </p>
        </div>
      </div>
    </section>
  );
}