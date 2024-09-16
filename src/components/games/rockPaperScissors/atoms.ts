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

export const timeState = atom({
  key: "timeState",
  default: 25200, // Default value for 7 am in seconds
});
