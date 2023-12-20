import * as React from "react";

import { useWindowSize } from "../../../../hooks/useWindowSize";

import { Matlaltik } from "../details/desktop/matlaltik";
import { ProjectItem } from "../details/desktop/ProjectItem";
import { Estuario } from "../details/desktop/estuario";
import { Spine } from "../details/desktop/spine";
import { Xitle } from "../details/desktop/xitle";
import { Fica } from "../details/desktop/fica";
import styles from "./overview.module.css";

export interface FeatArchProps {
  className?: string;
}

/**
 * @name FeatArch
 * @description Arq feature component.
 */
export const FeatArch = (props: FeatArchProps) => {
  const { className } = props;

  // Handlers
  const size = useWindowSize();
  const screenWidthSize = size.width;
  console.log(JSON.stringify(screenWidthSize));

  if (!screenWidthSize) {
    return null;
  } else {
    return (
      <div className={styles.container}>
        <div
          style={{
            backgroundColor: "#ded8ce",
            paddingTop: "3rem",
            height: screenWidthSize / 1.2,
          }}
        >
          <div style={{ backgroundColor: "tomato" }}>
            <div
              style={{
                position: "relative",
              }}
            >
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
                    src="/images/001/the-sleepover.jpeg"
                    width={screenWidthSize / 14}
                    height={screenWidthSize / 22}
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
                }}
              >
                <ProjectItem
                  alt="Xitle project."
                  src="/images/001/forrest-gump-running.avif"
                  width={screenWidthSize / 12}
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
                  src="/images/001/suns.jpeg"
                  width={screenWidthSize / 12}
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
                  src="/images/001/pokemon.webp"
                  width={screenWidthSize / 12}
                  height={screenWidthSize / 20}
                >
                  <Matlaltik />
                </ProjectItem>
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
                  src="/images/001/pam.jpeg"
                  width={screenWidthSize / 10}
                  height={screenWidthSize / 20}
                >
                  <Fica />
                </ProjectItem>
              </div>
            </div>
          </div>
          <div style={{ position: "relative" }}>
            <div
              style={{
                position: "absolute",
                top: (screenWidthSize / 10) * 5.5,
                right: 0,
              }}
            >
              <h1
                style={{
                  margin: "0",
                  fontSize: screenWidthSize / 40,
                  position: "absolute",
                  right: 0,
                  zIndex: 1,
                }}
              >
                [coming from]
              </h1>
              <h1
                style={{
                  margin: "0",
                  fontSize: screenWidthSize / 5.75,
                }}
              >
                architecture
              </h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
};
