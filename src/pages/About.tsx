
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Target, Award, Users, Clipboard } from "lucide-react";

const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-mtechBlue-800 to-mtechBlue-950 text-white py-20">
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About M Tech Corp</h1>
            <p className="text-xl opacity-90">
              We're a team of passionate tech professionals dedicated to helping businesses succeed in the digital landscape.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-mtechGray-50 rounded-xl p-8">
              <div className="h-14 w-14 bg-mtechOrange/10 text-mtechOrange rounded-full flex items-center justify-center mb-6">
                <Target className="h-7 w-7" />
              </div>
              <h2 className="text-2xl font-bold text-mtechGray-900 mb-4">Our Mission</h2>
              <p className="text-mtechGray-700">
We empower businesses through innovative and evolving digital solutions. By harnessing modern web development aided by AI tools, secure hosting, and progressive test automation capabilities, our mission is to fuel client growth, optimize efficiency, and sharpen their competitive edge, delivering technological value that consistently surpasses expectations.
              </p>
            </div>
            <div className="bg-mtechGray-50 rounded-xl p-8">
              <div className="h-14 w-14 bg-mtechOrange/10 text-mtechOrange rounded-full flex items-center justify-center mb-6">
                <Award className="h-7 w-7" />
              </div>
              <h2 className="text-2xl font-bold text-mtechGray-900 mb-4">Our Vision</h2>
              <p className="text-mtechGray-700">
                To be the leading technology partner for businesses in Jamaica and the Caribbean, recognized for our technical excellence, client-focused approach, and commitment to delivering solutions that make a measurable difference.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company History */}
      <section className="py-20 bg-mtechGray-50">
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-mtechGray-900 mb-4">
                Our Story
              </h2>
              <p className="text-xl text-mtechGray-600">
                The journey of M Tech Corp from inception to industry leadership
              </p>
            </div>

            <div className="relative border-l-2 border-mtechOrange pl-8 ml-4 space-y-12">
              <div className="relative">
                <div className="absolute -left-11 mt-1.5 h-6 w-6 rounded-full border-4 border-mtechOrange bg-white"></div>
                <h3 className="text-xl font-bold text-mtechGray-900 mb-2">2021: The Beginning</h3>
                <p className="text-mtechGray-700 mb-4">
                 Founded in Ocho Rios, M Tech Corp started its journey with an initial focus on building professional WordPress websites for small businesses.
                </p>
              </div>
              
              <div className="relative">
                <div className="absolute -left-11 mt-1.5 h-6 w-6 rounded-full border-4 border-mtechOrange bg-white"></div>
                <h3 className="text-xl font-bold text-mtechGray-900 mb-2">2022: Adding Quality Assurance</h3>
                <p className="text-mtechGray-700 mb-4">
                  We expanded our technical capabilities by introducing Test Automation services, utilizing powerful tools like Cypress and WebdriverIO to ensure application quality and reliability for our clients.
                </p>
              </div>
              
              <div className="relative">
                <div className="absolute -left-11 mt-1.5 h-6 w-6 rounded-full border-4 border-mtechOrange bg-white"></div>
                <h3 className="text-xl font-bold text-mtechGray-900 mb-2">2023: Expanding Infrastructure Services</h3>
                <p className="text-mtechGray-700 mb-4">
                 To provide more comprehensive solutions, we began offering Web Hosting services, allowing clients to manage their online presence seamlessly with us.
                </p>
              </div>
              
              <div className="relative">
                <div className="absolute -left-11 mt-1.5 h-6 w-6 rounded-full border-4 border-mtechOrange bg-white"></div>
                <h3 className="text-xl font-bold text-mtechGray-900 mb-2">Today: Comprehensive Digital Solutions</h3>
                <p className="text-mtechGray-700 mb-4">
                  Today, M Tech Corp offers a focused suite of essential digital services, including custom Web Development, reliable Web Hosting, and specialized Software Testing (with expertise in Test Automation), supporting businesses in Jamaica and beyond.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-mtechGray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-mtechGray-600 max-w-3xl mx-auto">
              These principles guide everything we do and every decision we make.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="border border-mtechGray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="h-16 w-16 bg-mtechOrange/10 text-mtechOrange rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-mtechGray-900 mb-3">Client-Centric</h3>
              <p className="text-mtechGray-700">
                We put our clients' needs first and tailor our solutions to address their unique challenges.
              </p>
            </div>
            
            <div className="border border-mtechGray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="h-16 w-16 bg-mtechOrange/10 text-mtechOrange rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-mtechGray-900 mb-3">Excellence</h3>
              <p className="text-mtechGray-700">
                We strive for the highest quality in everything we do, from code to customer service.
              </p>
            </div>
            
            <div className="border border-mtechGray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="h-16 w-16 bg-mtechOrange/10 text-mtechOrange rounded-full flex items-center justify-center mx-auto mb-4">
                <Clipboard className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-mtechGray-900 mb-3">Innovation</h3>
              <p className="text-mtechGray-700">
                We embrace new technologies and ideas to deliver cutting-edge solutions.
              </p>
            </div>
            
            <div className="border border-mtechGray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="h-16 w-16 bg-mtechOrange/10 text-mtechOrange rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-mtechGray-900 mb-3">Integrity</h3>
              <p className="text-mtechGray-700">
                We conduct business with honesty, transparency, and strong ethical principles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section (Optional) */}
      <section className="py-20 bg-mtechGray-50">
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-mtechGray-900 mb-4">
              Meet Our Leadership
            </h2>
            <p className="text-xl text-mtechGray-600 max-w-3xl mx-auto">
              The experienced professionals guiding our company's success
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl overflow-hidden shadow-sm">
              <img 
                src="/lovable-uploads/dbe71c58-0ea3-4d1d-97be-343df0232183.png" 
                alt="CEO" 
                className="w-full h-64 object-cover object-center object-top"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-mtechGray-900 mb-1">Vanessa Russell</h3>
                <p className="text-mtechOrange font-medium mb-4">Founder & CEO</p>
                <p className="text-mtechGray-700">
                  With over 8 years of experience in technology, Vanessa leads our company's vision and strategy.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl overflow-hidden shadow-sm">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
                alt="CTO" 
                className="w-full h-64 object-cover object-center object-top"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-mtechGray-900 mb-1">Lisa Brown</h3>
                <p className="text-mtechOrange font-medium mb-4">Chief Technology Officer</p>
                <p className="text-mtechGray-700">
                  Lisa oversees our technical operations, ensuring we deliver cutting-edge solutions to our clients.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl overflow-hidden shadow-sm">
              <img 
                src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
                alt="COO" 
                className="w-full h-64 object-cover object-center object-top"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-mtechGray-900 mb-1">David Thompson</h3>
                <p className="text-mtechOrange font-medium mb-4">Chief Operating Officer</p>
                <p className="text-mtechGray-700">
                  David manages our day-to-day operations, ensuring project excellence and client satisfaction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-mtechBlue-600 to-mtechBlue-800 text-white">
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Want to Work with Us?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Discover how M Tech Corp can help your business thrive in the digital world.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="bg-white text-mtechBlue-700 hover:bg-mtechOrange hover:text-white" size="lg" asChild>
              <Link to="/contact">
                Contact Us
              </Link>
            </Button>
            <Button variant="outline" className="border-white bg-transparent hover:bg-mtechOrange hover:border-mtechOrange" size="lg" asChild>
              <Link to="/services">
                Our Services
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
