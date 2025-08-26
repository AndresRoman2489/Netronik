import React from "react";
import { Link } from "react-router-dom";
import "./VerticalStory.css"; // estilos aislados vba-
import { useTranslation } from "react-i18next";

/* IMÁGENES */
import rubberBefore   from "../../../assets/cleaning/rubber_before.webp";
import rubberAfter    from "../../../assets/cleaning/rubber_after.webp";
import plasticsBefore from "../../../assets/cleaning/plastics_before.webp";
import plasticsAfter  from "../../../assets/cleaning/plastics_after.webp";
import foundryBefore  from "../../../assets/cleaning/foundry_before.webp";
import foundryAfter   from "../../../assets/cleaning/foundry_after.webp";
import metalBefore    from "../../../assets/cleaning/metalworking_before.webp";
import metalAfter     from "../../../assets/cleaning/metalworking_after.webp";
import paintBefore    from "../../../assets/cleaning/paintshop_before.webp";
import paintAfter     from "../../../assets/cleaning/paintshop_after.webp";
import weldingBefore  from "../../../assets/cleaning/welding_before.webp";
import weldingAfter   from "../../../assets/cleaning/welding_after.webp";

/* Bloque Before/After con fade-up simple y escalonado */
function VbaBlock({ title, before, after, altBefore, altAfter, index = 0 }) {
  const delay = 100 + index * 120;

  return (
    <section
      className="vba-block"
      data-aos="fade-up"
      data-aos-delay={delay}
      data-aos-duration="650"
      data-aos-once="true"
    >
      <h3 className="vba-title" data-aos="fade-up" data-aos-delay={delay - 40}>
        {title}
      </h3>

      <div className="vba-grid">
        <figure className="vba-fig" data-aos="fade-up" data-aos-delay={delay}>
          <img src={before} loading="lazy" decoding="async" alt={altBefore || `${title} — before`} />
          <figcaption className="vba-cap" />
        </figure>

        <div className="vba-arrow" aria-hidden="true" data-aos="fade-up" data-aos-delay={delay + 60} />

        <figure className="vba-fig" data-aos="fade-up" data-aos-delay={delay + 120}>
          <img src={after} loading="lazy" decoding="async" alt={altAfter || `${title} — after`} />
          <figcaption className="vba-cap vba-cap--ok" />
        </figure>
      </div>
    </section>
  );
}

export default function CleaningContent() {
  const { t } = useTranslation("cleaning");
  const refs = t("refs.items", { returnObjects: true }) ?? [];

  const pairs = [
    { k: "rubber",       b: rubberBefore,   a: rubberAfter },
    { k: "plastics",     b: plasticsBefore, a: plasticsAfter },
    { k: "foundry",      b: foundryBefore,  a: foundryAfter },
    { k: "metalworking", b: metalBefore,    a: metalAfter },
    { k: "paintShop",    b: paintBefore,    a: paintAfter },
    { k: "weldingShop",  b: weldingBefore,  a: weldingAfter },
  ];

  return (
    <section className="vba-sec" id="cleaning-content" aria-labelledby="cleaning-heading">
      <div className="vba-wrap">
        {/* INTRO */}
        <header className="vba-intro" data-aos="fade-up" data-aos-once="true">
          <h2 className="vba-h2" id="cleaning-heading" data-aos="fade-up" data-aos-delay="60">
            {t("intro.heading")}
          </h2>

          <p data-aos="fade-up" data-aos-delay="120">
            {t("intro.p1")}{" "}
            <Link to={t("links.inspection")} className="vba-link">{t("intro.inspectionLink")}</Link>.
          </p>
          <p data-aos="fade-up" data-aos-delay="180">{t("intro.p2")}</p>
          <p data-aos="fade-up" data-aos-delay="240">
            {t("intro.p3.1")} <strong>{t("intro.p3.2")}</strong>. {t("intro.p3.3")} <strong>{t("intro.p3.4")}</strong>{" "}
            {t("intro.p3.5")} <strong>{t("intro.p3.6")}</strong>.
          </p>
        </header>

        {/* MÉTODOS (opcional, si no la usas puedes quitarla) */}
        <section className="vba-methods" data-aos="fade-up" data-aos-once="true">
          <h2 className="vba-h2" data-aos="fade-up" data-aos-delay="60">{t("methods.title")}</h2>

          <h3 className="vba-sub" data-aos="fade-up" data-aos-delay="120">
            <a className="vba-link" href="#non-abrasive">{t("methods.nonAbrasive.title")}</a>
          </h3>
          <ul className="vba-list" id="non-abrasive">
            {["dryIce","brush","air","vacuum"].map((k, i) => (
              <li key={k} data-aos="fade-up" data-aos-delay={160 + i * 60}>
                <Link className="vba-link" to={t(`links.${k === "air" ? "compressedAir" : k}`)}>
                  {t(`methods.nonAbrasive.items.${k === "air" ? "air" : k}`)}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        {/* BEFORE / AFTER */}
        <div id="hpw" />
        {pairs.map((p, i) => (
          <VbaBlock
            key={p.k}
            index={i}
            title={t(`pairs.${p.k}`)}
            before={p.b}
            after={p.a}
            altBefore={t(`alts.${p.k}.before`)}
            altAfter={t(`alts.${p.k}.after`)}
          />
        ))}

        {/* REFERENCIAS */}
        <section className="vba-refs" data-aos="fade-up" data-aos-once="true">
          <h2 className="vba-h2" data-aos="fade-up" data-aos-delay="60">{t("refs.title")}</h2>
          <ul className="vba-refs-list">
            {refs.map((r, i) => (
              <li key={r.href + r.label} data-aos="fade-up" data-aos-delay={120 + i * 70}>
                <Link to={r.href} className="vba-link">{r.label}</Link>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </section>
  );
}
