// src/components/References/ReferencesByIndustry.jsx
import React, { useMemo, useRef, useState } from "react";
import "./ReferencesByIndustry.css";
import { useTranslation } from "react-i18next";

/* ================== IMPORTS DE IMÁGENES (estáticos) ================== */
/* Cambia las rutas si tus archivos tienen otros nombres */
import imgIndustrialAlemania from "../../../assets/references/industrial-alemania.webp";
import imgOman from "../../../assets/references/oman.jpeg";
import imgPenstockHydro from "../../../assets/references/penstock-hydro.jpeg";
import imgHvacDisinfect from "../../../assets/references/hvac-disinfect.jpeg";
import imgKitchenExhaustsNorway from "../../../assets/references/kitchen-exhausts-norway.webp";
import imgDistilleryUK from "../../../assets/references/distillery-uk.webp";
import imgFoodPlantUSA from "../../../assets/references/food-plant-usa.png";
import imgHvacFireSweden from "../../../assets/references/hvac-fire-sweden.webp";
import imgPipelineRussia from "../../../assets/references/pipeline-russia.jpeg";
import imgAustraliaJettyrobotS from "../../../assets/references/australia-jettyrobot-s.webp";
import imgWoodVeneerCanada from "../../../assets/references/wood-veneer-canada.jpeg";

/* Placeholder sencillo por si falta alguna imagen */
const PLACEHOLDER =
  'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="1600" height="900"><rect fill="%230b0e14" width="100%%" height="100%%"/></svg>';

/* Mapa clave -> import (usa el mismo valor que pondrás en "imgKey" del JSON) */
const IMAGE_MAP = {
  "industrial-alemania": imgIndustrialAlemania,
  "oman": imgOman,
  "penstock-hydro": imgPenstockHydro,
  "hvac-disinfect": imgHvacDisinfect,
  "kitchen-exhausts-norway": imgKitchenExhaustsNorway,
  "distillery-uk": imgDistilleryUK,
  "food-plant-usa": imgFoodPlantUSA,
  "hvac-fire-sweden": imgHvacFireSweden,
  "pipeline-russia": imgPipelineRussia,
  "australia-jettyrobot-s": imgAustraliaJettyrobotS,
  "wood-veneer-canada": imgWoodVeneerCanada
};

/* ================== helpers de tabs ================== */
const ORDER = ["all", "oilGas", "power", "hvac", "food", "industrial"];

// Normaliza tabs: acepta array [{key,label}], objeto {key:label}, o cae a defaults
function normalizeTabs(rawTabs, rawIndustryDict) {
  if (Array.isArray(rawTabs)) return rawTabs;

  if (rawTabs && typeof rawTabs === "object") {
    const entries = Object.entries(rawTabs).map(([key, label]) => ({ key, label }));
    const ordered = ORDER
      .filter((k) => entries.some((e) => e.key === k))
      .map((k) => entries.find((e) => e.key === k));
    const rest = entries.filter((e) => !ORDER.includes(e.key));
    return [...ordered, ...rest];
  }

  if (rawIndustryDict && typeof rawIndustryDict === "object") {
    return ORDER.map((k) => ({ key: k, label: rawIndustryDict[k] ?? k }));
  }

  return ORDER.map((k) => ({ key: k, label: k }));
}

