import React from 'react';
import './clientes.css';
import { useTranslation } from 'react-i18next';

import logo1 from '../../assets/clientes/skupina.png';
import logo2 from '../../assets/clientes/coldjet.png';
import logo3 from '../../assets/clientes/linde.png';
import logo4 from '../../assets/clientes/oman.png';
import logo5 from '../../assets/clientes/saipem.png';
import logo6 from '../../assets/clientes/vale.png';
import logo7 from '../../assets/clientes/international.png';
import logo8 from '../../assets/clientes/woma.png';

// Ajusta las URLs si lo necesitas
const logos = [
  { src: logo1, href: 'https://www.cez.cz', name: 'Skupina ČEZ' },
  { src: logo2, href: 'https://www.coldjet.com', name: 'Cold Jet' },
  { src: logo3, href: 'https://www.linde.com', name: 'Linde' },
  { src: logo4, href: 'https://www.pdo.co.om', name: 'Petroleum Development Oman' },
  { src: logo5, href: 'https://www.saipem.com', name: 'Saipem' },
  { src: logo6, href: 'https://www.vale.com', name: 'Vale' },
  { src: logo7, href: 'https://www.internationaltrucks.com', name: 'International' },
  { src: logo8, href: 'https://www.woma.com', name: 'WOMA (Kärcher Group)' },
];

const Clientes = () => {
  const { t } = useTranslation();

  return (
    <section className="clientes-section">
      <h2 className="clientes-titulo" data-aos="fade-up">
        {t('clients.title', 'Cooperamos con éxito con empresas de todo el mundo')}
      </h2>

      <div className="clientes-grid">
        {logos.map((item, index) => (
          <a
            key={index}
            className="cliente-logo"
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            title={item.name}
            aria-label={`${item.name} – ${t('clients.visit', 'Visitar sitio')}`}
            data-aos="zoom-in"
            data-aos-delay={index * 150}
            data-aos-duration="800"
          >
            <img
              src={item.src}
              alt={item.name}
              loading="lazy"
            />
          </a>
        ))}
      </div>
    </section>
  );
};

export default Clientes;
