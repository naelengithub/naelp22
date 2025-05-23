import React from "react";
import { NavBarPortfolio } from "../src/components/navbar/navbarPortfolio";
import { webProjects } from "../src/components/web/data";
import { WebProject } from "../src/components/project";
import DynamicShadowText from "../src/components/DynamicShadowText";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-floral-white">
      <div className="relative">
        <div className="min-h-screen">
          <NavBarPortfolio />
          <h1 className="text-center text-floral-white my-10 md:my-40 mx-10 text-5xl sm:text-8xl break-words">
            <span
              style={{
                textShadow: `
              10px 10px 20px rgba(255, 20, 147, 1),
              40px 40px 80px rgba(255, 20, 147, 0.8),
              40px 40px 80px rgba(255, 20, 147, 0.6),
              40px 40px 80px rgba(255, 20, 147, 0.4)`,
              }}
            >
              selected works
            </span>
          </h1>
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
      </div>
    </div>
  );
}
