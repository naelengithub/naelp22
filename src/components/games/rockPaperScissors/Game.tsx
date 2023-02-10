import * as React from "react";
import styles from "./rockPS.module.css";

export interface GameProps {
  className?: string;
}

type HandType = "rock" | "paper" | "scissors" | null;
type GameType = {
  userHand: HandType;
  computerHand: HandType;
  result: "win" | "loss" | "tie" | null;
};

/**
 * @name Game
 * @description Game component.
 */
export const Game = (props: GameProps) => {
  const { className } = props;

  // Hooks
  const [gameState, setGameState] = React.useState<GameType>({
    computerHand: null,
    userHand: null,
    result: null,
  });

  const getComputerPick = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
      case 0:
        gameState.computerHand = "rock";
        return gameState.computerHand;
      case 1:
        gameState.computerHand = "paper";
        return gameState.computerHand;
      case 2:
        gameState.computerHand = "scissors";
        return gameState.computerHand;
    }
  };

  const getResult = () => {
    if (gameState.userHand === gameState.computerHand) {
      gameState.result = "tie";
      return "It's a tie!";
    }
    if (gameState.userHand === "rock") {
      if (gameState.computerHand === "paper") {
        gameState.result = "loss";
        return "Ha! I win.";
      } else {
        gameState.result = "win";
        return "You win!";
      }
    }
    if (gameState.userHand === "paper") {
      if (gameState.computerHand === "scissors") {
        gameState.result = "loss";
        return "Ha! I win.";
      } else {
        gameState.result = "win";
        return "You win!";
      }
    }
    if (gameState.userHand === "scissors") {
      if (gameState.computerHand === "rock") {
        gameState.result = "loss";
        return "Ha! I win.";
      } else {
        gameState.result = "win";
        return "You win!";
      }
    }
  };

  // Handlers
  const handleClickRock = () => {
    const newGameStateWithHands = { ...gameState };
    newGameStateWithHands.userHand = "rock";
    newGameStateWithHands.computerHand = getComputerPick();
    setGameState(newGameStateWithHands);
  };

  const handleClickPaper = () => {
    const newGameStateWithHands = { ...gameState };
    newGameStateWithHands.userHand = "paper";
    newGameStateWithHands.computerHand = getComputerPick();
    setGameState(newGameStateWithHands);
  };

  const handleClickScissors = () => {
    const newGameStateWithHands = { ...gameState };
    newGameStateWithHands.userHand = "scissors";
    newGameStateWithHands.computerHand = getComputerPick();
    setGameState(newGameStateWithHands);
  };

  function handleReload() {
    window.location.reload();
  }

  return (
    <main
      style={{
        backgroundColor: "rgb(243, 215, 54)",
        display: "flex",
        justifyContent: "center",
        textAlign: "center",
        padding: "7rem",
        height: "100vh",
        width: "100%",
      }}
    >
      <div style={{ width: "100%" }}>
        <h1>Let&apos;s go!</h1>
        <div>
          <div style={{ display: "flex", justifyContent: "space-evenly" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignContent: "center",
                width: "20rem",
              }}
            >
              <h2>Your Hand</h2>
              <div
                style={{
                  display: "flex",
                  gap: "1rem",
                }}
              >
                <button
                  className={styles.buttonChoice}
                  onClick={handleClickRock}
                >
                  Rock
                </button>
                <button
                  className={styles.buttonChoice}
                  onClick={handleClickPaper}
                >
                  Paper
                </button>
                <button
                  className={styles.buttonChoice}
                  onClick={handleClickScissors}
                >
                  Scissors
                </button>
              </div>
              <div>
                <h3>{gameState.userHand ? gameState.userHand : null}</h3>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "20rem",
                minWidth: "10rem",
              }}
            >
              <h2>My Hand</h2>

              <div className={styles.q}>?</div>
              <h3>{gameState.computerHand ? gameState.computerHand : null}</h3>
            </div>
          </div>
        </div>
        <div>
          <div>
            <h1>{gameState.userHand ? getResult() : null}</h1>
            <div>
              {gameState.result && (
                <button className={styles.button} onClick={handleReload}>
                  Restart
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
