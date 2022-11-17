import * as React from "react";
import { useWindowSize } from "../../../../../hooks/useWindowSize";
import Image from "next/image";

export interface EstuarioProps {
  className?: string;
}

/**
 * @name Estuario
 * @description Estuario desktop on hover information component.
 */
export const Estuario = (props: EstuarioProps) => {
  const { className } = props;

  const size = useWindowSize();
  const screenWidthSize = size.width;

  if (!screenWidthSize) {
    return null;
  } else {
    return (
      <div>
        <div
          //CONTAINER
          style={{
            boxSizing: "border-box",
            display: "flex",
            alignItems: "end",
            position: "absolute",
            top: "0",
            left: -(screenWidthSize / 10) * 2,
            width: (screenWidthSize / 10) * 9,
            height: (screenWidthSize / 10) * 3.5,
            zIndex: "1",
          }}
        >
          <div
            style={{
              position: "relative",
              width: (screenWidthSize / 10) * 3,
              height: (screenWidthSize / 10) * 2.5,
            }}
          >
            <Image
              src="/estuario/103.png"
              alt="Birds eye view of the project."
              layout="fill"
            />
          </div>
          <div
            style={{
              backgroundColor: "cornflowerblue",
              marginLeft: "1rem",
            }}
          >
            <div
            //text
            >
              <p
                style={{ textAlign: "right", margin: "0", paddingTop: "1rem" }}
              >
                _2018_Pijijiapan Chiapas, Mexico
                <br />
                __collaboration with Ana Luceo Villaseñor, and Angélica Mota.
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
                src="/estuario/101.png"
                alt="Birds eye view of the project."
                layout="fill"
              />
            </div>
          </div>
          <h1
            style={{
              backgroundColor: "white",
              fontSize: "90px",
              margin: "0",
              writingMode: "vertical-rl",
              width: screenWidthSize / 10,
            }}
          >
            estuario
          </h1>
        </div>
      </div>
    );
  }
};
