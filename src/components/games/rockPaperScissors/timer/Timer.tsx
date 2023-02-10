import * as React from "react";
import styles from "../rockPS.module.css";

export interface TimerProps {
  className?: string;
}

/**
 * @name Timer
 * @description Timer component.
 */

export default function Timer() {
  // Hooks
  const [timer, setTimer] = React.useState(5);
  const [playLater, setPlayLater] = React.useState(false);

  const timeStart = () => {
    if (timer > 0) {
      setTimeout(() => setTimer(timer - 1), 1000);
    } else {
      setTimer(0);
    }
  };

  React.useEffect(() => {
    timeStart();
  });

  //Handlers
  const handleClickNope = () => {
    setPlayLater(true);
  };
  function handleReload() {
    window.location.reload();
  }

  return (
    <div>
      <div>{timer === 0 ? "How 'bout now?" : timer}</div>
      <div>
        {timer === 0 ? (
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <button className={styles.buttonChoice}>Yeah!</button>
            <button className={styles.buttonChoice} onClick={handleClickNope}>
              Maybe later
            </button>
          </div>
        ) : null}
      </div>
      <div>
        {playLater ? (
          <div>
            <p>No prob, I&apos;ll be here :)</p>
            <button className={styles.button} onClick={handleReload}>
              Reload page
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
}
