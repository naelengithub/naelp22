import * as React from "react";
import { GamesImage } from "./GameImage";

export interface GamesProps {
  className?: string;
  children: React.ReactNode;
  alt: string;
  src: any;
  layout: any;
}

/**
 * @name Games
 * @description Game project link component.
 */
export const Games = (props: GamesProps) => {
  const { className, children, src, alt, layout } = props;

  // Hooks
  const [isSelected, setIsSelected] = React.useState(false);

  return (
    <div>
      <div
        onMouseEnter={() => {
          setIsSelected(true);
        }}
        onMouseLeave={() => {
          setIsSelected(false);
        }}
      >
        <GamesImage src={src} alt={alt} layout={layout} />
      </div>
      <div>{isSelected ? children : null}</div>
    </div>
  );
};
