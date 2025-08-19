import React, { useCallback } from "react";
import { useTranslation } from "react-i18next";
import "./RobotsCatalog.css";

/* Ajusta las rutas según tus assets */
import imgJR6 from "../../../assets/img/jettyrobot.png";
import imgJRS from "../../../assets/img/JRS.png";
import imgSpecial from "../../../assets/img/Robotespecial.png";
import imgTools from "../../../assets/img/tools.png";

export default function RobotsCatalog() {
  const { t } = useTranslation("robots");

  const bounceOnce = useCallback((cardEl) => {
    if (!cardEl) return;
    const img = cardEl.querySelector(".rb-card__media img");
    if (!img) return;
    // Reinicia la animación aunque aún esté “hovered”
    img.classList.remove("rb-bounce-now");
    // Forzamos reflow para reiniciar la anim
    // eslint-disable-next-line no-unused-expressions
    img.offsetWidth;
    img.classList.add("rb-bounce-now");
  }, []);

  const cards = [
    {
      key: "jr6",
      img: imgJR6,
      title: t("catalog.jr6.title"),
      subtitle: t("catalog.jr6.subtitle"),
      bulletsTitle: t("catalog.jr6.forTitle"),
      bullets: t("catalog.jr6.for", { returnObjects: true }),
      cta: t("catalog.learnMore"),
    },
    {
      key: "jrs",
      img: imgJRS,
      title: t("catalog.jrs.title"),
      subtitle: t("catalog.jrs.subtitle"),
      bulletsTitle: t("catalog.jrs.forTitle"),
      bullets: t("catalog.jrs.for", { returnObjects: true }),
      cta: t("catalog.learnMore"),
    },
    {
      key: "special",
      img: imgSpecial,
      title: t("catalog.special.title"),
      subtitle: t("catalog.special.subtitle"),
      bulletsTitle: t("catalog.special.forTitle"),
      bullets: t("catalog.special.for", { returnObjects: true }),
      cta: t("catalog.learnMore"),
    },
  ];

  const tools = {
    key: "tools",
    img: imgTools,
    title: t("catalog.tools.title"),
    subtitle: t("catalog.tools.subtitle"),
    bullets: t("catalog.tools.items", { returnObjects: true }),
    cta: t("catalog.learnMore"),
  };

  return (
    <section className="rb-cat" data-aos="fade-up">
      <div className="rb-cat__wrap">
        <div className="rb-cat__grid">
          {cards.map((c, idx) => (
            <article
              key={c.key}
              className="rb-card"
              data-aos="zoom-in"
              data-aos-delay={120 + idx * 60}
              onMouseEnter={(e) => bounceOnce(e.currentTarget)}
              onFocus={(e) => bounceOnce(e.currentTarget)}
            >
              <div className="rb-card__media">
                <img src={c.img} alt="" loading="lazy" decoding="async" />
              </div>

              <div className="rb-card__body">
                <h3 className="rb-card__title">{c.title}</h3>
                <p className="rb-card__sub">{c.subtitle}</p>

                <h4 className="rb-card__mini">{c.bulletsTitle}</h4>
                <ul className="rb-list">
                  {c.bullets.map((b, i) => (
                    <li className="rb-list__item" key={i}>
                      {b}
                    </li>
                  ))}
                </ul>

                <button className="rb-btn" type="button">
                  {c.cta}
                </button>
              </div>
            </article>
          ))}

          {/* Card ancha (fila inferior, ocupa las 3 columnas) */}
          <article
            className="rb-card rb-card--wide"
            data-aos="zoom-in"
            data-aos-delay={160}
            onMouseEnter={(e) => bounceOnce(e.currentTarget)}
            onFocus={(e) => bounceOnce(e.currentTarget)}
          >
            <div className="rb-card__media">
              <img src={tools.img} alt="" loading="lazy" decoding="async" />
            </div>

            <div className="rb-card__body">
              <h3 className="rb-card__title">{tools.title}</h3>
              <p className="rb-card__sub">{tools.subtitle}</p>

              <ul className="rb-list rb-list--cols2">
                {tools.bullets.map((b, i) => (
                  <li className="rb-list__item" key={i}>
                    {b}
                  </li>
                ))}
              </ul>

              <button className="rb-btn" type="button">
                {tools.cta}
              </button>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
