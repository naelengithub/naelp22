import * as React from "react";
import { useWindowSize } from "../../../hooks/useWindowSize";
import Image from "next/image";

export interface BottomToLeftProps {
  className?: string;
  author: string;
  goodFor: string;
  image: string;
  title: string;
  style?: any;
}

/**
 * @name BottomToLeft
 * @description BottomToLeft desktop on hover information component.
 */
export const BottomToLeft = (props: BottomToLeftProps) => {
  const { className, author, goodFor, image, title, style } = props;

  const size = useWindowSize();
  const screenWidthSize = size.width;

  if (!screenWidthSize) {
    return null;
  } else {
    return (
      <div
        //CONTAINER
        className="flex  flex-col text-right items-end mr-20 w-96 z-20"
        style={{
          position: "absolute",
          bottom: -(screenWidthSize / 10) * 3,
          right: screenWidthSize / 10,
        }}
      >
        <div
          style={{
            height: screenWidthSize / 10,
            display: "flex",
            alignItems: "end",
          }}
        >
          <h1>{title}</h1>
        </div>
        <div className="items-end">
          <Image
            src={image}
            alt={title}
            layout="intrinsic"
            width={300}
            height={400}
          />
          <p>{goodFor}</p>
        </div>

        <div
          style={{
            height: (screenWidthSize / 10) * 0.5,
            alignItems: "center",
          }}
        >
          <p
            style={{
              textAlign: "right",
              marginBottom: "0",
            }}
          >
            {author}.
          </p>
        </div>
      </div>
    );
  }
};
