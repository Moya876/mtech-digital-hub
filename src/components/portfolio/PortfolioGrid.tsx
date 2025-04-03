
import ProjectCard from "@/components/ProjectCard";
import { Project } from "@/types/portfolio";

type PortfolioGridProps = {
  projects: Project[];
};

const PortfolioGrid = ({ projects }: PortfolioGridProps) => {
  return (
    <section className="py-16 bg-white">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        {projects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
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
  );
};

export default PortfolioGrid;
