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
import Pricing from './components/Pricing';
import TermsOfUse from './components/TermsOfUse';
import PrivacyPolicy from './components/PrivacyPolicy';
import CookiePolicy from './components/CookiePolicy';

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

    // Function to trigger animations immediately for visible elements
    const triggerVisibleAnimations = () => {
      const animatedElements = document.querySelectorAll('.animate-on-scroll');
      animatedElements.forEach((el) => {
        const elementTop = el.getBoundingClientRect().top;
        const elementVisible = 150;
        
        // If element is already visible, show it immediately
        if (elementTop < window.innerHeight - elementVisible) {
          el.classList.add('in-view');
        }
      });
    };

    // Add scroll event listener when component mounts
    window.addEventListener('scroll', handleScroll);
    
    // Initial check for elements and trigger animations
    handleScroll();
    
    // Also trigger animations after a short delay to ensure DOM is ready
    const timer = setTimeout(triggerVisibleAnimations, 100);
    
    // Cleanup event listener and timer when component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
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
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/terms-of-use" element={<TermsOfUse />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
        </Routes>
        
        {/* Footer component */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;