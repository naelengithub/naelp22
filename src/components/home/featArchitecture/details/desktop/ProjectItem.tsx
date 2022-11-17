import * as React from "react";
import { ProjectImage } from "../../projectImage";

export interface ProjectItemProps {
  className?: string;
  children: React.ReactNode;
  alt: string;
  src: any;
  width: any;
  height: any;
}

/**
 * @name ProjectItem
 * @description FAQs feature component.
 */
export const ProjectItem = (props: ProjectItemProps) => {
  const { className, children, alt, src, width, height } = props;

  // Hooks
  const [isSelected, setIsSelected] = React.useState(false);

  // Handlers
  const handleClick = () => {
    setIsSelected(!isSelected);
  };

  return (
    <div>
      <div
        onMouseEnter={() => {
          console.log("entered", src);
          setIsSelected(true);
        }}
        onMouseLeave={() => {
          console.log("left", src);
          setIsSelected(false);
        }}
      >
        <ProjectImage src={src} alt={alt} width={width} height={height} />
      </div>
      <div
        onMouseEnter={() => {
          console.log("entered", src);
          setIsSelected(true);
        }}
        onMouseLeave={() => {
          console.log("left", src);
          setIsSelected(false);
        }}
        onClick={() => setIsSelected(false)}
      >
        {isSelected ? children : null}
      </div>
    </div>
  );
};