/* ================== componente ================== */
export default function ReferencesByIndustry({ items: itemsProp }) {
  const { t } = useTranslation("references");

  const rawTabs = t("grid.tabs", { returnObjects: true });
  const rawIndustryDict = t("grid.industry", { returnObjects: true });
  const tabs = normalizeTabs(rawTabs, rawIndustryDict);

  // Items (asegura array). Ideal: en tu JSON usa "imgKey" (no "img")
  const rawItems = itemsProp ?? t("grid.items", { returnObjects: true });
  const items = Array.isArray(rawItems) ? rawItems : [];

  const [active, setActive] = useState(tabs[0]?.key || "all");
  const tabRefs = useRef({});

  const filtered = useMemo(
    () => (active === "all" ? items : items.filter((it) => it.category === active)),
    [active, items]
  );

  const onKey = (e, idx) => {
    if (!["ArrowRight", "ArrowLeft", "Home", "End"].includes(e.key)) return;
    e.preventDefault();
    const last = tabs.length - 1;
    let next = idx;
    if (e.key === "ArrowRight") next = idx === last ? 0 : idx + 1;
    if (e.key === "ArrowLeft") next = idx === 0 ? last : idx - 1;
    if (e.key === "Home") next = 0;
    if (e.key === "End") next = last;
    const nextKey = tabs[next]?.key;
    if (!nextKey) return;
    setActive(nextKey);
    tabRefs.current[nextKey]?.focus?.();
  };

  // Resuelve src: 1) import por imgKey; 2) URL directa (útil para Firebase Storage); 3) placeholder
  const resolveSrc = (it) => {
    if (it?.imgKey && IMAGE_MAP[it.imgKey]) return IMAGE_MAP[it.imgKey];
    if (typeof it?.img === "string" && it.img) return it.img; // remoto (p.ej. Firebase Storage)
    return PLACEHOLDER;
  };

  return (
    <section className="refs-sec" aria-labelledby="refs-heading">
      <div className="refs-wrap">
        <header className="refs-header" data-aos="fade-up">
          <h2 id="refs-heading" className="refs-title">
            {t("grid.title")}
          </h2>
          <p className="refs-sub">{t("grid.subtitle")}</p>
        </header>

        {/* Tabs */}
        <div
          className="refs-tabs"
          role="tablist"
          aria-label={t("grid.tablistLabel", "Filter references by industry")}
          data-aos="fade-up"
          data-aos-delay="80"
        >
          {tabs.map((tab, idx) => {
            const selected = active === tab.key;
            return (
              <button
                key={tab.key}
                ref={(el) => (tabRefs.current[tab.key] = el)}
                role="tab"
                type="button"
                className={`refs-tab${selected ? " is-active" : ""}`}
                aria-selected={selected}
                aria-controls={`panel-${tab.key}`}
                id={`tab-${tab.key}`}
                tabIndex={selected ? 0 : -1}
                onClick={() => setActive(tab.key)}
                onKeyDown={(e) => onKey(e, idx)}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Grid */}
        <div
          id={`panel-${active}`}
          role="tabpanel"
          aria-labelledby={`tab-${active}`}
          className="refs-grid"
          data-aos="fade-up"
          data-aos-delay="120"
        >
          {filtered.map((it, i) => {
            const src = resolveSrc(it);
            return (
              <article
                key={`${active}-${i}`}
                className="refs-card"
                data-aos="fade-up"
                data-aos-delay={i * 40}
              >
                <div className="refs-card__media">
                  <img
                    src={src}
                    alt={it.imgAlt || it.title}
                    loading="lazy"
                    decoding="async"
                    onError={(e) => {
                      e.currentTarget.src = PLACEHOLDER;
                      e.currentTarget.alt = "";
                    }}
                  />
                </div>
                <div className="refs-card__body">
                  <h3 className="refs-card__title">{it.title}</h3>
                  <p className="refs-card__excerpt">{it.excerpt}</p>
                  <p className="refs-card__meta">
                    <strong>{t("grid.meta.industry")}:</strong>{" "}
                    {t(`grid.industry.${it.category}`, it.category)}
                    <br />
                    <strong>{t("grid.meta.country")}:</strong> {it.country}
                  </p>
                  <a
                    className="refs-card__link"
                    href={it.href || "#"}
                    aria-label={`${t("grid.cta")} ${it.title}`}
                  >
                    {t("grid.cta")}
                  </a>
                </div>
              </article>
            );
          })}

          {filtered.length === 0 && <p className="refs-empty">{t("grid.empty")}</p>}
        </div>
      </div>
    </section>
  );
}
