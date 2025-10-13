import React from "react";
import { NavBarPortfolio } from "../src/components/navbar/navbarPortfolio";
import { webProjects } from "../src/components/web/data";
import { WebProject } from "../src/components/project";
import DynamicShadowText from "../src/components/DynamicShadowText";
import Link from "next/link";
import InteractiveTitle from "../src/components/InteractiveTitle";
import Clocks from "../src/components/common/Clocks";

export default function Home() {
  return (
    <div className="min-h-screen bg-floral-white">
      <NavBarPortfolio />
      <Clocks />
      <InteractiveTitle />
      {webProjects
        .filter((project) => project.online)
        .map((project, index) => (
          <WebProject
            key={index}
            brand={project.brand}
            description={project.description}
            year={project.year}
            images={project.images}
            url={project.url}
            concept={project.concept}
            team={project.team}
            live={project.live}
            tools={project.tools}
          />
        ))}

      <div className="fixed bottom-24 md:bottom-1/3 right-8 pl-6 pb-6 text-6xl">
        <Link href="/about">
          <DynamicShadowText text="info" />
        </Link>
      </div>
      <button
        onClick={() => {
          window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        }}
        className="p-6 w-full text-right text-xl"
      >
        <p>scroll to top &uarr;</p>
      </button>
    </div>
  );
}
