import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import Introduction from './sections/Introduction';
import Services from './sections/Services';
import Portfolio from './sections/Portfolio';
import Process from './sections/Process';
import Testimonials from './sections/Testimonials';
import Contact from './sections/Contact';

function App() {
  return (
    <>
      <Navbar />
      <main className="w-full pt-20 bg-surface min-h-screen">
        <div className="flex flex-col w-full selection:bg-secondary-container selection:text-on-secondary-fixed">
          <Hero />
          <Introduction />
          <Services />
          <Portfolio />
          <Process />
          <Testimonials />
          <Contact />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
