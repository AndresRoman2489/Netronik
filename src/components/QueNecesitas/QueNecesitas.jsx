// src/components/Company/QueNecesitas.jsx
import React from 'react';
import './QueNecesitas.css';
import { FaSearch, FaBroom, FaTools, FaProjectDiagram } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

const servicios = [
  {
    id: 'inspect',
    icon: <FaSearch />,
    defaultTitle: 'Inspección',
    defaultDesc: 'Descubre el estado de tus tuberías.',
    to: '/inspection'   // ruta interna por defecto
  },
  {
    id: 'clean',
    icon: <FaBroom />,
    defaultTitle: 'Limpieza',
    defaultDesc: 'Vuelve a la máxima potencia.',
    to: '/'
  },
  {
    id: 'restore',
    icon: <FaTools />,
    defaultTitle: 'Restauración de revestimiento',
    defaultDesc: 'Ahorra dinero en reemplazos de tuberías.',
    to: '/'
  },
  {
    id: 'turnkey',
    icon: <FaProjectDiagram />,
    defaultTitle: 'Servicios llave en mano',
    defaultDesc: 'Déjanos las preocupaciones a nosotros.',
    to: '/services'
  },
];

const QueNecesitas = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleClick = (href) => {
    if (!href) return;
    const isExternal = /^https?:\/\//i.test(href);
    if (isExternal) {
      window.open(href, '_blank', 'noopener,noreferrer');
    } else {
      navigate(href);
    }
  };

  return (
    <section className="que-necesitas" id="que-necesitas">
      <h2 data-aos="fade-up">
        {t('need.title', '¿Qué necesitas hacer?')}
      </h2>

      <div className="servicios-container">
        {servicios.map((item, index) => {
          // Permite sobrescribir el link desde i18n si quieres:
          const href = t(`need.items.${item.id}.href`, item.to);

          return (
            <div
              key={item.id}
              className="servicio-card"
              data-aos="zoom-in-up"
              data-aos-delay={index * 150}
              data-aos-duration="1000"
            >
              <div className="servicio-inner">
                <div className="icon">{item.icon}</div>
                <h3>{t(`need.items.${item.id}.title`, item.defaultTitle)}</h3>
                <p>{t(`need.items.${item.id}.desc`, item.defaultDesc)}</p>

                {/* Mantengo <button> y agrego navegación al click */}
                <button
                  type="button"
                  onClick={() => handleClick(href)}
                  aria-label={`${t('need.more', 'Más información')} - ${t(`need.items.${item.id}.title`, item.defaultTitle)}`}
                >
                  {t('need.more', 'Más información')}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default QueNecesitas;

