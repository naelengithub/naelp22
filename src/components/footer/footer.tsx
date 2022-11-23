import * as React from "react";

import styles from "./footer.module.css";

export interface FooterProps {
  className?: string;
}

/**
 * @name Footer
 * @description Footer component.
 */
export const Footer = (props: FooterProps) => {
  const { className } = props;

  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <p className={styles.p}>copyright © 2022 ana elisa</p>
        <p className={styles.p}>mit &hearts; in Mexiko-Stadt hergestellt</p>
      </div>
    </div>
  );
};

// @refresh reset
