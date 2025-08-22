import React from "react";
import { useTranslation } from "react-i18next";
import "../../Industries/Hero/HeroIndustries.css"
import bgRef from "../../../assets/img/jettyrobot_cover.jpg";

export default function ReferencesHero({ bg = bgRef }) {
  const { t } = useTranslation("references");

  return (
    // mismas clases e id para que funcione con tu industrieshero.css
    <section className="ind-hero hero-industries" id="hero-industries" aria-label={t("hero.title")}>
      {/* fondo */}
      <img className="ind-hero__bg" src={bg} alt="" loading="eager"
        decoding="async"
        data-aos="fade-up"
            data-aos-delay="200" />

      {/* capas (las reconoce tu CSS actual) */}
      <div className="ind-hero__overlay" aria-hidden="true" />
      <div className="ind-hero__grad" aria-hidden="true" />

      {/* contenido */}
      <div className="ind-hero__inner">
        <div className="ind-hero__content" data-aos="fade-up">
          <h1 className="ind-hero__title">{t("hero.title")}</h1>
          <p className="ind-hero__lead">{t("hero.lead1")}</p>
          <p className="ind-hero__lead">{t("hero.lead2")}</p>
        </div>
      </div>
    </section>
  );
}
