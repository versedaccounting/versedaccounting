import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import { Facebook, Instagram, Linkedin, Mail, ChevronUp, Calendar } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: 'Company',
      links: [
        { name: 'Home', href: '/', isRoute: true },
        { name: 'Services', href: '/#services', isRoute: false },
        { name: 'Testimonials', href: '/#testimonials', isRoute: false },
        { name: 'About Us', href: '/#about', isRoute: false },
        { name: 'Articles', href: '/articles', isRoute: true },
        { name: 'Contact', href: '/#contact', isRoute: false },
      ]
    },
    {
      title: 'Services',
      links: [
        { name: 'Bookkeeping', href: '/#services', isRoute: false },
        { name: 'Accounts Payable', href: '/#services', isRoute: false },
        { name: 'CFO Services', href: '/#services', isRoute: false },
        { name: 'Consulting', href: '/#services', isRoute: false },
      ]
    },
    {
      title: 'Legal',
      links: [
        { name: 'Terms of Use', href: '#', isRoute: false },
        { name: 'Privacy Policy', href: '#', isRoute: false },
        { name: 'Cookies', href: '#', isRoute: false },
      ]
    },
  ];

  const socialLinks = [
    { icon: <Facebook size={20} />, href: 'https://www.facebook.com/versedaccounting/', label: 'Facebook' },
    { icon: <Instagram size={20} />, href: 'https://instagram.com/versedaccounting', label: 'Instagram' },
    { icon: <Linkedin size={20} />, href: 'https://www.linkedin.com/company/versed-accounting-llc/', label: 'LinkedIn' },
    { icon: <Mail size={20} />, href: 'mailto:info@versedacc.com', label: 'Email' },
  ];

  return (
    <footer className="bg-secondary-900 text-white">
      {/* Call to Action Section - Reduced Size */}
      <div className="bg-gradient-to-r from-primary-500 to-primary-400 py-8">
        <div className="container text-center">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-secondary-900 mb-4">
              Prefer to schedule a consultation? Click the button below
            </h3>
            <a 
              href="https://calendly.com/versedacc" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-2 bg-secondary-900 text-primary-500 px-6 py-3 rounded-lg font-semibold hover:bg-secondary-800 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
            >
              <Calendar size={20} />
              Schedule a Consultation
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="pt-16 pb-8">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
            <div className="lg:col-span-2">
              <div className="mb-6">
                <Logo imageUrl="https://i.imgur.com/0XHUuUX.png" />
              </div>
              <p className="text-secondary-300 mb-6 max-w-md">
                Transforming numbers into intelligent decisions. Specialized accounting for businesses of all sizes.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    aria-label={link.label}
                    className="w-10 h-10 bg-secondary-800 flex items-center justify-center rounded-full hover:bg-primary-500 hover:text-secondary-900 transition-colors"
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
            
            {footerLinks.map((column, colIndex) => (
              <div key={colIndex}>
                <h4 className="font-bold text-lg mb-4">{column.title}</h4>
                <ul className="space-y-3">
                  {column.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      {link.isRoute ? (
                        <Link 
                          to={link.href} 
                          className="text-secondary-300 hover:text-primary-500 transition-colors"
                        >
                          {link.name}
                        </Link>
                      ) : (
                        <a 
                          href={link.href} 
                          className="text-secondary-300 hover:text-primary-500 transition-colors"
                        >
                          {link.name}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="border-t border-secondary-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-secondary-400 text-sm mb-4 md:mb-0">
              &copy; {currentYear} Versed Accounting LLC. All rights reserved.
            </p>
            <button 
              onClick={scrollToTop}
              aria-label="Back to top"
              className="bg-secondary-800 p-3 rounded-full hover:bg-primary-500 hover:text-secondary-900 transition-colors"
            >
              <ChevronUp size={20} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;