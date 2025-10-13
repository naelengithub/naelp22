"use client";

import { motion, useScroll } from "framer-motion";
import { useRef, useState, useEffect } from "react";

type Props = {
  lines: string[];
};

export default function ScrollTobleroneText({ lines }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const unsub = scrollYProgress.on("change", (v) => setProgress(v));
    return () => unsub();
  }, [scrollYProgress]);

  return (
    <section
      ref={ref}
      className="relative h-[300vh] bg-black text-white flex items-center justify-center"
    >
      {/* Sticky viewport that holds the animated text */}
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden [perspective:800px]">
        {lines.map((line, i) => {
          const segment = 1 / lines.length;
          const start = i * segment;
          const end = (i + 1) * segment;

          // normalize scroll progress per segment
          const t = Math.min(
            Math.max((progress - start) / (end - start), 0),
            1
          );

          // simple smooth ease
          const ease = 0.5 - 0.5 * Math.cos(t * Math.PI);

          // animation values
          const opacity = ease;
          const y = 200 - 400 * ease;
          const rotateX = 30 - 60 * ease;

          return (
            <motion.h2
              key={i}
              style={{
                opacity,
                transform: `translateY(${y}px) rotateX(${rotateX}deg)`,
                transformOrigin: "center center",
              }}
              className="absolute text-4xl md:text-6xl font-light text-center leading-tight"
            >
              {line}
            </motion.h2>
          );
        })}
      </div>
    </section>
  );
}
