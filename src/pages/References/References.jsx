import React from "react";
import ReferencesHero from "../../components/References/hero/ReferencesHero";
import IndustriesPartners from "../../components/Industries/Partners/IndustriesPartners";
import ReferencesByIndustry from "../../components/References/byindustries/ReferencesByIndustry";


export default function References() {
  return (
    <>
      <ReferencesHero />
      <IndustriesPartners/>
      <ReferencesByIndustry/>
      {/* aquí irán las demás secciones de la página References */}
    </>
  );
}
