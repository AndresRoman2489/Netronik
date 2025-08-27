import React from "react";
import { Link } from "react-router-dom";
import "./WasteIndustrySection.css";
import { useTranslation } from "react-i18next";

/* Imagen única (no cambio imports) */
import miningPhoto from "../../../assets/img/mina.jpg";

export default function MiningSection() {
  // Usa el namespace correcto que tienes en i18n (wasteT)
  const { t } = useTranslation("wasteT");

  return (
    <section className="ip-sec" id="mining">
      <div className="ip-wrap">

        {/* Párrafo introductorio antes del H2 */}
        <section className="mi-top" data-aos="fade-up">
          <p className="ip-p">{t("top.lead")}</p>
        </section>

        {/* Qué problemas resuelven... */}
        <header className="ip-pre" data-aos="fade-up">
          <h2 className="ip-h2">{t("pre.title")}</h2>

          <p className="ip-p">{t("pre.p1")}</p>
          <p className="ip-p">{t("pre.p2")}</p>
          <p className="ip-p">{t("pre.p3")}</p>

          <p className="ip-contact">
            {t("pre.contact.1")}{" "}
            <Link to={t("links.contact")} className="clink">
              {t("pre.contact.link")}
            </Link>{" "}
            {t("pre.contact.2")}
          </p>
        </header>

        {/* Necesidades */}
        <section className="ip-pre" data-aos="fade-up">
          <h2 className="ip-h2">{t("needs.title")}</h2>
          <ul className="ip-list">
            {t("needs.items", { returnObjects: true }).map((li) => (
              <li key={li}>{li}</li>
            ))}
          </ul>

          <p className="ip-contact">
            {t("pre.contact.1")}{" "}
            <Link to={t("links.contact")} className="clink">
              {t("pre.contact.link")}
            </Link>{" "}
            {t("pre.contact.2")}
          </p>
        </section>

        {/* (Opcional) Dos imágenes before/after van aquí si las montas con tu bloque reutilizable */}

        {/* Foto central (la que ya importas) */}
        <figure className="mi-photo" data-aos="fade-up">
          <img src={miningPhoto} alt={t("alts.photo")} loading="lazy" decoding="async" />
        </figure>

        {/* Cooperación */}
        <section className="ip-post" data-aos="fade-up">
          <h2 className="ip-h2">{t("post.coop.title")}</h2>
          <ul className="ip-list">
            {t("post.coop.items", { returnObjects: true }).map((li, i) => (
              <li key={i}>{li}</li>
            ))}
          </ul>

          <p className="ip-contact">
            {t("post.coop.more.1")}{" "}
            <Link to={t("links.contact")} className="clink">
              {t("post.coop.more.link")}
            </Link>{" "}
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
