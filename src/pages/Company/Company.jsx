import React from "react";
import CompanyHero from '../../components/Company/hero/CompanyHero';
import Contact from '../../components/Contact/contact';
import QueNecesitas from "../../components/QueNecesitas/QueNecesitas";
import IndustriesPartners from "../../components/Industries/Partners/IndustriesPartners";
import AboutJettyRobot from "../../components/Company/about/AboutJettyRobot";

export default function Company() {
  return<>
   <CompanyHero/>
   <QueNecesitas/>
   <AboutJettyRobot/>
   <IndustriesPartners />
    <Contact/>
   </> ;
}
