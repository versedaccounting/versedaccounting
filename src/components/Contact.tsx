import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { useForm } from 'react-hook-form';

interface FormData {
  name: string;
  email: string;
  companyName: string;
  message: string;
}

const Contact: React.FC = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitError('');
    
    try {
      const response = await fetch('https://formspree.io/f/manqkqgb', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        setSubmitSuccess(true);
        reset();
        setTimeout(() => setSubmitSuccess(false), 5000);
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      setSubmitError('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
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
    },
    {
      icon: <MapPin size={24} className="text-primary-500" />,
      title: "Address",
      details: "441 N 2nd St, Carlton, OR 97111, United States",
      action: "https://maps.app.goo.gl/kHu3en2tMu9QQYmk7"
    }
  ];

  return (
    <section id="contact" className="section bg-white relative">
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-gray-50 to-white z-0"></div>
      
      <div className="container relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h2>
          <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
            We're ready to help your business and transform your accounting into a competitive advantage.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {contactInfo.map((info, index) => (
            <a 
              key={index} 
              href={info.action}
              className="card p-6 text-center hover:bg-primary-50 transition-colors animate-on-scroll"
            >
              <div className="w-16 h-16 bg-white rounded-full shadow-soft flex items-center justify-center mx-auto mb-4">
                {info.icon}
              </div>
              <h3 className="font-bold text-xl mb-2">{info.title}</h3>
              <p className="text-secondary-600">{info.details}</p>
            </a>
          ))}
        </div>
        
        <div className="bg-white shadow-soft rounded-lg overflow-hidden max-w-4xl mx-auto animate-on-scroll">
          <div className="p-6 md:p-10">
            <h3 className="text-2xl font-bold mb-6">Send us a message</h3>
            
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-secondary-600 mb-2">Full name</label>
                  <input
                    type="text"
                    id="name"
                    className={`w-full px-4 py-3 rounded-md border ${errors.name ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-primary-500`}
                    placeholder="Your name"
                    {...register("name", { required: "Name is required" })}
                  />
                  {errors.name && <p className="mt-1 text-red-500 text-sm">{errors.name.message}</p>}
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-secondary-600 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    className={`w-full px-4 py-3 rounded-md border ${errors.email ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-primary-500`}
                    placeholder="your@email.com"
                    {...register("email", { 
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address"
                      }
                    })}
                  />
                  {errors.email && <p className="mt-1 text-red-500 text-sm">{errors.email.message}</p>}
                </div>
                
                <div>
                  <label htmlFor="companyName" className="block text-sm font-medium text-secondary-600 mb-2">Company name</label>
                  <input
                    type="text"
                    id="companyName"
                    className={`w-full px-4 py-3 rounded-md border ${errors.companyName ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-primary-500`}
                    placeholder="Your company name"
                    {...register("companyName", { required: "Company name is required" })}
                  />
                  {errors.companyName && <p className="mt-1 text-red-500 text-sm">{errors.companyName.message}</p>}
                </div>
                
                <div className="md:col-span-2">
                  <label htmlFor="message" className="block text-sm font-medium text-secondary-600 mb-2">Message</label>
                  <textarea
                    id="message"
                    rows={5}
                    className={`w-full px-4 py-3 rounded-md border ${errors.message ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-primary-500`}
                    placeholder="How can we help?"
                    {...register("message", { required: "Message is required" })}
                  ></textarea>
                  {errors.message && <p className="mt-1 text-red-500 text-sm">{errors.message.message}</p>}
                </div>
              </div>
              
              {submitSuccess && (
                <div className="bg-green-50 text-green-800 p-4 rounded-md mb-6">
                  Your message has been sent successfully! We'll be in touch soon.
                </div>
              )}
              
              {submitError && (
                <div className="bg-red-50 text-red-800 p-4 rounded-md mb-6">
                  {submitError}
                </div>
              )}
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-primary w-full flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>Sending...</>
                ) : (
                  <>
                    Send message
                    <Send size={20} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;