
export type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  projectUrl?: string;
  codeSnippet?: string;
  technologies: string[];
  category: string;
  seo?: {
    metaTitle?: string;
    metaDescription?: string;
    keywords?: string[];
    ogImage?: string;
  };
};
