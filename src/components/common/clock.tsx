import React, { useEffect } from "react";
import { useRecoilValue } from "recoil";
import { timeState } from "../games/rockPaperScissors/atoms";

interface ClockProps {
  startFrom: number;
}

const Clock: React.FC<ClockProps> = ({ startFrom }) => {
  const time = useRecoilValue(timeState);

  useEffect(() => {
    // Do something whenever the time changes
    // This effect will re-run whenever `time` changes
  }, [time]);

  const hours = Math.floor(time / 3600);
  const minutes = Math.floor((time % 3600) / 60);
  const seconds = time % 60;

  return (
    <div className="text-white">
      <p>
        {String(hours).padStart(2, "0")}:{String(minutes).padStart(2, "0")}:
        {String(seconds).padStart(2, "0")}
      </p>
    </div>
  );
};

export default Clock;
