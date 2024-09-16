import Head from "next/head";
import React from "react";
import { NavBarPortfolio } from "../src/components/navbar/navbarPortfolio";
import { webProjects } from "../src/components/web/data";
import { WebProject } from "../src/components/project";

export default function Home() {
  const clp = webProjects[0];
  const pulsoPacheco = webProjects[1];

  return (
    <div className="">
      <Head>
        <title>Portfolio</title>
      </Head>
      <div className="relative min-h-screen">
        <NavBarPortfolio />
        <WebProject
          title={clp.title}
          year={clp.year}
          images={clp.images} // Passing the array of images
        />
        <WebProject
          title={pulsoPacheco.title}
          year={pulsoPacheco.year}
          images={pulsoPacheco.images} // Passing the array of images
        />
        <div className="absolute bottom-0 pl-6 pb-6">INFO</div>
      </div>
    </div>
  );
}
