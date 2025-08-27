import React from "react";
import IndustriesPartners from '../../components/Industries/Partners/IndustriesPartners';
import Contact from '../../components/Contact/contact';
import FAQ from '../../components/FAQ/FAQ';
import Mining from '../../components/Mining/Hero/MiningHero';
import MiningSection from "../../components/Mining/MiningSection/MiningSection";


export default function Industries() {
  return<>
  <Mining/>
  <MiningSection/>
   <FAQ/>
    <IndustriesPartners />
    <Contact/>
   </> ;
}
