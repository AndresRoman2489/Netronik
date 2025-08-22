import React, { useRef, useState } from "react";
import "./FAQ.css";
import { useTranslation } from "react-i18next";

export default function InspectionFAQ() {
  const { t } = useTranslation("FAQ");

  // Items desde i18n (array de { id, q, a })
  const i18nItems = t("faq.items", { returnObjects: true });
  const items = Array.isArray(i18nItems) ? i18nItems : [];

  // Acordeón de un solo abierto (puedes permitir múltiples si cambias a Set)
  const [openId, setOpenId] = useState(null);

  // Accesibilidad: mover foco con flechas
  const btnRefs = useRef({});

  const toggle = (id) => setOpenId((cur) => (cur === id ? null : id));

  const onKeyDown = (e, idx) => {
    if (!["ArrowDown", "ArrowUp", "Home", "End"].includes(e.key)) return;
    e.preventDefault();
    const last = items.length - 1;
    let next = idx;
    if (e.key === "ArrowDown") next = idx === last ? 0 : idx + 1;
    if (e.key === "ArrowUp") next = idx === 0 ? last : idx - 1;
    if (e.key === "Home") next = 0;
    if (e.key === "End") next = last;
    const nextId = items[next]?.id;
    if (!nextId) return;
    btnRefs.current[nextId]?.focus?.();
  };

  return (
    <section className="faq-sec" id="faq">
      <div className="faq-wrap">
        <header className="faq-head" data-aos="fade-up">
          <h2 className="faq-title">{t("faq.title")}</h2>
          <p className="faq-sub">{t("faq.subtitle")}</p>
        </header>

        <div className="faq-list" role="list" data-aos="fade-up" data-aos-delay="60">
          {items.map((it, idx) => {
            const isOpen = openId === it.id;
            const panelId = `faq-panel-${it.id}`;
            const btnId = `faq-btn-${it.id}`;
            return (
              <article
                key={it.id}
                className={`faq-item${isOpen ? " is-open" : ""}`}
                role="listitem"
              >
                <h3 className="faq-q">
                  <button
                    id={btnId}
                    className="faq-btn"
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggle(it.id)}
                    onKeyDown={(e) => onKeyDown(e, idx)}
                    ref={(el) => (btnRefs.current[it.id] = el)}
                  >
                    <span className="faq-qtext">{it.q}</span>
                    <span className="faq-icn" aria-hidden="true" />
                  </button>
                </h3>

                {/* Acordeón con transición pura CSS (no usamos hidden para animar) */}
                <div
                  id={panelId}
                  className="faq-a-wrap"
                  role="region"
                  aria-labelledby={btnId}
                  aria-hidden={!isOpen}
                >
                  <div className="faq-a-inner">
                    <p className="faq-a">{it.a}</p>
                  </div>
                </div>

                <hr className="faq-sep" />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
