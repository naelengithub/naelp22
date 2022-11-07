import * as React from "react";
import styles from "./header.module.css";

export interface HeaderProps {
  className?: string;
}

/**
 * @name Header
 * @description FAQs feature component.
 */
export const Header = (props: HeaderProps) => {
  const { className } = props;

  return (
    <div className={styles.container}>
      <div>
        <p className={styles.home}>nael</p>
        <p>software engineer, skincare consultant, architect</p>
      </div>
      <div className={styles.rightHandText}>
        <p>contact</p>
        <p>about</p>
      </div>
    </div>
  );
};
