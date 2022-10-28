import React from 'react';
// import components
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Portfolio />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
