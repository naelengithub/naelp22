import * as React from "react";
import { useWindowSize } from "../../hooks/useWindowSize";

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

  const size = useWindowSize();
  const screenWidthSize = size.width;

  // Hooks
  const [isOpen, setIsOpen] = React.useState(false);

  // Handlers
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleArchClick = () => {
    setIsOpen(!isOpen);
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const handleDesignClick = () => {
    setIsOpen(!isOpen);
    window.scrollTo({ top: screenWidthSize, left: 0, behavior: "smooth" });
  };

  const handleSoftwareDevClick = () => {
    setIsOpen(!isOpen);
    window.scrollTo({ top: screenWidthSize * 2, left: 0, behavior: "smooth" });
  };

  const handleContactClick = () => {
    setIsOpen(!isOpen);
    window.scrollTo({ top: screenWidthSize * 4, left: 0, behavior: "smooth" });
  };

  return (
    <div>
      <div className={styles.toggle}>
        <div className={styles.linkBox} onClick={handleArchClick}>
          <p>architecture</p>
        </div>
        <div className={styles.linkBox} onClick={handleDesignClick}>
          <p>design</p>
        </div>
        <div className={styles.linkBox} onClick={handleSoftwareDevClick}>
          <p>
            software
            <br />
            development
          </p>
        </div>
        <div className={styles.linkBox} onClick={handleContactClick}>
          <p>contact</p>
        </div>
      </div>
    </div>
  );
};
