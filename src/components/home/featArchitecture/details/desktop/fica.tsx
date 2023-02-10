import * as React from "react";
import { useWindowSize } from "../../../../../hooks/useWindowSize";
import Image from "next/image";

export interface FicaProps {
  className?: string;
}

/**
 * @name Fica
 * @description Fica desktop on hover information component.
 */
export const Fica = (props: FicaProps) => {
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
          flexDirection: "row-reverse",
          position: "absolute",
          right: screenWidthSize / 10,
          bottom: -(screenWidthSize / 10) * 1.5,
          alignItems: "end",
          zIndex: 20,
        }}
      >
        <div>
          <div>
            <h1
              style={{
                backgroundColor: "#E4CCF4",
                fontSize: "90px",
                margin: "0",
                textAlign: "right",
              }}
            >
              FICA 2018
            </h1>
          </div>
          <div
            style={{
              position: "relative",
              width: (screenWidthSize / 10) * 6,
              height: (screenWidthSize / 10) * 4,
            }}
          >
            <Image
              src="/fica/render.compressed.jpg"
              alt="3D render of project."
              layout="fill"
            />
          </div>
        </div>
        <div
          style={{
            backgroundColor: "#E4CCF4",
            width: (screenWidthSize / 10) * 2,
            paddingRight: "0.5rem",
            textAlign: "end",
            paddingTop: "5rem",
          }}
        >
          <p>_2018_CDMX</p>
          <p style={{ fontSize: screenWidthSize / 50 }}>__TO</p>
          <p style={{ marginTop: "0" }}>José Amozurrutia + Carlos Facio</p>
          <p>Mariana Brito, Úrsula Rebollar, Álvaro Martínez</p>
          <p style={{ marginBottom: "0" }}>
            collaboration with Patricia García, Ana Lucero Villaseñor, Angélica
            Mota, Sergio Carbajal, and myself
          </p>
        </div>
      </div>
    );
  }
};
