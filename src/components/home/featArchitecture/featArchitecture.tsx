import * as React from "react";
import Image from "next/image";

import {
  Data,
  dataEstuario,
  dataMatlaltik,
} from "../../common/ferrisWheel/dataEstuario";

import { ProjectReps } from "../../common/ferrisWheel/ferrisWheel";
import { ProjectImage } from "../../common/projectImage";

import styles from "./featArchitecture.module.css";

export interface FeatArchitectureProps {
  className?: string;
}

/**
 * @name FeatArchitecture
 * @description FAQs feature component.
 */
export const FeatArchitecture = (props: FeatArchitectureProps) => {
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

  const handleClickScrollMatlaltik = () => {
    setIsSelected(!isSelected);
    const element = document.getElementById("matlaltik-details");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

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

  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        <div
          className={styles.project1}
          id="project1"
          onClick={handleClickScrollEstuario}
        >
          <ProjectImage src="/ojoVert.JPG" alt="ojo" height={240} width={120} />
        </div>
        <div className={styles.project2} onClick={handleClickScrollMatlaltik}>
          <ProjectImage src="/ojo.jpg" alt="ojo" height={120} width={240} />
        </div>
        <div className={styles.project3}>
          <ProjectImage src="/ojo.jpg" alt="ojo" height={120} width={240} />
        </div>
        <div className={styles.project4}>
          <ProjectImage src="/ojo.jpg" alt="ojo" height={120} width={240} />
        </div>
        <div className={styles.project5}>
          <ProjectImage src="/ojo.jpg" alt="ojo" height={120} width={240} />
        </div>
        <div className={styles.project6}>
          <ProjectImage src="/ojoVert.JPG" alt="ojo" height={240} width={120} />
        </div>
        <div className={styles.text}>
          <h1 className={styles.textH1}>architecture</h1>
        </div>
      </div>
      <div id="estuario-details">
        {/* {isSelected ? <ProjectReps /> : null} */}
        <div className={styles.content}>{dataEstuario.map(renderData)}</div>
        <ProjectReps
          projectName="Estuario"
          projectYear={2018}
          projectCollabs="Ana Lucero Villaseñor, Angélica Mota"
        />
      </div>
      <div id="matlaltik-details">
        {/* {isSelected ? <ProjectReps /> : null} */}
        <div className={styles.content}>{dataMatlaltik.map(renderData)}</div>
        <ProjectReps
          projectName="Matlaltik"
          projectYear={2018}
          projectCollabs="Armando Ramos, Julieta García, Zamantha García"
        />
      </div>
    </div>
  );
};
