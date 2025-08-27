// src/components/Features/Feature.jsx
import React, { useState, useEffect } from 'react';
import './Feature.css';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import oilGasImg from '../../assets/img/oil-and-gas.jpg';
import HVACImg from '../../assets/img/HVAC.jpg';
import powerImg from '../../assets/img/Power.jpg';
import waterImg from '../../assets/img/Water.png';
import IndustryImg from '../../assets/img/Industry.jpg';
import FoodImg from '../../assets/img/Food.png';
import WasteImg from '../../assets/img/waste.png';
import MineryImg from '../../assets/img/mina.jpg';
import QuimicImg from '../../assets/img/Quimica.jpg';
import NeumaticImg from '../../assets/img/neumatico.jpg';
import OthersImg from '../../assets/img/Otras.jpg';

const features = [
  { id: 'industry',  image: IndustryImg,  defaultTitle: 'Producción industrial' },
  { id: 'food',      image: FoodImg,      defaultTitle: 'Industria de alimentos y bebidas' },
  { id: 'waste',     image: WasteImg,     defaultTitle: 'Tratamiento de residuos' },
  { id: 'oilGas',    image: oilGasImg,    defaultTitle: 'Petróleo y gas' },
  { id: 'mining',    image: MineryImg,    defaultTitle: 'Industria minera' },
  { id: 'power',     image: powerImg,     defaultTitle: 'Generación de energía' },
  { id: 'water',     image: waterImg,     defaultTitle: 'Tratamiento de agua' },
  { id: 'chemical',  image: QuimicImg,    defaultTitle: 'Industria química' },
  { id: 'pneumatic', image: NeumaticImg,  defaultTitle: 'Transporte neumático' },
  { id: 'hvac',      image: HVACImg,      defaultTitle: 'Ventilación y Aire Acondicionado (HVAC)' },
  { id: 'others',    image: OthersImg,    defaultTitle: 'Otras industrias' }
];

/**
 * Ajusta aquí el destino de cada card.
 * Por defecto, manda a /industries#<id>.
 * Si más adelante tienes páginas propias, cambia el valor:
 *  oilGas: '/industries/oil-and-gas'
 */
const linksById = {
  industry:  '/industrialprod',
  food:      '/foodb',
  waste:     '/',
  oilGas:    '/',
  mining:    '/',
  power:     '/',
  water:     '/',
  chemical:  '/',
  pneumatic: '/',
  hvac:      '/',
  others:    '/',
};

const Features = () => {
  const { t } = useTranslation();
  const [isMobile, setIsMobile] = useState(false);
  const [verMas, setVerMas] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const mostrarFeatures = isMobile && !verMas ? features.slice(0, 2) : features;

  return (
    <section className="features-section">
      <h2 className="tittle" data-aos="fade-up">
        {t('features.title', 'Industrias en las que trabajamos')}
      </h2>

      <div className="features-container">
        {mostrarFeatures.map((item, i) => {
          const label = t(`features.items.${item.id}`, item.defaultTitle);
          const to = linksById[item.id] || `/industries#${item.id}`;

          return (
            <Link
              key={item.id}
              to={to}
              className="feature-card"
              aria-label={label}
              data-aos="zoom-in"
              data-aos-delay={i * 100}
              data-aos-duration="800"
            >
              <div
                className="feature-inner"
                style={{ backgroundImage: `url(${item.image})` }}
              >
                <div className="feature-overlay">
                  <h3>{label}</h3>
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      {isMobile && (
        <button
          className="features-ver-mas-btn"
          onClick={() => setVerMas(!verMas)}
        >
          {verMas ? t('features.showLess', 'Ver menos') : t('features.showMore', 'Ver más')}
        </button>
      )}
    </section>
  );
};

export default Features;
