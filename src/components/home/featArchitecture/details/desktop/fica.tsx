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
          backgroundColor: "white",
          display: "flex",
          position: "absolute",
          right: screenWidthSize / 10,
          bottom: -(screenWidthSize / 10) * 1.5,
          alignItems: "end",
        }}
      >
        <div>
          <div style={{ width: (screenWidthSize / 10) * 6 }}>
            <h1 style={{ fontSize: "90px", margin: "0", textAlign: "right" }}>
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
              src="/fica/render.jpg"
              alt="3D render of project."
              layout="fill"
            />
          </div>
        </div>
        <div
          style={{ width: (screenWidthSize / 10) * 2, paddingLeft: "0.5rem" }}
        >
          <p>_2018_CDMX</p>
          <span style={{ display: "flex" }}>
            <p>__</p>
            <h1 style={{ margin: "0" }}>TO</h1>
          </span>
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
