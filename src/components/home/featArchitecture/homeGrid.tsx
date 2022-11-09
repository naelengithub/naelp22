import * as React from "react";
import { useWindowSize } from "../../../hooks/useWindowSize";
import { HomeImages } from "../homeImages";

export interface HomeGridProps {
  className?: string;
}

/**
 * @name HomeGrid
 * @description FAQs feature component.
 */
export const HomeGrid = (props: HomeGridProps) => {
  const { className } = props;

  const size = useWindowSize();
  const screenWidthSize = size.width;

  return (
    <div>
      <HomeImages
        width={screenWidthSize / 2}
        height={screenWidthSize / 4}
      ></HomeImages>
    </div>
  );
};
