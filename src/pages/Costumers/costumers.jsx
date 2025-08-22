import React from "react";
import Testimonials from '../../components/Testimonials/Testimonials';
import Contact from '../../components/Contact/contact';

import IndustriesPartners from '../../components/Industries/Partners/IndustriesPartners';
import Costumershero from '../../components/Costumers/Hero/Costumerhero';


export default function Company() {
  return<>
  <Costumershero/>
  <IndustriesPartners />
   <Testimonials />
   
    <Contact/>
   </> ;
}
