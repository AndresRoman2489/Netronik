// Aplicaciones.jsx
import './aplicaciones.css';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const metodos = [
  { id: 'pipeInspection',            default: 'Inspección de tuberías' },
  { id: 'pipeCleaning',              default: 'Limpieza de tuberías' },
  { id: 'industrialExtraction',      default: 'Extracción industrial' },
  { id: 'rustRemoval',               default: 'Remoción de óxido y recubrimientos' },
  { id: 'nonAbrasiveCleaning',       default: 'Métodos de limpieza no abrasivos' },
  { id: 'dryIceBlasting',            default: 'Chorro de hielo seco' },
  { id: 'highPressureWater',         default: 'Chorro de agua a alta presión' },
  { id: 'shotBlasting',              default: 'Abrasión con granalla' },
  { id: 'protectiveCoating',         default: 'Recubrimiento protector' },
  { id: 'visualInspection',          default: 'Inspección visual' },
  { id: 'hvac',                      default: 'Ventilación y aire acondicionado' },
  { id: 'compressedAirCleaning',     default: 'Limpieza con aire comprimido' },
  { id: 'brushCleaning',             default: 'Limpieza con cepillo' },
  { id: 'vacuuming',                 default: 'Aspirado' },
  { id: 'disinfection',              default: 'Desinfección' },
  { id: 'ovalityMeasurement',        default: 'Medición de ovalidad' },
  { id: 'wallThicknessMeasurement',  default: 'Medición de espesor de pared' }
];

export default function Aplicaciones() {
  const { t } = useTranslation();
  const [verTodos, setVerTodos] = useState(false);

  const mostrar = verTodos ? metodos : metodos.slice(0, 6);

  return (
    <section className="aplicaciones-section" id="aplicaciones">
      <div className="aplicaciones-content">
        <h2 data-aos="fade-up">{t('apps.title', 'Aplicaciones y Métodos')}</h2>
        <p data-aos="fade-up" data-aos-delay="100">
          {t('apps.subtitle', 'Selecciona la tarea que necesitas resolver')}
        </p>

        <div className="aplicaciones-grid">
          {mostrar.map((item, i) => (
            <div
              key={item.id}
              className="aplicacion-tag"
              data-aos="fade-up"
              data-aos-delay={i * 50}
            >
              {t(`apps.items.${item.id}`, item.default)}
            </div>
          ))}
        </div>

        <button
          className="aplicaciones-ver-mas-btn"
          onClick={() => setVerTodos(!verTodos)}
        >
          {verTodos ? t('apps.showLess', 'Ver menos') : t('apps.showMore', 'Ver más')}
        </button>
      </div>
    </section>
  );
}
