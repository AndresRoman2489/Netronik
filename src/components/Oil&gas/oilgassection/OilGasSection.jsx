import React from "react";
import { Link } from "react-router-dom";
import "./OilGasSection.css";
import { useTranslation } from "react-i18next";

/* Imagen */
import ogPhoto from "../../../assets/img/oil-and-gas.jpg";

export default function OilGasSection() {
  const { t } = useTranslation("oilgas");

  return (
    <section className="ip-sec" id="oil-gas">
      <div className="ip-wrap">

        {/* Intro superior */}
        <section className="og-top" data-aos="fade-up">
          <p className="ip-p">{t("top.p1")}</p>
          <p className="ip-p">{t("top.p2")}</p>
        </section>

        {/* Problemas más frecuentes */}
        <header className="ip-pre" data-aos="fade-up">
          <h2 className="ip-h2">{t("pre.title")}</h2>

          <p className="ip-p">{t("pre.p1")}</p>
          <p className="ip-p">
            {t("pre.p2.1")}{" "}
            <Link to={t("links.inspection")} className="clink">
              {t("pre.p2.link1")}
            </Link>{" "}
            {t("pre.p2.2")}{" "}
            <Link to={t("links.visualInspection")} className="clink">
              {t("pre.p2.link2")}
            </Link>.
          </p>
          <p className="ip-p">{t("pre.p3")}</p>
          <p className="ip-p">{t("pre.p4")}</p>

          <p className="ip-contact">
            {t("pre.contact.1")}{" "}
            <Link to={t("links.contact")} className="clink">
              {t("pre.contact.link")}
            </Link>{" "}
            {t("pre.contact.2")}
          </p>
        </header>

        {/* Foto central */}
        <figure className="og-photo" data-aos="fade-up">
          <img src={ogPhoto} alt={t("alts.photo")} loading="lazy" decoding="async" />
        </figure>

        {/* Necesidades del cliente */}
        <section className="ip-pre" data-aos="fade-up">
          <h2 className="ip-h2">{t("needs.title")}</h2>
          <p className="ip-p">{t("needs.lead")}</p>
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

        {/* Cooperación + referencias */}
        <section className="ip-post" data-aos="fade-up">
          <h2 className="ip-h2">{t("post.coop.title")}</h2>
          <ul className="ip-list">
            <li>{t("post.coop.items.0")}</li>
            <li>
              {t("post.coop.items.1.1")}{" "}
              <Link to={t("links.visualInspection")} className="clink">
                {t("post.coop.items.1.link1")}
              </Link>
              {t("post.coop.items.1.mid")}{" "}
              <Link to={t("links.wallThickness")} className="clink">
                {t("post.coop.items.1.link2")}
              </Link>{" "}
              {t("post.coop.items.1.tail")}
            </li>
            <li>
              {t("post.coop.items.2.1")}{" "}
              <Link to={t("links.cleaning")} className="clink">
                {t("post.coop.items.2.link")}
              </Link>
              {t("post.coop.items.2.rest")}
            </li>
            <li>{t("post.coop.items.3")}</li>
            <li>
              {t("post.coop.items.4.1")}{" "}
              <Link to={t("links.coating")} className="clink">
                {t("post.coop.items.4.linkCoating")}
              </Link>
              {t("post.coop.items.4.2")}{" "}
              <Link to={t("links.coating")} className="clink">
                {t("post.coop.items.4.linkDFT")}
              </Link>
              {t("post.coop.items.4.tail")}
            </li>
            <li>{t("post.coop.items.5")}</li>
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
