import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const TermsOfUse: React.FC = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen pt-28 pb-20 px-4">
      <div className="container max-w-4xl">
        {/* Back to home */}
        <div className="mb-8">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-primary-500 hover:text-primary-600 transition-colors"
          >
            <ArrowLeft size={20} />
            Back to Home
          </Link>
        </div>

        {/* Header */}
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Terms of Use
          </h1>
          <p className="text-secondary-600">
            Last updated: January 2025
          </p>
        </header>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
            <p className="mb-4">
              By accessing and using the Versed Accounting LLC website ("Service"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">2. Description of Service</h2>
            <p className="mb-4">
              Versed Accounting LLC provides accounting, bookkeeping, and financial consulting services to small and medium-sized businesses. Our website serves as an informational platform and contact point for potential and existing clients.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">3. User Responsibilities</h2>
            <p className="mb-4">You agree to:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Provide accurate and complete information when contacting us</li>
              <li>Use the website for lawful purposes only</li>
              <li>Not attempt to gain unauthorized access to any part of the website</li>
              <li>Not transmit any harmful or malicious code</li>
              <li>Respect intellectual property rights</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">4. Professional Services</h2>
            <p className="mb-4">
              The information provided on this website is for general informational purposes only and does not constitute professional accounting or legal advice. Formal engagement of our services requires a separate written agreement.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">5. Intellectual Property</h2>
            <p className="mb-4">
              All content on this website, including text, graphics, logos, images, and software, is the property of Versed Accounting LLC and is protected by copyright and other intellectual property laws.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">6. Privacy</h2>
            <p className="mb-4">
              Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the Service, to understand our practices.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">7. Disclaimers</h2>
            <p className="mb-4">
              The information on this website is provided on an "as is" basis. To the fullest extent permitted by law, Versed Accounting LLC excludes all representations, warranties, conditions and terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">8. Limitation of Liability</h2>
            <p className="mb-4">
              Versed Accounting LLC shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">9. Changes to Terms</h2>
            <p className="mb-4">
              We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting to the website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">10. Contact Information</h2>
            <p className="mb-4">
              If you have any questions about these Terms of Use, please contact us:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p><strong>Versed Accounting LLC</strong></p>
              <p>441 N 2nd St, Carlton, OR 97111</p>
              <p>Phone: +1 503-852-1732</p>
              <p>Email: info@versedacc.com</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfUse;