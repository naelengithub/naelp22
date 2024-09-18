import Head from "next/head";
import React from "react";
import { NavBarPortfolio } from "../src/components/navbar/navbarPortfolio";
import { webProjects } from "../src/components/web/data";
import { WebProject } from "../src/components/project";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Portfolio</title>
      </Head>
      <div className="relative min-h-screen">
        <NavBarPortfolio />
        {webProjects.map((project, index) => (
          <WebProject
            key={index}
            title={project.title}
            year={project.year}
            images={project.images}
          />
        ))}
        <div className="absolute bottom-0 pl-6 pb-6">INFO</div>
      </div>
    </div>
  );
}
