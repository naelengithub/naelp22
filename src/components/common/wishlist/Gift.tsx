import * as React from "react";
import { ProjectImage } from "../../home/featArchitecture/Overview/projectImage";

export interface GiftProps {
  className?: string;
  children: React.ReactNode;
  alt: string;
  src: any;
  width: any;
  height: any;
}

/**
 * @name Gift
 * @description Logic for when hovering on project item, its image is rendered.
 */
export const Gift = (props: GiftProps) => {
  const { className, children, alt, src, width, height } = props;

  // Hooks
  const [isSelected, setIsSelected] = React.useState(false);

  return (
    <div
      onMouseEnter={() => {
        setIsSelected(true);
        console.log("entered!");
      }}
      onMouseLeave={() => {
        setIsSelected(false);
        console.log("left");
      }}
      style={{ position: "relative" }}
    >
      <ProjectImage src={src} alt={alt} width={width} height={height} />
      {isSelected && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 1,
          }}
        >
          {children}
        </div>
      )}
    </div>
  );
};