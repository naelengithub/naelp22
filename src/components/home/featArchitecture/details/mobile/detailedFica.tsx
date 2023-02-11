import * as React from "react";
import { DetailedItem } from "./detailedItem";

import { useWindowSize } from "../../../../../hooks/useWindowSize";

import { ProjectImage } from "../../Overview/projectImage";

export interface DetailedVigaPropsProps {
  className?: string;
}

/**
 * @name DetailedVigaProps
 * @description FAQs feature component.
 */
export const DetailedFica = (props: DetailedVigaPropsProps) => {
  const { className } = props;

  const size = useWindowSize();
  const screenWidthSize = size.width;
  console.log(JSON.stringify(screenWidthSize));

  if (!screenWidthSize) {
    return null;
  } else {
    return (
      <div>
        <DetailedItem title="FICA 2018" date="12/2017" location="CDMX, Mexico">
          <div style={{ padding: "1rem", marginRight: "2rem" }}>
            <p>This project&apos;s description is currently unavailable.</p>
            <p>
              This project was designed by José Amozurrutia and Carlos
              Facio&apos;s firm TO. Collaborating with Patricia García, Ana
              Lucero Villaseñor, Angélica Mota, Sergio Carbajal, and myself.
            </p>
          </div>
          <div style={{ gap: ".5rem" }}>
            <ProjectImage
              src="/fica/render.jpg"
              alt="3D render of the project."
              width={screenWidthSize}
              height={screenWidthSize / 1.3}
            />
          </div>
        </DetailedItem>
      </div>
    );
  }
};
