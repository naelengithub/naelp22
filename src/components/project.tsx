import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

export interface WebProjectProps {
  className?: string;
  brand: string;
  description: string;
  live: boolean;
  year: number;
  team?: string;
  tools: string;
  url: string;
  concept: string;
  images: {
    category: string;
    sources: string[];
  }[];
}

/**
 * @name WebProject
 * @description Each web project added in as a prop.
 */

export const WebProject = (props: WebProjectProps) => {
  const {
    className,
    brand,
    description,
    year,
    images,
    url,
    concept,
    team,
    tools,
    live,
  } = props;

  const [screenWidth, setScreenWidth] = useState<number>(0);
  const [isDesktop, setIsDesktop] = useState<boolean>(false);

  // Update screen width and check if on desktop
  useEffect(() => {
    const handleResize = () => {
      const currentWidth = window.innerWidth;
      setScreenWidth(currentWidth);
      setIsDesktop(currentWidth >= 768); // Example breakpoint for 'md+' screens
    };

    // Set initial values
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Function to render the images for each category
  const renderImages = (sources: string[]) => {
    return sources.map((src, index) => {
      const isMbImage =
        src.includes("mb") || src.includes("mobile") || src.includes("Mobile");
      const isDesktopImage =
        src.includes("dktp") ||
        src.includes("desktop") ||
        src.includes("Desktop");
      const isFbCover = src.includes("cover");
      const isCard = src.includes("card");
      const isFolder = src.includes("folder");

      // Set image width based on screen size
      const imageWidth = isDesktop
        ? // Desktop-specific widths
          isFbCover
          ? 800
          : isMbImage
          ? 200
          : isDesktopImage
          ? 500
          : isCard
          ? 182
          : isFolder
          ? 245
          : 500
        : // Mobile-specific widths
        isFbCover
        ? 800
        : isMbImage
        ? Math.round(screenWidth / 3)
        : isDesktopImage
        ? Math.round(screenWidth * 0.8)
        : isCard
        ? 182
        : isFolder
        ? 245
        : 500;

      return (
        <div
          key={index}
          className="carousel-item min-w-fit h-40 sm:h-80 overflow-scroll"
        >
          <Image
            src={src}
            alt={`${brand} - Image ${index + 1}`}
            width={imageWidth}
            height={300}
            className=""
            loading="lazy"
          />
        </div>
      );
    });
  };

  return (
    <div className={`flex flex-col p-6 ${className}`}>
      <h3>{concept}</h3>
      <p className="max-w-5xl">
        {live ? (
          <Link href={url} target="_blank" className="underline">
            {brand}, {year}
          </Link>
        ) : (
          <>
            {brand}, {year} (in development)
          </>
        )}
        <br />
        {description}
        {team && (
          <>
            <br /> {team}
          </>
        )}
      </p>
      <p className="mt-2 text-sm font-bold">Made with: {tools}</p>
      <div className="flex text-xs mt-2">
        <span>scroll</span>
        <ArrowRightIcon className="h-4 w-6 text-gray-600" />{" "}
      </div>
      <div className="flex flex-row overflow-x-auto gap-[50px]">
        {images.map((imageGroup, groupIndex) => (
          <div key={groupIndex} className="mb-4 flex-shrink-0">
            <div className="flex overflow-x-scroll gap-2">
              {renderImages(imageGroup.sources)}
            </div>
            <p>
              {imageGroup.category.charAt(0).toUpperCase() +
                imageGroup.category.slice(1)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
