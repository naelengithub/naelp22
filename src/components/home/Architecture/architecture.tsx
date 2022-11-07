import * as React from "react";
import styles from "./architecture.module.css";
import { Grid } from "./grid";

export interface FeatArchitectureProps {
  className?: string;
  children: React.ReactNode;
}

/**
 * @name FeatArchitecture
 * @description FAQs feature component.
 */
export const FeatArchitecture = (props: FeatArchitectureProps) => {
  const { className, children } = props;

  return (
    <div className={styles.container}>
      <h1 className={styles.text}>architecture</h1>
      <Grid />
    </div>
  );
};
