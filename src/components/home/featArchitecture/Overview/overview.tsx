import * as React from "react";
import Image from "next/image";

import { Data, dataEstuario, dataMatlaltik } from "../dataEstuario";

import { ProjectReps } from "../../../common/ferrisWheel/ferrisWheel";
import { ProjectImage } from "../../../common/projectImage";
import { useWindowSize } from "../../../../hooks/useWindowSize";

import styles from "./overview.module.css";

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
  const handleClickScrollEstuario = () => {
    setIsSelected(!isSelected);
    const element = document.getElementById("estuario-details");
    if (element) {
      // Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleClickXitle = () => {
    setIsSelected(!isSelected);
    const element = document.getElementById("xitle-details");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleClickMatlaltik = () => {
    setIsSelected(!isSelected);
    const element = document.getElementById("matlaltik-details");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const size = useWindowSize();
  const screenWidthSize = size.width;
  console.log(JSON.stringify(screenWidthSize));

  const renderData = (entry: Data, index: number) => {
    const { image, title, width, height } = entry;

    return (
      <Image
        alt={title}
        key={index}
        src={image}
        width={width}
        height={height}
      />
    );
  };

  if (!screenWidthSize) {
    return null;
  } else {
    return (
      <div className={styles.container}>
        <div>
          <div
            id="estuario"
            onClick={handleClickScrollEstuario}
            style={{
              position: "absolute",
              top: "0",
              left: "0",
            }}
          >
            <ProjectImage
              className={styles.projectImage}
              src="/G1.JPG"
              alt="Estuario project."
              height={screenWidthSize / 2}
              width={screenWidthSize / 4}
            />
          </div>
          <div
            id="xitle"
            onClick={handleClickXitle}
            style={{
              position: "absolute",
              top: "0",
              left: screenWidthSize / 2,
            }}
          >
            <ProjectImage
              src="/G4.JPG"
              alt="Xitle project."
              height={screenWidthSize / 4}
              width={screenWidthSize / 2}
            />
          </div>
          <div
            id="matlaltik"
            onClick={handleClickMatlaltik}
            style={{
              position: "absolute",
              top: (screenWidthSize / 8) * 5,
              left: "0",
            }}
          >
            <ProjectImage
              src="/G3.JPG"
              alt="Matlaltik Project"
              height={screenWidthSize / 4}
              width={screenWidthSize / 2}
            />
          </div>
          <div
            style={{
              position: "absolute",
              top: (screenWidthSize / 8) * 9,
              left: screenWidthSize / 4,
            }}
          >
            <ProjectImage
              className={styles.projectImage}
              src="/G2.JPG"
              alt="ojo"
              height={screenWidthSize / 4}
              width={screenWidthSize / 2}
            />
          </div>
          <div
            style={{
              position: "absolute",
              top: (screenWidthSize / 8) * 14,
              left: screenWidthSize / 2,
            }}
          >
            <ProjectImage
              className={styles.projectImage}
              src="/G5.JPG"
              alt="ojo"
              height={screenWidthSize / 4}
              width={screenWidthSize / 2}
            />
          </div>
          <div
            style={{
              position: "absolute",
              top: (screenWidthSize / 8) * 18,
              left: screenWidthSize / 8,
            }}
          >
            <ProjectImage
              className={styles.projectImage}
              src="/G6.JPG"
              alt="ojo"
              height={screenWidthSize / 2}
              width={screenWidthSize / 4}
            />
          </div>
          <div
            style={{
              marginTop: (screenWidthSize / 8) * 22,
            }}
          >
            <div>
              <h1
                style={{
                  margin: "0",
                  transform: "rotate(-45deg)",
                  fontSize: "5rem",
                  position: "absolute",
                  top: screenWidthSize / 1.5,
                  left: "0",
                }}
              >
                architecture
              </h1>
            </div>
          </div>
          <div id="estuario-details">
            {isSelected ? (
              <div>
                <div className={styles.content}>
                  {dataEstuario.map(renderData)}
                </div>

                <ProjectReps
                  projectName="Estuario"
                  projectYear={2018}
                  projectCollabs="Ana Lucero Villaseñor, Angélica Mota"
                />
              </div>
            ) : null}
          </div>
          <div id="matlaltik-details">
            {isSelected ? (
              <div>
                <div className={styles.content}>
                  {dataMatlaltik.map(renderData)}
                </div>
                <ProjectReps
                  projectName="Matlaltik"
                  projectYear={2018}
                  projectCollabs="Armando Ramos, Julieta García, Zamantha García"
                />
              </div>
            ) : null}
          </div>
        </div>
      </div>
    );
  }
};
