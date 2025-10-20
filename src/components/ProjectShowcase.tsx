"use client";

import React from "react";
import { webProjects } from "./web/data";
import ProjectCard from "./ProjectCard";
import InkLiquidGlassShader from "./canvases/InkCrystalShader"; // your shader component

export default function ProjectsShowcase() {
  const onlineProjects = webProjects.filter((p) => p.online);

  return (
    <section className="relative">
      {/* 🔵 STICKY shader: stays centered while this section scrolls */}
      <div className="sticky top-0 z-0 h-screen flex items-center justify-center pointer-events-none">
        <InkLiquidGlassShader className="w-full max-w-[1200px]" />
      </div>

      {/* 🔵 CARDS: pulled up to scroll over the pinned shader */}
      <div className="relative z-10 -mt-[80vh] pb-[20vh] flex flex-col items-center gap-[20vh]">
        {onlineProjects.map((project, i) => (
          <ProjectCard key={i} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
