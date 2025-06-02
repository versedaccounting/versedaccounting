import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  // State to track if user has scrolled down the page
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    // Function to handle scroll events
    const handleScroll = () => {
      // Add scrolling class when user scrolls more than 50px
      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
      
      // Handle animations for elements with 'animate-on-scroll' class
      const animatedElements = document.querySelectorAll('.animate-on-scroll');
      animatedElements.forEach((el) => {
        // Calculate when element should become visible
        const elementTop = el.getBoundingClientRect().top;
        const elementVisible = 150; // Threshold for visibility
        
        // Add 'in-view' class when element is visible
        if (elementTop < window.innerHeight - elementVisible) {
          el.classList.add('in-view');
        }
      });
    };

    // Add scroll event listener when component mounts
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check for elements
    
    // Cleanup event listener when component unmounts
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    // Main app container with full height and white background
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header component with scroll state */}
      <Header scrolling={scrolling} />
      
      {/* Main content area */}
      <main>
        <Hero />
        <Services />
        <Testimonials />
        <About />
        <Contact />
      </main>
      
      {/* Footer component */}
      <Footer />
    </div>
  );
}

export default App;