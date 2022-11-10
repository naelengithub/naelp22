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
    <div className={styles.toggle}>
      <div className={styles.linkBox}>
        <a className={styles.link} href="/about">
          about
        </a>
      </div>
      <div className={styles.linkBox}>
        <a className={styles.link} href="/contact">
          contact
        </a>
      </div>
    </div>
  );
};
