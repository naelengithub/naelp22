import * as React from "react";
import { useWindowSize } from "../../../hooks/useWindowSize";
import { Fader } from "./fader";
import styles from "./design.module.css";

export interface FeatDesignProps {
  className?: string;
}

/**
 * @name FeatDesign
 * @description FAQs feature component.
 */
export const FeatDesign = (props: FeatDesignProps) => {
  const { className } = props;

  const size = useWindowSize();
  const screenWidthSize = size.width;

  return (
    <div className={styles.container}>
      <div
        style={{
          backgroundColor: "#6BA368",
          display: "flex",
          height: screenWidthSize,
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
        }}
      >
        <div
          style={{
            border: "2px, solid",
            position: "absolute",
            top: screenWidthSize / 4,
            left: screenWidthSize / 15,
            height: screenWidthSize / 4,
            width: screenWidthSize / 4.2,
          }}
        >
          <Fader
            src="/designSamples/Comic-search.jpg"
            alt="project image"
            layout="fill"
          />
        </div>
        <div
          style={{
            position: "absolute",
            top: "4rem",
            right: "1rem",
            height: screenWidthSize / 3,
            width: screenWidthSize / 3,
          }}
        >
          <Fader
            src="/designSamples/feminist.jpg"
            alt="project image"
            layout="fill"
          />
        </div>
        <div
          style={{
            position: "absolute",
            top: screenWidthSize / 1.6,
            right: screenWidthSize / 3,
            height: screenWidthSize / 6,
            width: screenWidthSize / 4,
          }}
        >
          <Fader
            src="/designSamples/roomexperiments.jpg"
            alt="project image"
            layout="fill"
          />
        </div>
        <h1
          style={{
            fontSize: screenWidthSize / 5.75,
            height: screenWidthSize / 5.75,
          }}
        >
          design
        </h1>
        <h1
          style={{
            margin: "0",
            fontSize: screenWidthSize / 40,
            position: "absolute",
            top: screenWidthSize / 2.3,
            right: screenWidthSize / 3.9,
          }}
        >
          [falling into]
        </h1>
      </div>
    </div>
  );
};
