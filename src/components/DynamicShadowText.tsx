import React, { useState, useEffect } from "react";

export default function DynamicShadowText({ text }) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    const handleMouseMove = (event) => {
      setMousePosition({
        x: event.clientX,
        y: event.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  if (!isClient) return null;

  const shadowX = (mousePosition.x / window.innerWidth - 0.5) * 20;
  const shadowY = (mousePosition.y / window.innerHeight - 0.5) * 20;

  return (
    <span
      className="text-floral-white m-6"
      style={{
        textShadow: `
          ${shadowX}px ${shadowY}px 20px rgba(100, 120, 140, 0.7),
          ${shadowX}px ${shadowY}px 40px rgba(130, 150, 170, 0.5),
          ${shadowX}px ${shadowY}px 60px rgba(160, 180, 200, 0.3),
            ${shadowX}px ${shadowY}px 20px rgba(100, 120, 140, 0.7),
          ${shadowX}px ${shadowY}px 40px rgba(130, 150, 170, 0.5),
          ${shadowX}px ${shadowY}px 60px rgba(160, 180, 200, 0.3)
        `,
      }}
    >
      {text}
    </span>
  );
}
