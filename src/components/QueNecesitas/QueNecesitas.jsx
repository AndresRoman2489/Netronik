import React from 'react';
import './QueNecesitas.css';
import { FaSearch, FaBroom, FaTools, FaProjectDiagram } from 'react-icons/fa';

const servicios = [
  {
    icon: <FaSearch />,
    title: 'Inspección',
    description: 'Descubre el estado de tus tuberías.',
  },
  {
    icon: <FaBroom />,
    title: 'Limpieza',
    description: 'Vuelve a la máxima potencia.',
  },
  {
    icon: <FaTools />,
    title: 'Restauración de revestimiento',
    description: 'Ahorra dinero en reemplazos de tuberías.',
  },
  {
    icon: <FaProjectDiagram />,
    title: 'Servicios llave en mano',
    description: 'Déjanos las preocupaciones a nosotros.',
  },
];

const QueNecesitas = () => {
  return (
    <section className="que-necesitas">
      <h2>¿Qué necesitas hacer?</h2>
      <div className="servicios-container">
        {servicios.map((item, index) => (
          <div key={index} className="servicio-card">
            <div className="icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <button>Más información</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default QueNecesitas;
