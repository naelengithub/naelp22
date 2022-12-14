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
            height: (screenWidthSize / 8) * 16,
            marginBottom: screenWidthSize / 16,
          }}
        >
          <div
            id="estuario"
            style={{
              position: "absolute",
              top: screenWidthSize / 8,
              left: "0",
            }}
          >
            <Link href={"projects/estuario"}>
              <ProjectImage
                className={styles.projectImage}
                src="/overview/purpleEstuarioVertical.png"
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
              top: screenWidthSize / 8,
              right: 0,
            }}
          >
            <Link href={"projects/xitle"}>
              <ProjectImage
                src="/overview/purpleXitle.png"
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
              top: (screenWidthSize / 8) * 6,
              left: "0",
            }}
          >
            <Link href={"projects/spine"}>
              <ProjectImage
                src="/overview/purpleSpine.png"
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
                src="/overview/purpleMatlaltik.png"
                alt="Matlaltik project"
                height={screenWidthSize / 4}
                width={screenWidthSize / 2}
              />
            </Link>
          </div>
          <div
            id="fica"
            style={{
              position: "absolute",
              top: (screenWidthSize / 8) * 12,
              right: 0,
            }}
          >
            <Link href={"projects/fica"}>
              <ProjectImage
                className={styles.projectImage}
                src="/overview/purpleFicaVertical.png"
                alt="FICA Project"
                height={screenWidthSize / 2}
                width={screenWidthSize / 4}
              />
            </Link>
          </div>

          <h1
            style={{
              margin: "0",
              fontSize: screenWidthSize / 6,
              position: "relative",
              top: (screenWidthSize / 8) * 6.5,
              right: (-screenWidthSize / 8) * 3,
              transform: "rotate(90deg)",
            }}
          >
            architecture
          </h1>
        </div>
      );
    }
  }
  {
    return (
      <div style={{ backgroundColor: "white" }}>
        <div style={{ height: (screenWidthSize / 8) * 1.4 }}>
          <div
            style={{
              position: "absolute",
              top: (screenWidthSize / 10) * 2,
              left: (screenWidthSize / 10) * 2,
              width: screenWidthSize / 10,
              boxShadow: "-15px -10px",
            }}
          >
            <div>
              <ProjectItem
                alt="Estuario project."
                src="/overview/purpleEstuario.png"
                width={screenWidthSize / 10}
                height={screenWidthSize / 20}
              >
                <div style={{}}>
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
              boxShadow: "10px -15px",
            }}
          >
            <ProjectItem
              alt="Xitle project."
              src="/overview/purpleXitle.png"
              width={screenWidthSize / 10}
              height={screenWidthSize / 20}
            >
              <Xitle />
            </ProjectItem>
          </div>
          <div
            style={{
              boxShadow: "-15px -13px",
              position: "absolute",
              top: (screenWidthSize / 10) * 3.5,
              left: (screenWidthSize / 10) * 3,
              width: screenWidthSize / 10,
            }}
          >
            <ProjectItem
              alt="Spine project."
              src="/overview/purpleSpine.png"
              width={screenWidthSize / 10}
              height={screenWidthSize / 20}
            >
              <Spine />
            </ProjectItem>
          </div>
          <div
            style={{
              boxShadow: "-13px -10px",
              position: "absolute",
              top: (screenWidthSize / 10) * 4.5,
              left: screenWidthSize / 10,
              width: screenWidthSize / 10,
            }}
          >
            <ProjectItem
              alt="Matlaltik project."
              src="/overview/purpleMatlaltik.png"
              width={screenWidthSize / 10}
              height={screenWidthSize / 20}
            >
              <Matlaltik />
            </ProjectItem>
          </div>
          <div
            style={{
              boxShadow: "15px -13px",
              position: "absolute",
              top: (screenWidthSize / 10) * 3,
              left: (screenWidthSize / 10) * 8,
              width: screenWidthSize / 10,
            }}
          >
            <ProjectItem
              alt="Fica project."
              src="/overview/purpleFica.png"
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
              fontSize: screenWidthSize / 40,
              position: "absolute",
              top: (screenWidthSize / 10) * 5.5,
              right: 0,
              zIndex: 1,
            }}
          >
            [coming from]
          </h1>
          <h1
            style={{
              color: "white",
              backgroundColor: "#B38BFA",
              margin: "0",
              fontSize: screenWidthSize / 5.75,
              position: "absolute",
              top: (screenWidthSize / 10) * 5.1,
              left: 0,
            }}
          >
            architecture
          </h1>
        </div>
      </div>
    );
  }
};
