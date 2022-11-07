import * as React from "react";
import { ProjectImage } from "../../projectImage";
import styles from "./grid.module.css";
import { ProjectMatlaltik } from "./Projects/projectMatlaltik";

export interface GridProps {
  className?: string;
}

/**
 * @name Grid
 * @description FAQs feature component.
 */
export const Grid = (props: GridProps) => {
  const { className } = props;

  //   //Hooks
  //   const [isSelected, setIsSelected] = React.useState(false);

  //   //Handlers
  //   const handleClick = () => {
  //     console.log("got selected or not!");
  //     setIsSelected(!isSelected);
  //   };

  return (
    <div className={styles.container}>
      <div
        className={styles.matlaltik}
        onMouseEnter={handleClick}
        onMouseLeave={handleClick}
      >
        <ProjectMatlaltik>
          <div className={styles.container}>
            <div className={styles.leftContainer}>
              <div>
                <div>
                  <p>
                    _2018
                    <br />
                    _colaboration with Julieta Cabadilla, Armando Ramos, and
                    Zamantha Garcia
                  </p>
                </div>
                <div>
                  <ProjectImage
                    alt="Planta"
                    src={MatlaltikBirdsEye}
                    width={675}
                    height={491}
                  />
                </div>
                <div>
                  <p>matlaltik</p>
                  <p>__click here to request more info</p>
                </div>
              </div>
            </div>
            <div>
              <ProjectImage
                alt="Render"
                src={MatlaltikCollage}
                width={511}
                height={998}
              />
            </div>
          </div>
        </ProjectMatlaltik>
      </div>
      <div className={styles.estuario}></div>
      <div className={styles.spline}></div>
      <div className={styles.xitle}></div>
      <div className={styles.ts}></div>
      <div className={styles.viga}></div>
    </div>
  );
};
