import * as React from "react";
import { useWindowSize } from "../../../hooks/useWindowSize";
import Image from "next/image";

export interface MiddleToLeftProps {
  className?: string;
  goodFor: string;
  image: string;
  title: string;
}

/**
 * @name MiddleToLeft
 * @description MiddleToLeft desktop on hover information component.
 */
export const MiddleToLeft = (props: MiddleToLeftProps) => {
  const { className, goodFor, image, title } = props;

  const size = useWindowSize();
  const screenWidthSize = size.width;

  if (!screenWidthSize) {
    return null;
  } else {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "row-reverse",
          position: "absolute",
          right: screenWidthSize / 10,
          bottom: -(screenWidthSize / 10) * 1.5,
          alignItems: "end",
          zIndex: 20,
        }}
      >
        <div className="mr-10">
          <h1
            style={{
              fontSize: screenWidthSize / 15,
              margin: "0",
              textAlign: "right",
              minWidth: "600px",
            }}
          >
            {title}
          </h1>
          <div className="relative flex flex-row-reverse items-end">
            <Image
              src={image}
              alt={title}
              layout="intrinsic"
              width={300}
              height={400}
            />
            <p className="pr-2">{goodFor}</p>
          </div>
        </div>
      </div>
    );
  }
};
