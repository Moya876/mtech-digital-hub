import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import teamImg from "@/assets/team-collaboration.jpg";
import Hero from "@/components/Hero";
import TrustedBy from "@/components/TrustedBy";
 import StatsCounter from "@/components/StatsCounter";
import ServiceCard from "@/components/ServiceCard";
 import FeaturedProjects from "@/components/FeaturedProjects";
import Testimonial from "@/components/Testimonial";
import FAQ from "@/components/FAQ";
 import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Monitor, Server, FileSearch, ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>MTech Corp - Web Development & Software Testing in Jamaica</title>
        <meta name="description" content="MTech Corp offers custom web development, software testing, web hosting, graphic design & social media services for businesses in Jamaica and worldwide." />
        <link rel="canonical" href="https://mtechcorpja.com/" />
        <meta property="og:title" content="MTech Corp - Web Development & Software Testing" />
        <meta property="og:description" content="Custom web development, software testing, and digital solutions for businesses in Jamaica and beyond." />
        <meta property="og:url" content="https://mtechcorpja.com/" />
        <meta property="og:type" content="website" />
      </Helmet>
      <div className="flex flex-col min-h-screen">
        <Hero />

      {/* Trusted By Section */}
      <TrustedBy />
 
       {/* Stats Counter Section */}
       <StatsCounter />

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-mtechNavy mb-4">
              Our Services
            </h2>
            <p className="text-xl text-mtechGray-600 max-w-3xl mx-auto">
              We provide cutting-edge solutions to help your business succeed in the digital world.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ScrollReveal delay={0.1}>
              <ServiceCard
                title="Web Development"
                description="Custom website solutions tailored to your business needs, from simple landing pages to complex web applications."
                icon={<Monitor className="h-7 w-7" />}
                href="/services"
              />
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <ServiceCard
                title="Web Hosting"
                description="Reliable hosting services with top-tier security, performance, and 24/7 technical support for your peace of mind."
                icon={<Server className="h-7 w-7" />}
                href="/services"
              />
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <ServiceCard
                title="Software Testing"
                description="Comprehensive testing solutions ensuring your software applications are bug-free, secure, and perform optimally."
                icon={<FileSearch className="h-7 w-7" />}
                href="/services"
              />
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.4} className="text-center mt-12">
            <Button variant="outline" className="border-mtechOrange text-mtechOrange hover:bg-mtechOrange/10" asChild>
              <Link to="/services">
                View All Services <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </ScrollReveal>
        </div>
      </section>

      {/* Featured Projects Section */}
      <FeaturedProjects />

      {/* About Section */}
      <section className="py-20 bg-mtechGray-50">
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <img
                src={teamImg}
                alt="M Tech Corp Team"
                className="rounded-lg shadow-lg object-cover w-full h-auto"
              />
            </ScrollReveal>
            <ScrollReveal direction="right" delay={0.2}>
              <h2 className="text-3xl md:text-4xl font-bold text-mtechNavy mb-6">
                About M Tech Corp
              </h2>
              <p className="text-mtechGray-700 mb-6">
M Tech Corp, founded in Jamaica in 2021, provides cutting-edge technology solutions for small businesses aiming to excel online. Based originally in Ocho Rios, we now serve clients across the region. Our core services include AI-assisted Web Development, reliable Web Hosting, and expert Software Testing Services, all designed to ensure your digital presence is professional, efficient, and impactful.
              </p>
              <p className="text-mtechGray-700 mb-8">
                With our comprehensive range of services including web development, hosting, and software testing, we ensure that your digital presence is professional, reliable, and effective.
              </p>
              <Button className="bg-mtechOrange hover:bg-mtechOrange-dark" asChild>
                <Link to="/about">
                  Learn More About Us <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-mtechNavy mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-mtechGray-600 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our clients have to say about working with M Tech Corp.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ScrollReveal delay={0.1}>
              <Testimonial
                quote="M Tech Corp transformed our website into a modern, responsive platform that truly represents our brand. Their attention to detail and customer service was exceptional."
                author="Ajoya Martin"
                company="Ocean View Beach Hotel"
              />
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <Testimonial
                quote="The hosting service provided by M Tech Corp has been reliable and secure. Their technical support team is always available and resolves issues promptly."
                author="Adam Toyloy"
                company="AutoLuv"
              />
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <Testimonial
                quote="Their software testing service helped us identify and fix critical bugs before launch. The team's thoroughness and expertise saved us from potential customer dissatisfaction."
                author="Dimitri Harding"
                company="Headshots by AI"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ />

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-mtechNavy to-mtechNavy-dark text-white">
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Take Your Business to the Next Level?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Contact us today to discuss how our web development, hosting, and software testing services can benefit your business.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="bg-mtechOrange text-white hover:bg-mtechOrange-dark" size="lg" asChild>
                <Link to="/contact">
                  Contact Us
                </Link>
              </Button>
              <Button variant="outline" className="border-white bg-transparent hover:bg-mtechOrange hover:border-mtechOrange" size="lg" asChild>
                <Link to="/services">
                  Explore Services
                </Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
      </div>
    </>
  );
};

export default Index;
