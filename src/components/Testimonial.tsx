
import { Quote } from "lucide-react";
import { cn } from "@/lib/utils";

interface TestimonialProps {
  quote: string;
  author: string;
  company: string;
  className?: string;
}

const Testimonial = ({ quote, author, company, className }: TestimonialProps) => {
  return (
    <div className={cn(
      "rounded-xl border border-mtechGray-100 bg-white p-8 shadow-sm transition-all hover:shadow-md h-full flex flex-col",
      className
    )}>
      <Quote className="h-8 w-8 text-mtechOrange mb-4" />
      <p className="text-mtechGray-700 mb-6 italic flex-grow">{quote}</p>
      <div className="mt-auto">
        <p className="font-semibold text-mtechNavy">{author}</p>
        <p className="text-mtechGray-500 text-sm">{company}</p>
      </div>
    </div>
  );
};

export default Testimonial;
