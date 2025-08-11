import React from 'react';
import './QueNecesitas.css';
import { FaSearch, FaBroom, FaTools, FaProjectDiagram } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const servicios = [
  {
    id: 'inspect',
    icon: <FaSearch />,
    defaultTitle: 'Inspección',
    defaultDesc: 'Descubre el estado de tus tuberías.',
  },
  {
    id: 'clean',
    icon: <FaBroom />,
    defaultTitle: 'Limpieza',
    defaultDesc: 'Vuelve a la máxima potencia.',
  },
  {
    id: 'restore',
    icon: <FaTools />,
    defaultTitle: 'Restauración de revestimiento',
    defaultDesc: 'Ahorra dinero en reemplazos de tuberías.',
  },
  {
    id: 'turnkey',
    icon: <FaProjectDiagram />,
    defaultTitle: 'Servicios llave en mano',
    defaultDesc: 'Déjanos las preocupaciones a nosotros.',
  },
];

const QueNecesitas = () => {
  const { t } = useTranslation();

  return (
    <section className="que-necesitas" id="que-necesitas">
      <h2 data-aos="fade-up">
        {t('need.title', '¿Qué necesitas hacer?')}
      </h2>

      <div className="servicios-container">
        {servicios.map((item, index) => (
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
              <button>{t('need.more', 'Más información')}</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default QueNecesitas;
