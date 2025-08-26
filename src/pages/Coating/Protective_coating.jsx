import React from "react";
import IndustriesPartners from '../../components/Industries/Partners/IndustriesPartners';
import Contact from '../../components/Contact/contact';
import Coating from '../../components/Coating/Hero/CoatingHero';
import FAQ from '../../components/FAQ/FAQ';
import CoatingApplications from "../../components/Coating/coatingapplications/CoatingApplications";



export default function Industries() {
  return<>
 <Coating/>
 <CoatingApplications/>
  <FAQ/>
    <IndustriesPartners />
    <Contact/>
   </> ;
}
