import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  return (
    <div>
      <section className="bg-gradient-to-r from-mtechBlue-800 to-mtechBlue-950 text-white py-16">
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-lg opacity-90">Last updated: February 2026</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto max-w-4xl prose prose-lg">
          <h2 className="text-2xl font-bold text-mtechGray-900 mb-4">1. Information We Collect</h2>
          <p className="text-mtechGray-700 mb-6">
            When you use our services or contact us through our website, we may collect the following information:
          </p>
          <ul className="list-disc pl-6 text-mtechGray-700 mb-8 space-y-2">
            <li>Personal information you provide (name, email address, phone number) when filling out our contact or quote forms</li>
            <li>Technical data such as your IP address, browser type, and device information collected automatically when you visit our site</li>
            <li>Usage data about how you interact with our website</li>
          </ul>

          <h2 className="text-2xl font-bold text-mtechGray-900 mb-4">2. How We Use Your Information</h2>
          <p className="text-mtechGray-700 mb-4">We use the information we collect to:</p>
          <ul className="list-disc pl-6 text-mtechGray-700 mb-8 space-y-2">
            <li>Respond to your inquiries and provide requested services</li>
            <li>Communicate with you about projects, updates, and promotions</li>
            <li>Improve our website, services, and user experience</li>
            <li>Comply with legal obligations</li>
          </ul>

          <h2 className="text-2xl font-bold text-mtechGray-900 mb-4">3. Data Sharing</h2>
          <p className="text-mtechGray-700 mb-8">
            We do not sell, trade, or rent your personal information to third parties. We may share your data with trusted service providers who assist us in operating our website and delivering services, provided they agree to keep this information confidential.
          </p>

          <h2 className="text-2xl font-bold text-mtechGray-900 mb-4">4. Data Security</h2>
          <p className="text-mtechGray-700 mb-8">
            We implement reasonable security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
          </p>

          <h2 className="text-2xl font-bold text-mtechGray-900 mb-4">5. Cookies</h2>
          <p className="text-mtechGray-700 mb-8">
            Our website may use cookies to enhance your browsing experience. Cookies are small files stored on your device that help us understand how you use our site. You can choose to disable cookies through your browser settings, though some features may not function properly.
          </p>

          <h2 className="text-2xl font-bold text-mtechGray-900 mb-4">6. Third-Party Links</h2>
          <p className="text-mtechGray-700 mb-8">
            Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.
          </p>

          <h2 className="text-2xl font-bold text-mtechGray-900 mb-4">7. Your Rights</h2>
          <p className="text-mtechGray-700 mb-4">You have the right to:</p>
          <ul className="list-disc pl-6 text-mtechGray-700 mb-8 space-y-2">
            <li>Access the personal information we hold about you</li>
            <li>Request correction of inaccurate data</li>
            <li>Request deletion of your personal data</li>
            <li>Opt out of marketing communications</li>
          </ul>

          <h2 className="text-2xl font-bold text-mtechGray-900 mb-4">8. Changes to This Policy</h2>
          <p className="text-mtechGray-700 mb-8">
            We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date. We encourage you to review this policy periodically.
          </p>

          <h2 className="text-2xl font-bold text-mtechGray-900 mb-4">9. Contact Us</h2>
          <p className="text-mtechGray-700 mb-4">
            If you have any questions about this Privacy Policy, please contact us:
          </p>
          <ul className="list-disc pl-6 text-mtechGray-700 mb-8 space-y-2">
            <li>Email: <a href="mailto:info@mtechcorpja.com" className="text-mtechBlue-800 hover:text-mtechOrange">info@mtechcorpja.com</a></li>
            <li>Phone: <a href="tel:876-833-1524" className="text-mtechBlue-800 hover:text-mtechOrange">876-833-1524</a></li>
            <li>Or visit our <Link to="/contact" className="text-mtechBlue-800 hover:text-mtechOrange">Contact Page</Link></li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
