import * as React from "react";
import { useWindowSize } from "../../hooks/useWindowSize";

export interface FooterProps {
  className?: string;
}

/**
 * @name Footer
 * @description Footer component.
 */
export const Footer = (props: FooterProps) => {
  const { className } = props;

  const size = useWindowSize();
  const screenWidthSize = size.width;
  console.log(JSON.stringify(screenWidthSize));

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        width: screenWidthSize,
      }}
    >
      <div
        style={{ margin: "1rem", display: "block", justifyContent: "center" }}
      >
        <p style={{ display: "flex", justifyContent: "center" }}>
          copyright © 2022 ana elisa
        </p>
        <p style={{ display: "flex", justifyContent: "center" }}>
          mit &hearts; in Mexiko-Stadt hergestellt
        </p>
      </div>
    </div>
  );
};

// @refresh reset
