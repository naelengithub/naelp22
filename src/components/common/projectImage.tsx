import * as React from "react";
import Image from "next/image";

export interface ProjectImageProps {
  className?: string;
  alt: string;
  src: any;
  height: any;
  width: any;
  left: any;
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
