import React from "react";
import "./contact.css";
import { useTranslation } from 'react-i18next';

export default function ContactSection() {
  const { t } = useTranslation("industries");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      "Contacto (solo visual):",
      Object.fromEntries(new FormData(e.currentTarget))
    );
  };

  return (
    <section className="contactx" id="contacto" aria-labelledby="contactx-title">
      {/* Gradiente de bordes */}
      <div className="contactx-bg" aria-hidden="true" />

      <div className="contactx-wrap">
        {/* Lado izquierdo: título y lead */}
        <div className="contactx-left" data-aos="fade-right">
          <div className="contactx-icon" aria-hidden="true">✉️</div>
          <h2 className="contactx-title" id="contactx-title">
            {t("contact.titleLine1")}
            <br />
            <span className="accent">{t("contact.titleAccent")}</span>
          </h2>
          <p className="contactx-lead">
            {t("contact.lead")}
          </p>
        </div>

        {/* Lado derecho: formulario */}
        <div className="contactx-right" data-aos="fade-left">
          <form className="contactx-form" onSubmit={handleSubmit}>
            <div className="row">
              <div className="field">
                <label htmlFor="first">{t("contact.form.first")}</label>
                <input id="first" name="first" type="text" placeholder={t("contact.form.ph.first")} />
              </div>

              <div className="field">
                <label htmlFor="last">{t("contact.form.last")}</label>
                <input id="last" name="last" type="text" placeholder={t("contact.form.ph.last")} />
              </div>
            </div>

            <div className="row">
              <div className="field">
                <label htmlFor="company">{t("contact.form.company")}</label>
                <input id="company" name="company" type="text" placeholder={t("contact.form.ph.company")} />
              </div>

              <div className="field">
                <label htmlFor="site">{t("contact.form.site")}</label>
                <input id="site" name="site" type="url" placeholder={t("contact.form.ph.site")} />
              </div>
            </div>

            <div className="row">
              <div className="field">
                <label htmlFor="phone">{t("contact.form.phone")}</label>
                <input id="phone" name="phone" type="tel" placeholder={t("contact.form.ph.phone")} />
              </div>

              <div className="field">
                <label htmlFor="email">{t("contact.form.email")}</label>
                <input id="email" name="email" type="email" placeholder={t("contact.form.ph.email")} />
              </div>
            </div>

            <div className="row">
              <div className="field field--full field--textarea">
                <label htmlFor="message">{t("contact.form.message")}</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder={t("contact.form.ph.message")}
                  rows={8}
                />
              </div>
            </div>

            <div className="contactx-actions">
              <button className="btn-accent" type="submit">{t("contact.form.submit")}</button>
              <p className="contactx-privacy">
                {t("contact.form.privacy")}
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
