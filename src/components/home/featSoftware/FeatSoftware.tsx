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
        position: "relative",
        height: screenWidthSize / 1.5,
      }}
    >
      <div
        style={{
          display: "flex",
          height: "50rem",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1
          style={{
            fontSize: screenWidthSize / 5.75,
            height: screenWidthSize / 5.75,
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
            top: screenWidthSize / 3.6,
            left: "1rem",
          }}
        >
          [landing on]
        </h1>
      </div>
    </div>
  );
};
