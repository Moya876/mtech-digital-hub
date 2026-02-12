import React, { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Client {
  name: string;
  logo?: string;
}

const clients: Client[] = [
  { name: "Ocean View Beach Hotel", logo: "/lovable-uploads/ocean-view.png" },
  { name: "Caribbean Mega Bounce", logo: "/lovable-uploads/mega-bounce.png" },
  { name: "Marjita Watches", logo: "/lovable-uploads/marjita-watches.png" },
  { name: "Streets Entertainment", logo: "/lovable-uploads/streets-entertainment.png" },
  { name: "Event Planit", logo: "/lovable-uploads/event-planit.png" },
  { name: "Geovani PT", logo: "/lovable-uploads/geovani-pt.png" },
  { name: "M2S Infrastructure", logo: "/lovable-uploads/m2s-infrastructure.png" },
  { name: "Kemmax Sales", logo: "/lovable-uploads/kemmax-sales.jpeg" },
  { name: "IBS", logo: "/lovable-uploads/ibs-logo.png" },
  { name: "AutoLuv Service Center", logo: "/lovable-uploads/autoluv-logo.png" },
];

const TrustedBy = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const duplicatedClients = [...clients, ...clients];

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 250;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      className="py-12 bg-mtechGray-50 border-y border-mtechGray-200 overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <p className="text-center text-sm font-medium text-mtechGray-500 uppercase tracking-wider mb-8">
          Trusted By Leading Businesses
        </p>
        <div className="relative">
          {/* Left Arrow */}
          <button
            onClick={() => scroll("left")}
            className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 shadow-md rounded-full p-2 text-mtechNavy hover:bg-mtechOrange hover:text-white transition-all duration-300 ${
              isHovered ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
            aria-label="Scroll left"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          {/* Right Arrow */}
          <button
            onClick={() => scroll("right")}
            className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 shadow-md rounded-full p-2 text-mtechNavy hover:bg-mtechOrange hover:text-white transition-all duration-300 ${
              isHovered ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
            aria-label="Scroll right"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          <div
            ref={scrollRef}
            className={`flex whitespace-nowrap ${
              isHovered ? "" : "animate-marquee"
            }`}
            style={isHovered ? { overflowX: "auto", scrollbarWidth: "none" } : {}}
          >
            {duplicatedClients.map((client, index) => (
              <div
                key={`${client.name}-${index}`}
                className="flex items-center justify-center mx-8 md:mx-12 flex-shrink-0 group"
              >
                {client.logo ? (
                  <img
                    src={client.logo}
                    alt={`${client.name} logo`}
                    className="h-12 md:h-14 w-20 md:w-28 object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                  />
                ) : (
                  <span className="text-lg md:text-xl font-semibold text-mtechGray-400 group-hover:text-mtechNavy transition-colors duration-300">
                    {client.name}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
