import * as React from "react";
import { DetailedItem } from "./detailedItem";

import { useWindowSize } from "../../../../hooks/useWindowSize";

import { ProjectImage } from "../projectImage";

export interface DetailedVigaPropsProps {
  className?: string;
}

/**
 * @name DetailedVigaProps
 * @description FAQs feature component.
 */
export const DetailedViga = (props: DetailedVigaPropsProps) => {
  const { className } = props;

  const size = useWindowSize();
  const screenWidthSize = size.width;
  console.log(JSON.stringify(screenWidthSize));

  if (!screenWidthSize) {
    return null;
  } else {
    return (
      <div>
        <DetailedItem title="Viga" date="06/2019" location="CDMX, Mexico">
          <div style={{ padding: "1rem", marginRight: "2rem" }}>
            <p>The description for this project is currently unavailable.</p>
            <p>
              This project was designed by Armando Ramos, Julieta Cabadilla,
              Robert Allen, and myself.
            </p>
          </div>
          <div style={{ gap: ".5rem" }}>
            <ProjectImage
              src="/viga/render1.jpg"
              alt="3D render of the project."
              width={screenWidthSize}
              height={screenWidthSize}
            />
            <ProjectImage
              src="/viga/render2.jpg"
              alt="3D render of the project."
              width={screenWidthSize}
              height={screenWidthSize}
            />
          </div>
        </DetailedItem>
      </div>
    );
  }
};
