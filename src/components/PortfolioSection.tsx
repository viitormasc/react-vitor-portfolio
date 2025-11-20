import React from "react";

import ProjectCard from "./ProjectCard";
import projects from "./projects";
import { BackgroundBeams } from "./ui/shadcn-io/background-beams";

const PortfolioSection: React.FC = () => {
  return (
    <section
      className="
        w-full px-6 py-24 
        bg-white text-black
        dark:bg-black dark:text-white
      "
      id="projects"
    >
      <div className="relative w-full">
        <BackgroundBeams className="absolute inset-0 pointer-events-none" />
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold">Projects</h2>

          <p className="mt-4 max-w-xl text-black/60 dark:text-neutral-400">
            Some of the projects I've built recently, including full-stack apps,
            dashboards, and tools.
          </p>

          <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
