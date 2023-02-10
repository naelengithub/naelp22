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
              fontSize: "90px",
              margin: "0",
            }}
          >
            spine
          </h1>
          <div
            style={{
              position: "relative",
              width: (screenWidthSize / 10) * 4,
              height: (screenWidthSize / 10) * 4.2,
            }}
          >
            <Image
              src="/spline/plantaCopy.compressed.jpg"
              alt="3D model and perspective of project."
              layout="fill"
            />
          </div>
        </div>

        <p style={{ textAlign: "right" }}>
          _2021_Berlin
          <br />
          __collaboration with
          <br />
          Barbara Sula
          <br />
          Fabian Prissok,
          <br />
          and Pia Drewes
        </p>
      </div>
    );
  }
};
