import React from "react";
import "./IndustriesPartners.css";

// Mismos logos que usas en Home/Clientes
import logo1 from "../../../assets/clientes/skupina.png";
import logo2 from "../../../assets/clientes/coldjet.png";
import logo3 from "../../../assets/clientes/linde.png";
import logo4 from "../../../assets/clientes/oman.png";
import logo5 from "../../../assets/clientes/saipem.png";
import logo6 from "../../../assets/clientes/vale.png";
import logo8 from "../../../assets/clientes/woma.png";
import logo9 from "../../../assets/clientes/AWT.webp";
import logo10 from "../../../assets/clientes/AMPTEC.webp";
import logo11 from "../../../assets/clientes/DK.webp";
import logo12 from "../../../assets/clientes/ECO.webp";
import logo13 from "../../../assets/clientes/SCHMITT.webp";
import logo14 from "../../../assets/clientes/EMORY.webp";
import logo15 from "../../../assets/clientes/ESCSwebp.webp";
import logo16 from "../../../assets/clientes/HCNCLEAN.webp";
import logo17 from "../../../assets/clientes/MINTIE.webp";
import logo18 from "../../../assets/clientes/PLAGON.webp";
import logo19 from "../../../assets/clientes/PUR.webp";
import logo20 from "../../../assets/clientes/RJT_service.webp";
import logo21 from "../../../assets/clientes/SPONGE_JET.webp";
import logo22 from "../../../assets/clientes/THOWALDwebp.webp";
import logo23 from "../../../assets/clientes/HITACHI.jpg";
import logo24 from "../../../assets/clientes/BALL.jpg";

const defaultLogos = [
  { src: logo9, href: "https://www.awt-med.com/", name: "AWT" },
  { src: logo10, href: "https://www.amptec.com.sg/events_20150612.html", name: "AMPTEC" },
  { src: logo1, href: "https://www.cez.cz", name: "Skupina ČEZ" },
  { src: logo2, href: "https://www.coldjet.com", name: "Cold Jet" },
   { src: logo11, href: "http://www.dkchemo.cz/", name: "DK" },
   { src: logo12, href: "https://www.eco-stations.eu/sluzby/cisteni-vzduchotechniky/", name: "ECO Station"},
   { src: logo13, href: "https://www.eisschmitt.de/", name: "SCHMITT"},
   { src: logo14, href: "https://www.emoryindustrial.com/", name: "EMORY"},
   { src: logo15, href: "https://www.es-cs.com/", name: "ESCS"},
   { src: logo16, href: "https://www.hcnclean.ch/", name: "HCNClean"},
  { src: logo3, href: "https://www.linde.com", name: "LINDE" },
  { src: logo17, href: "https://mintie.no/", name: "MINTIE" },
  { src: logo4, href: "https://www.pdo.co.om", name: "Petroleum Development Oman" },
    { src: logo18, href: "https://plagoncz.cz/", name: "PLAGON" },
    { src: logo19, href: "https://pur.ind.br/en/", name: "PUR" },
    { src: logo20, href: "http://rjt-service.no/", name: "RJT Service" },
  { src: logo5, href: "https://www.saipem.com", name: "Saipem" },
   { src: logo21, href: "https://www.spongejet.com/", name: "Sponge jet" },
   { src: logo22, href: "https://thowaldicecleaning.ro/", name: "THOWALD" },
  { src: logo6, href: "https://www.vale.com", name: "Vale" },
  { src: logo8, href: "https://www.woma.com", name: "WOMA (Kärcher Group)" },
  { src: logo23, href: "https://www.hitachienergy.com/", name: "HITACHI" },
  { src: logo24, href: "https://www.ball.com/", name: "BALL" },
];

export default function IndustriesPartners({
  title = "Cooperamos con éxito con empresas de todo el mundo",
  logos = defaultLogos,
}) {
  return (
    <section className="partners-section">
      <h2 className="partners-title" data-aos="fade-up">
        {title}
      </h2>

      <div className="partners-grid">
        {logos.map((item, index) => (
          <a
            key={index}
            className="partner-logo"
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            title={item.name}
            aria-label={item.name}
            data-aos="zoom-in"
            data-aos-delay={index * 150}
            data-aos-duration="800"
          >
            <img src={item.src} alt={item.name} loading="lazy" />
          </a>
        ))}
      </div>
    </section>
  );
}
