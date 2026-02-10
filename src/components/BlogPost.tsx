
import { Link } from "react-router-dom";
import { Calendar, User } from "lucide-react";
import { cn } from "@/lib/utils";

interface BlogPostProps {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  image: string;
  readTime: string;
  className?: string;
}

const BlogPost = ({
  id,
  title,
  excerpt,
  date,
  author,
  image,
  readTime,
  className,
}: BlogPostProps) => {
  return (
    <article
      className={cn(
        "bg-white border border-mtechGray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow h-full flex flex-col",
        className
      )}
    >
      <Link to={`/blog/${id}`} className="block">
        <img
          src={image}
          alt={title}
          className="h-56 w-full object-cover hover:opacity-90 transition-opacity"
          loading="lazy"
        />
      </Link>
      <div className="p-6 flex-grow flex flex-col">
        <div className="flex items-center text-sm text-mtechGray-500 space-x-4 mb-3">
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-1" />
            <span>{date}</span>
          </div>
          <div className="flex items-center">
            <User className="h-4 w-4 mr-1" />
            <span>{author}</span>
          </div>
        </div>
        <Link to={`/blog/${id}`} className="block mb-3">
          <h3 className="text-xl font-bold text-mtechGray-900 hover:text-mtechBlue-800">
            {title}
          </h3>
        </Link>
        <p className="text-mtechGray-600 mb-4 flex-grow">{excerpt}</p>
        <div className="mt-auto flex justify-between items-center">
          <span className="text-sm text-mtechGray-500">{readTime} read</span>
          <Link
            to={`/blog/${id}`}
            className="text-mtechBlue-800 hover:text-mtechBlue-950 font-medium text-sm"
          >
            Read more →
          </Link>
        </div>
      </div>
    </article>
  );
};

export default BlogPost;
