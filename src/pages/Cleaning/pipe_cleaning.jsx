import React from "react";
import IndustriesPartners from '../../components/Industries/Partners/IndustriesPartners';
import Contact from '../../components/Contact/contact';
import CleaningHero from '../../components/Cleaning/Hero/CleaningHero'
import FAQ from '../../components/FAQ/FAQ';
import Verticalcontent from '../../components/Cleaning/VerticalSotries/VerticalStory';


export default function Industries() {
  return<>
  <CleaningHero/>
  <Verticalcontent/>
  <FAQ/>
    <IndustriesPartners />
    <Contact/>
   </> ;
}
