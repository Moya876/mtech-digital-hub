import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import ProjectCard from "@/components/ProjectCard";
import PortfolioGrid from "@/components/portfolio/PortfolioGrid";
import type { Project } from "@/types/portfolio";

const project: Project = {
  id: 1,
  title: "Vanessa Russell's Portfolio",
  description: "Personal portfolio website.",
  image: "/lovable-uploads/vanessa.png",
  projectUrl: "https://vanessa.mtechcorpja.com/",
  technologies: ["React", "Tailwind"],
  category: "Web Development",
};

const classesOf = (el: Element | null) => (el?.getAttribute("class") ?? "").split(/\s+/);

describe("ProjectCard mobile layout", () => {
  it("keeps responsive padding on card sections", () => {
    const { container } = render(<ProjectCard {...project} />);
    const padded = Array.from(container.querySelectorAll("[class*='p-5']"));
    expect(padded.length).toBeGreaterThanOrEqual(3); // header, content, footer
    padded.forEach((el) => {
      expect(classesOf(el)).toContain("sm:p-6");
    });
  });

  it("renders a full-width, centered CTA on mobile", () => {
    render(<ProjectCard {...project} />);
    const link = screen.getByRole("link", { name: /visit site/i });
    const button = link.closest("a")!;
    const cls = classesOf(button);
    expect(cls).toContain("w-full");
    expect(cls).toContain("sm:w-auto");
    const footer = button.parentElement!;
    expect(classesOf(footer)).toContain("justify-center");
    expect(classesOf(footer)).toContain("sm:justify-end");
  });

  it("scales the title and description down on small screens", () => {
    render(<ProjectCard {...project} />);
    const title = screen.getByText(project.title);
    expect(classesOf(title)).toEqual(expect.arrayContaining(["text-lg", "sm:text-xl"]));
    const desc = screen.getByText(project.description);
    expect(classesOf(desc)).toEqual(expect.arrayContaining(["text-sm", "sm:text-base"]));
  });

  it("uses a fixed aspect ratio image that cannot stretch the card", () => {
    const { container } = render(<ProjectCard {...project} />);
    const frame = container.querySelector("div.relative")!;
    expect(classesOf(frame)).toEqual(expect.arrayContaining(["aspect-video", "overflow-hidden"]));
    const img = screen.getByAltText(project.title);
    expect(classesOf(img)).toEqual(expect.arrayContaining(["object-cover", "w-full", "h-full"]));
    expect(img).toHaveAttribute("loading", "lazy");
  });

  it("markup snapshot stays stable (catches spacing/padding drift)", () => {
    const { container } = render(<ProjectCard {...project} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe("PortfolioGrid mobile layout", () => {
  it("is single column with tighter gaps on mobile", () => {
    const { container } = render(<PortfolioGrid projects={[project]} />);
    const grid = container.querySelector("div.grid")!;
    const cls = classesOf(grid);
    expect(cls).toEqual(
      expect.arrayContaining(["grid-cols-1", "md:grid-cols-2", "lg:grid-cols-3", "gap-6", "sm:gap-8"])
    );
  });

  it("uses responsive section and container padding", () => {
    const { container } = render(<PortfolioGrid projects={[project]} />);
    const section = container.querySelector("section")!;
    expect(classesOf(section)).toEqual(expect.arrayContaining(["py-12", "sm:py-16"]));
    const inner = container.querySelector("div.container")!;
    expect(classesOf(inner)).toEqual(expect.arrayContaining(["px-4", "sm:px-6", "lg:px-8"]));
  });

  it("shows an empty state instead of a broken grid", () => {
    render(<PortfolioGrid projects={[]} />);
    expect(screen.getByText(/no projects found/i)).toBeInTheDocument();
  });
});
