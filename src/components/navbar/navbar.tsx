import * as React from "react";

import styles from "./navbar.module.css";
import { Toggle } from "./toggle";

export interface NavBarProps {
  className?: string;
}

/**
 * @name NavBar
 * @description FAQs feature component.
 */
export const NavBar = (props: NavBarProps) => {
  const { className } = props;

  // Hooks
  const [isOpen, setIsOpen] = React.useState(false);

  // Handlers
  const handleClick = () => {
    console.log("clicked!");
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      <div className={styles.container}>
        <div className={styles.logo}>
          <h1>nael</h1>
        </div>
        <h3 onClick={handleClick}>{isOpen ? "." : "..."}</h3>
      </div>
      <div className={styles.toggleContainer}>{isOpen ? <Toggle /> : null}</div>
    </nav>
  );
};
