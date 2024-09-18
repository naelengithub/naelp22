import React, { useState, useEffect } from "react";

export default function DynamicShadowText({ text }) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({
        x: event.clientX,
        y: event.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const shadowX = (mousePosition.x / window.innerWidth - 0.5) * 20; // Adjust for shadow offset
  const shadowY = (mousePosition.y / window.innerHeight - 0.5) * 20;

  return (
    <div className="bg-floral-white min-h-screen flex justify-center items-center">
      <h1
        className="text-floral-white text-8xl"
        style={{
          textShadow: `${shadowX}px ${shadowY}px 30px rgba(255, 105, 180, 1),
          ${shadowX}px ${shadowY}px 30px rgba(255, 20, 147, 1),
          ${shadowX}px ${shadowY}px 80px rgba(255, 20, 147, 0.8),
          ${shadowX}px ${shadowY}px 80px rgba(255, 20, 147, 0.6),
          ${shadowX}px ${shadowY}px 80px rgba(255, 20, 147, 0.4)`,
        }}
      >
        {text}
      </h1>
    </div>
  );
}
