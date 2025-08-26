import React from "react";
import { Link } from "react-router-dom";
import "./BeforeAfterInline.css";
import { useTranslation } from "react-i18next";

/* === IMÁGENES BEFORE/AFTER === */
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

function BeforeAfter({ title, before, after, altBefore, altAfter }) {
  return (
    <section className="ba-block" data-aos="fade-up">
      <h3 className="ba-title">{title}</h3>
      <div className="ba-grid">
        <figure className="ba-fig">
          <img src={before} loading="lazy" decoding="async" alt={altBefore || `${title} — before`} />
          <figcaption className="ba-cap"></figcaption>
        </figure>
        <div className="ba-arrow" aria-hidden="true" />
        <figure className="ba-fig">
          <img src={after} loading="lazy" decoding="async" alt={altAfter || `${title} — after`} />
          <figcaption className="ba-cap ba-cap--ok"></figcaption>
        </figure>
      </div>
    </section>
  );
}

export default function IndustrialProdSection() {
  const { t } = useTranslation("industrialProd");

  return (
    <section className="ip-sec" id="industrial-prod">
      <div className="ip-wrap">

        {/* ====== NUEVO: listado de industrias (antes de los problemas) ====== */}
        <section className="ip-prelist" data-aos="fade-up">
          <p className="ip-p">{t("prelist.lead")}</p>
          <ul className="ip-list">
            {t("prelist.items", { returnObjects: true }).map((li) => (
              <li key={li}>{li}</li>
            ))}
          </ul>
          <p className="ip-contact">
            {t("prelist.cta.1")}&nbsp;
            <Link to={t("links.contact")} className="clink">{t("prelist.cta.link")}</Link>
            &nbsp;{t("prelist.cta.2")}
          </p>
        </section>

        {/* ====== BLOQUE ANTES (problemas + necesidades) ====== */}
        <header className="ip-pre" data-aos="fade-up">
          <h2 className="ip-h2">{t("pre.title")}</h2>
          <p className="ip-p">{t("pre.p1")}</p>
          <p className="ip-p">{t("pre.p2")}</p>

          <h2 className="ip-h2 ip-h2--mt">{t("needs.title")}</h2>
          <ul className="ip-list">
            {t("needs.items", { returnObjects: true }).map((li) => (
              <li key={li}>{li}</li>
            ))}
          </ul>

          <p className="ip-contact">
            {t("pre.contact.1")}&nbsp;
            <Link to={t("links.contact")} className="clink">{t("pre.contact.link")}</Link>
            &nbsp;{t("pre.contact.2")}
          </p>
        </header>

        {/* ====== BLOQUE CENTRAL (before/after) ====== */}
        <div className="ip-ba">
          <BeforeAfter
          data-aos="fade-up"
            title={t("ba.rubber")}
            before={rubberBefore}
            after={rubberAfter}
            altBefore={t("baAlt.rubber.before")}
            altAfter={t("baAlt.rubber.after")}
          />
          <BeforeAfter
          data-aos="fade-up"
            title={t("ba.plastics")}
            before={plasticsBefore}
            after={plasticsAfter}
            altBefore={t("baAlt.plastics.before")}
            altAfter={t("baAlt.plastics.after")}
          />
          <BeforeAfter
            data-aos="fade-up"
            title={t("ba.foundry")}
            before={foundryBefore}
            after={foundryAfter}
            altBefore={t("baAlt.foundry.before")}
            altAfter={t("baAlt.foundry.after")}
          />
          <BeforeAfter
            data-aos="fade-up"
            title={t("ba.metalworking")}
            before={metalBefore}
            after={metalAfter}
            altBefore={t("baAlt.metal.before")}
            altAfter={t("baAlt.metal.after")}
          />
          <BeforeAfter
            data-aos="fade-up"
            title={t("ba.paintShop")}
            before={paintBefore}
            after={paintAfter}
            altBefore={t("baAlt.paint.before")}
            altAfter={t("baAlt.paint.after")}
          />
          <BeforeAfter
            data-aos="fade-up"
            title={t("ba.weldingShop")}
            before={weldingBefore}
            after={weldingAfter}
            altBefore={t("baAlt.welding.before")}
            altAfter={t("baAlt.welding.after")}
          />
        </div>

        {/* ====== BLOQUE DESPUÉS (cooperación + referencias) ====== */}
        <section className="ip-post" data-aos="fade-up">
          <h2 className="ip-h2">{t("post.coop.title")}</h2>
          <ul className="ip-list">
            {t("post.coop.items", { returnObjects: true }).map((li) => (
              <li key={li}>{li}</li>
            ))}
          </ul>
          <p className="ip-contact">
            {t("post.coop.more.1")}&nbsp;
            <Link to={t("links.contact")} className="clink">{t("post.coop.more.link")}</Link>
            &nbsp;{t("post.coop.more.2")}
          </p>

          <h2 className="ip-h2 ip-h2--mt">{t("post.where.title")}</h2>
          <p className="ip-p">{t("post.where.lead")}</p>
          <ul className="refs-list">
            {t("post.where.refs", { returnObjects: true }).map((r) => (
              <li key={r.href + r.label}>
                <Link to={r.href} className="clink">{r.label}</Link>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </section>
  );
}
