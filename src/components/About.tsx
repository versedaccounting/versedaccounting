import React from 'react';
import { CheckCircle } from 'lucide-react';

const About: React.FC = () => {
  const valuesList = [
    "Transparency in all our operations",
    "Professional integrity and ethics",
    "Continuous innovation in accounting solutions",
    "Commitment to client results"
  ];

  return (
    <section id="about" className="section bg-gray-50">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="animate-on-scroll">
            <div className="grid grid-cols-2 gap-4">
              <div className="relative aspect-square">
                <img 
                  src="https://images.pexels.com/photos/7681091/pexels-photo-7681091.jpeg" 
                  alt="Financial Analysis" 
                  className="w-full h-full object-cover rounded-lg shadow-md"
                />
              </div>
              <div className="relative aspect-square mt-8">
                <img 
                  src="https://images.pexels.com/photos/7681101/pexels-photo-7681101.jpeg" 
                  alt="Business Planning" 
                  className="w-full h-full object-cover rounded-lg shadow-md"
                />
              </div>
              <div className="relative aspect-square -mt-8">
                <img 
                  src="https://images.pexels.com/photos/7681105/pexels-photo-7681105.jpeg" 
                  alt="Tax Planning" 
                  className="w-full h-full object-cover rounded-lg shadow-md"
                />
              </div>
              <div className="relative aspect-square">
                <img 
                  src="https://images.pexels.com/photos/7681097/pexels-photo-7681097.jpeg" 
                  alt="Financial Consulting" 
                  className="w-full h-full object-cover rounded-lg shadow-md"
                />
              </div>
            </div>
          </div>
          
          <div className="animate-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About Versed Accounting</h2>
            <p className="text-lg text-secondary-600 mb-6">
              At Versed Accounting, we believe that technology and innovation are essential for delivering the best accounting services possible. Our mission is to provide accurate, efficient, and secure financial solutions that leverage the latest technology and software to help our clients achieve their financial goals. We specialize in providing high-quality accounting to small businesses. We will work closely with our clients to develop customized solutions that meet their unique needs.
            </p>
            <p className="text-lg text-secondary-600 mb-8">
              From business formation to bookkeeping and financial reporting, we offer a wide range of services designed to help our clients stay on top of their finances and make informed business decisions. We also offer other business services, including accounts payable and notary services, to help our clients grow and succeed in the long term.
            </p>
            <p className="text-lg text-secondary-600 mb-8">
              We pride ourselves on our commitment to providing exceptional client service. We take the time to get to know our clients and their businesses, and we work tirelessly to ensure that they receive the support and guidance they need to achieve their financial goals. If you're looking for a trusted partner to help you manage your finances and achieve your business objectives, look no further than Versed Accounting. Contact us today to schedule a consultation and learn more about how we can help you succeed.
            </p>
            
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4">Our Values</h3>
              <ul className="space-y-2">
                {valuesList.map((value, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="text-primary-500 mt-1 mr-3 flex-shrink-0" size={20} />
                    <span>{value}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <a href="#contact" className="btn btn-primary inline-flex items-center gap-2">
              Contact us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;