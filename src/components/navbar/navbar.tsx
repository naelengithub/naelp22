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
    if (screenWidthSize < 1024) {
      return (
        <nav>
          <div style={{ display: "flex", position: "relative", zIndex: 100 }}>
            <div className={styles.container}>
              <div>
                <Link href="/">
                  <h1>ana elisa</h1>
                </Link>
                <p>software developer, architect</p>
              </div>
              <h3 onClick={handleClick}>{isOpen ? "x" : "..."}</h3>
            </div>
            <div className={styles.toggleContainer}>
              {isOpen ? <Toggle /> : null}
            </div>
          </div>
        </nav>
      );
    }
  }
  {
    return (
      <nav>
        <div className={styles.container}>
          <div>
            <Link href="/">
              <h1>ana elisa</h1>
            </Link>
            <p>software developer, architect, skin coach</p>
          </div>
          <div style={{ display: "flex", gap: "2rem" }}>
            <button
              onClick={() => {
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
              }}
              style={{
                backgroundColor: "transparent",
                border: "solid",
                borderRadius: "10px",
                paddingRight: "1rem",
                paddingLeft: "1rem",
              }}
            >
              architecture
            </button>
            <button
              onClick={() => {
                window.scrollTo({
                  top: screenWidthSize,
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
              design
            </button>
            <button
              onClick={() => {
                window.scrollTo({
                  top: screenWidthSize * 2.1,
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
              software engineering
            </button>
            <button
              onClick={() => {
                window.scrollTo({
                  top: screenWidthSize * 3,
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
