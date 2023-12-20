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
        className="flex flex-col bg-red-300"
      >
        <div
          style={{
            backgroundColor: "#40798C",
            display: "flex",
            flexDirection: "column",
            position: "absolute",
            bottom: 5,
            left: screenWidthSize / 12,
            width: (screenWidthSize / 10) * 6,
            zIndex: 20,
          }}
        >
          <div
            style={{
              position: "relative",
              width: (screenWidthSize / 10) * 6,
              height: (screenWidthSize / 10) * 4,
            }}
          >
            <Image
              src="/matlaltik/SSPlanta.png"
              alt="Birds eye view of the project."
              layout="fill"
            />
          </div>
        </div>
        <div>
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
