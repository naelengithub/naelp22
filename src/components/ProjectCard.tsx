"use client";

import React, { useRef, useEffect, useState } from "react";
import Link from "next/link";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";

interface ProjectCardProps {
  project: any;
  index: number;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [cursorPos, setCursorPos] = useState<{ x: number; y: number } | null>(
    null
  );

  // 🌀 Scroll-based scale & y-shift
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 75%", "end 25%"], // narrower band = stronger “center lock”
  });

  // 🔹 subtle shrink at edges, big & still near center
  const rawScale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0.85, 1.1, 0.85]
  );
  const rawY = useTransform(scrollYProgress, [0, 0.5, 1], [60, 0, -60]); // drift up/down a bit

  // soften with spring
  const scale = useSpring(rawScale, { stiffness: 90, damping: 20 });
  const y = useSpring(rawY, { stiffness: 90, damping: 20 });

  // autoplay/pause
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const io = new IntersectionObserver(
      ([entry]) =>
        entry.isIntersecting ? video.play().catch(() => {}) : video.pause(),
      { threshold: 0.5 }
    );
    io.observe(video);
    return () => io.disconnect();
  }, []);

  const media = project.media?.[0];
  const src = media?.sources?.[0] || "";
  const category = media?.category || "";
  const isVertical = media?.orientation === "vertical";
  const slug = project.brand
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  const mediaClass = isVertical
    ? "h-[50vh] w-auto object-contain"
    : isMobile
    ? "w-[66vw] h-auto object-contain"
    : "w-[33vw] h-auto object-contain";

  // hover tracking
  const handleMouseMove = (e: React.MouseEvent) =>
    setCursorPos({ x: e.clientX, y: e.clientY });
  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <>
      <motion.div
        ref={ref}
        style={{ scale, y }}
        className="relative mx-auto flex justify-center"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
      >
        <Link
          href={`/projects/${slug}`}
          className="relative inline-block border border-black"
        >
          {src.endsWith(".mp4") ? (
            <video
              ref={videoRef}
              src={src}
              muted
              loop
              playsInline
              className={mediaClass}
            />
          ) : (
            <img
              src={src}
              alt={project.brand}
              className={`border-1 ${mediaClass}`}
            />
          )}
        </Link>
      </motion.div>

      {/* 🪶 Hover label */}
      {!isMobile && isHovered && cursorPos && (
        <AnimatePresence>
          <motion.div
            className="pointer-events-none fixed z-[9999] text-white mix-blend-difference text-lg px-3 py-1"
            style={{
              left: cursorPos.x + 16,
              top: cursorPos.y + 24,
            }}
            initial={{ opacity: 0, y: -6, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.95 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            {category && <span>{category}, </span>}
            <span>{project.brand}</span>
          </motion.div>
        </AnimatePresence>
      )}
    </>
  );
}
