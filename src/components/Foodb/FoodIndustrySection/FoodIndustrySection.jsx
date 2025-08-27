import React from "react";
import { Link } from "react-router-dom";
import "./FoodIndustrySection.css";                 // estilos específicos (círculos, etc.)
 // tu look base (links turquesa + flecha derecha)
import { useTranslation } from "react-i18next";

/* === IMÁGENES (ajusta rutas/nombres a tus assets) === */
import circleBefore from "../../../assets/img/Food.png";

import rectBefore   from "../../../assets/img/Before_after.jpg";


export default function FoodIndustrySection() {
  const { t } = useTranslation("foodb");

  return (
    <section className="ip-sec" id="food-industry">
      <div className="ip-wrap">

        {/* ===== Top lead + imágenes ===== */}
        <section className="fi-top" data-aos="fade-up">
          <p className="ip-p">
            {t("top.lead1.1")}{" "}
            <Link to={t("links.pipeCleaning")} className="clink">
              {t("top.lead1.link")}
            </Link>{" "}
            {t("top.lead1.2")}
          </p>
          <p className="ip-p">{t("top.lead2")}</p>

          {/* Dos círculos before/after */}
          <div className="fi-circles" data-aos="fade-up" data-aos-delay="80">
            <figure className="fi-circle">
              <img src={circleBefore} alt={t("fiAlt.circle.before")} loading="lazy" decoding="async" />
            </figure>
          </div>

          {/* Banda rectangular before/after */}
          <div className="fi-rects" data-aos="fade-up" data-aos-delay="120">
            <figure className="fi-rect">
              <div className="fi-rect__label"></div>
              <img src={rectBefore} alt={t("fiAlt.rect.before")} loading="lazy" decoding="async" />
            </figure>
          </div>
        </section>

        {/* ===== Problemas más comunes ===== */}
        <header className="ip-pre" data-aos="fade-up">
          <h2 className="ip-h2">{t("pre.title")}</h2>
          <p className="ip-p">{t("pre.p1")}</p>
          <p className="ip-p">{t("pre.p2")}</p>
          <p className="ip-p">{t("pre.p3")}</p>

          <p className="ip-contact">
            {t("pre.contact.1")}{" "}
            <Link to={t("links.contact")} className="clink">{t("pre.contact.link")}</Link>{" "}
            {t("pre.contact.2")}
          </p>
        </header>

        {/* ===== Necesidades del cliente ===== */}
        <section className="ip-pre" data-aos="fade-up">
          <h2 className="ip-h2">{t("needs.title")}</h2>
          <ul className="ip-list">
            {t("needs.items", { returnObjects: true }).map((li) => (
              <li key={li}>{li}</li>
            ))}
          </ul>
          <p className="ip-contact">
            {t("pre.contact.1")}{" "}
            <Link to={t("links.contact")} className="clink">{t("pre.contact.link")}</Link>{" "}
            {t("pre.contact.2")}
          </p>
        </section>

        {/* ===== Cooperación + referencias ===== */}
        <section className="ip-post" data-aos="fade-up">
          <h2 className="ip-h2">{t("post.coop.title")}</h2>
          <ul className="ip-list">
            {t("post.coop.items", { returnObjects: true }).map((li) => (
              <li key={li}>{li}</li>
            ))}
          </ul>
          <p className="ip-contact">
            {t("post.coop.more.1")}{" "}
            <Link to={t("links.contact")} className="clink">{t("post.coop.more.link")}</Link>{" "}
            {t("post.coop.more.2")}
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
