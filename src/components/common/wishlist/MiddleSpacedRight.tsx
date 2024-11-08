import * as React from "react";
import { useWindowSize } from "../../../hooks/useWindowSize";
import Image from "next/image";

export interface MiddleSpacedRightProps {
  className?: string;
  author: string;
  goodFor: string;
  image: string;
  title: string;
}

/**
 * @name MiddleSpacedRight
 * @description MiddleSpacedRight desktop on hover information component.
 */
export const MiddleSpacedRight = (props: MiddleSpacedRightProps) => {
  const { className, author, goodFor, image, title } = props;

  const size = useWindowSize();
  const screenWidthSize = size.width;

  if (!screenWidthSize) {
    return null;
  } else {
    return (
      <div
        //CONTAINER
        className="flex flex-col bg-red-300"
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            position: "absolute",
            bottom: 5,
            left: screenWidthSize / 8,
            width: (screenWidthSize / 10) * 6,
            zIndex: 20,
          }}
        >
          <div
            className="flex items-end text-right ml-20"
            style={{
              position: "relative",
              width: (screenWidthSize / 10) * 2,
              height: (screenWidthSize / 10) * 2,
            }}
          >
            <Image
              src={image}
              alt={title}
              layout="intrinsic"
              width={300}
              height={400}
            />
            <div className="pr-12 text-end min-w-full">
              <h1>{author}</h1>
              <p>{goodFor}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
};
