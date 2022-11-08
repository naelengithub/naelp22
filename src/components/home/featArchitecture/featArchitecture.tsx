import * as React from "react";
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
  const [isOpen, setIsOpen] = React.useState(false);

  // Handlers
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        <div className={styles.project1}>
          <ProjectImage src="/ojoVert.JPG" alt="ojo" height={240} width={120} />
        </div>
        <div className={styles.project2}>
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
    </div>
  );
};
