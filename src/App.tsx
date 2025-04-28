import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Steps from './components/Steps';
import Products from './components/Products';
import EarningsCalculator from './components/EarningsCalculator';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import RegistrationCTA from './components/RegistrationCTA';
import AdPlacement from './components/AdPlacement';
import ReactGA from 'react-ga4';
ReactGA.initialize('G-LFEH3KYBRZ'); 
ReactGA.set({ debug: true });
window.gtag('event', 'اسم_الحدث', {
  event_category: 'category',
  event_label: 'label',
  value: 123,
});

function App() {


  useEffect(() => {
    if (window.gtag) {
      window.gtag('config', 'G-LFEH3KYBRZ', {
        page_path: location.pathname,
      });
    } else {
      console.error("Google Analytics is not loaded correctly.");
    }
  }, [location]);


  useEffect(() => {
    // Update document title
    document.title = "Start Your Success with DXN";
  }, []);

  return (
    <div className="font-['Cairo', sans-serif]">
      <Header />
      <Hero />
      
      <div className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <AdPlacement position="top" />
        </div>
      </div>
      
      <Steps />
      <Products />
      <EarningsCalculator />
      <ContactForm />
      <Footer />
      <RegistrationCTA />
    </div>
  );
}

export default App;