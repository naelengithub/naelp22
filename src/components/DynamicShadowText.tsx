import React, { useState, useEffect } from "react";

export default function DynamicShadowText({ text }) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Now it's confirmed that this is client-side

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

  if (!isClient) return null; // Prevent rendering on the server side

  const shadowX = (mousePosition.x / window.innerWidth - 0.5) * 20; // Adjust for shadow offset
  const shadowY = (mousePosition.y / window.innerHeight - 0.5) * 20;

  return (
    <span
      className="text-floral-white m-6"
      style={{
        textShadow: `${shadowX}px ${shadowY}px 30px rgba(255, 105, 180, 1),
          ${shadowX}px ${shadowY}px 30px rgba(255, 20, 147, 1),
          ${shadowX}px ${shadowY}px 80px rgba(255, 20, 147, 0.8),
          ${shadowX}px ${shadowY}px 80px rgba(255, 20, 147, 0.6),
          ${shadowX}px ${shadowY}px 80px rgba(255, 20, 147, 0.4)`,
      }}
    >
      {text}
    </span>
  );
}
