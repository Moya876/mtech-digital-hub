import { Link } from "react-router-dom";

const TermsOfService = () => {
  return (
    <div>
      <section className="bg-gradient-to-r from-mtechBlue-800 to-mtechBlue-950 text-white py-16">
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms of Service</h1>
          <p className="text-lg opacity-90">Last updated: February 2026</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto max-w-4xl prose prose-lg">
          <h2 className="text-2xl font-bold text-mtechGray-900 mb-4">1. Acceptance of Terms</h2>
          <p className="text-mtechGray-700 mb-8">
            By accessing and using the M Tech Corp website and services, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, please do not use our services.
          </p>

          <h2 className="text-2xl font-bold text-mtechGray-900 mb-4">2. Services</h2>
          <p className="text-mtechGray-700 mb-4">M Tech Corp provides the following services:</p>
          <ul className="list-disc pl-6 text-mtechGray-700 mb-8 space-y-2">
            <li>Custom web development and design</li>
            <li>Web hosting solutions</li>
            <li>Software testing and quality assurance</li>
            <li>Graphic design services</li>
            <li>Social media content creation</li>
            <li>UI/UX design</li>
          </ul>
          <p className="text-mtechGray-700 mb-8">
            The specific scope, deliverables, and pricing for each project will be outlined in a separate agreement or proposal provided to the client.
          </p>

          <h2 className="text-2xl font-bold text-mtechGray-900 mb-4">3. Payment Terms</h2>
          <ul className="list-disc pl-6 text-mtechGray-700 mb-8 space-y-2">
            <li>Payment terms will be specified in individual project agreements</li>
            <li>A deposit may be required before work commences</li>
            <li>Hosting services are billed on a recurring monthly basis</li>
            <li>All prices are quoted in USD unless otherwise stated</li>
            <li>Late payments may incur additional fees as outlined in the project agreement</li>
          </ul>

          <h2 className="text-2xl font-bold text-mtechGray-900 mb-4">4. Intellectual Property</h2>
          <p className="text-mtechGray-700 mb-8">
            Upon full payment, the client receives ownership of the final deliverables as specified in the project agreement. M Tech Corp retains the right to showcase completed work in our portfolio unless otherwise agreed in writing. Third-party assets (stock photos, fonts, plugins) are subject to their respective licenses.
          </p>

          <h2 className="text-2xl font-bold text-mtechGray-900 mb-4">5. Client Responsibilities</h2>
          <p className="text-mtechGray-700 mb-4">Clients agree to:</p>
          <ul className="list-disc pl-6 text-mtechGray-700 mb-8 space-y-2">
            <li>Provide accurate and timely information, content, and feedback required for the project</li>
            <li>Respond to communications within a reasonable timeframe</li>
            <li>Ensure they have the right to use any content or materials provided to us</li>
            <li>Not use our services for any unlawful purpose</li>
          </ul>

          <h2 className="text-2xl font-bold text-mtechGray-900 mb-4">6. Revisions and Changes</h2>
          <p className="text-mtechGray-700 mb-8">
            The number of revisions included in a project will be specified in the project agreement. Additional revisions beyond the agreed scope may incur additional charges. Significant changes to the project scope after work has begun may require a revised agreement and timeline.
          </p>

          <h2 className="text-2xl font-bold text-mtechGray-900 mb-4">7. Limitation of Liability</h2>
          <p className="text-mtechGray-700 mb-8">
            M Tech Corp shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of our services. Our total liability shall not exceed the amount paid by the client for the specific service in question. We are not responsible for any loss of data, revenue, or business opportunities.
          </p>

          <h2 className="text-2xl font-bold text-mtechGray-900 mb-4">8. Termination</h2>
          <p className="text-mtechGray-700 mb-8">
            Either party may terminate a project agreement with written notice. In the event of termination, the client is responsible for payment for all work completed up to the termination date. Any deposits paid may be non-refundable depending on the stage of the project.
          </p>

          <h2 className="text-2xl font-bold text-mtechGray-900 mb-4">9. Hosting Terms</h2>
          <p className="text-mtechGray-700 mb-8">
            Hosting services are provided on a month-to-month or annual basis. M Tech Corp strives for maximum uptime but does not guarantee 100% availability. We reserve the right to suspend hosting services for non-payment or violation of these terms.
          </p>

          <h2 className="text-2xl font-bold text-mtechGray-900 mb-4">10. Changes to Terms</h2>
          <p className="text-mtechGray-700 mb-8">
            We reserve the right to modify these Terms of Service at any time. Changes will be posted on this page with an updated revision date. Continued use of our services after changes constitutes acceptance of the updated terms.
          </p>

          <h2 className="text-2xl font-bold text-mtechGray-900 mb-4">11. Contact Us</h2>
          <p className="text-mtechGray-700 mb-4">
            If you have any questions about these Terms of Service, please contact us:
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

export default TermsOfService;
