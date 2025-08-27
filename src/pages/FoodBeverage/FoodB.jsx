import React from "react";
import IndustriesPartners from '../../components/Industries/Partners/IndustriesPartners';
import Contact from '../../components/Contact/contact';
import FAQ from '../../components/FAQ/FAQ';
import Foodb from '../../components/Foodb/Hero/FoodbHero';
import FoodIndustrySection from "../../components/Foodb/FoodIndustrySection/FoodIndustrySection";




export default function Industries() {
  return<>
   <Foodb/>
   <FoodIndustrySection/>
   <FAQ/>
    <IndustriesPartners />
    <Contact/>
   </> ;
}
