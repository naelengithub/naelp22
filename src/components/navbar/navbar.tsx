import * as React from "react";
import Link from "next/link";

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
        <div>
          <Link href="/">
            <h1>ana elisa</h1>
          </Link>
          <p>software developer, skin coach, architect</p>
        </div>
        <h3 onClick={handleClick}>{isOpen ? "." : "..."}</h3>
      </div>
      <div className={styles.toggleContainer}>{isOpen ? <Toggle /> : null}</div>
    </nav>
  );
};
