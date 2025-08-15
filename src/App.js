import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./routing/ScrollToTop";
import { useRouteEffects } from "./hooks/useRouteEffects";
import { useLanguageRefresh } from "./hooks/useLanguageRefresh";


import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/home";
import Industries from "./pages/industries/Industries";
import SiteLayout from "./layouts/SiteLayout";
import Services from "./pages/services/Services";

// Ejemplos:

function AppShell() {
  useRouteEffects();                 // refresca AOS/cierra overlays en cambios de ruta
  useLanguageRefresh({ hardReload: true }); // recarga al cambiar idioma

  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/services" element={<Services />} />
        {/* ...otras rutas */}
      </Route>
    </Routes>
  );
}

export default function App() {
  return (
    <ScrollToTop>
      <AppShell />
    </ScrollToTop>
  );
}
