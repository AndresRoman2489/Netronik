import React, { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import "./ServicesOverview.css";

/* Usa la imagen en vez del video */
import overviewImage from "../../../assets/img/jettyrobot.png"; // ajusta la extensión si es .png/.webp

export default function ServicesOverview() {
  const { t } = useTranslation("services");
  const videoRef = useRef(null);      // se mantiene para no romper nada
  const mediaBoxRef = useRef(null);   // se mantiene para AOS / estilos
  const playedOnce = useRef(false);   // inofensivo aunque no haya video

  const tArr = (path) => {
    const val = t(path, { returnObjects: true, defaultValue: [] });
    return Array.isArray(val) ? val : [];
  };

  /* Si hubiera un <video>, este efecto lo reproduciría una sola vez.
     Con <img> NO hace nada (sale temprano). */
  useEffect(() => {
    const el = videoRef.current;
    const box = mediaBoxRef.current;

    // No es un <video>? No hay nada que reproducir.
    if (!el || el.tagName !== "VIDEO" || !box) return;

    const playOnce = () => {
      if (playedOnce.current) return;
      const p = el.play?.();
      if (p && typeof p.catch === "function") p.catch(() => {});
      playedOnce.current = true;
    };

    const onAosIn = (e) => {
      if (e.detail === box) setTimeout(playOnce, 800);
    };
    document.addEventListener("aos:in", onAosIn);

    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !playedOnce.current) playOnce();
      },
      { threshold: 0.6 }
    );
    io.observe(el);

    const onInteract = () => { if (!playedOnce.current) playOnce(); };
    window.addEventListener("pointerdown", onInteract, { once: true });

    return () => {
      document.removeEventListener("aos:in", onAosIn);
      io.disconnect();
    };
  }, []);

  return (
    <section className="srv-overview" data-aos="fade-up">
      <div className="srv-overview__wrap">
        <article className="srv-card srv-card--xl" data-aos="fade-up">
          <div className="srv-card__body">
            <h2 className="srv-title">{t("overview.title")}</h2>
            <p className="srv-lead">{t("overview.lead")}</p>

            <div className="srv-meta">
              <div className="srv-meta__col">
                <h4 className="srv-meta__title">{t("overview.meta.what.title")}</h4>
                <ul className="srv-list">
                  {tArr("overview.meta.what.items").map((it, i) => (
                    <li key={i} className="srv-list__item">{it}</li>
                  ))}
                </ul>
              </div>
              <div className="srv-meta__col">
                <h4 className="srv-meta__title">{t("overview.meta.who.title")}</h4>
                <ul className="srv-list">
                  {tArr("overview.meta.who.items").map((it, i) => (
                    <li key={i} className="srv-list__item">{it}</li>
                  ))}
                </ul>
              </div>
            </div>

            <button className="srv-btn" type="button">
              {t("buttons.learnMore")}
            </button>
          </div>

          <div
            ref={mediaBoxRef}
            className="srv-card__media"
            data-aos="fade-up"
            data-aos-delay={300}
            data-aos-duration={800}
          >
            {/* Mantengo clase srv-media para conservar estilos */}
            <img
              ref={videoRef}              /* reutilizo el ref, no afecta */
              className="srv-media"
              src={overviewImage}
              alt="JettyRobot trabajando en tubería"
              loading="eager"
              decoding="async"
            />
          </div>
        </article>

        <div className="srv-grid" data-aos="fade-up" data-aos-delay={120}>
          {["rental", "sale", "special"].map((k, idx) => (
            <article
              className="srv-card"
              key={k}
              data-aos="zoom-in"
              data-aos-delay={160 + idx * 60}
            >
              <div className="srv-card__body">
                <h3 className="srv-card__title">{t(`cards.${k}.title`)}</h3>
                <p className="srv-card__sub">{t(`cards.${k}.subtitle`)}</p>

                <h4 className="srv-meta__title">{t("cards.benefitsTitle")}</h4>
                <ul className="srv-list">
                  {tArr(`cards.${k}.benefits`).map((b, i) => (
                    <li className="srv-list__item" key={i}>{b}</li>
                  ))}
                </ul>

                <button className="srv-btn" type="button">
                  {t("buttons.learnMore")}
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
