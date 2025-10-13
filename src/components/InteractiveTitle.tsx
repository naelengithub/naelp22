"use client";
import React, { useEffect, useRef } from "react";

export default function InteractiveTitle() {
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = textRef.current;
    if (!el) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const dx = e.clientX - centerX;
      const dy = e.clientY - centerY;

      // update CSS variables, not inline style string
      el.style.setProperty("--shadow-x", `${dx / 40}px`);
      el.style.setProperty("--shadow-y", `${dy / 40}px`);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <h1 className="text-center text-floral-white py-10 md:py-40 mx-10 text-5xl sm:text-8xl break-words">
      <span ref={textRef} className="interactive-text">
        Selected Works
      </span>
      <style jsx>{`
        .interactive-text {
          transition: text-shadow 0.25s ease-out;
          text-shadow: var(--shadow-x, 0px) var(--shadow-y, 0px) 8px
              rgba(100, 120, 140, 0.7),
            calc(var(--shadow-x, 0px) * 2) calc(var(--shadow-y, 0px) * 2) 16px
              rgba(130, 150, 170, 0.5),
            calc(var(--shadow-x, 0px) * 3) calc(var(--shadow-y, 0px) * 3) 24px
              rgba(160, 180, 200, 0.3);
        }
      `}</style>
    </h1>
  );
}
