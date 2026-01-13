import React from "react";

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
  { name: "Kemmax Sales", logo: "/lovable-uploads/kemmax-sales.png" },
];

const TrustedBy = () => {
  return (
    <section className="py-12 bg-mtechGray-50 border-y border-mtechGray-200">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <p className="text-center text-sm font-medium text-mtechGray-500 uppercase tracking-wider mb-8">
          Trusted By Leading Businesses
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16">
          {clients.map((client) => (
            <div
              key={client.name}
              className="flex items-center justify-center group"
            >
              {client.logo ? (
                <img
                  src={client.logo}
                  alt={`${client.name} logo`}
                  className="h-10 md:h-12 w-auto object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
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
    </section>
  );
};

export default TrustedBy;
