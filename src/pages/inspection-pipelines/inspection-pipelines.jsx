import React from "react";
import IndustriesPartners from '../../components/Industries/Partners/IndustriesPartners';
import Contact from '../../components/Contact/contact';
import InspectionHero from '../../components/Inspection/Hero/inspectionHero';
import InspectionOverview from "../../components/Inspection/Overview/InspectionOverview";
import FAQ from '../../components/FAQ/FAQ';


export default function Industries() {
  return<>
  <InspectionHero/>
  <InspectionOverview/>
  <FAQ/>
    <IndustriesPartners />
    <Contact/>
   </> ;
}
