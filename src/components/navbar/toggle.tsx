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
          <Link className={styles.link} href="/about">
            about
          </Link>
        </div>
        <div className={styles.linkBox}>
          <Link className={styles.link} href="/contact">
            contact
          </Link>
        </div>
      </div>
    </div>
  );
};
