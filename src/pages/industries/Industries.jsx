import React from "react";
import HeroIndustries from "../../components/Industries/Hero/HeroIndustries";
import IndustriesSplit from "../../components/Industries/IndustriesSplit/IndustriesSplit";
import IndustriesPartners from '../../components/Industries/Partners/IndustriesPartners';
import Contact from '../../components/Contact/contact';


export default function Industries() {
  return<>
   <HeroIndustries />
   <IndustriesSplit />
    <IndustriesPartners />
    <Contact/>
   </> ;
}
