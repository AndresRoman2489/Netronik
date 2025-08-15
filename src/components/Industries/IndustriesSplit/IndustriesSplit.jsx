import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./IndustriesSplit.css";
import { useTranslation } from 'react-i18next';

/* IMÁGENES (todas en /src/assets/img/) */
import imgIndustry   from "../../../assets/img/Industry.jpg";
import imgFood       from "../../../assets/img/Food.png";
import imgWaste      from "../../../assets/img/waste.png";
import imgOilGas     from "../../../assets/img/oil-and-gas.jpg";
import imgMina       from "../../../assets/img/mina.jpg";
import imgPower      from "../../../assets/img/Power.jpg";
import imgNeumatico  from "../../../assets/img/neumatico.jpg";
import imgQuimica    from "../../../assets/img/Quimica.jpg";
import imgOtras      from "../../../assets/img/Otras.jpg";
import imgFallback   from "../../../assets/img/alt.jpeg";

function Thumb({ src, alt }) {
  const onErr = (e) => { e.currentTarget.src = imgFallback; };
  return (
    <div className="pill-thumb">
      <img src={src} alt={alt} loading="lazy" onError={onErr} />
    </div>
  );
}

export default function IndustriesSplit() {
  const { t } = useTranslation('industries');
  const [moreSectors, setMoreSectors] = useState(false);
  const [moreApps, setMoreApps] = useState(false);

  const sectors = [
    { title: t("split.sectors.industrialProduction.label"), img: imgIndustry, to: "#" },
    { title: t("split.sectors.foodAndBeverage.label"),      img: imgFood,     to: "#" },
    { title: t("split.sectors.wasteTreatment.label"),       img: imgWaste,    to: "#" },
    { title: t("split.sectors.oilAndGas.label"),            img: imgOilGas,   to: "#" },
    { title: t("split.sectors.mining.label"),               img: imgMina,     to: "#" },
    { title: t("split.sectors.powerGeneration.label"),      img: imgPower,    to: "#" },
    { title: t("split.sectors.waterTreatment.label"),       img: imgPower,    to: "#" }, // cambia si tienes otra img
    { title: t("split.sectors.chemical.label"),             img: imgQuimica,  to: "#" },
    { title: t("split.sectors.pneumaticTransport.label"),   img: imgNeumatico,to: "#" },
    { title: t("split.sectors.hvac.label"),                 img: imgPower,    to: "#" }, // cambia si hay HVAC.jpg
    { title: t("split.sectors.other.label"),                img: imgOtras,    to: "#" },
  ];

  const apps = t("split.apps", { returnObjects: true });

  return (
    <section className="ind-split">
      <div className="ind-container">
        <div className="ind-panels">
          {/* Sectores */}
          <section className="ind-panel" data-aos="fade-up">
            <h2 className="panel-title">{t("split.sectorsTitle")}</h2>
            <p className="panel-hint">{t("split.sectorsHint")}</p>

            <div
              className={`ind-grid sectors ${moreSectors ? "" : "is-collapsed"}`}
            >
              {sectors.map((s, i) => (
                <Link
                  to={s.to}
                  className="as-link"
                  key={s.title}
                  data-aos="fade-up"
                  data-aos-delay={i * 60}
                >
                  <article className="pill pill--light">
                    <Thumb src={s.img} alt={s.title} />
                    <h3 className="pill-title">{s.title}</h3>
                  </article>
                </Link>
              ))}
            </div>

            <button
              type="button"
              className="toggle-btn"
              onClick={() => setMoreSectors((v) => !v)}
              aria-expanded={moreSectors}
            >
              {moreSectors ? t("split.buttons.showLess") : t("split.buttons.showMore")}
            </button>
          </section>

          {/* Aplicaciones */}
          <section className="ind-panel ind-panel--apps" data-aos="fade-up">
            <h2 className="panel-title">{t("split.appsTitle")}</h2>
            <p className="panel-hint">{t("split.appsHint")}</p>

            <div className={`ind-grid apps ${moreApps ? "" : "is-collapsed"}`}>
              {apps.map((t, i) => (
                <Link
                  to="#"
                  className="as-link"
                  key={t}
                  data-aos="fade-up"
                  data-aos-delay={i * 60}
                >
                  <article className="pill pill--dark">
                    <h3 className="pill-title">{t}</h3>
                  </article>
                </Link>
              ))}
            </div>

            <button
              type="button"
              className="toggle-btn"
              onClick={() => setMoreApps((v) => !v)}
              aria-expanded={moreApps}
            >
              {moreApps ? t("split.buttons.showLess") : t("split.buttons.showMore")}
            </button>
          </section>
        </div>
      </div>
    </section>
  );
}
