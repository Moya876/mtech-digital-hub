
import { useState } from "react";
import { Search, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import ProjectCard from "@/components/ProjectCard";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

// Sample project data
const projects = [
  {
    id: 1,
    title: "Moya Russell Portfolio",
    description: "A professional portfolio website showcasing web development projects, skills, and services with a clean, modern design.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    projectUrl: "https://moyarussell.com/",
    technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    category: "Web Development",
    codeSnippet: `// Responsive navigation toggle\nconst navToggle = document.querySelector('.nav-toggle');\nconst navLinks = document.querySelector('.nav-links');\n\nnavToggle.addEventListener('click', () => {\n  navLinks.classList.toggle('show-links');\n});`
  },
  {
    id: 2,
    title: "OVB Hotel Website",
    description: "A modern hotel website featuring room booking capabilities, amenities showcase, and responsive design for optimal user experience.",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    projectUrl: "https://ovbhotel.com/",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "PHP"],
    category: "Web Development",
    codeSnippet: `// Room availability checker\nfunction checkAvailability(roomType, startDate, endDate) {\n  return fetch('/api/availability', {\n    method: 'POST',\n    body: JSON.stringify({ roomType, startDate, endDate }),\n    headers: {\n      'Content-Type': 'application/json'\n    }\n  })\n  .then(response => response.json());\n}`
  },
  {
    id: 3,
    title: "WeShip Express Jamaica",
    description: "A shipping service website for Jamaica with tracking features, shipping calculator, and customer account management system.",
    image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    projectUrl: "https://weshipexpressja.com/",
    technologies: ["React.js", "Node.js", "MongoDB", "Express.js"],
    category: "Web Development",
    codeSnippet: `// Shipping rate calculator\nconst calculateShipping = (weight, destination) => {\n  const baseRate = 10.50;\n  const weightFactor = weight * 0.75;\n  const destinationFee = destinationRates[destination] || 5;\n  \n  return baseRate + weightFactor + destinationFee;\n};`
  },
  {
    id: 4,
    title: "Real Estate Listing Portal",
    description: "Property listing website with advanced search filters, virtual tours, and agent directory.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    projectUrl: "https://example.com/realestate",
    technologies: ["Vue.js", "Firebase", "Google Maps API"],
    category: "Web Development"
  },
  {
    id: 5,
    title: "E-Learning Platform Testing",
    description: "End-to-end testing of an educational platform, focusing on course delivery and student assessment modules.",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    technologies: ["TestNG", "Appium", "JUnit", "Cucumber"],
    category: "Software Testing",
    codeSnippet: `// Test Case for Course Completion\n@Test\npublic void testCourseCompletion() {\n  // Login as student\n  loginPage.login(STUDENT_EMAIL, STUDENT_PASSWORD);\n  \n  // Navigate to course\n  dashboardPage.selectCourse(COURSE_ID);\n  \n  // Complete all lessons\n  for(int i = 0; i < coursePage.getLessonCount(); i++) {\n    coursePage.completeCurrentLesson();\n  }\n  \n  // Verify certificate generation\n  assertTrue(coursePage.isCertificateGenerated());\n}`
  },
  {
    id: 6,
    title: "Corporate Website",
    description: "Modern, responsive corporate website with content management system for easy updates.",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    projectUrl: "https://example.com/corporate",
    technologies: ["WordPress", "PHP", "MySQL", "jQuery"],
    category: "Web Development"
  }
];

const categories = [
  "All",
  "Web Development",
  "Software Testing",
  "Web Hosting",
];

const Portfolio = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  
  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         project.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === "All" || project.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-mtechBlue-800 to-mtechBlue-950 text-white py-16">
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Portfolio</h1>
            <p className="text-xl opacity-90">
              Showcasing our latest web development projects and software testing solutions.
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
                placeholder="Search projects..." 
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
                    ? "bg-mtechBlue-600 hover:bg-mtechBlue-700" 
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

      {/* Projects Grid */}
      <section className="py-16 bg-white">
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <ProjectCard 
                  key={project.id}
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  projectUrl={project.projectUrl}
                  codeSnippet={project.codeSnippet}
                  technologies={project.technologies}
                  category={project.category}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <h3 className="text-2xl font-semibold text-mtechGray-900 mb-4">No projects found</h3>
              <p className="text-mtechGray-600">
                Try adjusting your search or filter to find what you're looking for.
              </p>
            </div>
          )}
        </div>
      </section>
      
      {/* Pagination */}
      <section className="pb-16 bg-white">
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" isActive>1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">2</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-mtechGray-50">
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto max-w-4xl">
          <div className="bg-mtechBlue-700 rounded-2xl shadow-xl p-8 md:p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
            <p className="text-mtechGray-100 mb-6 max-w-xl mx-auto">
              Let's discuss your project requirements and how our web development and software testing expertise can help bring your vision to life.
            </p>
            <Button className="bg-white text-mtechBlue-700 hover:bg-mtechGray-100" asChild>
              <a href="/quote">Get a Free Quote</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
