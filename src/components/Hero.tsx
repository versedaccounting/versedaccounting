import React from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  // Function to smoothly scroll to services section
  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    // Hero section with padding and overflow handling
    <section id="hero" className="pt-28 pb-20 lg:pt-36 lg:pb-28 px-4 relative overflow-hidden">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left column - Text content */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            <span className="text-primary-500">Small Business Accountant</span>
          </h1>
          <p className="text-lg md:text-xl text-secondary-600 mb-8 max-w-xl mx-auto md:mx-0">
            Our goal is to bring clarity to your financial data so you can focus on growing your business.
          </p>
          {/* Call to action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a href="#contact" className="btn btn-primary flex items-center justify-center gap-2">
              Contact us
              <ArrowRight size={20} />
            </a>
            <a 
              href="https://calendly.com/versedacc" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-outline flex items-center justify-center gap-2"
            >
              Schedule a Consultation
            </a>
          </div>
        </div>
        
        {/* Right column - Feature card with animation */}
        <div className="relative animate-float">
          {/* Main feature card */}
          <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-primary-500 max-w-md mx-auto">
            {/* Header with icon */}
            <div className="flex mb-4">
              <div className="w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#FFD700" strokeWidth="2"/>
                  <path d="M12 7V12L15 15" stroke="#FFD700" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <div className="ml-4">
                <h3 className="font-semibold text-xl">Time is money</h3>
                <p className="text-secondary-600">Save both with our accounting</p>
              </div>
            </div>
            
            {/* Feature list */}
            <ul className="space-y-3">
              {/* Feature items with checkmark icons */}
              <li className="flex items-start">
                <div className="w-6 h-6 rounded-full bg-primary-500 flex items-center justify-center mt-1 mr-3">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12L10 17L19 8" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span>Up to 30% tax savings</span>
              </li>
              <li className="flex items-start">
                <div className="w-6 h-6 rounded-full bg-primary-500 flex items-center justify-center mt-1 mr-3">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12L10 17L19 8" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span>Real-time financial reports</span>
              </li>
              <li className="flex items-start">
                <div className="w-6 h-6 rounded-full bg-primary-500 flex items-center justify-center mt-1 mr-3">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12L10 17L19 8" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span>Personalized accounting support</span>
              </li>
            </ul>
          </div>
          
          {/* Decorative background elements */}
          <div className="absolute -z-10 -right-10 -bottom-10 w-48 h-48 bg-primary-200 rounded-full opacity-50"></div>
          <div className="absolute -z-10 -left-5 -top-5 w-24 h-24 bg-primary-100 rounded-full opacity-70"></div>
        </div>
      </div>
      
      {/* Scroll down button */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button 
          onClick={scrollToServices}
          aria-label="Scroll to services"
          className="bg-white p-3 rounded-full shadow-md"
        >
          <ChevronDown size={20} className="text-primary-500" />
        </button>
      </div>
    </section>
  );
};

export default Hero;