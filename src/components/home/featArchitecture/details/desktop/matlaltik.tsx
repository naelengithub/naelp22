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
          alignItems: "end",
          backgroundColor: "white",
          position: "absolute",
          top: -(screenWidthSize / 10) * 5.5,
          left: screenWidthSize / 10,
          width: (screenWidthSize / 10) * 5,
          height: (screenWidthSize / 10) * 6,
          zIndex: "1",
        }}
      >
        <div
          style={{
            justifyContent: "center",
            width: (screenWidthSize / 10) * 5,
          }}
        >
          <div
            style={{
              margin: "0",
              textAlign: "right",
              padding: "1rem",
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
            <p>
              _2018_CDMX, Mexico
              <br />
              __collaborators: Ivana Arvizu, Julieta Cabadilla,
              <br /> and Zamantha Garcia
            </p>
          </div>
          <div
            style={{
              position: "relative",
              width: (screenWidthSize / 10) * 5,
              height: (screenWidthSize / 10) * 3.5,
            }}
          >
            <Image
              src="/matlaltik/MatlaltikBirdsEye.jpg"
              alt="Birds eye view of the project."
              layout="fill"
              style={{ paddingRight: "1rem", paddingLeft: "1rem" }}
            />
          </div>
        </div>
        {/* <div
          style={{
            position: "absolute",
            top: "0",
            right: 0,
            width: (screenWidthSize / 10) * 3,
            height: (screenWidthSize / 10) * 6,
          }}
        >
          <Image
            src="/matlaltik/MatlaltikCollage.jpg"
            alt="Collage of the main park section of the project."
            layout="fill"
          />
        </div> */}
      </div>
    );
  }
};
