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
export const DetailedTs = (props: DetailedVigaPropsProps) => {
  const { className } = props;

  const size = useWindowSize();
  const screenWidthSize = size.width;
  console.log(JSON.stringify(screenWidthSize));

  if (!screenWidthSize) {
    return null;
  } else {
    return (
      <div>
        <DetailedItem title="T.S." date="06/2019" location="CDMX, Mexico">
          <div style={{ padding: "1rem", marginRight: "2rem" }}>
            <p>The description for this project is currently unavailable.</p>
            <p>This project was designed by Africa Gonzalez and myself.</p>
          </div>
          <div style={{ gap: ".5rem" }}>
            <ProjectImage
              src="/ts/bird_1.jpg"
              alt="3D render of the project."
              width={screenWidthSize}
              height={(screenWidthSize * 22.33) / 32.067}
            />
            <ProjectImage
              src="/ts/fachadaNorte.jpg"
              alt="3D render of the project."
              width={screenWidthSize}
              height={(screenWidthSize * 39.3) / 69.85}
            />
          </div>
        </DetailedItem>
      </div>
    );
  }
};
