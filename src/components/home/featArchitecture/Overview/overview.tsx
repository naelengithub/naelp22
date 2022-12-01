import * as React from "react";

import { ProjectImage } from "../projectImage";
import { useWindowSize } from "../../../../hooks/useWindowSize";

import styles from "./overview.module.css";
import Link from "next/link";
import { Matlaltik } from "../details/desktop/matlaltik";
import { ProjectItem } from "../details/desktop/ProjectItem";
import { Estuario } from "../details/desktop/estuario";
import { Spine } from "../details/desktop/spine";
import { Xitle } from "../details/desktop/xitle";
import { Fica } from "../details/desktop/fica";

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
  const [isSelected, setIsSelected] = React.useState(false);

  // Handlers
  const size = useWindowSize();
  const screenWidthSize = size.width;
  console.log(JSON.stringify(screenWidthSize));

  const handleOnMouseEnter = () => {
    setIsSelected(true);
  };

  const handleOnMouseLeave = () => {
    setIsSelected(false);
  };

  if (!screenWidthSize) {
    return null;
  } else {
    if (screenWidthSize < 1024) {
      return (
        <div
          style={{
            width: screenWidthSize,
            height: (screenWidthSize / 8) * 22,
          }}
        >
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
                src="/overview/estuarioMobile.png"
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
            <Link href={"projects/xitle"}>
              <ProjectImage
                src="/overview/xitle.png"
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
                src="/overview/spine.png"
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
                src="/overview/matlaltik.png"
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
            <Link href={"projects/viga755"}>
              <ProjectImage
                className={styles.projectImage}
                src="/overview/755.png"
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
            <Link href={"projects/ts"}>
              <ProjectImage
                className={styles.projectImage}
                src="/overview/ficaMobile.png"
                alt="ojo"
                height={screenWidthSize / 2}
                width={screenWidthSize / 4}
              />
            </Link>
          </div>
          <div>
            <h1
              style={{
                margin: "0",
                transform: "rotate(-90deg)",
                fontSize: "5rem",
                position: "absolute",
                top: (screenWidthSize / 8) * 5,
                left: (screenWidthSize / 8) * 5,
              }}
            >
              architecture
            </h1>
          </div>
        </div>
      );
    }
  }
  {
    return (
      <div style={{ backgroundColor: "white" }}>
        <div>
          <div
            style={{
              position: "absolute",
              top: (screenWidthSize / 10) * 2,
              left: (screenWidthSize / 10) * 2,
              width: screenWidthSize / 10,
            }}
          >
            <div>
              <ProjectItem
                alt="Estuario project."
                src="/overview/estuario.png"
                width={screenWidthSize / 10}
                height={screenWidthSize / 20}
              >
                <div style={{ zIndex: "350" }}>
                  <Estuario />
                </div>
              </ProjectItem>
            </div>
          </div>
          <div
            style={{
              position: "absolute",
              top: screenWidthSize / 10,
              left: (screenWidthSize / 10) * 6,
              width: screenWidthSize / 10,
              height: (screenWidthSize / 10) * 0.5,
              margin: "0",
            }}
          >
            <ProjectItem
              alt="Xitle project."
              src="/overview/xitle.png"
              width={screenWidthSize / 10}
              height={screenWidthSize / 20}
            >
              <Xitle />
            </ProjectItem>
          </div>
          <div
            style={{
              position: "absolute",
              top: (screenWidthSize / 10) * 3.5,
              left: (screenWidthSize / 10) * 3,
              width: screenWidthSize / 10,
            }}
          >
            <ProjectItem
              alt="Spine project."
              src="/overview/spine.png"
              width={screenWidthSize / 10}
              height={screenWidthSize / 20}
            >
              <Spine />
            </ProjectItem>
          </div>
          <div
            style={{
              position: "absolute",
              top: (screenWidthSize / 10) * 4.5,
              left: screenWidthSize / 10,
              width: screenWidthSize / 10,
            }}
          >
            <ProjectItem
              alt="Matlaltik project."
              src="/overview/matlaltik.png"
              width={screenWidthSize / 10}
              height={screenWidthSize / 20}
            >
              <Matlaltik />
            </ProjectItem>
          </div>

          <div
            id="viga755"
            style={{
              position: "absolute",
              top: (screenWidthSize / 10) * 4.5,
              left: (screenWidthSize / 10) * 7,
            }}
          >
            <ProjectImage
              className={styles.projectImage}
              src="/overview/755.png"
              alt="ojo"
              height={screenWidthSize / 20}
              width={screenWidthSize / 10}
            />
          </div>
          <div
            style={{
              position: "absolute",
              top: (screenWidthSize / 10) * 3,
              left: (screenWidthSize / 10) * 8,
              width: screenWidthSize / 10,
            }}
          >
            <ProjectItem
              alt="Fica project."
              src="/overview/fica.png"
              width={screenWidthSize / 10}
              height={screenWidthSize / 20}
            >
              <Fica />
            </ProjectItem>
          </div>
        </div>
        <div
          style={{
            height: (screenWidthSize / 10) * 5.5,
          }}
        >
          <h1
            style={{
              margin: "0",
              fontSize: "3.5rem",
              position: "absolute",
              top: (screenWidthSize / 10) * 2.5,
              left: (screenWidthSize / 10) * 4,
            }}
          >
            architecture
          </h1>
        </div>
      </div>
    );
  }
};
