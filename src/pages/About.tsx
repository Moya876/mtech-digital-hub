import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Target, Award, Users, Clipboard, Phone, Mail } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-mtechBlue-800 to-mtechBlue-950 text-white py-20">
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">About M Tech Corp</h1>
              <p className="text-xl opacity-90">
                We're a team of passionate tech professionals dedicated to helping businesses succeed in the digital landscape.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <ScrollReveal direction="left">
              <div className="bg-mtechGray-50 rounded-xl p-8">
                <div className="h-14 w-14 bg-mtechOrange/10 text-mtechOrange rounded-full flex items-center justify-center mb-6">
                  <Target className="h-7 w-7" />
                </div>
                <h2 className="text-2xl font-bold text-mtechGray-900 mb-4">Our Mission</h2>
                <p className="text-mtechGray-700">
We empower businesses through innovative and evolving digital solutions. By harnessing modern web development aided by AI tools, secure hosting, and progressive test automation capabilities, our mission is to fuel client growth, optimize efficiency, and sharpen their competitive edge, delivering technological value that consistently surpasses expectations                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="bg-mtechGray-50 rounded-xl p-8">
                <div className="h-14 w-14 bg-mtechOrange/10 text-mtechOrange rounded-full flex items-center justify-center mb-6">
                  <Award className="h-7 w-7" />
                </div>
                <h2 className="text-2xl font-bold text-mtechGray-900 mb-4">Our Vision</h2>
                <p className="text-mtechGray-700">
                  To be the leading technology partner for small businesses, recognized for our technical excellence that evolves with technological advancements, including the strategic use of AI. We remain client-focused, committed to delivering solutions that adapt, innovate, and make a measurable difference.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Company History */}
      <section className="py-20 bg-mtechGray-50">
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-mtechGray-900 mb-4">
                  Our Story
                </h2>
                <p className="text-xl text-mtechGray-600">
                  The journey of M Tech Corp from inception to industry leadership
                </p>
              </div>
            </ScrollReveal>

            <div className="relative border-l-2 border-mtechOrange pl-8 ml-4 space-y-12">
              {[
                { title: "2021: The Beginning", text: "Founded in Ocho Rios, M Tech Corp started its journey with an initial focus on building professional WordPress websites for small businesses." },
                { title: "2022: Adding Quality Assurance", text: "We expanded our technical capabilities by introducing Test Automation services, utilizing powerful tools like Cypress and WebdriverIO to ensure application quality and reliability for our clients." },
                { title: "2023: Expanding Infrastructure Services", text: "To provide more comprehensive solutions, we began offering Web Hosting services, allowing clients to manage their online presence seamlessly with us." },
                { title: "2025: Registered Business", text: 'MtechCorp JA was officially registered, embracing the vision "You think, We design." We broadened our scope to deliver custom web development, software quality assurance, UI/UX design, and digital solutions, helping clients bring their ideas to life with creativity and precision.' },
                { title: "Today: Comprehensive Digital Solutions", text: "Today, M Tech Corp offers a focused suite of essential digital services, including custom Web Development, reliable Web Hosting, and specialized Software Testing (with expertise in Test Automation), supporting businesses in Jamaica and beyond." },
              ].map((item, index) => (
                <ScrollReveal key={index} delay={index * 0.1}>
                  <div className="relative">
                    <div className="absolute -left-11 mt-1.5 h-6 w-6 rounded-full border-4 border-mtechOrange bg-white"></div>
                    <h3 className="text-xl font-bold text-mtechGray-900 mb-2">{item.title}</h3>
                    <p className="text-mtechGray-700 mb-4">{item.text}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-mtechGray-900 mb-4">
                Our Core Values
              </h2>
              <p className="text-xl text-mtechGray-600 max-w-3xl mx-auto">
                These principles guide everything we do and every decision we make.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Users, title: "Client-Centric", text: "We put our clients' needs first and tailor our solutions to address their unique challenges." },
              { icon: Award, title: "Excellence", text: "We strive for the highest quality in everything we do, from code to customer service." },
              { icon: Clipboard, title: "Innovation", text: "We embrace new technologies and ideas to deliver cutting-edge solutions." },
              { icon: Users, title: "Integrity", text: "We conduct business with honesty, transparency, and strong ethical principles." },
            ].map((item, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="border border-mtechGray-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow text-center">
                  <div className="h-16 w-16 bg-mtechOrange/10 text-mtechOrange rounded-full flex items-center justify-center mx-auto mb-4">
                    <item.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-mtechGray-900 mb-3">{item.title}</h3>
                  <p className="text-mtechGray-700">{item.text}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why M Tech Corp */}
      <section className="py-20 bg-mtechGray-50">
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-mtechGray-900 mb-4">
                Why M Tech Corp
              </h2>
              <p className="text-xl text-mtechGray-600 max-w-3xl mx-auto">
                Built on expertise, driven by purpose, and focused on delivering real results
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Target, title: "Strategic Vision", text: "Every project is guided by a clear strategy rooted in understanding our clients' goals, ensuring technology serves as a catalyst for growth." },
              { icon: Award, title: "Technical Excellence", text: "Our team brings deep expertise in web development, quality assurance, and digital design — delivering solutions built to perform and scale." },
              { icon: Users, title: "Partnership Approach", text: "We don't just build — we partner with you. From concept to launch and beyond, we're invested in your long-term digital success." },
            ].map((item, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="bg-white rounded-xl overflow-hidden shadow-sm p-8 text-center">
                  <div className="h-16 w-16 bg-mtechOrange/10 text-mtechOrange rounded-full flex items-center justify-center mx-auto mb-6">
                    <item.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-mtechGray-900 mb-3">{item.title}</h3>
                  <p className="text-mtechGray-700">{item.text}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>


      {/* CTA */}
      <ScrollReveal>
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
      </ScrollReveal>
    </div>
  );
};

export default About;
