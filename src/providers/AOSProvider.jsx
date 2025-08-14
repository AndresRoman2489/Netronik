import { useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

/**
 * Inicializa AOS una sola vez para toda la app.
 * Colócalo arriba de <App /> en index/main.
 */
export default function AOSProvider({ children }) {
  const initialized = useRef(false);

  useEffect(() => {
    if (!initialized.current) {
      AOS.init({
        duration: 800,        // suavidad
        easing: "ease-out-cubic",
        once: true,           // no repetir animación al volver a hacer scroll
        offset: 24,
        mirror: false,
      });
      initialized.current = true;
    }
    const onResize = () => AOS.refresh();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return children;
}
