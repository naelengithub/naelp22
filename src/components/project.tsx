import React from "react";
import Image from "next/image";
import Link from "next/link";

export interface WebProjectProps {
  className?: string;
  brand: string;
  description: string;
  year: number;
  team?: string;
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
  const { className, brand, description, year, images, url, concept, team } =
    props;

  // Function to render the images for each category
  const renderImages = (sources: string[]) => {
    return sources.map((src, index) => {
      const isMbImage = src.includes("mb") || src.includes("mobile");
      const isFbCover = src.includes("cover");
      const isCard = src.includes("card");
      const isFolder = src.includes("folder");
      const imageWidth = isFbCover
        ? 800
        : isMbImage
        ? 200
        : isCard
        ? 182
        : isFolder
        ? 245
        : 500;

      return (
        <div
          key={index}
          className="carousel-item min-w-fit h-80 overflow-scroll"
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
      <Link href={url} target="_blank">
        <h3>{concept}</h3>
        <p className="max-w-5xl">
          {brand}, {year} <br />
          {description}
          {team && (
            <>
              <br /> {team}
            </>
          )}
        </p>
      </Link>
      <div className="flex flex-row overflow-x-auto gap-[50px]">
        {images.map((imageGroup, groupIndex) => (
          <div key={groupIndex} className="mb-4 flex-shrink-0">
            <div className="flex overflow-x-scroll gap-2">
              {renderImages(imageGroup.sources)}
            </div>
            <p className="text-right">
              {imageGroup.category.charAt(0).toUpperCase() +
                imageGroup.category.slice(1)}
            </p>
          </div>
        ))}
      </div>

      {/* <div className="flex w-full justify-between">
        <h3>{url}</h3>
        <h3>{year}</h3>
      </div> */}
    </div>
  );
};
