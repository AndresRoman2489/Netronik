import './App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Features from './components/Features/Features';
import CTA from './components/CTA/CTA';
import DemoSection from './components/DemoSection/DemoSection';
import Footer from './components/Footer/Footer';
import QueNecesitas from './components/QueNecesitas/QueNecesitas';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    // Primero forzar scroll al top con espera ligera
    window.scrollTo({ top: 0, behavior: 'auto' });

    // AOS se inicializa un poco después
    setTimeout(() => {
      AOS.init({
        duration: 1000,
        once: true,
        easing: 'ease-in-out',
      });

      AOS.refresh(); // refrescar manualmente
    }, 50);

    // Listener opcional para volver a refrescar si el usuario hace scroll muy rápido
    const handleScroll = () => {
      AOS.refresh();
    };
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Features />
      <QueNecesitas />
      <DemoSection />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
