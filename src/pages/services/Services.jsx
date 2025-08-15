import React from "react";
import HeroServices from "../../components/services/Hero/HeroServices";
import Contact from '../../components/Contact/contact';

export default function Services() {
  return (
    <>
      <HeroServices />
      <Contact/>
      {/* Aquí luego agregamos más secciones (Split, Partners, Contact, etc.) */}
    </>
  );
}
