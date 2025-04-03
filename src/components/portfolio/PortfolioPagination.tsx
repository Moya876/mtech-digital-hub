
import { List } from "lucide-react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Button } from "@/components/ui/button";

type PortfolioPaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  showAll: boolean;
  onToggleShowAll: () => void;
};

const PortfolioPagination = ({ 
  currentPage, 
  totalPages, 
  onPageChange,
  showAll,
  onToggleShowAll
}: PortfolioPaginationProps) => {
  const renderPageNumbers = () => {
    const pages = [];
    
    // Always show first page
    pages.push(
      <PaginationItem key="page-1">
        <PaginationLink 
          href="#" 
          isActive={currentPage === 1} 
          onClick={(e) => {
            e.preventDefault();
            onPageChange(1);
          }}
        >
          1
        </PaginationLink>
      </PaginationItem>
    );
    
    // If there are many pages, add ellipsis
    if (currentPage > 3) {
      pages.push(
        <PaginationItem key="ellipsis-1">
          <span className="flex h-9 w-9 items-center justify-center">...</span>
        </PaginationItem>
      );
    }
    
    // Add current page and adjacent pages
    for (let i = Math.max(2, currentPage - 1); i <= Math.min(totalPages - 1, currentPage + 1); i++) {
      if (i !== 1 && i !== totalPages) {
        pages.push(
          <PaginationItem key={`page-${i}`}>
            <PaginationLink 
              href="#" 
              isActive={currentPage === i}
              onClick={(e) => {
                e.preventDefault();
                onPageChange(i);
              }}
            >
              {i}
            </PaginationLink>
          </PaginationItem>
        );
      }
    }
    
    // If there are many pages, add ellipsis
    if (currentPage < totalPages - 2) {
      pages.push(
        <PaginationItem key="ellipsis-2">
          <span className="flex h-9 w-9 items-center justify-center">...</span>
        </PaginationItem>
      );
    }
    
    // Always show last page if more than one page
    if (totalPages > 1) {
      pages.push(
        <PaginationItem key={`page-${totalPages}`}>
          <PaginationLink 
            href="#" 
            isActive={currentPage === totalPages}
            onClick={(e) => {
              e.preventDefault();
              onPageChange(totalPages);
            }}
          >
            {totalPages}
          </PaginationLink>
        </PaginationItem>
      );
    }
    
    return pages;
  };

  return (
    <section className="pb-16 bg-white">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="flex flex-col items-center gap-4">
          <Pagination>
            <PaginationContent>
              {currentPage > 1 && (
                <PaginationItem>
                  <PaginationPrevious 
                    href="#" 
                    onClick={(e) => {
                      e.preventDefault();
                      onPageChange(currentPage - 1);
                    }} 
                  />
                </PaginationItem>
              )}
              
              {renderPageNumbers()}
              
              {currentPage < totalPages && (
                <PaginationItem>
                  <PaginationNext 
                    href="#" 
                    onClick={(e) => {
                      e.preventDefault();
                      onPageChange(currentPage + 1);
                    }} 
                  />
                </PaginationItem>
              )}
            </PaginationContent>
          </Pagination>
          
          <Button 
            variant="outline"
            className="flex items-center gap-2"
            onClick={onToggleShowAll}
          >
            <List size={18} />
            {showAll ? "Show Paginated View" : "View All Projects"}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioPagination;
