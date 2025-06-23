import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const CookiePolicy: React.FC = () => {
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
            Cookie Policy
          </h1>
          <p className="text-secondary-600">
            Last updated: January 2025
          </p>
        </header>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">What Are Cookies?</h2>
            <p className="mb-4">
              Cookies are small text files that are stored on your computer or mobile device when you visit a website. They help websites remember information about your visit, which can make it easier to visit the site again and make the site more useful to you.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">How We Use Cookies</h2>
            <p className="mb-4">
              Versed Accounting LLC uses cookies to:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Ensure our website functions properly</li>
              <li>Remember your preferences and settings</li>
              <li>Understand how you use our website</li>
              <li>Improve your browsing experience</li>
              <li>Analyze website traffic and performance</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Types of Cookies We Use</h2>
            
            <h3 className="text-xl font-bold mb-3">Essential Cookies</h3>
            <p className="mb-4">
              These cookies are necessary for the website to function properly. They enable basic functions like page navigation and access to secure areas of the website. The website cannot function properly without these cookies.
            </p>

            <h3 className="text-xl font-bold mb-3">Analytics Cookies</h3>
            <p className="mb-4">
              These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. This helps us improve our website's performance and user experience.
            </p>

            <h3 className="text-xl font-bold mb-3">Functional Cookies</h3>
            <p className="mb-4">
              These cookies enable the website to provide enhanced functionality and personalization. They may be set by us or by third-party providers whose services we have added to our pages.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Third-Party Cookies</h2>
            <p className="mb-4">
              We may use third-party services that also set cookies on your device. These include:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>Google Analytics:</strong> To analyze website traffic and user behavior</li>
              <li><strong>Calendly:</strong> For scheduling consultations</li>
              <li><strong>Formspree:</strong> For contact form functionality</li>
            </ul>
            <p className="mb-4">
              These third parties have their own privacy policies and cookie policies, which we encourage you to review.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Managing Cookies</h2>
            <p className="mb-4">
              You can control and manage cookies in several ways:
            </p>

            <h3 className="text-xl font-bold mb-3">Browser Settings</h3>
            <p className="mb-4">
              Most web browsers allow you to control cookies through their settings preferences. You can:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>View what cookies are stored on your device</li>
              <li>Delete cookies</li>
              <li>Block cookies from specific sites</li>
              <li>Block all cookies</li>
              <li>Delete all cookies when you close your browser</li>
            </ul>

            <h3 className="text-xl font-bold mb-3">Browser-Specific Instructions</h3>
            <div className="bg-gray-50 p-4 rounded-lg mb-4">
              <ul className="list-disc pl-6">
                <li><strong>Chrome:</strong> Settings → Privacy and security → Cookies and other site data</li>
                <li><strong>Firefox:</strong> Settings → Privacy & Security → Cookies and Site Data</li>
                <li><strong>Safari:</strong> Preferences → Privacy → Manage Website Data</li>
                <li><strong>Edge:</strong> Settings → Cookies and site permissions → Cookies and site data</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Impact of Disabling Cookies</h2>
            <p className="mb-4">
              Please note that disabling cookies may affect the functionality of our website. Some features may not work properly or may not be available if you choose to disable cookies.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Updates to This Policy</h2>
            <p className="mb-4">
              We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. Please check this page periodically for updates.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <p className="mb-4">
              If you have any questions about our use of cookies, please contact us:
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

export default CookiePolicy;