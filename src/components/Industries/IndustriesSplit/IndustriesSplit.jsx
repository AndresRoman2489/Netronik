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
    { title: "Producción industrial", img: imgIndustry, to: "#" },
    { title: "Alimentos y bebidas", img: imgFood, to: "#" },
    { title: "Tratamiento de residuos", img: imgWaste, to: "#" },
    { title: "Petróleo y gas", img: imgOilGas, to: "#" },
    { title: "Industria minera", img: imgMina, to: "#" },
    { title: "Generación de energía", img: imgPower, to: "#" },
    { title: "Tratamiento de agua", img: imgPower, to: "#" }, // cambia si tienes otra img
    { title: "Industria química", img: imgQuimica, to: "#" },
    { title: "Transporte neumático", img: imgNeumatico, to: "#" },
    { title: "Ventilación y A/A (HVAC)", img: imgPower, to: "#" }, // cambia si hay HVAC.jpg
    { title: "Otras industrias", img: imgOtras, to: "#" },
  ];

  const apps = [
    "Inspección de tuberías",
    "Limpieza de tuberías",
    "Extracción industrial",
    "Remoción de óxido y recubrimientos",
    "Métodos de limpieza no abrasivos",
    "Chorro de hielo seco",
    "Chorro de agua a alta presión",
    "Abrasión con granalla",
    "Recubrimiento protector",
    "Inspección visual",
    "Ventilación y aire acondicionado",
    "Limpieza con aire comprimido",
    "Limpieza con cepillo",
    "Aspirado",
    "Desinfección",
    "Medición de ovalidad",
    "Medición de espesor de pared",
  ];

  return (
    <section className="ind-split">
      <div className="ind-container">
        <div className="ind-panels">
          {/* Sectores */}
          <section className="ind-panel" data-aos="fade-up">
            <h2 className="panel-title">Sectores industriales</h2>
            <p className="panel-hint">¿Dónde funciona nuestra tecnología?</p>

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
              {moreSectors ? "Ver menos" : "Ver más"}
            </button>
          </section>

          {/* Aplicaciones */}
          <section className="ind-panel ind-panel--apps" data-aos="fade-up">
            <h2 className="panel-title">Aplicaciones y métodos</h2>
            <p className="panel-hint">Selecciona la tarea que necesitas resolver</p>

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
              {moreApps ? "Ver menos" : "Ver más"}
            </button>
          </section>
        </div>
      </div>
    </section>
  );
}
