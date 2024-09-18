import Head from "next/head";
import React from "react";
import { NavBarPortfolio } from "../src/components/navbar/navbarPortfolio";
import { webProjects } from "../src/components/web/data";
import { WebProject } from "../src/components/project";

export default function Home() {
  return (
    <div className=" bg-floral-white">
      <Head>
        <title>Portfolio</title>
      </Head>
      <div className="relative min-h-screen">
        <NavBarPortfolio />
        <h1 className="text-center text-floral-white m-40 text-8xl">
          {" "}
          <span
            style={{
              textShadow: `
              10px 10px 20px rgba(255, 20, 147, 1),
              40px 40px 80px rgba(255, 20, 147, 0.8),
              40px 40px 80px rgba(255, 20, 147, 0.6),
              40px 40px 80px rgba(255, 20, 147, 0.4)`,
            }}
          >
            ana elisa
          </span>
        </h1>
        {webProjects.map((project, index) => (
          <WebProject
            key={index}
            brand={project.brand}
            year={project.year}
            images={project.images}
            url={project.url}
            concept={project.concept}
          />
        ))}
        <div className="absolute bottom-0 pl-6 pb-6">INFO</div>
      </div>
    </div>
  );
}
