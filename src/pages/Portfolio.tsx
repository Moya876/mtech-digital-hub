
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
  const [currentPage, setCurrentPage] = useState(1);
  const [showAll, setShowAll] = useState(false);
  
  const PROJECTS_PER_PAGE = 6;
  
  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         project.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === "All" || project.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const totalPages = Math.ceil(filteredProjects.length / PROJECTS_PER_PAGE);
  
  // If showAll is true, display all projects, otherwise paginate
  const displayedProjects = showAll 
    ? filteredProjects 
    : filteredProjects.slice((currentPage - 1) * PROJECTS_PER_PAGE, currentPage * PROJECTS_PER_PAGE);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleShowAll = () => {
    setShowAll(!showAll);
    if (!showAll) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

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
      
      <PortfolioGrid projects={displayedProjects} />
      
      {filteredProjects.length > PROJECTS_PER_PAGE && (
        <PortfolioPagination 
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
          showAll={showAll}
          onToggleShowAll={toggleShowAll}
        />
      )}
      
      <PortfolioCallToAction />
    </div>
  );
};

export default Portfolio;
