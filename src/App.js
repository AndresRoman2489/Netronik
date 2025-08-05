import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Features from './components/Features/Features';
import CTA from './components/CTA/CTA';
import DemoSection from './components/DemoSection/DemoSection';
import Footer from './components/Footer/Footer';
import QueNecesitas from './components/QueNecesitas/QueNecesitas';


function App() {
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
