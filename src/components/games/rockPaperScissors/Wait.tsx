import * as React from "react";
import { Game } from "./Game";
import Timer from "./timer/Timer";

export interface WaitProps {
  className?: string;
}

/**
 * @name Wait
 * @description Wait component.
 */
export const Wait = (props: WaitProps) => {
  const { className } = props;

  // Hooks
  const [gameOn, setGameOn] = React.useState(false);
  const [isWaiting, setIsWaiting] = React.useState(false);

  // Handlers
  const handleClickReady = () => {
    setGameOn(true);
  };
  const handleClickWait = () => {
    setIsWaiting(true);
  };

  return (
    <main
      style={{
        display: "flex",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <div>
        <div>
          {gameOn ? null : (
            <div>
              <h2>Hey stranger!</h2>
              <h1>Ready to play?</h1>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  {isWaiting ? null : (
                    <button onClick={handleClickReady}>Bring it on!</button>
                  )}
                </div>
                <button onClick={handleClickWait}>Give me a minute...</button>
              </div>
            </div>
          )}
        </div>
        <h1>{isWaiting ? <Timer /> : null}</h1>
        <div>{gameOn ? <Game /> : null}</div>
      </div>
    </main>
  );
};
