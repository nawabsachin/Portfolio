import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import Header from './Header';
import Home from './Home';
import TechTools from './TechTools';
import About from './About';
import Services from './Services';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Footer from './Footer';
import './App.css';



function App() {
  useEffect(() => {
    ScrollReveal({
      distance: '80px',
      duration: 2000,
      delay: 200,
    });
    ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
    ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
    ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
    ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });
  }, []);

  return (
    <div className="App">
  
      <Header />
      <Home />
      
      <About />
      <Services />
      <Portfolio />
      <Contact />
      <TechTools />
      <Footer />
    </div>
  );
}

export default App;
