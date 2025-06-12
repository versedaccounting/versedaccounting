import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';

interface HeaderProps {
  scrolling: boolean;
}

const Header: React.FC<HeaderProps> = ({ scrolling }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const navLinks = [
    { name: 'Home', href: '/', isExternal: false },
    { name: 'Services', href: isHomePage ? '#services' : '/#services', isExternal: false },
    { name: 'Testimonials', href: isHomePage ? '#testimonials' : '/#testimonials', isExternal: false },
    { name: 'About Us', href: isHomePage ? '#about' : '/#about', isExternal: false },
    { name: 'Articles', href: '/articles', isExternal: false },
    { name: 'Contact', href: isHomePage ? '#contact' : '/#contact', isExternal: false },
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
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
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
        <Link to="/" className="block">
          <Logo imageUrl="https://www.versedacc.com/gallery/Versed%20Accounting.png?ts=1740713198" />
        </Link>

        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                {link.href.startsWith('/') && !link.href.includes('#') ? (
                  <Link
                    to={link.href}
                    className={`font-medium hover:text-primary-500 transition-colors ${
                      scrolling ? 'text-secondary-800' : 'text-secondary-800'
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
                    className={`font-medium hover:text-primary-500 transition-colors ${
                      scrolling ? 'text-secondary-800' : 'text-secondary-800'
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
                    className="block py-3 px-6 text-secondary-800 hover:bg-primary-50 hover:text-primary-500"
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
                    className="block py-3 px-6 text-secondary-800 hover:bg-primary-50 hover:text-primary-500"
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