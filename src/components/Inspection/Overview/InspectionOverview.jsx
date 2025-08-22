import React from "react";
import "./inspectionOverview.css";
import { useTranslation } from "react-i18next";

/* IMPORTS ESTÁTICOS (ajusta nombres/ubicación si usas otros) */
import imgInsidePipe from "../../../assets/img/insidepipe.png";
import imgControlScreen from "../../../assets/img/inspection.jpg";
import imgRobotInPipe from "../../../assets/img/robot_pipe.jpg";

export default function InspectionOverview() {
  const { t } = useTranslation("inspection");

  return (
    <section className="inspect-overview" id="inspect-overview">
      <div className="inspect-overview__wrap">

        {/* Texto superior */}
        <div className="inspect-overview__copy" data-aos="fade-up">
          <p>{t("overview.p1")}</p>
          <p>{t("overview.p2")}</p>
          <p>{t("overview.p3")}</p>
          <p>{t("overview.p4")}</p>
        </div>

        {/* Galería VERTICAL (3 fotos grandes) */}
        <div className="inspect-overview__grid" data-aos="fade-up" data-aos-delay="80">
          <figure className="inspect-overview__item">
            <img
              src={imgInsidePipe}
              alt={t("overview.gallery.img1Alt")}
              loading="lazy"
              decoding="async"
            />
          </figure>

          <figure className="inspect-overview__item">
            <img
              src={imgControlScreen}
              alt={t("overview.gallery.img2Alt")}
              loading="lazy"
              decoding="async"
            />
          </figure>

          <figure className="inspect-overview__item">
            <img
              src={imgRobotInPipe}
              alt={t("overview.gallery.img3Alt")}
              loading="lazy"
              decoding="async"
            />
          </figure>
        </div>

        {/* Métodos típicos */}
        <div className="inspect-overview__methods" data-aos="fade-up" data-aos-delay="120">
          <h2 className="inspect-overview__h2">{t("methods.title")}</h2>
          <ul className="inspect-overview__list">
            <li><a href={t("methods.links.visual.href")}>{t("methods.links.visual.label")}</a></li>
            <li><a href={t("methods.links.ovality.href")}>{t("methods.links.ovality.label")}</a></li>
            <li><a href={t("methods.links.wall.href")}>{t("methods.links.wall.label")}</a></li>
          </ul>

          <p className="inspect-overview__contact">
            {t("contact.before")}{" "}
            <a href={t("contact.href")}>{t("contact.linkLabel")}</a>{" "}
            {t("contact.after")}
          </p>
        </div>

        {/* Implementaciones / referencias */}
        <div className="inspect-overview__impl" data-aos="fade-up" data-aos-delay="140">
          <h2 className="inspect-overview__h2">{t("impl.title")}</h2>
          <ul className="inspect-overview__list">
            <li><a href={t("impl.items.0.href")}>{t("impl.items.0.label")}</a></li>
            <li><a href={t("impl.items.1.href")}>{t("impl.items.1.label")}</a></li>
          </ul>
        </div>

      </div>
    </section>
  );
}
