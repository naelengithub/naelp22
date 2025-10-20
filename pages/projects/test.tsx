"use client";

import { useRouter } from "next/router";
import { webProjects } from "../../src/components/web/data";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function ProjectPage() {
  const router = useRouter();
  const { slug } = router.query;

  const [ready, setReady] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // 🩵 filter only online projects
  const onlineProjects = webProjects.filter((p) => p.online);

  // 🧭 set project based on slug
  useEffect(() => {
    if (!router.isReady || !slug) return;
    const index = onlineProjects.findIndex(
      (p) =>
        p.brand
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/(^-|-$)/g, "") === slug
    );
    setActiveIndex(index !== -1 ? index : 0);
    setReady(true);
  }, [router.isReady, slug]);

  // 🎬 autoplay when video changes
  useEffect(() => {
    const v = videoRef.current;
    if (v) v.play().catch(() => {});
  }, [activeIndex]);

  if (!ready || activeIndex === null) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-floral-white text-charcoal">
        <p>Loading project...</p>
      </main>
    );
  }

  const project = onlineProjects[activeIndex];
  const nextIndex = (activeIndex + 1) % onlineProjects.length;
  const nextProject = onlineProjects[nextIndex];

  const updateURL = (slug: string) => {
    router.replace(`/projects/${slug}`, undefined, { shallow: true });
  };

  const handleNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    const nextSlug = nextProject.brand
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");

    setTimeout(() => {
      setActiveIndex(nextIndex);
      updateURL(nextSlug);
      setIsTransitioning(false);
    }, 200);
  };

  const handlePrev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    const prevIndex =
      (activeIndex - 1 + onlineProjects.length) % onlineProjects.length;
    const prevSlug = onlineProjects[prevIndex].brand
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");

    setTimeout(() => {
      setActiveIndex(prevIndex);
      updateURL(prevSlug);
      setIsTransitioning(false);
    }, 200);
  };

  const media = project.media?.[0];
  const src = media?.sources?.[0] || "";
  const isVideo = src.endsWith(".mp4");

  const nextMedia = nextProject.media?.[0];
  const nextSrc = nextMedia?.sources?.[0] || "";

  return (
    <main className="bg-floral-white text-charcoal md:h-screen flex items-end justify-center">
      {/* Back */}
      <Link
        href="/"
        className="absolute top-8 left-8 text-sm hover:text-charcoal transition-colors"
      >
        ← Back
      </Link>

      <div className="flex flex-col md:flex-row-reverse items-center md:gap-12 justify-start md:justify-center md:items-end px-6 md:px-16 py-20 md:py-0 md:pb-20 relative overflow-hidden h-fit">
        {/* DATA ON DESKTOP */}
        {typeof window !== "undefined" &&
          window.innerWidth >= 768 &&
          project.year &&
          project.online === true && (
            <div className="flex flex-col justify-between h-full items-start">
              <div>
                {project.online && (
                  <Link
                    href={project.url}
                    target="_blank"
                    className="font-black uppercase text-sm mb-2 inline-block"
                  >
                    Visit Site
                  </Link>
                )}
                <p className="text-sm mb-6">{project.year}</p>
              </div>

              {/* ➡️ Next button */}
              <button
                onClick={handleNext}
                className="text-sm font-bold uppercase tracking-wide text-slate-grey hover:text-charcoal transition-colors duration-200 mt-auto"
              >
                Next →
              </button>
            </div>
          )}

        <div className="flex flex-col items-center w-full max-w-7xl mx-auto">
          {/* Header */}
          <div className="w-full flex flex-col justify-between items-start gap-4 mb-12 pt-12 md:pt-0">
            <div>
              <h1 className="text-4xl md:text-6xl font-black uppercase">
                {project.brand}
              </h1>
              <p className="text-sm italic mt-1">{project.concept}</p>
            </div>
            <p className="text-base md:text-lg/90">{project.description}</p>
          </div>

          {/* 🎬 Main video */}
          <div className="relative w-fit flex justify-start mb-20 sm:mb-0 self-start">
            {isVideo ? (
              <video
                ref={videoRef}
                src={src}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-auto max-h-[60vh] object-contain shadow-md"
              />
            ) : (
              <img
                src={src}
                alt={project.brand}
                className="w-full h-auto object-contain shadow-md"
              />
            )}
          </div>
        </div>

        <div className="flex items-stretch w-full md:w-fit justify-between">
          {/* LEFT column */}
          <div className="flex flex-col justify-between text-left space-y-8 flex-1">
            <div>
              {/* WORK / TECHNOLOGY / TEAM */}
              {project.services && project.services.length > 0 && (
                <div>
                  <h3 className="font-black uppercase text-sm mb-2">Work:</h3>
                  <ul className="space-y-1">
                    {project.services.map((item: string, i: number) => (
                      <li key={i} className="text-sm">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {project.tools && (
                <div className="mt-6">
                  <h3 className="font-black uppercase text-sm mb-2">
                    Technology:
                  </h3>
                  <ul className="space-y-1">
                    {Array.isArray(project.tools)
                      ? project.tools.map((tool: string, i: number) => (
                          <li key={i} className="text-sm">
                            {tool}
                          </li>
                        ))
                      : project.tools.split(",").map((tool, i) => (
                          <li key={i} className="text-sm">
                            {tool.trim()}
                          </li>
                        ))}
                  </ul>
                </div>
              )}

              {project.team && project.team.length > 0 && (
                <div className="mt-6">
                  <h3 className="font-black uppercase text-sm mb-2">Team:</h3>
                  <ul className="space-y-1">
                    {project.team.map((member: string, i: number) => (
                      <li key={i} className="text-sm">
                        {member}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Prev at bottom */}
            <button
              onClick={handlePrev}
              className="text-sm font-bold uppercase tracking-wide text-slate-grey hover:text-charcoal transition-colors duration-200 mt-auto text-left"
            >
              ← Prev
            </button>
          </div>

          {/* RIGHT column */}
          {typeof window !== "undefined" &&
            window.innerWidth <= 768 &&
            project.year &&
            project.online === true && (
              <div className="flex flex-col justify-between flex-1">
                <div>
                  {project.online && (
                    <Link
                      href={project.url}
                      target="_blank"
                      className="font-black uppercase text-sm mb-2 inline-block"
                    >
                      Visit Site
                    </Link>
                  )}
                  <p className="text-sm">{project.year}</p>
                </div>

                {/* Next pinned bottom */}
                <button
                  onClick={handleNext}
                  className="text-sm font-bold uppercase tracking-wide text-slate-grey hover:text-charcoal transition-colors duration-200 mt-auto text-right"
                >
                  Next →
                </button>
              </div>
            )}
        </div>
      </div>
    </main>
  );
}
