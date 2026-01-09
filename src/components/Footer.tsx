import { Link } from "react-router-dom";
import { Facebook, Instagram, Mail, Phone, MapPin, Clock } from "lucide-react";
import Logo from "@/components/Logo";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white text-black">
      <div className="container px-4 sm:px-6 lg:px-8 py-12 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <Logo className="text-black" size="lg" variant="default" asLink={true} />
            </div>
            <p className="mt-2 text-sm text-mtechGray-600 italic">
              "You Think, We Design"
            </p>
            <p className="text-mtechGray-600 mb-6 mt-4">
              Providing cutting-edge web development, reliable hosting solutions, and comprehensive software testing services.
            </p>
            <div className="flex justify-center space-x-4">
              <a 
                href="https://www.facebook.com/Moyatechcorp" 
                className="text-mtechOrange hover:text-mtechBlue transition-colors"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook size={24} />
              </a>
              <a 
                href="https://www.instagram.com/mtechcorp/" 
                className="text-mtechOrange hover:text-mtechBlue transition-colors"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-mtechGray-200 pb-2 text-mtechOrange">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-mtechGray-600 hover:text-mtechOrange transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/services" className="text-mtechGray-600 hover:text-mtechOrange transition-colors">Services</Link>
              </li>
              <li>
                <Link to="/about" className="text-mtechGray-600 hover:text-mtechOrange transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-mtechGray-600 hover:text-mtechOrange transition-colors">Portfolio</Link>
              </li>
              <li>
                <Link to="/contact" className="text-mtechGray-600 hover:text-mtechOrange transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-mtechGray-200 pb-2 text-mtechOrange">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services#web-development" className="text-mtechGray-600 hover:text-mtechOrange transition-colors">Web Development</Link>
              </li>
              <li>
                <Link to="/services#web-hosting" className="text-mtechGray-600 hover:text-mtechOrange transition-colors">Web Hosting</Link>
              </li>
              <li>
                <Link to="/services#software-testing" className="text-mtechGray-600 hover:text-mtechOrange transition-colors">Software Testing</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-mtechGray-200 pb-2 text-mtechOrange">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-mtechOrange mr-2 mt-1 flex-shrink-0" />
                <span className="text-mtechGray-600">Ocho Rios, Jamaica</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-mtechOrange mr-2 flex-shrink-0" />
                <a 
                  href="tel:876-833-1524" 
                  className="text-mtechGray-600 hover:text-mtechOrange transition-colors"
                >
                  876-833-1524
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-mtechOrange mr-2 flex-shrink-0" />
                <a 
                  href="mailto:info@mtechcoprja.com" 
                  className="text-mtechGray-600 hover:text-mtechOrange transition-colors"
                >
                  info@mtechcoprja.com
                </a>
              </li>
              <li className="flex items-start">
                <Clock className="w-5 h-5 text-mtechOrange mr-2 mt-1 flex-shrink-0" />
                <div className="text-mtechGray-600">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p>Saturday: 10:00 AM - 5:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-mtechGray-200 mt-12 pt-6 text-center text-mtechGray-600">
          <p>&copy; {currentYear} M Tech Corp. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
