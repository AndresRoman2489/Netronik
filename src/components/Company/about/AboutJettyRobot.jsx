import React from "react";
import "./AboutJettyRobot.css";
import { useTranslation } from "react-i18next";

function Block({ id, title, lead, paragraphs = [], bullets = [] }) {
  return (
    <section className="c-about__block" id={id} aria-labelledby={`${id}-h`}>
      <h2 className="c-about__h2" id={`${id}-h`} data-aos="fade-up">
        {title}
      </h2>

      {lead && (
        <p className="c-about__lead" data-aos="fade-up" data-aos-delay="60">
          {lead}
        </p>
      )}

      {bullets.length > 0 && (
        <ul className="c-about__ul" data-aos="fade-up" data-aos-delay="90">
          {bullets.map((b, i) => (
            <li key={i} className="c-about__li">
              {b}
            </li>
          ))}
        </ul>
      )}

      {paragraphs.map((p, i) => (
        <p key={i} className="c-about__p" data-aos="fade-up" data-aos-delay={100 + i * 40}>
          {p}
        </p>
      ))}
    </section>
  );
}

export default function AboutJettyRobot() {
  const { t } = useTranslation("company");

  const intro = t("about.intro", { returnObjects: true });
  const sections = t("about.sections", { returnObjects: true });

  return (
    <div className="c-about" role="region" aria-label={t("about.title")}>
      <header className="c-about__header">
        <h1 className="c-about__h1" data-aos="fade-up">
          {t("about.title")}
        </h1>
        {Array.isArray(intro) &&
          intro.map((p, i) => (
            <p key={i} className="c-about__p" data-aos="fade-up" data-aos-delay={60 + i * 40}>
              {p}
            </p>
          ))}
      </header>

      {Array.isArray(sections) &&
        sections.map((s) => (
          <Block
            key={s.id}
            id={s.id}
            title={s.title}
            lead={s.lead}
            paragraphs={s.paragraphs}
            bullets={s.bullets}
          />
        ))}
    </div>
  );
}
