
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-mtechGray-950 text-white">
      <div className="container px-4 sm:px-6 lg:px-8 py-12 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div>
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <span className="text-mtechBlue-400">M Tech</span>
              <span className="text-white ml-1">Corp</span>
            </h2>
            <p className="text-mtechGray-300 mb-6">
              Providing cutting-edge web development, reliable hosting solutions, and comprehensive software testing services.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-mtechGray-400 hover:text-mtechBlue-400 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="#" 
                className="text-mtechGray-400 hover:text-mtechBlue-400 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="#" 
                className="text-mtechGray-400 hover:text-mtechBlue-400 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="#" 
                className="text-mtechGray-400 hover:text-mtechBlue-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-mtechGray-800 pb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-mtechGray-300 hover:text-mtechBlue-400 transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/services" className="text-mtechGray-300 hover:text-mtechBlue-400 transition-colors">Services</Link>
              </li>
              <li>
                <Link to="/about" className="text-mtechGray-300 hover:text-mtechBlue-400 transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/blog" className="text-mtechGray-300 hover:text-mtechBlue-400 transition-colors">Blog</Link>
              </li>
              <li>
                <Link to="/contact" className="text-mtechGray-300 hover:text-mtechBlue-400 transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-mtechGray-800 pb-2">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-mtechGray-300 hover:text-mtechBlue-400 transition-colors">Web Development</Link>
              </li>
              <li>
                <Link to="/services" className="text-mtechGray-300 hover:text-mtechBlue-400 transition-colors">Web Hosting</Link>
              </li>
              <li>
                <Link to="/services" className="text-mtechGray-300 hover:text-mtechBlue-400 transition-colors">Software Testing</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-mtechGray-800 pb-2">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-mtechBlue-400 mr-2 mt-1 flex-shrink-0" />
                <span className="text-mtechGray-300">Ocho Rios, Jamaica</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-mtechBlue-400 mr-2 flex-shrink-0" />
                <span className="text-mtechGray-300">876-833-1524</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-mtechBlue-400 mr-2 flex-shrink-0" />
                <a href="mailto:contact@mtechcorp.com" className="text-mtechGray-300 hover:text-mtechBlue-400 transition-colors">
                  contact@mtechcorp.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-mtechGray-800 mt-12 pt-6 text-center text-mtechGray-400">
          <p>&copy; {currentYear} M Tech Corp. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
