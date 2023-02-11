import * as React from "react";
import { DetailedItem } from "./detailedItem";

import { useWindowSize } from "../../../../hooks/useWindowSize";

import { ProjectImage } from "../projectImage";

export interface DetailedXitlePropsProps {
  className?: string;
}

/**
 * @name DetailedXitleProps
 * @description FAQs feature component.
 */
export const DetailedXitle = (props: DetailedXitlePropsProps) => {
  const { className } = props;

  const size = useWindowSize();
  const screenWidthSize = size.width;
  console.log(JSON.stringify(screenWidthSize));

  if (!screenWidthSize) {
    return null;
  } else {
    return (
      <div>
        <DetailedItem
          title="Xitle"
          date="05/2019"
          location="Ciudad Universitaria, Mexico"
        >
          <div style={{ padding: "1rem", marginRight: "2rem" }}>
            <p>
              From the people to the University and from the University to the
              People...
            </p>
            <p>How do we make a city with Ciudad Universitaria?</p>
            <p>
              We believe that the urban architectural actions produced in Ciudad
              Universitaria over the last few years have been carried out in an
              isolated, apathetic and autistic way. These actions are carried
              out without an articulated vision of the whole, generating borders
              that make coexistence between the different buildings impossible
              and also with the neighborhoods surrounding the university.
            </p>
            <p>
              For this reason, our proposal consists of creating a design
              methodology for the constructions that are produced within Ciudad
              Universitaria, seeking that these be generated in a participatory
              manner, taking into account the context both C.U. and that of the
              colonies that surround it. This methodology can function as an
              important complement to the Central Campus Management Plan,
              creating a criteria to evaluate proposed projects, seeking to
              expand planning and management to all areas of Ciudad
              Universitaria. Therefore, the decision making of the University
              community would be intertwined with the Committee of Analysis for
              urban, architectural and engineering interventions of CU that are
              contemplated, emphasizing the harmonious and sensitive development
              of urban architectural projects on campus
            </p>
            <p>
              This project was designed by Alejandro Palacio, Armando Ramos,
              Julieta Cabadilla, Robert Allen, and myself.
            </p>
          </div>
          <div style={{ gap: ".5rem" }}>
            <ProjectImage
              src="/xitle/Render1.jpg"
              alt="3D render of the project."
              width={screenWidthSize}
              height={(screenWidthSize * 27.66) / 65.74}
            />
            <ProjectImage
              src="/xitle/planta.jpg"
              alt="Project bird's eye view."
              width={screenWidthSize}
              height={(screenWidthSize * 57.71) / 89.89}
            />
            <ProjectImage
              src="/xitle/Transito.jpg"
              alt="Urban transit diagram."
              width={screenWidthSize}
              height={(screenWidthSize * 32.12) / 30.25}
            />
            <ProjectImage
              src="/xitle/Render2.jpg"
              alt="3D render of the project."
              width={screenWidthSize}
              height={(screenWidthSize * 30.31) / 53.98}
            />
          </div>
        </DetailedItem>
      </div>
    );
  }
};
