import * as React from "react";
import Link from "next/link";

import { useWindowSize } from "../../hooks/useWindowSize";
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

  const size = useWindowSize();
  const screenWidthSize = size.width;

  if (!screenWidthSize) {
    return null;
  } else {
    return (
      <nav>
        <div className={styles.container}>
          <div>
            <Link href="/">
              <h1>ana elisa</h1>
            </Link>
            <p>product engineer, architect</p>
          </div>
          <div style={{ display: "flex", gap: "2rem" }}>
            <button
              onClick={() => {
                window.scrollTo({
                  top: screenWidthSize * 30,
                  left: 0,
                  behavior: "smooth",
                });
              }}
              style={{
                backgroundColor: "transparent",
                border: "solid",
                borderRadius: "10px",
                paddingRight: "1rem",
                paddingLeft: "1rem",
              }}
            >
              contact
            </button>
          </div>
        </div>
      </nav>
    );
  }
};
