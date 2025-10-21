// pages/projects/[slug].tsx
"use client";

import { Footer } from "../../src/components/footer/FooterCard";
import ProjectView from "../../src/components/ProjectView";
import { useEffect, useRef, useState } from "react";

/** Makes its children click-through near the end so the fixed footer behind is clickable */
function ForegroundPassThrough({ children }: { children: React.ReactNode }) {
  const [passThrough, setPassThrough] = useState(false);
  const endRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = endRef.current;
    if (!el) return;

    // When the tiny sentinel near the end is visible, enable click-through
    const io = new IntersectionObserver(
      ([entry]) => setPassThrough(entry.isIntersecting),
      {
        threshold: 0,
        // reveal earlier/later by adjusting this:
        // negative bottom margin means "trigger before the very end"
        rootMargin: "0px 0px -20% 0px",
      }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section
      className={`relative z-10 ${
        passThrough ? "pointer-events-none" : "pointer-events-auto"
      }`}
    >
      {children}

      {/* sentinel: when this hits the viewport, we switch to click-through */}
      <div ref={endRef} className="h-px" />

      {/* spacer so ProjectView can scroll fully off before footer takes over */}
      <div className="h-[87vh] md:h-[40vh] lg:h-[35vh] bg-transparent" />
    </section>
  );
}

export default function ProjectPage() {
  return (
    <main className="relative min-h-screen md:max-h-[50vh] text-charcoal bg-floral-white">
      {/* 🖤 Fixed footer layer (always behind) */}
      <div className="fixed z-0 bottom-0 w-full">
        <Footer />
      </div>

      {/* ❤️ Foreground content that scrolls, becomes click-through near the end */}
      <ForegroundPassThrough>
        <ProjectView />
      </ForegroundPassThrough>
    </main>
  );
}
