import * as React from "react";
import { DetailedItem } from "./detailedItem";

import { useWindowSize } from "../../../../../hooks/useWindowSize";

import { ProjectImage } from "../../Overview/projectImage";

export interface DetailedEstuarioProps {
  className?: string;
}

/**
 * @name DetailedEstuario
 * @description FAQs feature component.
 */
export const DetailedEstuario = (props: DetailedEstuarioProps) => {
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
          title="Estuario"
          date="07/2018"
          location="Pijijiapan Chiapas, Mexico"
        >
          <div style={{ padding: "1rem", marginRight: "2rem" }}>
            <p>
              With the theme of devising a memorial to commemorate the
              earthquakes of September 7th and 19th of 2017 in Mexico, the
              Spanish Institute of Architecture conducted a contest where young
              architects had to face the challenge of choosing a site around one
              of the two earthquake epicenters, which would allow them to come
              up with the architecture of this memorial.
            </p>
            <p>
              The chosen site of this project reflects the monumentality of the
              natural elements and the existence of phenomena uncontrollable by
              humans; the intersection of the sea and a river, in the
              Chiapanecan town of Pijijiapan.
            </p>
            <p>
              In constant relationship with the surroundings, the memorial draws
              a compositional axis that links Pijijiapan to the
              earthquake&apos;s epicenter, emphasizing the relationship between
              nature and that which is human-made, thus converting it into the
              vestiges left by the earthquake, which become the base module that
              builds it: the gabions. A masonry construction system, this time
              made with debris.
            </p>
            <p>
              Estuario then becomes a literal memory of the constructions
              destroyed by the earthquake, as well as the renovation of its
              energy with the interaction of the cycles of nature, reducing the
              use of external resources implemented in the proposal.
            </p>
            <p>
              Any intervention that takes place in Estuario will be appropriated
              by Nature&apos;s energy, then turning it into the integration of
              matter and time.
            </p>
            <p>
              Designed by Ana Lucero Villaseñor, Angelica Mota, and myself,
              Estuario was selected as a Memorial19S finalist, as seen on{" "}
              <a href="https://premiofelixcandela.mx/edicionesycatalogo">
                IESARQ&apos;s website
              </a>
              .
            </p>
          </div>
          <div style={{ gap: ".5rem" }}>
            <ProjectImage
              src="/estuario/101.png"
              alt="3D model of the project."
              width={screenWidthSize}
              height={(screenWidthSize * 44.13) / 52.92}
            />
            <ProjectImage
              src="/estuario/103copy.png"
              alt="3D model of the project."
              width={screenWidthSize}
              height={(screenWidthSize * 44.13) / 27.9}
            />
            <ProjectImage
              src="/estuario/104.png"
              alt="3D model of the project."
              width={screenWidthSize}
              height={(screenWidthSize * 44.13) / 52.92}
            />
            <ProjectImage
              src="/estuario/105.png"
              alt="3D model of the project."
              width={screenWidthSize}
              height={(screenWidthSize * 44.13) / 52.92}
            />
            <ProjectImage
              src="/estuario/102.png"
              alt="3D model of the project."
              width={screenWidthSize}
              height={(screenWidthSize * 44.13) / 52.92}
            />
          </div>
        </DetailedItem>
      </div>
    );
  }
};
