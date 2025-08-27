import React from "react";
import IndustriesPartners from '../../components/Industries/Partners/IndustriesPartners';
import Contact from '../../components/Contact/contact';
import FAQ from '../../components/FAQ/FAQ';
import OilgasHero from '../../components/Oil&gas/Hero/Oil&gasHero';
import OilGasSection from "../../components/Oil&gas/oilgassection/OilGasSection";


export default function Industries() {
  return<>
  <OilgasHero/>
  <OilGasSection/>
   <FAQ/>
    <IndustriesPartners />
    <Contact/>
   </> ;
}
