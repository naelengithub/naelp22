import * as React from "react";
import { useWindowSize } from "../../../hooks/useWindowSize";

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
    <div>
      <div
        style={{
          backgroundColor: "green",
          display: "flex",
          height: screenWidthSize,
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          borderTop: "solid 3px",
          borderBottom: "solid 3px",
        }}
      >
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
