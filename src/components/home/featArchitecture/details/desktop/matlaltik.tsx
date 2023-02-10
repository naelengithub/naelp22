import * as React from "react";
import { useWindowSize } from "../../../../../hooks/useWindowSize";
import Image from "next/image";

export interface MatlaltikProps {
  className?: string;
}

/**
 * @name Matlaltik
 * @description Matlaltik desktop on hover information component.
 */
export const Matlaltik = (props: MatlaltikProps) => {
  const { className } = props;

  const size = useWindowSize();
  const screenWidthSize = size.width;

  if (!screenWidthSize) {
    return null;
  } else {
    return (
      <div
        //CONTAINER
        style={{
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "row",
          position: "relative",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            position: "absolute",
            top: -(screenWidthSize / 10) * 5,
            left: screenWidthSize / 10,
            width: (screenWidthSize / 10) * 6,
            zIndex: 20,
          }}
        >
          <h1
            style={{
              fontSize: "90px",
              margin: "0",
            }}
          >
            matlaltik
          </h1>
          <div
            style={{
              position: "relative",
              width: (screenWidthSize / 10) * 6,
              height: (screenWidthSize / 10) * 4,
            }}
          >
            <Image
              src="/matlaltik/MatlaltikBirdsEye.compressed.jpg"
              alt="Birds eye view of the project."
              layout="fill"
            />
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            right: -(screenWidthSize / 10) * 6,
          }}
        >
          <p style={{ margin: 0, textAlign: "end" }}>
            _2018_CDMX, Mexico
            <br />
            __collaborators: Ivana Arvizu, Julieta Cabadilla, and Zamantha
            Garcia
          </p>
        </div>
      </div>
    );
  }
};
