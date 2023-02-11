import * as React from "react";
import Image from "next/image";

export interface DesignImageProps {
  className?: string;
  alt: string;
  src: any;
  layout: any;
}

/**
 * @name DesignImage
 * @description FAQs feature component.
 */
export const DesignImage = (props: DesignImageProps) => {
  const { className, src, alt, layout } = props;

  return (
    <div>
      <Image src={src} alt={alt} layout={layout} />
    </div>
  );
};
