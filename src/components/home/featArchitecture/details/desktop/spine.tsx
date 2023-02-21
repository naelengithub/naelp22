import * as React from "react";
import { useWindowSize } from "../../../../../hooks/useWindowSize";
import Image from "next/image";

export interface SpineProps {
  className?: string;
}

/**
 * @name Spine
 * @description Spine desktop on hover information component.
 */
export const Spine = (props: SpineProps) => {
  const { className } = props;

  const size = useWindowSize();
  const screenWidthSize = size.width;

  if (!screenWidthSize) {
    return null;
  } else {
    return (
      <div
        style={{
          backgroundColor: "#40798C",
          display: "flex",
          position: "absolute",
          top: -(screenWidthSize / 10) * 3.65,
          left: screenWidthSize / 10,
          alignItems: "end",
          zIndex: 20,
        }}
      >
        <div>
          <h1
            style={{
              fontSize: screenWidthSize / 10,
              margin: "0",
            }}
          >
            spine
          </h1>
          <div
            style={{
              position: "relative",
              width: (screenWidthSize / 10) * 3.5,
              height: (screenWidthSize / 10) * 3.7,
            }}
          >
            <Image
              src="/spline/plantaCopy.compressed.png"
              alt="3D model and perspective of project."
              layout="fill"
            />
          </div>
        </div>
        <div style={{ width: (screenWidthSize / 10) * 2 }}>
          <p style={{ textAlign: "left", paddingLeft: "1rem" }}>
            _2021_Berlin
            <br />
            __collab with
            <br />
            Barbara Sula,
            <br />
            Fabian Prissok,
            <br />
            and Pia Drewes
          </p>
        </div>
      </div>
    );
  }
};
