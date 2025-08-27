import React from "react";
import IndustriesPartners from '../../components/Industries/Partners/IndustriesPartners';
import Contact from '../../components/Contact/contact';
import FAQ from '../../components/FAQ/FAQ';
import WasteT from '../../components/WasteT/Hero/WasteTHero';
import WasteIndustrySection from "../../components/WasteT/WasteIndustrySection/WasteIndustrySection";



export default function Industries() {
  return<>
<WasteT/>
<WasteIndustrySection/>
   <FAQ/>
    <IndustriesPartners />
    <Contact/>
   </> ;
}
