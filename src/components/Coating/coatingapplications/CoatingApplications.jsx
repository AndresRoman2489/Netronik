import React from "react";
import { Link } from "react-router-dom";
import "./CoatingApplications.css";
import { useTranslation } from "react-i18next";

/**
 * Sección: Aplicaciones de recubrimientos internos
 * - Usa namespace i18n: 'coating'
 * - Los iframes leen sus URLs desde las traducciones (videos.*.url)
 *   → Cambia esas URLs por tus IDs reales de YouTube cuando gustes.
 */
export default function CoatingApplications() {
  const { t } = useTranslation("coating");

  const apps = t("apps.items", { returnObjects: true }) || [];
  const refs = t("refs.items", { returnObjects: true }) || [];
  // Helper para convertir a URL de EMBED aunque te pasen watch?v=... o el ID suelto
const toEmbedUrl = (input) => {
  if (!input) return "";
  const id =
    /^[A-Za-z0-9_-]{11}$/.test(input) ? input :
    (input.match(/[?&]v=([A-Za-z0-9_-]{11})/) || [])[1] ||
    (input.match(/\/embed\/([A-Za-z0-9_-]{11})/) || [])[1] ||
    "";

  return id
    ? `https://www.youtube-nocookie.com/embed/${id}?rel=0&modestbranding=1&playsinline=1`
    : input; // último recurso (no recomendado)
};

  return (
    <section className="coat-sec" id="coating-apps">
      <div className="coat-wrap">
        {/* Intro */}
        <div className="coat-intro" data-aos="fade-up">
          <p>{t("intro.p1")}</p>
          <p>{t("intro.p2")}</p>
          <p>{t("intro.p3")}</p>
          <p>{t("intro.p4")}</p>
          <p className="coat-cta">
            {t("cta.pre")}{" "}
            <Link to="/contact" className="coat-link">
              {t("cta.link")}
            </Link>{" "}
            {t("cta.post")}
          </p>
        </div>

        {/* Lista de aplicaciones típicas */}
        <header className="coat-head" data-aos="fade-up" data-aos-delay="60">
          <h2 className="coat-h2">{t("apps.title1")}</h2>
          <h2 className="coat-h2 coat-h2--sub">{t("apps.title2")}</h2>
        </header>

        <ul className="coat-list" data-aos="fade-up" data-aos-delay="90">
          {apps.map((it, i) => (
            <li key={`${it}-${i}`}>{it}</li>
          ))}
        </ul>

        <p className="coat-cta" data-aos="fade-up" data-aos-delay="110">
          {t("cta.pre")}{" "}
          <Link to="/" className="coat-link">
            {t("cta.link")}
          </Link>{" "}
          {t("cta.post")}
        </p>

        {/* Video 1 */}
        <section className="coat-block" data-aos="fade-up" data-aos-delay="140">
          <h3 className="coat-h3">{t("videos.multi.title")}</h3>
          <div className="coat-video">
            // Uso dentro de tu JSX
<iframe
  src={toEmbedUrl(t("videos.multi.url"))}
  title={t("videos.multi.title")}
  loading="lazy"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  allowFullScreen
  style={{width:"100%", height:"100%", border:0}}
/>
          </div>
        </section>

        {/* Video 2 */}
        <section className="coat-block" data-aos="fade-up" data-aos-delay="160">
          <h3 className="coat-h3">{t("videos.poly.title")}</h3>
          <div className="coat-video">
           // Uso dentro de tu JSX
<iframe
  src={toEmbedUrl(t("videos.multi.url"))}
  title={t("videos.multi.title")}
  loading="lazy"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  allowFullScreen
  style={{width:"100%", height:"100%", border:0}}
/>
          </div>
        </section>

        <p className="coat-cta" data-aos="fade-up" data-aos-delay="180">
          {t("cta.pre")}{" "}
          <Link to="/contact" className="coat-link">
            {t("cta.link")}
          </Link>{" "}
          {t("cta.post")}
        </p>

        {/* Referencias */}
        <section className="coat-refs" data-aos="fade-up" data-aos-delay="200">
          <h2 className="coat-h2">{t("refs.titleLine1")}</h2>
          <h2 className="coat-h2 coat-h2--sub">{t("refs.titleLine2")}</h2>

          <ul className="coat-refs-list">
            {refs.map((r, i) => (
              <li key={`r-${i}`}>
                <a href={r.href} className="coat-link">
                  {r.label}
                </a>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </section>
  );
}
