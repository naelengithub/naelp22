import * as React from "react";
import Image from "next/image";

import styles from "./projectImage.module.css";

export interface ProjectImageProps {
  className?: string;
  alt: string;
  src: any;
  height: number;
  width: number;
}

/**
 * @name ProjectImage
 * @description FAQs feature component.
 */
export const ProjectImage = (props: ProjectImageProps) => {
  const { className, src, alt, width, height } = props;

  return (
    <div>
      <Image src={src} alt={alt} width={width} height={height} />
    </div>
  );
};
