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
        backgroundColor: "#B38BFA",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        width: screenWidthSize,
      }}
    >
      <div
        style={{
          display: "flex",
          margin: "1rem",
          justifyContent: "space-between",
        }}
      >
        <p>copyright © 2022, built with &hearts; in Mexico City</p>
        <button
          onClick={() => {
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
          }}
          style={{ backgroundColor: "transparent", border: "none" }}
        >
          scroll to top &uarr;
        </button>
      </div>
    </div>
  );
};

// @refresh reset
