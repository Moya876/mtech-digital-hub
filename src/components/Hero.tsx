
import { ArrowRight, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroTechImg from "@/assets/hero-tech.jpg";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-mtechBlue-800 to-mtechBlue-950 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgZmlsbD0iIzIxMjUzNSIgZmlsbC1vcGFjaXR5PSIwLjEyIj4KICAgICAgICAgICAgPHBhdGggZD0iTTM2IDM0aDR2MWgtNHYtMXptMC0yaDF2NWgtMXYtNXptMi0yaDF2NEwzNiAzN3YxbDQtNC00LTR2MWwyIDN6Ii8+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=')]" 
             style={{ opacity: "0.2" }} />
      </div>
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto py-20 md:py-28 lg:py-32 relative">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight animate-fade-in">
              Building Digital <span className="text-mtechOrange">Solutions</span> for Your Business
            </h1>
            <p className="mt-6 text-xl text-mtechGray-100 max-w-lg animate-fade-in animation-delay-100">
              Professional web development, reliable hosting services, and comprehensive software testing solutions to help your business thrive online.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 animate-fade-in animation-delay-200">
              <Button variant="support" className="px-6 py-6 text-lg" asChild>
                <Link to="/quote">
                  Get a Free Quote <ArrowRight className="ml-2" size={18} />
                </Link>
              </Button>
              <Button variant="outline" className="bg-transparent border-support-brand-foreground text-support-brand-foreground hover:bg-support-brand-foreground/10 hover:text-support-brand-foreground px-6 py-6 text-lg" asChild>
                <a href="https://wa.me/18768331524?text=Hi%20MTech%20Corp%2C%20I%27d%20like%20to%20discuss%20a%20project." target="_blank" rel="noopener noreferrer">
                  <MessageSquare aria-hidden="true" /> WhatsApp Us
                </a>
              </Button>
            </div>
            <p className="mt-4 text-sm text-support-brand-foreground/90 animate-fade-in animation-delay-200">
              Free project estimate · 5★ Rated Support
            </p>
          </div>
          <div className="md:w-1/2 md:pl-10">
            <div className="rounded-lg bg-white/10 backdrop-blur-sm p-2 border border-white/20 shadow-2xl animate-fade-in animation-delay-300">
              <img 
                src={heroTechImg} 
                alt="Tech illustration" 
                className="w-full h-auto rounded-md object-cover"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default Hero;
