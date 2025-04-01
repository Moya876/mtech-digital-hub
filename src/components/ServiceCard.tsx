
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
  className?: string;
}

const ServiceCard = ({ title, description, icon, href, className }: ServiceCardProps) => {
  return (
    <div className={cn(
      "rounded-xl border border-mtechGray-100 bg-white p-8 shadow-sm transition-all hover:shadow-md hover:border-mtechBlue-300 h-full flex flex-col",
      className
    )}>
      <div className="h-14 w-14 bg-mtechBlue-50 text-mtechBlue-600 rounded-lg flex items-center justify-center mb-6">
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-mtechGray-900 mb-3">{title}</h3>
      <p className="text-mtechGray-600 mb-6 flex-grow">{description}</p>
      <Link 
        to={href} 
        className="inline-flex items-center text-mtechBlue-600 hover:text-mtechBlue-800 font-medium group"
      >
        Learn More
        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
      </Link>
    </div>
  );
};

export default ServiceCard;
