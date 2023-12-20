import * as React from "react";
import { useWindowSize } from "../../../../../hooks/useWindowSize";
import Image from "next/image";
import styles from "./estuario.module.css";

export interface EstuarioProps {
  className?: string;
  style?: any;
}

/**
 * @name Estuario
 * @description Estuario desktop on hover details component.
 */
export const Estuario = (props: EstuarioProps) => {
  const { className, style } = props;

  const size = useWindowSize();
  const screenWidthSize = size.width;

  if (!screenWidthSize) {
    return null;
  } else {
    return (
      <div className={styles.container}>
        <div
          //CONTAINER
          style={{
            backgroundColor: "#40798C",
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column",
            position: "absolute",
            top: -(screenWidthSize / 10) * 2,
            left: screenWidthSize / 13,
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
              estuario
            </h1>
          </div>
          <div>
            <div
              style={{
                position: "relative",
                width: (screenWidthSize / 10) * 5,
                height: (screenWidthSize / 10) * 3.5,
              }}
            >
              <Image
                src="/estuario/101.compressed.png"
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
            <p style={{ marginBottom: "0" }}>
              _2018_Pijijiapan Chiapas, Mexico
              <br />
              _colaboration with Ana Lucero
              <br />
              Villaseñor and Angélica Mota
            </p>
          </div>
        </div>
      </div>
    );
  }
};
