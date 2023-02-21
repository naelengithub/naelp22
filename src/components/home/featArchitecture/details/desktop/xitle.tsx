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
          display: "flex",
          flexDirection: "column",
          alignItems: "end",
          position: "absolute",
          bottom: -(screenWidthSize / 10) * 3,
          right: screenWidthSize / 10,
          paddingRight: "0.5rem",
          zIndex: 20,
        }}
      >
        <div
          style={{
            height: screenWidthSize / 10,
            display: "flex",
            alignItems: "end",
          }}
        >
          <h1
            style={{
              fontSize: screenWidthSize / 10,
              margin: "0",
              textAlign: "end",
            }}
          >
            xitle
          </h1>
        </div>
        <div>
          <div
            style={{
              position: "relative",
              width: (screenWidthSize / 10) * 5,
              height: (screenWidthSize / 10) * 3,
            }}
          >
            <Image
              src="/xitle/Render2.compressed.png"
              alt="3D render of project farming section."
              layout="fill"
            />
          </div>
        </div>
        <div
          style={{
            height: (screenWidthSize / 10) * 0.5,
            alignItems: "center",
          }}
        >
          <p
            style={{
              backgroundColor: "#40798C",
              textAlign: "right",
              marginBottom: "0",
            }}
          >
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
