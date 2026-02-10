
import { useState } from "react";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import BlogPost from "@/components/BlogPost";
import blogHostingImg from "@/assets/blog-hosting.jpg";
import blogWebdevImg from "@/assets/blog-webdev.jpg";
import blogTestingImg from "@/assets/blog-testing.jpg";
import blogMarketingImg from "@/assets/blog-marketing.jpg";
import blogSecurityImg from "@/assets/blog-security.jpg";
import blogResponsiveImg from "@/assets/blog-responsive.jpg";

const blogPosts = [
  {
    id: 1,
    title: "How to Choose the Right Web Hosting for Your Business",
    excerpt: "Finding the perfect web hosting solution for your business can be challenging. In this article, we break down the key factors to consider.",
    date: "June 15, 2023",
    author: "Michael Johnson",
    image: blogHostingImg,
    readTime: "5 min",
    category: "Web Hosting"
  },
  {
    id: 2,
    title: "10 Essential Features Every Business Website Needs",
    excerpt: "In today's digital landscape, your website is your business's digital storefront. Learn which features are must-haves for success.",
    date: "July 23, 2023",
    author: "Lisa Brown",
    image: blogWebdevImg,
    readTime: "8 min",
    category: "Web Development"
  },
  {
    id: 3,
    title: "The Importance of Software Testing in Development",
    excerpt: "Discover why software testing is a critical component of the development process and how it can save you time and money.",
    date: "August 10, 2023",
    author: "David Thompson",
    image: blogTestingImg,
    readTime: "6 min",
    category: "Software Testing"
  },
  {
    id: 4,
    title: "SEO Best Practices for 2023",
    excerpt: "Stay ahead of the competition with these updated SEO strategies to improve your website's visibility and attract more visitors.",
    date: "September 5, 2023",
    author: "Sarah Williams",
    image: blogMarketingImg,
    readTime: "7 min",
    category: "Digital Marketing"
  },
  {
    id: 5,
    title: "Understanding Website Security: Protect Your Business Online",
    excerpt: "Learn about the common security threats facing websites today and how to implement effective protection measures.",
    date: "October 12, 2023",
    author: "Daniel Roberts",
    image: blogSecurityImg,
    readTime: "10 min",
    category: "Security"
  },
  {
    id: 6,
    title: "Responsive Design: Why It's Non-Negotiable",
    excerpt: "In an era of diverse screen sizes, responsive design is essential. Explore why it matters and how to implement it effectively.",
    date: "November 20, 2023",
    author: "Michelle Carter",
    image: blogResponsiveImg,
    readTime: "5 min",
    category: "Web Development"
  }
];

const categories = [
  "All",
  "Web Development",
  "Web Hosting",
  "Software Testing",
  "Digital Marketing",
  "Security"
];

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-mtechBlue-800 to-mtechBlue-950 text-white py-16">
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Blog & Insights</h1>
            <p className="text-xl opacity-90">
              Stay updated with the latest trends in web development, hosting, and software testing.
            </p>
          </div>
        </div>
      </section>

      {/* Search & Filter */}
      <section className="py-10 bg-mtechGray-50">
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="w-full max-w-md relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-mtechGray-500" size={18} />
              <Input 
                type="search" 
                placeholder="Search articles..." 
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  className={selectedCategory === category 
                    ? "bg-mtechBlue-800 hover:bg-mtechBlue-900" 
                    : "border-mtechGray-300 text-mtechGray-700"
                  }
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 bg-white">
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <BlogPost 
                  key={post.id}
                  id={post.id}
                  title={post.title}
                  excerpt={post.excerpt}
                  date={post.date}
                  author={post.author}
                  image={post.image}
                  readTime={post.readTime}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <h3 className="text-2xl font-semibold text-mtechGray-900 mb-4">No articles found</h3>
              <p className="text-mtechGray-600">
                Try adjusting your search or filter to find what you're looking for.
              </p>
            </div>
          )}
        </div>
      </section>
      
      {/* Newsletter */}
      <section className="py-16 bg-mtechGray-50">
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto max-w-4xl">
          <div className="bg-mtechBlue-800 rounded-2xl shadow-xl p-8 md:p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-mtechGray-100 mb-6 max-w-xl mx-auto">
              Subscribe to our newsletter to receive the latest articles, insights, and company news directly to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <Input 
                type="email" 
                placeholder="Enter your email address" 
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus-visible:ring-white"
              />
              <Button className="bg-white text-mtechBlue-700 hover:bg-mtechGray-100">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
