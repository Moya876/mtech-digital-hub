
import { ExternalLink, Code, Github } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

type ProjectCardProps = {
  title: string;
  description: string;
  image: string;
  projectUrl?: string;
  codeSnippet?: string;
  technologies: string[];
  category: string;
};

const ProjectCard = ({
  title,
  description,
  image,
  projectUrl,
  codeSnippet,
  technologies,
  category
}: ProjectCardProps) => {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <div className="relative aspect-video overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" 
        />
        <Badge className="absolute top-3 right-3 bg-mtechBlue-800">{category}</Badge>
      </div>
      <CardHeader>
        <CardTitle className="text-xl text-mtechNavy">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <Badge key={index} variant="outline" className="bg-mtechGray-50">
              {tech}
            </Badge>
          ))}
        </div>
        
        {codeSnippet && (
          <div className="mt-4">
            <p className="text-sm font-medium mb-2 flex items-center gap-1">
              <Code size={16} /> Code Snippet
            </p>
            <pre className="p-3 bg-mtechGray-50 rounded-md text-xs overflow-x-auto">
              <code>{codeSnippet}</code>
            </pre>
          </div>
        )}
      </CardContent>
      <CardFooter className="flex justify-end">
        {projectUrl && (
          <Button variant="outline" className="gap-2" asChild>
            <a href={projectUrl} target="_blank" rel="noopener noreferrer">
              Visit Site <ExternalLink size={16} />
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
