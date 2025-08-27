import React from "react";
import { Link } from "react-router-dom";
import "./MiningSection.css";
import { useTranslation } from "react-i18next";

/* Imagen única (no cambio imports) */
import miningPhoto from "../../../assets/img/mina.jpg";

export default function MiningSection() {
  const { t } = useTranslation("mining");

  return (
    <section className="ip-sec" id="mining">
      <div className="ip-wrap">

        {/* Intro arriba (dos párrafos) */}
        <section className="mi-top" data-aos="fade-up">
          <p className="ip-p">{t("top.p1")}</p>
          <p className="ip-p">{t("top.p2")}</p>
        </section>

        {/* Qué problemas resuelven... */}
        <header className="ip-pre" data-aos="fade-up">
          <h2 className="ip-h2">{t("pre.title")}</h2>

          <p className="ip-p">{t("pre.p1")}</p>
          <p className="ip-p">
            {t("pre.p2.1")}{" "}
            <Link to={t("links.inspection")} className="clink">
              {t("pre.p2.link1")}
            </Link>{" "}
            {t("pre.p2.2")}
          </p>
          <p className="ip-p">{t("pre.p3")}</p>

          <p className="ip-contact">
            {t("pre.contact.1")}{" "}
            <Link to={t("links.contact")} className="clink">
              {t("pre.contact.link")}
            </Link>{" "}
            {t("pre.contact.2")}
          </p>
        </header>

        {/* Foto central */}
        <figure className="mi-photo" data-aos="fade-up">
          <img src={miningPhoto} alt={t("alts.photo")} loading="lazy" decoding="async" />
        </figure>

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

        {/* Cooperación (TODOS los bullets) */}
        <section className="ip-post" data-aos="fade-up">
          <h2 className="ip-h2">{t("post.coop.title")}</h2>
          <ul className="ip-list">
            <li>{t("post.coop.items.0")}</li>
            <li>
              {t("post.coop.items.1.1")}{" "}
              <Link to={t("links.inspection")} className="clink">
                {t("post.coop.items.1.link")}
              </Link>
              {t("post.coop.items.1.2")}
            </li>
            <li>
              {t("post.coop.items.2.1")}{" "}
              <Link to={t("links.cleaning")} className="clink">
                {t("post.coop.items.2.link")}
              </Link>
              {t("post.coop.items.2.2")}
            </li>
            <li>
              {t("post.coop.items.3.1")}{" "}
              <Link to={t("links.visualInspection")} className="clink">
                {t("post.coop.items.3.link1")}
              </Link>
              {t("post.coop.items.3.2")}{" "}
              <Link to={t("links.dft")} className="clink">
                {t("post.coop.items.3.link2")}
              </Link>
              {t("post.coop.items.3.3")}
            </li>
            <li>{t("post.coop.items.4")}</li>
            <li>{t("post.coop.items.5")}</li>
            
          </ul>

          <p className="ip-contact">
            {t("post.coop.more.1")}{" "}
            <Link to={t("links.contact")} className="clink">
              {t("post.coop.more.link")}
            </Link>{" "}
            {t("post.coop.more.2")}
          </p>
        </section>
      </div>
    </section>
  );
}
