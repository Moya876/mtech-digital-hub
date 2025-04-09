
import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
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

  // Generate JSON-LD structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": displayedProjects.map((project, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "SoftwareApplication",
        "name": project.title,
        "description": project.description,
        "image": project.image,
        "applicationCategory": project.category,
        "operatingSystem": "Web"
      }
    }))
  };

  return (
    <>
      <Helmet>
        <title>Our Portfolio | MTech Digital - Web Development & Testing Projects</title>
        <meta name="description" content="Explore MTech Digital's portfolio of web development and software testing projects. Custom solutions for businesses of all sizes." />
        <meta name="keywords" content="portfolio, web projects, software testing, case studies, Jamaica, development portfolio" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
        <meta property="og:title" content="MTech Digital Portfolio - Web Development & Testing Projects" />
        <meta property="og:description" content="Discover our featured web development and software testing projects. See how we've helped businesses transform their digital presence." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mtechcorp.com/portfolio" />
      </Helmet>
      
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
    </>
  );
};

export default Portfolio;
