import * as React from "react";
import { useRecoilState } from "recoil";
import { gameStartState } from "./atoms";
import { Game } from "./Game";
import Timer from "./timer/Timer";
import { Wait } from "./Wait";
import styles from "./rockPS.module.css";

export interface RPSProps {
  className?: string;
}

type GameStatus = {
  status: "start" | "wait" | null;
};

/**
 * @name RPS
 * @description RPS component.
 */
export const RPS = (props: RPSProps) => {
  const { className } = props;

  // Hooks
  const [gameOn, setGameOn] = React.useState<GameStatus>({ status: null });
  // const [gameOn, setGameOn] = useRecoilState<GameStatus>(gameStartState);

  const [isWaiting, setIsWaiting] = React.useState(false);

  //Handlers
  const handleClickStart = () => {
    const newGameOn = { ...gameOn };
    newGameOn.status = "start";
    setGameOn(newGameOn);
  };

  return (
    <main
      style={{
        backgroundColor: "rgb(243, 215, 54)",
        display: "flex",
        justifyContent: "center",
        textAlign: "center",
        height: "100vh",
      }}
    >
      {gameOn.status === "start" ? (
        <Game />
      ) : gameOn.status === "wait" ? (
        <Wait />
      ) : (
        <div>
          <h2>Hey stranger!</h2>
          <h1>Ready to play?</h1>
          <div style={{ display: "flex", flexDirection: "row", gap: "2rem" }}>
            <div>
              {isWaiting ? null : (
                <button
                  className={styles.buttonChoice}
                  onClick={handleClickStart}
                >
                  Bring it on!
                </button>
              )}
            </div>
            <button
              className={styles.buttonChoice}
              onClick={() => setIsWaiting(true)}
            >
              Give me a minute...
            </button>
          </div>
          <h1>{isWaiting ? <Timer /> : null}</h1>
        </div>
      )}
    </main>
  );
};
