"use client";

import React, { useEffect, useState } from "react";
import { webProjects } from "./web/data";
import ProjectCard from "./ProjectCard";
import InkLiquidGlassShader from "./canvases/InkCrystalShader";

export default function ProjectsShowcase() {
  const [visible, setVisible] = useState(false);
  const onlineProjects = webProjects.filter((p) => p.online);

  useEffect(() => {
    const timeout = setTimeout(() => setVisible(true), 120); // ⚡ very short delay
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section className="relative">
      {/* 🔵 Shader: shows instantly */}
      <div className="sticky top-0 z-0 h-screen flex items-center justify-center pointer-events-none">
        <InkLiquidGlassShader className="w-full max-w-[1200px]" />
      </div>

      {/* 🔵 Cards: fade in subtly */}
      <div
        className={`relative z-10 -mt-[80vh] pb-[20vh] flex flex-col items-center gap-[20vh] transition-opacity duration-700 ease-out ${
          visible ? "opacity-100" : "opacity-0"
        }`}
      >
        {onlineProjects.map((project, i) => (
          <ProjectCard key={i} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
