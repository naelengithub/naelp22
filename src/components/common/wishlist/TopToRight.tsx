import * as React from "react";
import { useWindowSize } from "../../../hooks/useWindowSize";
import Image from "next/image";

export interface TopToRightProps {
  className?: string;
  style?: any;
  author: string;
  goodFor: string;
  title: string;
  image: string;
}

/**
 * @name TopToRight
 * @description On hover details component.
 */
export const TopToRight = (props: TopToRightProps) => {
  const { className, style, author, goodFor, image, title } = props;

  const size = useWindowSize();
  const screenWidthSize = size.width;

  if (!screenWidthSize) {
    return null;
  } else {
    return (
      <div>
        <div
          //CONTAINER
          style={{
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column",
            position: "absolute",
            top: -(screenWidthSize / 10) * 2,
            left: screenWidthSize / 13,
            zIndex: 20,
          }}
        >
          <div className="flex items-end">
            <Image
              src={image}
              alt={title}
              layout="intrinsic"
              width={300}
              height={400}
            />
            <div className="flex-col p-4 pb-0 min-w-[500px]">
              <p className="max-w-[200px]">{goodFor}</p>
              <h2>{title}</h2>
            </div>
          </div>
        </div>
      </div>
    );
  }
};
