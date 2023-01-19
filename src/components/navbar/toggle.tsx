import Link from "next/link";
import * as React from "react";

import styles from "./toggle.module.css";

export interface ToggleProps {
  className?: string;
}

/**
 * @name Toggle
 * @description FAQs feature component.
 */
export const Toggle = (props: ToggleProps) => {
  const { className } = props;

  // Hooks
  const [isOpen, setIsOpen] = React.useState(false);

  // Handlers
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className={styles.toggle}>
        <div className={styles.linkBox}>
          <p>architecture</p>
        </div>
        <div className={styles.linkBox}>
          <p>design</p>
        </div>
        <div className={styles.linkBox}>
          <p>
            software
            <br />
            development
          </p>
        </div>
        <div className={styles.linkBox}>
          <p>contact</p>
        </div>
      </div>
    </div>
  );
};
