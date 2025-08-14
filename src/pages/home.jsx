// src/pages/Home.jsx
import React, { useEffect } from 'react';
import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import Features from '../components/Features/Features';
import CTA from '../components/CTA/CTA';
import DemoSection from '../components/DemoSection/DemoSection';

import QueNecesitas from '../components/QueNecesitas/QueNecesitas';
import Aplicaciones from '../components/aplicaciones/aplicaciones';
import Clientes from '../components/Clientes/clientes';
import Testimonials from "../components/Testimonials/Testimonials";

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useTranslation } from 'react-i18next';

export default function Home() {
  const { i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.lang = i18n.language?.startsWith('en') ? 'en' : 'es';
  }, [i18n.language]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
    setTimeout(() => {
      AOS.init({ duration: 1000, once: true, easing: 'ease-in-out' });
      AOS.refresh();
    }, 50);
    const handleScroll = () => AOS.refresh();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      
      <Hero />
      <About />
      <QueNecesitas />
      <Features />
      <Aplicaciones />
      <DemoSection />
      <Clientes />
      <Testimonials/>
      <CTA />
     
    </>
  );
}
