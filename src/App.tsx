import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Articles from './components/Articles';
import ArticleDetail from './components/ArticleDetail';

// Declare global google translate interface
declare global {
  interface Window {
    google: any;
    googleTranslateElementInit: () => void;
  }
}

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

  useEffect(() => {
    // Re-initialize Google Translate when route changes
    const reinitializeGoogleTranslate = () => {
      if (window.google && window.google.translate) {
        // Clear existing instances
        const desktopElement = document.getElementById('google_translate_element');
        const mobileElement = document.getElementById('google_translate_element_mobile');
        
        if (desktopElement) {
          desktopElement.innerHTML = '';
        }
        if (mobileElement) {
          mobileElement.innerHTML = '';
        }
        
        // Reinitialize
        setTimeout(() => {
          if (window.googleTranslateElementInit) {
            window.googleTranslateElementInit();
          }
        }, 100);
      }
    };

    // Wait a bit for the DOM to be ready
    const timer = setTimeout(reinitializeGoogleTranslate, 500);
    
    return () => clearTimeout(timer);
  }, []);

  // Home page component
  const HomePage = () => (
    <main>
      <Hero />
      <Services />
      <Testimonials />
      <About />
      <Contact />
    </main>
  );

  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-white">
        {/* Header component with scroll state */}
        <Header scrolling={scrolling} />
        
        {/* Routes */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/articles/:slug" element={<ArticleDetail />} />
        </Routes>
        
        {/* Footer component */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;