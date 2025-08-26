import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./IndustriesSplit.css";
import { useTranslation } from "react-i18next";

/* IMÁGENES */
import imgIndustry   from "../../../assets/img/Industry.jpg";
import imgFood       from "../../../assets/img/Food.png";
import imgWaste      from "../../../assets/img/waste.png";
import imgOilGas     from "../../../assets/img/oil-and-gas.jpg";
import imgMina       from "../../../assets/img/mina.jpg";
import imgPower      from "../../../assets/img/Power.jpg";
import imgNeumatico  from "../../../assets/img/neumatico.jpg";
import imgQuimica    from "../../../assets/img/Quimica.jpg";
import imgOtras      from "../../../assets/img/Otras.jpg";
import imgWater      from "../../../assets/img/Water.png";
import imgHVAC       from "../../../assets/img/HVAC.jpg";
import imgFallback   from "../../../assets/img/alt.jpeg";

function Thumb({ src, alt }) {
  const onErr = (e) => { e.currentTarget.src = imgFallback; };
  return (
    <div className="pill-thumb">
      <img src={src} alt={alt} loading="lazy" onError={onErr} />
    </div>
  );
}

/* Fallbacks por si en i18n no hay 'to' todavía */
const SECTOR_FALLBACK = {
  industrialProduction: "/",
  foodAndBeverage: "/",
  wasteTreatment: "/",
  oilAndGas: "/",
  mining: "/",
  powerGeneration: "/",
  waterTreatment: "/",
  chemical: "/",
  pneumaticTransport: "/",
  hvac: "/",
  other: "/"
};

const APP_FALLBACK = {
  inspectionOfPipelines: "/inspection",
  pipeCleaning: "/",
  industrialExhausts: "/",
  rustRemoval: "/",
  nonAbrasive: "/",
  dryIce: "/",
  highPressureWater: "/",
  abrasiveBlasting: "/",
  protectiveCoating: "/",
  visualInspection: "/",
  hvac: "/",
  compressedAir: "/",
  brushCleaning: "/",
  vacuuming: "/",
  disinfection: "/",
  ovality: "/",
  wallThickness: "/"
};

export default function IndustriesSplit() {
  const { t } = useTranslation("industries");
  const [moreSectors, setMoreSectors] = useState(false);
  const [moreApps, setMoreApps] = useState(false);

  /* Sectors: título desde i18n + 'to' desde i18n (con fallback) */
  const sectorDefs = [
    { key: "industrialProduction", img: imgIndustry },
    { key: "foodAndBeverage",      img: imgFood },
    { key: "wasteTreatment",       img: imgWaste },
    { key: "oilAndGas",            img: imgOilGas },
    { key: "mining",               img: imgMina },
    { key: "powerGeneration",      img: imgPower },
    { key: "waterTreatment",       img: imgWater },
    { key: "chemical",             img: imgQuimica },
    { key: "pneumaticTransport",   img: imgNeumatico },
    { key: "hvac",                 img: imgHVAC },
    { key: "other",                img: imgOtras }
  ];

  const sectors = sectorDefs.map(s => ({
    title: t(`split.sectors.${s.key}.label`),
    img: s.img,
    to: t(`split.sectors.${s.key}.to`, { defaultValue: SECTOR_FALLBACK[s.key] || "#" })
  }));

  /* Apps: soporta array de objetos {id,label,to} o de strings (fallback) */
  const rawApps = t("split.apps", { returnObjects: true });
  const apps = Array.isArray(rawApps)
    ? rawApps.map((it) => {
        if (typeof it === "string") {
          // si todavía tienes strings en i18n, caemos a un mapeo básico
          const id = it
            .replace(/\s+/g, "")
            .replace(/[^\w]/g, "")
            .replace(/^[0-9]+/, "");
          return { id, label: it, to: APP_FALLBACK[id] || "#" };
        }
        // objeto completo desde i18n
        return { id: it.id, label: it.label, to: it.to || APP_FALLBACK[it.id] || "#" };
      })
    : [];

  return (
    <section className="ind-split">
      <div className="ind-container">
        <div className="ind-panels">

          {/* Sectores */}
          <section className="ind-panel" data-aos="fade-up">
            <h2 className="panel-title">{t("split.sectorsTitle")}</h2>
            <p className="panel-hint">{t("split.sectorsHint")}</p>

            <div className={`ind-grid sectors ${moreSectors ? "" : "is-collapsed"}`}>
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
              {apps.map((app, i) => (
                <Link
                  to={app.to}
                  className="as-link"
                  key={app.id || app.label}
                  data-aos="fade-up"
                  data-aos-delay={i * 60}
                >
                  <article className="pill pill--dark">
                    <h3 className="pill-title">{app.label}</h3>
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
