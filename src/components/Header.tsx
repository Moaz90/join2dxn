import React, { useState, useEffect } from 'react';
import { Leaf } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <Leaf className="h-8 w-8 text-green-600" strokeWidth={1.5} />
          <h1 className={`ml-2 font-bold text-xl ${isScrolled ? 'text-green-700' : 'text-white'}`}>
            DXN Success
          </h1>
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <a 
                href="#steps" 
                className={`font-medium transition-colors hover:text-green-500 ${
                  isScrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                Get Started
              </a>
            </li>
            <li>
              <a 
                href="#calculator" 
                className={`font-medium transition-colors hover:text-green-500 ${
                  isScrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                Earnings
              </a>
            </li>
            <li>
              <a 
                href="#contact" 
                className={`font-medium transition-colors hover:text-green-500 ${
                  isScrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;