import * as React from "react";
import { DetailedItem } from "./detailedItem";

import { useWindowSize } from "../../../../hooks/useWindowSize";

import { ProjectImage } from "../projectImage";

export interface DetailedMatlaltikPropsProps {
  className?: string;
}

/**
 * @name DetailedMatlaltikProps
 * @description FAQs feature component.
 */
export const DetailedMatlaltik = (props: DetailedMatlaltikPropsProps) => {
  const { className } = props;

  const size = useWindowSize();
  const screenWidthSize = size.width;
  console.log(JSON.stringify(screenWidthSize));

  if (!screenWidthSize) {
    return null;
  } else {
    return (
      <div>
        <DetailedItem title="Matlaltik" date="10/2018" location="CDMX, Mexico">
          <div style={{ padding: "1rem", marginRight: "2rem" }}>
            <p>The description for this project is currently unavailable.</p>
            <p>
              This project was designed by Ivana Arvizu, Julieta Cabadilla,
              Zamantha Garcias, and myself.
            </p>
          </div>
          <div style={{ gap: ".5rem" }}>
            <ProjectImage
              src="/matlaltik/MatlaltikBirdsEye.jpg"
              alt="Birds eye view of the project."
              width={screenWidthSize}
              height={(screenWidthSize * 15.54) / 21.82}
            />
            <ProjectImage
              src="/matlaltik/render cagado.jpg"
              alt="3D render of the project."
              width={screenWidthSize}
              height={(screenWidthSize * 23.81) / 42.33}
            />
            <ProjectImage
              src="/matlaltik/MatlaltikCollage.jpg"
              alt="Collage of the main park section of the project."
              width={screenWidthSize}
              height={(screenWidthSize * 29.85) / 15.28}
            />
          </div>
        </DetailedItem>
      </div>
    );
  }
};
