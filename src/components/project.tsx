import React from "react";
import Image from "next/image";

export interface WebProjectProps {
  className?: string;
  title: string;
  year: number;
  images: string[];
}

/**
 * @name WebProject
 * @description Each webproject added in as prop.
 */

export const WebProject = (props: WebProjectProps) => {
  const { className, title, year, images } = props;
  return (
    <div className="p-6">
      <div className="flex overflow-x-scroll gap-4">
        {images.map((src, index) => (
          <div
            key={index}
            className="carousel-item min-w-fit h-80 overflow-scroll"
          >
            <Image
              src={src}
              alt={`${title} - Image ${index + 1}`}
              width={500}
              height={300}
              className=""
            />
          </div>
        ))}
      </div>
      <div className="flex w-full justify-between">
        <h3>{title}</h3>
        <h3>{year}</h3>
      </div>
    </div>
  );
};
