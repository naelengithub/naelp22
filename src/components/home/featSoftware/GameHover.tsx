import * as React from "react";
import { useWindowSize } from "../../../hooks/useWindowSize";

export interface GameHoverProps {
  className?: string;
  gameName: string;
}

/**
 * @name GameHover
 * @description Component whose content is shown when hovering a game icon.
 */
export const GameHover = (props: GameHoverProps) => {
  const { className, gameName } = props;

  const size = useWindowSize();
  const screenWidthSize = size.width;

  return (
    <div
      style={{
        display: "flex",
        position: "absolute",
        bottom: "-3.5rem",
      }}
    >
      <p>{gameName}</p>
    </div>
  );
};
