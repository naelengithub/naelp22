import * as React from "react";
import { useWindowSize } from "../../../../../hooks/useWindowSize";
import Image from "next/image";

export interface XitleProps {
  className?: string;
  style?: any;
}

/**
 * @name Xitle
 * @description Xitle desktop on hover information component.
 */
export const Xitle = (props: XitleProps) => {
  const { className, style } = props;

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
          backgroundColor: "green",
          display: "flex",
          alignItems: "end",
          position: "absolute",
          top: -(screenWidthSize / 10) * 0.5,
          left: -(screenWidthSize / 10) * 5,
        }}
      >
        <div style={{ backgroundColor: "white" }}>
          <h1
            style={{
              fontSize: "90px",
              margin: "0",
              paddingRight: "1rem",
              textAlign: "right",
              height: screenWidthSize / 10,
            }}
          >
            xitle
          </h1>
          <div
            style={{
              position: "relative",
              width: (screenWidthSize / 10) * 5,
              height: (screenWidthSize / 10) * 3,
            }}
          >
            <Image
              src="/xitle/Render2.jpg"
              alt="3D render of farming section."
              layout="fill"
              style={{ paddingRight: "1rem" }}
            />
          </div>
          <p style={{ paddingRight: "1rem", textAlign: "right" }}>
            _2019_CDMX, Mexico
            <br />
            _colaboration with Alejandro Palacio,
            <br />
            Armando Ramos, Julieta Cabadilla, and Robert Allen.
          </p>
        </div>
      </div>
    );
  }
};
