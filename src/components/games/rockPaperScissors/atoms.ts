import { atom } from "recoil";

type GameStart = {
  status: "start" | "wait" | null;
};

export const gameStartState = atom<GameStart>({
  key: "gameStart",
  default: {
    status: null,
  },
});
