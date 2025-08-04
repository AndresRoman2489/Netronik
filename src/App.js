import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Features from './components/Features/Features';
import CTA from './components/CTA/CTA';
import DemoSection from './components/DemoSection/DemoSection';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Features />
      <DemoSection />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
