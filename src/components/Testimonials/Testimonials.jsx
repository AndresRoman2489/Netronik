import React from "react";
import "./Testimonials.css";
import { useTranslation } from "react-i18next";

export default function Testimonials() {
  const { t } = useTranslation();
  const items = t("testimonials.items", { returnObjects: true }) || [];

  return (
    <section id="testimonios" className="testimonials" aria-labelledby="testimonials-title">
      <div className="testimonials-container">
        <h2 id="testimonials-title" className="testimonials-title" data-aos="fade-up">
          {t("testimonials.title")}
        </h2>

        <div className="testimonials-grid">
          {items.map((item, i) => (
            <figure
              key={i}
              className="testimonial-card"
              data-aos="fade-up"
              data-aos-delay={i * 120}
            >
              <blockquote className="testimonial-quote">
                <span className="quote-mark" aria-hidden="true">“</span>
                <p>{item.quote}</p>
              </blockquote>
              <figcaption className="testimonial-meta">
                <strong className="testimonial-author">{item.author}</strong>
                <span className="testimonial-role">
                  {item.role}{item.company ? `, ${item.company}` : ""}
                </span>
                {item.link && (
                  <a className="testimonial-link" href={item.link}>
                    {t("testimonials.link")}
                  </a>
                )}
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="testimonials-cta" data-aos="fade-up" data-aos-delay="240">
          <a className="testimonials-button" href="#">{t("testimonials.all")}</a>
        </div>
      </div>
    </section>
  );
}
