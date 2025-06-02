import React from 'react';
import { Calculator, TrendingUp, Landmark, HeadsetIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => {
  return (
    <div className="card p-6 hover:shadow-lg hover:-translate-y-1 animate-on-scroll">
      <div className="w-16 h-16 bg-primary-100 rounded-md flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-secondary-600">{description}</p>
    </div>
  );
};

const Services: React.FC = () => {
  const services = [
    {
      icon: <Calculator size={32} className="text-primary-500" />,
      title: "Bookkeeping",
      description: "Each week we will review your business transactions and classify them to the correct accounts. Monthly we will reconcile bank accounts and generate financial statements.",
    },
    {
      icon: <TrendingUp size={32} className="text-primary-500" />,
      title: "Accounts Payable",
      description: "From invoice processing to payment processing and vendor management, we provide efficient and accurate accounts payable services. Our goal is to help our clients stay current on their bills.",
    },
    {
      icon: <Landmark size={32} className="text-primary-500" />,
      title: "CFO Services",
      description: "The service involves preparing and analyzing financial reports, identifying key performance indicators, ensuring regulatory compliance, and guiding financial decision-making to drive growth and profitability. It helps align financial goals with business objectives, offering insights to improve efficiency and long-term economic stability.",
    },
    {
      icon: <HeadsetIcon size={32} className="text-primary-500" />,
      title: "Consulting",
      description: "We offer specialized support for important decision-making, investment analysis, and strategic planning for sustainable growth.",
    },
  ];

  return (
    <section id="services" className="section bg-gray-50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
            Accounting and financial solutions that drive your business growth with precision and confidence.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
        
        <div className="mt-16 text-center animate-on-scroll">
          <a href="#contact" className="btn btn-primary inline-flex items-center gap-2">
            Request a proposal
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;