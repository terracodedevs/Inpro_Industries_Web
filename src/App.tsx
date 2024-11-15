import React, { useEffect, useState } from 'react';
import { Printer, Clock, Mail, Phone, MapPin, ChevronDown, Award, Users, Palette } from 'lucide-react';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Contact from './components/Contact';
import Navbar from './components/Navbar';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <Navbar scrolled={scrolled} />
      <main>
        <Hero />
        <AboutUs />
        <Services />
        <WhyChooseUs />
        <Contact />
      </main>
      
      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Inpro Industries</h3>
              <p className="text-slate-300">Where Passion Meets Precision in Printing</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact</h3>
              <div className="space-y-2">
                <p className="flex items-center gap-2">
                  <Phone size={16} />
                  <span>+94779 402202 / +94717 302202 / +9476 7703531</span>
                </p>
                <p className="flex items-center gap-2">
                  <Mail size={16} />
                  <span>inproindustries@yahoo.com</span>
                </p>
                <p className="flex items-center gap-2">
                  <MapPin size={16} />
                  <p>19<sup>th</sup> Lane, Mewella Road,Pethiyagoda, Kelaniya</p>
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Links</h3>
              <div className="space-y-2">
              <a href="https://www.facebook.com/yourpage" target="_blank" rel="noopener noreferrer">
                <button className="bg-gradient-to-r from-blue-600 to-blue-400 text-white font-semibold py-2 px-4 rounded-lg shadow-lg hover:from-blue-500 hover:to-blue-300 transition-all duration-300 ease-in-out">
                  Visit Our Facebook Page
                </button>
              </a>

              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-slate-700 text-center text-slate-400">
            <p>© {new Date().getFullYear()} Inpro Industries (Pvt) Ltd. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;