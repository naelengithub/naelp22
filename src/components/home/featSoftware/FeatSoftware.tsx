import * as React from "react";
import { useWindowSize } from "../../../hooks/useWindowSize";

export interface FeatSoftwareProps {
  className?: string;
}

/**
 * @name FeatSoftware
 * @description FAQs feature component.
 */
export const FeatSoftware = (props: FeatSoftwareProps) => {
  const { className } = props;

  const size = useWindowSize();
  const screenWidthSize = size.width;

  return (
    <div
      style={{
        backgroundColor: "pink",
        display: "flex",
        position: "relative",
        height: screenWidthSize / 1.4,
        alignItems: "flex-end",
        borderBottom: "solid 3px",
      }}
    >
      <div
        style={{
          display: "flex",
          height: screenWidthSize / 2.3,
        }}
      >
        <h1
          style={{
            fontSize: screenWidthSize / 5.75,
            margin: 0,
          }}
        >
          software
          <br />
          engineering
        </h1>
      </div>
      <div>
        <h1
          style={{
            margin: "0",
            fontSize: screenWidthSize / 40,
            position: "absolute",
            top: screenWidthSize / 3.3,
            left: "1rem",
          }}
        >
          [landing on]
        </h1>
      </div>
    </div>
  );
};
