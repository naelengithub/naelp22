import * as React from "react";
import Image from "next/image";

import {
  Data,
  dataEstuario,
  dataMatlaltik,
  dataSpline,
  dataXitle,
} from "../detailsData";

import { ProjectReps } from "../projectReps";
import { ProjectImage } from "../projectImage";
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
  const [estuarioIsSelected, setEstuarioIsSelected] = React.useState(false);
  const [matlaltikIsSelected, setMatlaltikIsSelected] = React.useState(false);
  const [xitleIsSelected, setXitleIsSelected] = React.useState(false);
  const [vigaIsSelected, setVigaIsSelected] = React.useState(false);
  const [splineIsSelected, setSplineIsSelected] = React.useState(false);
  const [tsIsSelected, setTsIsSelected] = React.useState(false);

  // Handlers
  const handleClickScrollEstuario = () => {
    setEstuarioIsSelected(!estuarioIsSelected);
    const element = document.getElementById("estuario-details");
    if (element) {
      // Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleClickMatlaltik = () => {
    setMatlaltikIsSelected(!matlaltikIsSelected);
    const element = document.getElementById("matlaltik-details");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleClickXitle = () => {
    setXitleIsSelected(!xitleIsSelected);
    const element = document.getElementById("xitle-details");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleClickViga = () => {
    setVigaIsSelected(!vigaIsSelected);
    const element = document.getElementById("viga-details");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleClickTs = () => {
    setTsIsSelected(!tsIsSelected);
    const element = document.getElementById("ts-details");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleClickSpline = () => {
    setSplineIsSelected(!splineIsSelected);
    const element = document.getElementById("spline-details");
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
            id="matlaltik"
            onClick={handleClickMatlaltik}
            style={{
              position: "absolute",
              top: "0",
              left: screenWidthSize / 2,
            }}
          >
            <ProjectImage
              src="/G4.JPG"
              alt="Matlaltik project."
              height={screenWidthSize / 4}
              width={screenWidthSize / 2}
            />
          </div>
          <div
            id="xitle"
            // onClick={handleClickXitle}
            style={{
              position: "absolute",
              top: (screenWidthSize / 8) * 5,
              left: "0",
            }}
          >
            <ProjectImage
              src="/G3.JPG"
              alt="Xitle project"
              height={screenWidthSize / 4}
              width={screenWidthSize / 2}
            />
          </div>
          <div
            id="spline"
            onClick={handleClickSpline}
            style={{
              position: "absolute",
              top: (screenWidthSize / 8) * 9,
              left: screenWidthSize / 4,
            }}
          >
            <ProjectImage
              className={styles.projectImage}
              src="/G2.JPG"
              alt="Spline project"
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
          <div id="estuario-details">
            {estuarioIsSelected ? (
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
            {matlaltikIsSelected ? (
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
          <div id="xitle-details">
            {xitleIsSelected ? (
              <div>
                <div className={styles.content}>
                  {dataXitle.map(renderData)}
                </div>
                <ProjectReps
                  projectName="Xitle"
                  projectYear={2018}
                  projectCollabs="Armando Ramos, Julieta García, Zamantha García"
                />
              </div>
            ) : null}
          </div>
          <div id="spline-details">
            {xitleIsSelected ? (
              <div>
                <div className={styles.content}>
                  {dataSpline.map(renderData)}
                </div>
                <ProjectReps
                  projectName="Spline"
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
