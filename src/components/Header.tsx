import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Logo from './Logo';

interface HeaderProps {
  scrolling: boolean;
}

const Header: React.FC<HeaderProps> = ({ scrolling }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/';

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (isHomePage) {
      // Se já estiver na página principal, apenas rola para o topo
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Se estiver em outra página, navega para a home e depois rola para o topo
      navigate('/');
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
    }
  };

  const navLinks = [
    { name: 'Home', href: '/', isExternal: false, isContact: false },
    { name: 'Services', href: isHomePage ? '#services' : '/#services', isExternal: false, isContact: false },
    { name: 'Testimonials', href: isHomePage ? '#testimonials' : '/#testimonials', isExternal: false, isContact: false },
    { name: 'About Us', href: isHomePage ? '#about' : '/#about', isExternal: false, isContact: false },
    { name: 'Articles', href: '/articles', isExternal: false, isContact: false },
    { name: 'Pricing', href: '/pricing', isExternal: false, isContact: false },
    { name: 'Contact', href: isHomePage ? '#contact' : '/#contact', isExternal: false, isContact: true },
  ];

  const handleNavClick = (href: string, isExternal: boolean, linkName: string) => {
    setMobileMenuOpen(false);
    
    // Handle Home link - scroll to top if already on home page
    if (linkName === 'Home' && isHomePage) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    
    if (!isExternal && href.startsWith('#')) {
      // Handle anchor links on the same page
      setTimeout(() => {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          
          // Trigger animations after scrolling
          setTimeout(() => {
            const animatedElements = document.querySelectorAll('.animate-on-scroll');
            animatedElements.forEach((el) => {
              const elementTop = el.getBoundingClientRect().top;
              const elementVisible = 150;
              
              if (elementTop < window.innerHeight - elementVisible) {
                el.classList.add('in-view');
              }
            });
          }, 500);
        }
      }, 100);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolling
          ? 'bg-white shadow-lg py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" onClick={handleLogoClick} className="block">
          <Logo imageUrl="https://www.versedacc.com/gallery/Versed%20Accounting.png?ts=1740713198" />
        </a>

        <nav className="hidden md:block">
          <ul className="flex space-x-8 items-center">
            {navLinks.map((link) => (
              <li key={link.name}>
                {link.href.startsWith('/') && !link.href.includes('#') ? (
                  <Link
                    to={link.href}
                    className={`font-medium transition-all duration-300 ${
                      link.isContact 
                        ? 'bg-primary-500 text-secondary-900 px-4 py-2 rounded-md hover:bg-primary-600 hover:shadow-button transform hover:-translate-y-0.5' 
                        : `hover:text-primary-500 ${scrolling ? 'text-secondary-800' : 'text-secondary-800'}`
                    }`}
                    onClick={(e) => {
                      if (link.name === 'Home' && isHomePage) {
                        e.preventDefault();
                        handleNavClick(link.href, link.isExternal, link.name);
                      }
                    }}
                  >
                    {link.name}
                  </Link>
                ) : (
                  <a
                    href={link.href}
                    className={`font-medium transition-all duration-300 ${
                      link.isContact 
                        ? 'bg-primary-500 text-secondary-900 px-4 py-2 rounded-md hover:bg-primary-600 hover:shadow-button transform hover:-translate-y-0.5' 
                        : `hover:text-primary-500 ${scrolling ? 'text-secondary-800' : 'text-secondary-800'}`
                    }`}
                    onClick={(e) => {
                      if (link.href.startsWith('#')) {
                        e.preventDefault();
                        handleNavClick(link.href, link.isExternal, link.name);
                      }
                    }}
                  >
                    {link.name}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <button
          className="md:hidden text-secondary-800 focus:outline-none"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 w-full shadow-lg">
          <ul className="flex flex-col py-4">
            {navLinks.map((link) => (
              <li key={link.name} className="border-b border-secondary-100 last:border-0">
                {link.href.startsWith('/') && !link.href.includes('#') ? (
                  <Link
                    to={link.href}
                    className={`block py-3 px-6 transition-all duration-300 ${
                      link.isContact 
                        ? 'bg-primary-500 text-secondary-900 mx-4 my-2 rounded-md text-center font-semibold hover:bg-primary-600' 
                        : 'text-secondary-800 hover:bg-primary-50 hover:text-primary-500'
                    }`}
                    onClick={(e) => {
                      if (link.name === 'Home' && isHomePage) {
                        e.preventDefault();
                        handleNavClick(link.href, link.isExternal, link.name);
                      } else {
                        setMobileMenuOpen(false);
                      }
                    }}
                  >
                    {link.name}
                  </Link>
                ) : (
                  <a
                    href={link.href}
                    className={`block py-3 px-6 transition-all duration-300 ${
                      link.isContact 
                        ? 'bg-primary-500 text-secondary-900 mx-4 my-2 rounded-md text-center font-semibold hover:bg-primary-600' 
                        : 'text-secondary-800 hover:bg-primary-50 hover:text-primary-500'
                    }`}
                    onClick={(e) => {
                      if (link.href.startsWith('#')) {
                        e.preventDefault();
                      }
                      handleNavClick(link.href, link.isExternal, link.name);
                    }}
                  >
                    {link.name}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;