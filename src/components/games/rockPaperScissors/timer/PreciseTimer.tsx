import * as React from "react";

export interface PreciseTimerProps {
  className?: string;
  count: boolean;
}

/**
 * @name PreciseTimer
 * @description Timer component.
 */

export default function PreciseTimer() {
  // Hooks
  const [timer, setTimer] = React.useState(5);

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

  return <div>{timer}</div>;
}
