import React from "react";
import IndustriesPartners from '../../components/Industries/Partners/IndustriesPartners';
import Contact from '../../components/Contact/contact';
import FAQ from '../../components/FAQ/FAQ';
import Industrialprod from '../../components/Industrial_prod/Hero/IndustrialProdHero';
import BeforeAfterInline from "../../components/Industrial_prod/BeforeAfterInline/BeforeAfterInline";




export default function Industries() {
  return<>
   <Industrialprod/>
   <BeforeAfterInline/>
   <FAQ/>
    <IndustriesPartners />
    <Contact/>
   </> ;
}
