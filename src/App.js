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
import OURrobots from "./pages/ourrobots/robots";
import Company from "./pages/Company/Company";
import References from "./pages/References/References";
import Costumers from "./pages/Costumers/costumers";
import Inspection from "./pages/inspection-pipelines/inspection-pipelines";
import Cleaning from "./pages/Cleaning/pipe_cleaning";
import Coating from "./pages/Coating/Protective_coating";
import IndustrialProd from "./pages/Industrial_prod/industrial_prod";
import FoodB from "./pages/FoodBeverage/FoodB";
import Wastetreatment from "./pages/WasteTreatment/wastetreatment";
import Oilgas from "./pages/Oil&gas/Oil&gas";
import MiningIndustry from "./pages/Mining/MiningIndustry";
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
        <Route path="/robots" element={<OURrobots/>}/>
        <Route path="/company" element={<Company/>}/>
        <Route path="/references" element={<References/>}/>
        <Route path="/costumers" element={<Costumers/>}/>
        <Route path="/inspection" element={<Inspection/>}/>
        <Route path="/cleaning" element={<Cleaning/>}/>
        <Route path="/coating" element={<Coating/>}/>
        <Route path="/industrialprod" element={<IndustrialProd/>}/>
        <Route path="/foodb" element={<FoodB/>}/>
        <Route path="/wasteT" element={<Wastetreatment/>}/>
       <Route path="/oilgas" element={<Oilgas/>}/>
       <Route path="/mining" element={<MiningIndustry/>}/>
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
