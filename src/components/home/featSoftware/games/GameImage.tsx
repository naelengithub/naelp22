import * as React from "react";
import Image from "next/image";

export interface GamesImageProps {
  className?: string;
  alt: string;
  src: any;
  layout: any;
}

/**
 * @name GamesImage
 * @description FAQs feature component.
 */
export const GamesImage = (props: GamesImageProps) => {
  const { className, src, alt, layout } = props;

  return (
    <div>
      <Image src={src} alt={alt} layout={layout} />
    </div>
  );
};
