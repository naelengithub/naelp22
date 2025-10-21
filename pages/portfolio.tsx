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
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
