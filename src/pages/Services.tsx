
import { CheckCircle, Monitor, Server, FileSearch, TrendingUp, Shield, Clock, Code, Database, LineChart } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const ServiceSection = ({ 
  title, 
  description,
  icon,
  features,
  image,
  reversed = false
}: { 
  title: string; 
  description: string;
  icon: React.ReactNode;
  features: string[];
  image: string;
  reversed?: boolean;
}) => {
  return (
    <div className={`grid md:grid-cols-2 gap-12 items-center ${reversed ? 'md:flex-row-reverse' : ''}`}>
      <div className={`order-2 ${reversed ? 'md:order-1' : 'md:order-2'}`}>
        <img
          src={image}
          alt={title}
          className="rounded-lg shadow-lg h-auto w-full object-cover"
        />
      </div>
      <div className={`order-1 ${reversed ? 'md:order-2' : 'md:order-1'}`}>
        <div className="flex items-center mb-4">
          <div className="h-12 w-12 bg-mtechBlue-50 text-mtechBlue-600 rounded-full flex items-center justify-center mr-4">
            {icon}
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-mtechGray-900">{title}</h3>
        </div>
        
        <p className="text-mtechGray-700 mb-6">
          {description}
        </p>
        
        <ul className="space-y-3 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <CheckCircle className="h-5 w-5 text-mtechAccent mr-2 mt-1 flex-shrink-0" />
              <span className="text-mtechGray-700">{feature}</span>
            </li>
          ))}
        </ul>
        
        <Button className="bg-mtechBlue-600 hover:bg-mtechBlue-700" asChild>
          <Link to="/contact">
            Get Started
          </Link>
        </Button>
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-mtechBlue-800 to-mtechBlue-950 text-white py-20">
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90 mb-8">
            We offer comprehensive technology solutions to help your business thrive in the digital landscape.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-colors">
              <Monitor className="h-12 w-12 text-mtechAccent mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Web Development</h3>
              <p className="text-mtechGray-100">Custom websites tailored to your business needs</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-colors">
              <Server className="h-12 w-12 text-mtechAccent mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Web Hosting</h3>
              <p className="text-mtechGray-100">Reliable and secure hosting solutions</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-colors">
              <FileSearch className="h-12 w-12 text-mtechAccent mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Software Testing</h3>
              <p className="text-mtechGray-100">Comprehensive testing for quality assurance</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Details */}
      <section className="py-20 bg-white">
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto space-y-24">
          <ServiceSection 
            title="Web Development"
            description="We create custom, responsive websites and web applications tailored to your business needs. Our development team uses the latest technologies to deliver high-quality solutions that drive results."
            icon={<Monitor className="h-6 w-6" />}
            features={[
              "Custom website design and development",
              "Responsive design for all devices",
              "E-commerce solutions",
              "Website maintenance and updates",
              "CMS integration for easy content management",
              "Performance optimization for faster loading"
            ]}
            image="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
          />
          
          <ServiceSection 
            title="Web Hosting"
            description="Our reliable hosting services provide the foundation for your online presence. With top-tier security, excellent performance, and 24/7 technical support, we ensure your website is always available to your customers."
            icon={<Server className="h-6 w-6" />}
            features={[
              "High-performance servers for optimal speed",
              "99.9% uptime guarantee",
              "Regular backups for data security",
              "SSL certificates for secure browsing",
              "Scalable solutions as your business grows",
              "24/7 technical support"
            ]}
            image="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
            reversed
          />
          
          <ServiceSection 
            title="Software Testing"
            description="Our comprehensive software testing services help ensure your applications are bug-free, secure, and perform optimally. We identify and address issues before they impact your users, saving you time and resources."
            icon={<FileSearch className="h-6 w-6" />}
            features={[
              "Functional and regression testing",
              "Performance and load testing",
              "Security vulnerability assessment",
              "Mobile application testing",
              "User experience testing",
              "Automated and manual testing approaches"
            ]}
            image="https://images.unsplash.com/photo-1573164574511-73c773193279?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
          />
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-mtechGray-50">
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-mtechGray-900 mb-4">
              Why Choose M Tech Corp
            </h2>
            <p className="text-xl text-mtechGray-600 max-w-3xl mx-auto">
              We're committed to delivering exceptional service and results for our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="h-12 w-12 bg-mtechBlue-50 text-mtechBlue-600 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-mtechGray-900">Proven Results</h3>
              <p className="text-mtechGray-700">
                Our solutions are designed to deliver measurable business outcomes and ROI.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="h-12 w-12 bg-mtechBlue-50 text-mtechBlue-600 rounded-lg flex items-center justify-center mb-4">
                <Shield className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-mtechGray-900">Security Focus</h3>
              <p className="text-mtechGray-700">
                We prioritize the security of your data and applications at every stage.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="h-12 w-12 bg-mtechBlue-50 text-mtechBlue-600 rounded-lg flex items-center justify-center mb-4">
                <Clock className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-mtechGray-900">Timely Delivery</h3>
              <p className="text-mtechGray-700">
                We value your time and ensure projects are delivered on schedule.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="h-12 w-12 bg-mtechBlue-50 text-mtechBlue-600 rounded-lg flex items-center justify-center mb-4">
                <LineChart className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-mtechGray-900">Ongoing Support</h3>
              <p className="text-mtechGray-700">
                Our relationship doesn't end at delivery—we provide continuous support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-white">
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-mtechGray-900 mb-4">
              Flexible Pricing Plans
            </h2>
            <p className="text-xl text-mtechGray-600 max-w-3xl mx-auto">
              Choose the perfect plan for your business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Starter Plan */}
            <div className="border border-mtechGray-100 rounded-xl shadow-sm overflow-hidden">
              <div className="p-6 border-b border-mtechGray-100">
                <h3 className="text-lg font-semibold text-mtechGray-900">Starter</h3>
                <div className="mt-4 flex items-baseline">
                  <span className="text-3xl font-bold text-mtechGray-900">$499</span>
                  <span className="ml-1 text-mtechGray-500">/ project</span>
                </div>
                <p className="mt-2 text-sm text-mtechGray-500">Perfect for small businesses</p>
              </div>
              <div className="p-6 space-y-4">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-mtechAccent mr-2 mt-1 flex-shrink-0" />
                    <span className="text-mtechGray-700">Basic website (up to 5 pages)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-mtechAccent mr-2 mt-1 flex-shrink-0" />
                    <span className="text-mtechGray-700">Mobile responsive design</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-mtechAccent mr-2 mt-1 flex-shrink-0" />
                    <span className="text-mtechGray-700">Contact form</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-mtechAccent mr-2 mt-1 flex-shrink-0" />
                    <span className="text-mtechGray-700">Basic SEO setup</span>
                  </li>
                </ul>
                <Button className="w-full bg-mtechBlue-600 hover:bg-mtechBlue-700" asChild>
                  <Link to="/contact">
                    Get Started
                  </Link>
                </Button>
              </div>
            </div>

            {/* Professional Plan */}
            <div className="border-2 border-mtechBlue-500 rounded-xl shadow-lg overflow-hidden relative">
              <div className="absolute top-0 right-0 bg-mtechBlue-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                POPULAR
              </div>
              <div className="p-6 border-b border-mtechGray-100">
                <h3 className="text-lg font-semibold text-mtechGray-900">Professional</h3>
                <div className="mt-4 flex items-baseline">
                  <span className="text-3xl font-bold text-mtechGray-900">$999</span>
                  <span className="ml-1 text-mtechGray-500">/ project</span>
                </div>
                <p className="mt-2 text-sm text-mtechGray-500">For growing businesses</p>
              </div>
              <div className="p-6 space-y-4">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-mtechAccent mr-2 mt-1 flex-shrink-0" />
                    <span className="text-mtechGray-700">Custom website (up to 10 pages)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-mtechAccent mr-2 mt-1 flex-shrink-0" />
                    <span className="text-mtechGray-700">CMS integration</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-mtechAccent mr-2 mt-1 flex-shrink-0" />
                    <span className="text-mtechGray-700">Advanced SEO optimization</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-mtechAccent mr-2 mt-1 flex-shrink-0" />
                    <span className="text-mtechGray-700">E-commerce features (basic)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-mtechAccent mr-2 mt-1 flex-shrink-0" />
                    <span className="text-mtechGray-700">3 months free hosting</span>
                  </li>
                </ul>
                <Button className="w-full bg-mtechBlue-600 hover:bg-mtechBlue-700" asChild>
                  <Link to="/contact">
                    Get Started
                  </Link>
                </Button>
              </div>
            </div>

            {/* Enterprise Plan */}
            <div className="border border-mtechGray-100 rounded-xl shadow-sm overflow-hidden">
              <div className="p-6 border-b border-mtechGray-100">
                <h3 className="text-lg font-semibold text-mtechGray-900">Enterprise</h3>
                <div className="mt-4 flex items-baseline">
                  <span className="text-3xl font-bold text-mtechGray-900">Custom</span>
                </div>
                <p className="mt-2 text-sm text-mtechGray-500">For large organizations</p>
              </div>
              <div className="p-6 space-y-4">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-mtechAccent mr-2 mt-1 flex-shrink-0" />
                    <span className="text-mtechGray-700">Full-scale custom solutions</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-mtechAccent mr-2 mt-1 flex-shrink-0" />
                    <span className="text-mtechGray-700">Advanced e-commerce functionality</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-mtechAccent mr-2 mt-1 flex-shrink-0" />
                    <span className="text-mtechGray-700">Custom integrations</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-mtechAccent mr-2 mt-1 flex-shrink-0" />
                    <span className="text-mtechGray-700">Priority support</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-mtechAccent mr-2 mt-1 flex-shrink-0" />
                    <span className="text-mtechGray-700">Dedicated account manager</span>
                  </li>
                </ul>
                <Button className="w-full bg-mtechBlue-600 hover:bg-mtechBlue-700" asChild>
                  <Link to="/contact">
                    Contact Us
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-mtechBlue-600 to-mtechBlue-800 text-white">
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Contact us today for a free consultation. Let's discuss how we can help your business succeed online.
          </p>
          <Button className="bg-white text-mtechBlue-700 hover:bg-mtechGray-100" size="lg" asChild>
            <Link to="/contact">
              Contact Us Now
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Services;
