import React from "react";
import "./contact.css";

export default function ContactSection() {
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
        {/* Columna izquierda */}
        <div className="contactx-left" data-aos="fade-right">
          <div className="contactx-icon" aria-hidden="true">✉️</div>
          <h2 className="contactx-title" id="contactx-title">
            ¿No estás seguro de lo que necesitas?
            <br />
            <span className="accent">Contáctanos.</span>
          </h2>
          <p className="contactx-lead">
            Nuestros especialistas se pondrán en contacto contigo a la brevedad.
          </p>
        </div>

        {/* Columna derecha (form) */}
        <div className="contactx-right" data-aos="fade-left" data-aos-delay="120">
          <form className="contactx-form" onSubmit={handleSubmit} noValidate>
            <div className="row">
              <div className="field">
                <label htmlFor="first">Nombre</label>
                <input id="first" name="first" type="text" placeholder="Tu nombre" />
              </div>
              <div className="field">
                <label htmlFor="last">Apellidos</label>
                <input id="last" name="last" type="text" placeholder="Tus apellidos" />
              </div>
            </div>

            <div className="row">
              <div className="field">
                <label htmlFor="company">Empresa</label>
                <input id="company" name="company" type="text" placeholder="Ej. ACME S.A." />
              </div>
              <div className="field">
                <label htmlFor="site">Sitio web</label>
                <input id="site" name="site" type="url" placeholder="https://tu-dominio.com" />
              </div>
            </div>

            <div className="row">
              <div className="field">
                <label htmlFor="phone">Teléfono</label>
                <input id="phone" name="phone" type="tel" placeholder="Ej. +52 55 1234 5678" />
              </div>
              <div className="field">
                <label htmlFor="email">E-mail</label>
                <input id="email" name="email" type="email" placeholder="tucorreo@dominio.com" />
              </div>
            </div>

            <div className="row">
              <div className="field field--full field--textarea">
                <label htmlFor="message">Mensaje</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Cuéntanos qué necesitas..."
                  rows={8}
                />
              </div>
            </div>

            <div className="contactx-actions">
              <button className="btn-accent" type="submit">Enviar</button>
              <p className="contactx-privacy">
                Tus datos están seguros con nosotros. Respetamos tu privacidad.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
