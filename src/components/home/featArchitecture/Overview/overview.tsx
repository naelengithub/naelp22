import * as React from "react";

import { ProjectImage } from "../projectImage";
import { useWindowSize } from "../../../../hooks/useWindowSize";

import styles from "./overview.module.css";
import Link from "next/link";

export interface FeatArchProps {
  className?: string;
}

/**
 * @name FeatArch
 * @description FAQs feature component.
 */
export const FeatArch = (props: FeatArchProps) => {
  const { className } = props;

  // Hooks

  // Handlers
  const size = useWindowSize();
  const screenWidthSize = size.width;
  console.log(JSON.stringify(screenWidthSize));

  if (!screenWidthSize) {
    return null;
  } else {
    return (
      <div className={styles.container}>
        <div>
          <div
            id="estuario"
            style={{
              position: "absolute",
              top: "0",
              left: "0",
            }}
          >
            <Link href={"projects/estuario"}>
              <ProjectImage
                className={styles.projectImage}
                src="/G1.JPG"
                alt="Estuario project."
                height={screenWidthSize / 2}
                width={screenWidthSize / 4}
              />
            </Link>
          </div>

          <div
            id="xitle"
            style={{
              position: "absolute",
              top: "0",
              left: screenWidthSize / 2,
            }}
          >
            {" "}
            <Link href={"projects/xitle"}>
              <ProjectImage
                src="/G4.JPG"
                alt="Xitle project."
                height={screenWidthSize / 4}
                width={screenWidthSize / 2}
              />
            </Link>
          </div>
          <div
            id="spine"
            style={{
              position: "absolute",
              top: (screenWidthSize / 8) * 5,
              left: "0",
            }}
          >
            <Link href={"projects/spine"}>
              <ProjectImage
                src="/G3.JPG"
                alt="Spine project."
                height={screenWidthSize / 4}
                width={screenWidthSize / 2}
              />
            </Link>
          </div>
          <div
            id="matlaltik"
            style={{
              position: "absolute",
              top: (screenWidthSize / 8) * 9,
              left: screenWidthSize / 4,
            }}
          >
            <Link href={"projects/matlaltik"}>
              <ProjectImage
                className={styles.projectImage}
                src="/G2.JPG"
                alt="Matlaltik projec.t"
                height={screenWidthSize / 4}
                width={screenWidthSize / 2}
              />
            </Link>
          </div>
          <div
            id="viga755"
            style={{
              position: "absolute",
              top: (screenWidthSize / 8) * 14,
              left: screenWidthSize / 2,
            }}
          >
            {" "}
            <Link href={"projects/viga755"}>
              <ProjectImage
                className={styles.projectImage}
                src="/G5.JPG"
                alt="ojo"
                height={screenWidthSize / 4}
                width={screenWidthSize / 2}
              />
            </Link>
          </div>
          <div
            id="ts"
            style={{
              position: "absolute",
              top: (screenWidthSize / 8) * 18,
              left: screenWidthSize / 8,
            }}
          >
            {" "}
            <Link href={"projects/ts"}>
              <ProjectImage
                className={styles.projectImage}
                src="/G6.JPG"
                alt="ojo"
                height={screenWidthSize / 2}
                width={screenWidthSize / 4}
              />
            </Link>
          </div>
          <div
            style={{
              marginTop: (screenWidthSize / 8) * 22,
              width: "100%",
            }}
          >
            <h1
              style={{
                margin: "0",
                transform: "rotate(-90deg)",
                fontSize: "3rem",
                position: "absolute",
                top: screenWidthSize / 1.5,
              }}
            >
              architecture
            </h1>
          </div>
        </div>
      </div>
    );
  }
};
