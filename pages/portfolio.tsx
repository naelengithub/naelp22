import React from "react";
import { NavBarPortfolio } from "../src/components/navbar/navbarPortfolio";
import { webProjects } from "../src/components/web/data";
import { WebProject } from "../src/components/project";
import DynamicShadowText from "../src/components/DynamicShadowText";
import Link from "next/link";
import Clocks from "../src/components/common/Clocks";
import InkCrystalShader from "../src/components/canvases/InkCrystalShader";
import { Footer } from "../src/components/footer/footer";
import ProjectsShowcase from "../src/components/ProjectShowcase";

export default function Home() {
  return (
    <div className="min-h-screen bg-floral-white">
      <NavBarPortfolio />
      <Clocks />
      {/* <InkCrystalShader /> */}
      <ProjectsShowcase />

      <div className="fixed bottom-24 md:bottom-1/3 right-8 pl-6 pb-6 text-6xl">
        <Link href="/about">
          <DynamicShadowText text="info" />
        </Link>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
