import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import ProjectCard from "@/components/ProjectCard";
import PortfolioGrid from "@/components/portfolio/PortfolioGrid";
import PortfolioSearch from "@/components/portfolio/PortfolioSearch";
import type { Project } from "@/types/portfolio";

const projects: Project[] = [
  {
    id: 1,
    title: "Vanessa Russell's Portfolio",
    description: "Personal portfolio website.",
    image: "/lovable-uploads/vanessa.png",
    projectUrl: "https://vanessa.mtechcorpja.com/",
    technologies: ["React", "Tailwind"],
    category: "Web Development",
  },
  {
    id: 2,
    title: "Sayeed Bernard",
    description: "Attorney-at-Law website.",
    image: "/lovable-uploads/sayeed-bernard.png",
    projectUrl: "https://sayeedbernard.com/",
    technologies: ["WordPress", "PHP"],
    category: "Web Development",
  },
  {
    id: 3,
    title: "Reps and Results",
    description: "Fitness coaching platform.",
    image: "/lovable-uploads/reps-and-results.png",
    projectUrl: "https://reps.mtechcorpja.com/",
    technologies: ["React", "Supabase"],
    category: "Web Development",
  },
];

const classesOf = (el: Element | null) => (el?.getAttribute("class") ?? "").split(/\s+/);

describe("PortfolioGrid tablet breakpoint (md)", () => {
  it("switches to a two column grid at md", () => {
    const { container } = render(<PortfolioGrid projects={projects} />);
    const grid = container.querySelector("div.grid")!;
    expect(classesOf(grid)).toContain("md:grid-cols-2");
  });

  it("keeps the wider gap and section padding from sm upward", () => {
    const { container } = render(<PortfolioGrid projects={projects} />);
    expect(classesOf(container.querySelector("div.grid"))).toEqual(
      expect.arrayContaining(["gap-6", "sm:gap-8"])
    );
    expect(classesOf(container.querySelector("section"))).toEqual(
      expect.arrayContaining(["py-12", "sm:py-16"])
    );
    expect(classesOf(container.querySelector("div.container"))).toEqual(
      expect.arrayContaining(["px-4", "sm:px-6", "lg:px-8"])
    );
  });

  it("baseline: three-card grid markup at tablet and up", () => {
    const { container } = render(<PortfolioGrid projects={projects} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe("PortfolioGrid desktop breakpoint (lg)", () => {
  it("switches to a three column grid at lg with lg container padding", () => {
    const { container } = render(<PortfolioGrid projects={projects} />);
    expect(classesOf(container.querySelector("div.grid"))).toContain("lg:grid-cols-3");
    expect(classesOf(container.querySelector("div.container"))).toContain("lg:px-8");
  });

  it("cards return to auto-width, right aligned CTAs above sm", () => {
    render(<PortfolioGrid projects={[projects[0]]} />);
    const link = screen.getByRole("link", { name: /visit site/i });
    expect(classesOf(link)).toEqual(expect.arrayContaining(["w-full", "sm:w-auto"]));
    expect(classesOf(link.parentElement)).toEqual(
      expect.arrayContaining(["justify-center", "sm:justify-end"])
    );
  });

  it("card typography scales up from sm", () => {
    render(<ProjectCard {...projects[0]} />);
    expect(classesOf(screen.getByText(projects[0].title))).toEqual(
      expect.arrayContaining(["text-lg", "sm:text-xl"])
    );
    expect(classesOf(screen.getByText(projects[0].description))).toEqual(
      expect.arrayContaining(["text-sm", "sm:text-base"])
    );
  });

  it("baseline: single card markup at desktop", () => {
    const { container } = render(<ProjectCard {...projects[1]} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe("PortfolioSearch responsive layout", () => {
  it("stacks on mobile and goes horizontal at md", () => {
    const { container } = render(
      <PortfolioSearch
        searchTerm=""
        onSearchChange={() => {}}
        selectedCategory="All"
        onCategoryChange={() => {}}
        categories={["All", "Web Development", "Software Testing"]}
      />
    );
    const row = container.querySelector("div.flex")!;
    expect(classesOf(row)).toEqual(
      expect.arrayContaining(["flex-col", "md:flex-row", "justify-between", "items-center", "gap-6"])
    );
    expect(classesOf(container.querySelector("div.container"))).toEqual(
      expect.arrayContaining(["px-4", "sm:px-6", "lg:px-8"])
    );
  });

  it("baseline: filter bar markup", () => {
    const { container } = render(
      <PortfolioSearch
        searchTerm=""
        onSearchChange={() => {}}
        selectedCategory="All"
        onCategoryChange={() => {}}
        categories={["All", "Web Development"]}
      />
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
