import React from 'react';
import { Check, ArrowRight, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import Contact from './Contact';

const Pricing: React.FC = () => {
  const pricingPlans = [
    {
      name: "Small",
      price: "$250 - $750",
      period: "per month",
      description: "for smaller businesses looking to grow.",
      features: [
        "Monthly Financial Reports",
        "Bookkeeping Services",
        "Bank Reconciliation",
        "Expense Tracking",
        "Quarter 4 Strategy Meeting"
      ],
      buttonText: "Get Started",
      popular: false,
      color: "bg-primary-500"
    },
    {
      name: "Growing",
      price: "$750 - $1500",
      period: "per month",
      description: "for growing small business with some additional complexities & scope.",
      features: [
        "Everything from Small",
        "Accounts Payable Management",
        "Mid level of accounts & transactions",
        "Quarterly CFO Meetings",
        "Mid Level Complexities"
      ],
      buttonText: "Get Started",
      popular: true,
      color: "bg-secondary-600"
    },
    {
      name: "Established",
      price: "$1500 - $3500",
      period: "per month",
      description: "for established small businesses with higher needs.",
      features: [
        "Everything from Growing",
        "Higher number of employees",
        "Higher level of accounts & transactions",
        "Weekly check-ins & support",
        "Serve as a true staff alternative",
        "High levels of complexity and time"
      ],
      buttonText: "Get Started",
      popular: false,
      color: "bg-primary-500"
    }
  ];

  const scrollToContact = () => {
    document.getElementById('pricing-contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const contactInfo = [
    {
      icon: <Phone size={24} className="text-primary-500" />,
      title: "Phone",
      details: "+1 503-852-1732",
      action: "tel:+15038521732"
    },
    {
      icon: <Mail size={24} className="text-primary-500" />,
      title: "Email",
      details: "info@versedacc.com",
      action: "mailto:info@versedacc.com"
    }
  ];

  return (
    <div className="min-h-screen pt-28 pb-20 px-4">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16 animate-on-scroll in-view">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Flexible pricing that scales with <br />
            <span className="text-primary-500">your business.</span>
          </h1>
          <p className="text-lg md:text-xl text-secondary-600 max-w-2xl mx-auto">
            Choose the plan that fits your business needs and grow with confidence.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {pricingPlans.map((plan, index) => (
            <div 
              key={plan.name}
              className={`relative rounded-lg p-8 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 animate-on-scroll ${
                plan.popular 
                  ? 'bg-secondary-600 text-white scale-105' 
                  : 'bg-white shadow-soft'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary-500 text-secondary-900 px-4 py-2 rounded-full text-sm font-bold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className={`text-2xl font-bold mb-2 ${plan.popular ? 'text-white' : 'text-secondary-900'}`}>
                  {plan.name}
                </h3>
                <div className="mb-2">
                  <span className={`text-3xl font-bold ${plan.popular ? 'text-white' : 'text-secondary-900'}`}>
                    {plan.price}
                  </span>
                  <span className={`text-lg ml-2 ${plan.popular ? 'text-gray-300' : 'text-secondary-600'}`}>
                    {plan.period}
                  </span>
                </div>
                <p className={`${plan.popular ? 'text-gray-300' : 'text-secondary-600'}`}>
                  {plan.description}
                </p>
              </div>

              <button
                onClick={scrollToContact}
                className={`w-full py-3 px-6 rounded-md font-semibold mb-6 transition-all duration-300 ${
                  plan.popular
                    ? 'bg-primary-500 text-secondary-900 hover:bg-primary-600'
                    : 'bg-secondary-600 text-white hover:bg-secondary-700'
                }`}
              >
                {plan.buttonText}
              </button>

              <ul className="space-y-3">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <Check 
                      size={20} 
                      className={`mt-0.5 mr-3 flex-shrink-0 ${
                        plan.popular ? 'text-primary-500' : 'text-primary-500'
                      }`} 
                    />
                    <span className={`${plan.popular ? 'text-white' : 'text-secondary-700'}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* What's Included Section */}
        <div className="bg-gray-50 rounded-lg p-8 mb-16 animate-on-scroll">
          <h2 className="text-3xl font-bold text-center mb-8">What's Included in Our Accounting Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check size={24} className="text-primary-500" />
              </div>
              <h3 className="font-bold mb-2">Monthly Financial Reports</h3>
              <p className="text-secondary-600 text-sm">Comprehensive financial statements delivered monthly to track your business performance.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check size={24} className="text-primary-500" />
              </div>
              <h3 className="font-bold mb-2">Bookkeeping Services</h3>
              <p className="text-secondary-600 text-sm">Complete transaction recording, categorization, and account management for your business.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check size={24} className="text-primary-500" />
              </div>
              <h3 className="font-bold mb-2">Bank Reconciliation</h3>
              <p className="text-secondary-600 text-sm">Regular reconciliation of all bank accounts to ensure accuracy and identify discrepancies.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check size={24} className="text-primary-500" />
              </div>
              <h3 className="font-bold mb-2">CFO Services</h3>
              <p className="text-secondary-600 text-sm">Strategic financial guidance and analysis to help drive your business growth and profitability.</p>
            </div>
          </div>
        </div>

        {/* Call or Email Our Team - Simplified */}
        <div className="text-center mb-12 animate-on-scroll">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Call or Email Our Team</h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto mb-12">
            {contactInfo.map((info, index) => (
              <a 
                key={index} 
                href={info.action}
                className="card p-6 text-center hover:bg-primary-50 transition-colors"
              >
                <div className="w-16 h-16 bg-white rounded-full shadow-soft flex items-center justify-center mx-auto mb-4">
                  {info.icon}
                </div>
                <h3 className="font-bold text-xl mb-2">{info.title}</h3>
                <p className="text-secondary-600">{info.details}</p>
              </a>
            ))}
          </div>
        </div>

        {/* Contact Form */}
        <div id="pricing-contact" className="mb-16">
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default Pricing;