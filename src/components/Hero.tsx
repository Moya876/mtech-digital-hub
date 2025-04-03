
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

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
              Building Digital <span className="text-mtechAccent">Solutions</span> for Your Business
            </h1>
            <p className="mt-6 text-xl text-mtechGray-100 max-w-lg animate-fade-in animation-delay-100">
              Professional web development, reliable hosting services, and comprehensive software testing solutions to help your business thrive online.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 animate-fade-in animation-delay-200">
              <Button className="bg-mtechOrange hover:bg-mtechOrange-dark text-white px-8 py-6 text-lg" asChild>
                <Link to="/services">
                  Our Services <ArrowRight className="ml-2" size={18} />
                </Link>
              </Button>
              <Button variant="outline" className="bg-transparent border-white text-white hover:bg-mtechOrange hover:border-mtechOrange px-8 py-6 text-lg" asChild>
                <Link to="/contact">
                  Contact Us
                </Link>
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 md:pl-10">
            <div className="rounded-lg bg-white/10 backdrop-blur-sm p-2 border border-white/20 shadow-2xl animate-fade-in animation-delay-300">
              <img 
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                alt="Tech illustration" 
                className="w-full h-auto rounded-md object-cover"
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
