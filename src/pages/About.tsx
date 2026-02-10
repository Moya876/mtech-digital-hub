import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Target, Award, Users, Clipboard, Phone, Mail } from "lucide-react";

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
We empower businesses through innovative and evolving digital solutions. By harnessing modern web development aided by AI tools, secure hosting, and progressive test automation capabilities, our mission is to fuel client growth, optimize efficiency, and sharpen their competitive edge, delivering technological value that consistently surpasses expectations              </p>
            </div>
            <div className="bg-mtechGray-50 rounded-xl p-8">
              <div className="h-14 w-14 bg-mtechOrange/10 text-mtechOrange rounded-full flex items-center justify-center mb-6">
                <Award className="h-7 w-7" />
              </div>
              <h2 className="text-2xl font-bold text-mtechGray-900 mb-4">Our Vision</h2>
              <p className="text-mtechGray-700">
                To be the leading technology partner for small businesses, recognized for our technical excellence that evolves with technological advancements, including the strategic use of AI. We remain client-focused, committed to delivering solutions that adapt, innovate, and make a measurable difference.
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
                <h3 className="text-xl font-bold text-mtechGray-900 mb-2">2025: Registered Business</h3>
                <p className="text-mtechGray-700 mb-4">
                  MtechCorp JA was officially registered, embracing the vision "You think, We design." We broadened our scope to deliver custom web development, software quality assurance, UI/UX design, and digital solutions, helping clients bring their ideas to life with creativity and precision.
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

      {/* Why M Tech Corp */}
      <section className="py-20 bg-mtechGray-50">
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-mtechGray-900 mb-4">
              Why M Tech Corp
            </h2>
            <p className="text-xl text-mtechGray-600 max-w-3xl mx-auto">
              Built on expertise, driven by purpose, and focused on delivering real results
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl overflow-hidden shadow-sm p-8 text-center">
              <div className="h-16 w-16 bg-mtechOrange/10 text-mtechOrange rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-mtechGray-900 mb-3">Strategic Vision</h3>
              <p className="text-mtechGray-700">
                Every project is guided by a clear strategy rooted in understanding our clients' goals, ensuring technology serves as a catalyst for growth.
              </p>
            </div>
            
            <div className="bg-white rounded-xl overflow-hidden shadow-sm p-8 text-center">
              <div className="h-16 w-16 bg-mtechOrange/10 text-mtechOrange rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-mtechGray-900 mb-3">Technical Excellence</h3>
              <p className="text-mtechGray-700">
                Our team brings deep expertise in web development, quality assurance, and digital design — delivering solutions built to perform and scale.
              </p>
            </div>
            
            <div className="bg-white rounded-xl overflow-hidden shadow-sm p-8 text-center">
              <div className="h-16 w-16 bg-mtechOrange/10 text-mtechOrange rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-mtechGray-900 mb-3">Partnership Approach</h3>
              <p className="text-mtechGray-700">
                We don't just build — we partner with you. From concept to launch and beyond, we're invested in your long-term digital success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Section - Phone and Email Modifications */}
      <section className="py-20 bg-mtechGray-50">
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center items-center space-x-4 mt-8">
              <a 
                href="tel:876-833-1524" 
                className="text-mtechBlue-600 hover:text-mtechOrange transition-colors flex items-center"
              >
                <Phone className="mr-2" /> 876-833-1524
              </a>
              <a 
                href="mailto:mtechcorpja@gmail.com" 
                className="text-mtechBlue-600 hover:text-mtechOrange transition-colors flex items-center"
              >
                <Mail className="mr-2" /> mtechcorpja@gmail.com
              </a>
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
