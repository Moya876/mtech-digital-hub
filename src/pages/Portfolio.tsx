
import { useState } from "react";
import { projects, categories } from "@/data/portfolioData";
import PortfolioHero from "@/components/portfolio/PortfolioHero";
import PortfolioSearch from "@/components/portfolio/PortfolioSearch";
import PortfolioGrid from "@/components/portfolio/PortfolioGrid";
import PortfolioPagination from "@/components/portfolio/PortfolioPagination";
import PortfolioCallToAction from "@/components/portfolio/PortfolioCallToAction";

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
      <PortfolioHero />
      
      <PortfolioSearch 
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        categories={categories}
      />
      
      <PortfolioGrid projects={filteredProjects} />
      
      <PortfolioPagination />
      
      <PortfolioCallToAction />
    </div>
  );
};

export default Portfolio;
