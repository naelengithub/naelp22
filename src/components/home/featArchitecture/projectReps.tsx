import * as React from "react";

import styles from "./projectReps.module.css";

export interface ProjectRepsProps {
  className?: string;
  projectName: string;
  projectYear: number;
  projectCollabs: string;
}

/**
 * @name ProjectReps
 * @description Responsive layout of the images of each project.
 */
export const ProjectReps = (props: ProjectRepsProps) => {
  const { className, projectName, projectYear, projectCollabs } = props;

  return (
    <>
      <div>
        <div className={styles.textContainer}>
          <h2 className={styles.heading}>{projectName}</h2>
          <p>_{projectYear}</p>
          <p>
            __collaboration with <br />
            {projectCollabs}
          </p>
        </div>
      </div>
    </>
  );
};
