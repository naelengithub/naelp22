import internal from "stream";
import { useWindowSize } from "../../../hooks/useWindowSize";

export interface ImagePosition {
  top: number;
  left: number;
}

export function PositionMainImages() {
  const size = useWindowSize();
  if (size.width > 480) {
    [
      {
        top: 0,
        left: 0,
      },
      {
        top: 0,
        left: size.width / 2,
      },
      {
        top: (size.width / 8) * 5,
        left: 0,
      },
      {
        top: (size.width / 8) * 9,
        left: size.width / 4,
      },
      {
        top: (size.width / 8) * 14,
        left: size.width / 2,
      },
      {
        top: (size.width / 8) * 18,
        left: size.width / 8,
      },
    ];
  } else {
    grid: [
      {
        top: 0,
        left: 0,
      },
      {
        top: 0,
        left: 0,
      },
      {
        top: 0,
        left: 0,
      },
      {
        top: 0,
        left: 0,
      },
      {
        top: 0,
        left: 0,
      },
      {
        top: 0,
        left: 0,
      },
    ];
  }
}
