import * as React from "react";

import styles from "./Footer.module.css";

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
        <p>mit &hearts; in Mexiko-Stadt hergestellt</p>
        <p>copyright © 2022 nael</p>
      </div>
    </div>
  );
};

// @refresh reset
