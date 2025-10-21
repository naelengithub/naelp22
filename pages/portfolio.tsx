import React, { useEffect } from "react";
import { NavBarPortfolio } from "../src/components/navbar/navbarPortfolio";
import Clocks from "../src/components/common/Clocks";
import { Footer } from "../src/components/footer/footer";
import ProjectsShowcase from "../src/components/ProjectShowcase";

export default function Portfolio() {
  useEffect(() => {
    const runScroll = (hash: string) => {
      if (!hash) return;

      let cancel = false;

      const handleUserScroll = () => {
        cancel = true;
      };

      window.addEventListener("wheel", handleUserScroll, { passive: true });
      window.addEventListener("touchstart", handleUserScroll, {
        passive: true,
      });
      window.addEventListener("keydown", handleUserScroll);

      const timeout = setTimeout(() => {
        const el = document.querySelector(hash);
        if (!el) return;

        const rect = el.getBoundingClientRect();
        const elementTop = rect.top + window.scrollY;
        const nextOffset =
          elementTop + rect.height - window.innerHeight / 2 + rect.height / 2;

        const start = window.scrollY;
        const target = Math.max(nextOffset, start + 100);

        const duration = 900; // ⏱ faster, smoother
        const distance = target - start;
        const startTime = performance.now();

        const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

        const animate = (now: number) => {
          if (cancel) return; // 🧤 stop immediately if user scrolls
          const elapsed = now - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const eased = easeOutCubic(progress);

          window.scrollTo(0, start + distance * eased);

          if (progress < 1) requestAnimationFrame(animate);
        };

        requestAnimationFrame(animate);
      }, 500);

      return () => {
        clearTimeout(timeout);
        window.removeEventListener("wheel", handleUserScroll);
        window.removeEventListener("touchstart", handleUserScroll);
        window.removeEventListener("keydown", handleUserScroll);
      };
    };

    // initial load
    if (window.location.hash) {
      runScroll(window.location.hash);
    }

    // when user navigates via browser back/forward
    const handlePopState = () => {
      if (window.location.hash) runScroll(window.location.hash);
    };
    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  return (
    <div className="min-h-screen bg-floral-white">
      <NavBarPortfolio />
      <Clocks />
      <ProjectsShowcase />
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
