import * as React from "react";
import { DetailedItem } from "./detailedItem";

import { useWindowSize } from "../../../../hooks/useWindowSize";

import { ProjectImage } from "../projectImage";

export interface DetailedSpinePropsProps {
  className?: string;
}

/**
 * @name DetailedSpineProps
 * @description FAQs feature component.
 */
export const DetailedSpine = (props: DetailedSpinePropsProps) => {
  const { className } = props;

  const size = useWindowSize();
  const screenWidthSize = size.width;
  console.log(JSON.stringify(screenWidthSize));

  if (!screenWidthSize) {
    return null;
  } else {
    return (
      <div>
        <DetailedItem title="Spine" date="02/2020" location="Berlin, Germany">
          <div style={{ padding: "1rem", marginRight: "2rem" }}>
            <p>Urban Situation:</p>
            <p>
              A sudden change in major urban circumstances usually entails a
              change in urban structure of the immediate surrounding as well.
              The chosen industrial area, in the north-west corner of the
              project area, is going to be affected by such a change. Currently
              it is located just next to the entry lane of the nearby airport
              &quot;Berlin Tegel&quot;. Once the airport closes in 2020 though,
              a rapid improvement in local noise pollution will take place. This
              will make the area more attractive for future housing projects.
              Therefore a change of the local real estate valuation can be
              expected. Already with the anticipated shutdown of Tegel airport,
              the surrounding real estate is being affected by financial
              speculation. Numerous small industrial units have been sold, torn
              down and re-erected as uniform residential projects. This
              procedure is particularly bad for the many production sites inside
              the chosen project area. The dynamics of the property market and
              its rising market pressure will eventually force all the
              production out of the inner city into the periphery. In order to
              prohibit unwelcome changes in urban diversity, the chosen area has
              to be rethought, before the rising market pressure uncontrollably
              interferes.
            </p>
            <p>
              We believe that the urban architectural actions produced in Ciudad
              Universitaria over the last few years have been carried out in an
              isolated, apathetic and autistic way. These actions are carried
              out without an articulated vision of the whole, generating borders
              that make coexistence between the different buildings impossible
              and also with the neighborhoods surrounding the university.
            </p>
            <p>Urban Design:</p>
            <p>
              The urban design&apos;s main feature is the &quot;Spine&quot;.
              This large pedestrian bridge runs through the whole project area.
              It makes the urban block more porous throughout all phases of the
              project, by opening up an additional level, bridging barriers and
              connecting buildings. This new porosity initiates the
              transformation of the hermetic industrial area. Next to the spine
              the urban design features different types of buildings. On the
              outside of the block, slab-like buildings house heavier industry
              on the bottom, communal and commercial use in the midsection and
              housing in the upper part. The inside of the block is defined by
              point-like buildings. These buildings house a more medium industry
              on the bottom, commerce in the midsection and housing on top.
              Commonly used point-buildings mark the neighborhoods centers. A
              larger tower used for digital industry on the block&apos;s street
              corner marks an important entrance spot to the urban design. Mixed
              used space span between the slab-buildings on the outside and the
              point-buildings on the inside. This space is mainly used by
              Industry during working hours and by the residents during the
              evenings or the weekends. The elaborate layering and placement of
              the different functions transforms the industrial block into a
              urban project contributing to the diversity of an ideal inner
              city.
            </p>
            <p>
              This project was designed by Barbara Sula, Fabian Prissok, Pia
              Drewes, and myself.
            </p>
          </div>
          <div style={{ gap: ".5rem" }}>
            <ProjectImage
              src="/spline/prev.png"
              alt="Previous state of the urban area where the project is located."
              width={screenWidthSize}
              height={(screenWidthSize * 17.39) / 43.5}
            />
            <ProjectImage
              src="/spline/3d.png"
              alt="3D render of the project."
              width={screenWidthSize}
              height={(screenWidthSize * 15.59) / 47.25}
            />
            <ProjectImage
              src="/spline/Perspectiva2.png"
              alt="Human-level project perspective."
              width={screenWidthSize}
              height={(screenWidthSize * 29.88) / 23.07}
            />
            <ProjectImage
              src="/spline/planta.jpg"
              alt="Birds eye view of the project."
              width={screenWidthSize}
              height={(screenWidthSize * 18.9) / 14.88}
            />
          </div>
        </DetailedItem>
      </div>
    );
  }
};
