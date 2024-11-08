import * as React from "react";
import { useWindowSize } from "../../../hooks/useWindowSize";
import Image from "next/image";

export interface MiddleToRightProps {
  className?: string;
  author: string;
  goodFor: string;
  image: string;
  title: string;
}

/**
 * @name MiddleToRight
 * @description MiddleToRight desktop on hover information component.
 */
export const MiddleToRight = (props: MiddleToRightProps) => {
  const { className, author, goodFor, image, title } = props;

  const size = useWindowSize();
  const screenWidthSize = size.width;

  if (!screenWidthSize) {
    return null;
  } else {
    return (
      <div
        style={{
          display: "flex",
          position: "absolute",
          top: -(screenWidthSize / 10),
          left: screenWidthSize / 10,
          alignItems: "end",
          zIndex: 20,
        }}
      >
        <div style={{ width: screenWidthSize / 3 }}>
          <h3>{title}</h3>
          <p>{goodFor}</p>
          <Image src={image} alt={title} width={600} height={800} />
        </div>
      </div>
    );
  }
};
