
import { CheckCircle, Monitor, Server, FileSearch, TrendingUp, Shield, Clock, LineChart, Palette, Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const ServiceSection = ({ 
  title, 
  description,
  icon,
  features,
  image,
  reversed = false,
  id
}: { 
  title: string; 
  description: string;
  icon: React.ReactNode;
  features: string[];
  image: string;
  reversed?: boolean;
  id?: string;
}) => {
  return (
    <div id={id} className={`grid md:grid-cols-2 gap-12 items-center ${reversed ? 'md:flex-row-reverse' : ''} pt-16`}>
      <div className={`order-2 ${reversed ? 'md:order-1' : 'md:order-2'}`}>
        <img
          src={image}
          alt={title}
          className="rounded-lg shadow-lg h-auto w-full object-cover"
        />
      </div>
      <div className={`order-1 ${reversed ? 'md:order-2' : 'md:order-1'}`}>
        <div className="flex items-center mb-4">
          <div className="h-12 w-12 bg-mtechOrange/10 text-mtechOrange rounded-full flex items-center justify-center mr-4">
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
              <CheckCircle className="h-5 w-5 text-mtechOrange mr-2 mt-1 flex-shrink-0" />
              <span className="text-mtechGray-700">{feature}</span>
            </li>
          ))}
        </ul>
        
        <Button className="bg-mtechBlue-600 hover:bg-mtechOrange" asChild>
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-colors">
              <Monitor className="h-10 w-10 text-mtechOrange mx-auto mb-3" />
              <h3 className="text-lg font-semibold mb-1">Web Development</h3>
              <p className="text-sm text-mtechGray-100">Custom websites for your business</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-colors">
              <Server className="h-10 w-10 text-mtechOrange mx-auto mb-3" />
              <h3 className="text-lg font-semibold mb-1">Web Hosting</h3>
              <p className="text-sm text-mtechGray-100">Reliable hosting solutions</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-colors">
              <FileSearch className="h-10 w-10 text-mtechOrange mx-auto mb-3" />
              <h3 className="text-lg font-semibold mb-1">Software Testing</h3>
              <p className="text-sm text-mtechGray-100">Quality assurance services</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-colors">
              <Palette className="h-10 w-10 text-mtechOrange mx-auto mb-3" />
              <h3 className="text-lg font-semibold mb-1">Graphic Design</h3>
              <p className="text-sm text-mtechGray-100">Logos & branding materials</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-colors">
              <Instagram className="h-10 w-10 text-mtechOrange mx-auto mb-3" />
              <h3 className="text-lg font-semibold mb-1">Social Media</h3>
              <p className="text-sm text-mtechGray-100">Instagram posts & content</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Details */}
      <section className="py-20 bg-white">
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto space-y-24">
          <ServiceSection 
            id="web-development"
            title="Web Development"
            description="We create custom, responsive websites and web applications tailored to your business needs. Our development team uses the latest technologies to deliver high-quality solutions that drive results."
            icon={<Monitor className="h-6 w-6 text-mtechOrange" />}
            features={[
              "Custom website design and development",
              "Responsive design for all devices",
              "Website maintenance and updates",
              "CMS integration for easy content management",
              "Performance optimization for faster loading"
            ]}
            image="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
          />
          
          <ServiceSection 
            id="web-hosting"
            title="Web Hosting"
            description="Our reliable hosting services provide the foundation for your online presence. With top-tier security, excellent performance, and technical support, we ensure your website is always available to your customers."
            icon={<Server className="h-6 w-6 text-mtechOrange" />}
            features={[
              "High-performance servers for optimal speed",,
              "Backups for data security",
              "SSL certificates for secure browsing",
              "Scalable solutions as your business grows",
              "Technical support"
            ]}
            image="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
            reversed
          />
          
          <ServiceSection 
            id="software-testing"
            title="Software Testing"
            description="Our comprehensive software testing services help ensure your applications are bug-free, secure, and perform optimally. We identify and address issues before they impact your users, saving you time and resources."
            icon={<FileSearch className="h-6 w-6 text-mtechOrange" />}
            features={[
              "Functional and regression testing",
              "Mobile application testing",
              "User experience testing",
              "Automated and manual testing approaches"
            ]}
            image="https://images.unsplash.com/photo-1573164574511-73c773193279?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
          />

          <ServiceSection 
            id="graphic-design"
            title="Graphic Design"
            description="Make a lasting impression with professional graphic design services. From logos and branding to marketing materials, we create visuals that capture your brand's essence and resonate with your audience."
            icon={<Palette className="h-6 w-6 text-mtechOrange" />}
            features={[
              "Logo design and brand identity",
              "Business cards and stationery",
              "Marketing materials and flyers",
              "Banner ads and digital graphics",
              "Brand style guides"
            ]}
            image="https://images.unsplash.com/photo-1626785774573-4b799315345d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
            reversed
          />

          <ServiceSection 
            id="social-media"
            title="Social Media Content"
            description="Elevate your social media presence with eye-catching content designed for engagement. We create custom Instagram posts, stories, and visual content that helps your brand stand out and connect with your audience."
            icon={<Instagram className="h-6 w-6 text-mtechOrange" />}
            features={[
              "Custom Instagram post designs",
              "Story templates and highlights",
              "Promotional graphics and announcements",
              "Consistent brand aesthetic across posts",
              "Content calendars and scheduling support"
            ]}
            image="https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
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
              <div className="h-12 w-12 bg-mtechOrange/10 text-mtechOrange rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-mtechGray-900">Proven Results</h3>
              <p className="text-mtechGray-700">
                Our solutions are designed to deliver measurable business outcomes and ROI.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="h-12 w-12 bg-mtechOrange/10 text-mtechOrange rounded-lg flex items-center justify-center mb-4">
                <Shield className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-mtechGray-900">Security Focus</h3>
              <p className="text-mtechGray-700">
                We prioritize the security of your data and applications at every stage.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="h-12 w-12 bg-mtechOrange/10 text-mtechOrange rounded-lg flex items-center justify-center mb-4">
                <Clock className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-mtechGray-900">Timely Delivery</h3>
              <p className="text-mtechGray-700">
                We value your time and ensure projects are delivered on schedule.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="h-12 w-12 bg-mtechOrange/10 text-mtechOrange rounded-lg flex items-center justify-center mb-4">
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
              Our Plans
            </h2>
            <p className="text-xl text-mtechGray-600 max-w-3xl mx-auto">
              Choose the perfect plan for your business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Software Testing Plan */}
            <div className="border border-mtechGray-100 rounded-xl shadow-sm overflow-hidden">
              <div className="p-6 border-b border-mtechGray-100">
                <h3 className="text-lg font-semibold text-mtechGray-900">Software Testing</h3>
                <div className="mt-4 flex items-baseline">
                  <span className="text-3xl font-bold text-mtechGray-900">USD $15</span>
                  <span className="ml-1 text-mtechGray-500">/ hour</span>
                </div>
                <p className="mt-2 text-sm text-mtechGray-500">Professional QA services</p>
              </div>
              <div className="p-6 space-y-4">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-mtechOrange mr-2 mt-1 flex-shrink-0" />
                    <span className="text-mtechGray-700">Functional testing</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-mtechOrange mr-2 mt-1 flex-shrink-0" />
                    <span className="text-mtechGray-700">Regression testing</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-mtechOrange mr-2 mt-1 flex-shrink-0" />
                    <span className="text-mtechGray-700">Detailed reporting</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-mtechOrange mr-2 mt-1 flex-shrink-0" />
                    <span className="text-mtechGray-700">Bug tracking</span>
                  </li>
                </ul>
                <Button className="w-full bg-mtechBlue-600 hover:bg-mtechOrange" asChild>
                  <Link to="/contact">
                    Contact Us
                  </Link>
                </Button>
              </div>
            </div>

            {/* Web Development Plan - Moved here from last position */}
            <div className="border-2 border-mtechBlue-500 rounded-xl shadow-lg overflow-hidden relative">
              <div className="absolute top-0 right-0 bg-mtechBlue-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                POPULAR
              </div>
              <div className="p-6 border-b border-mtechGray-100">
                <h3 className="text-lg font-semibold text-mtechGray-900">Web Development</h3>
                <div className="mt-4 flex items-baseline">
                  <span className="text-3xl font-bold text-mtechGray-900"> USD $350</span>
                  <span className="ml-1 text-mtechGray-500">/ starter</span>
                </div>
                <p className="mt-2 text-sm text-mtechGray-500">Perfect for small businesses</p>
              </div>
              <div className="p-6 space-y-4">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-mtechOrange mr-2 mt-1 flex-shrink-0" />
                    <span className="text-mtechGray-700">Basic website (up to 4 pages)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-mtechOrange mr-2 mt-1 flex-shrink-0" />
                    <span className="text-mtechGray-700">Mobile responsive design</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-mtechOrange mr-2 mt-1 flex-shrink-0" />
                    <span className="text-mtechGray-700">Contact form</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-mtechOrange mr-2 mt-1 flex-shrink-0" />
                    <span className="text-mtechGray-700">Basic SEO setup</span>
                  </li>
                </ul>
                <Button className="w-full bg-mtechBlue-600 hover:bg-mtechOrange" asChild>
                  <Link to="/contact">
                    Get Started
                  </Link>
                </Button>
              </div>
            </div>

            {/* Web Hosting Plan - Moved here from middle position */}
            <div className="border border-mtechGray-100 rounded-xl shadow-sm overflow-hidden">
              <div className="p-6 border-b border-mtechGray-100">
                <h3 className="text-lg font-semibold text-mtechGray-900">Web Hosting</h3>
                <div className="mt-4 flex items-baseline">
                  <span className="text-3xl font-bold text-mtechGray-900"> USD $6</span>
                  <span className="ml-1 text-mtechGray-500">/ month</span>
                </div>
                <p className="mt-2 text-sm text-mtechGray-500"></p>
              </div>
              <div className="p-6 space-y-4">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-mtechOrange mr-2 mt-1 flex-shrink-0" />
                    <span className="text-mtechGray-700">High-performance hosting</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-mtechOrange mr-2 mt-1 flex-shrink-0" />
                    <span className="text-mtechGray-700">Free SSL certificate</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-mtechOrange mr-2 mt-1 flex-shrink-0" />
                    <span className="text-mtechGray-700">Site backups</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-mtechOrange mr-2 mt-1 flex-shrink-0" />
                    <span className="text-mtechGray-700">Tech support</span>
                  </li>
                </ul>
                <Button className="w-full bg-mtechBlue-600 hover:bg-mtechOrange" asChild>
                  <Link to="/contact">
                    Get Started
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
            Contact us today for a consultation. Let's discuss how we can help your business succeed online.
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
