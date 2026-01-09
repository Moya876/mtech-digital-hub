
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import ContactForm from "@/components/ContactForm";

const Contact = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-mtechBlue-800 to-mtechBlue-950 text-white py-16">
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl opacity-90">
              Have a question or ready to start a project? Get in touch with our team today.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-16 bg-white">
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
            <div>
              <h2 className="text-3xl font-bold text-mtechGray-900 mb-6">Get in Touch</h2>
              <p className="text-mtechGray-700 mb-8">
                Fill out the form and our team will get back to you within 24 hours. We're here to answer any questions you may have about our services.
              </p>
              
              <div className="space-y-6">
                <div className="flex">
                  <div className="h-12 w-12 bg-mtechOrange/10 text-mtechOrange rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-mtechGray-900 mb-1">Phone</h3>
                    <p className="text-mtechGray-700">876-833-1524</p>
                    <a 
                      href="https://wa.me/18768331524" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 mt-2 px-4 py-2 bg-green-500 hover:bg-green-600 text-white text-sm font-medium rounded-lg transition-colors"
                    >
                      <MessageCircle className="h-4 w-4" />
                      Chat on WhatsApp
                    </a>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="h-12 w-12 bg-mtechOrange/10 text-mtechOrange rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-mtechGray-900 mb-1">Email</h3>
                    <p className="text-mtechGray-700">info@mtechcorpja.com</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="h-12 w-12 bg-mtechOrange/10 text-mtechOrange rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-mtechGray-900 mb-1">Address</h3>
                    <p className="text-mtechGray-700">Ocho Rios, Jamaica</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="h-12 w-12 bg-mtechOrange/10 text-mtechOrange rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-mtechGray-900 mb-1">Business Hours</h3>
                    <p className="text-mtechGray-700">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p className="text-mtechGray-700">Saturday: 10:00 AM - 5:00 PM</p>
                    <p className="text-mtechGray-700">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl border border-mtechGray-100 shadow-sm p-8">
              <h2 className="text-2xl font-bold text-mtechGray-900 mb-6">Send Us a Message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
      
      {/* Google Map */}
      <section className="py-12 bg-mtechGray-50">
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-mtechGray-900 mb-4">Our Location</h2>
            <p className="text-mtechGray-700 max-w-xl mx-auto">
              Find us in beautiful Ocho Rios, Jamaica
            </p>
          </div>
          
          <div className="rounded-xl overflow-hidden shadow-lg max-w-5xl mx-auto h-96">
            <iframe
              title="M Tech Corp Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30630.92817484026!2d-77.12372382795079!3d18.407636760313808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8edafefc5a5fffff%3A0x3106f3cbe5ef0f24!2sOcho%20Rios%2C%20Jamaica!5e0!3m2!1sen!2sus!4v1659930399143!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
