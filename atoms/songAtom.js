import { atom } from "recoil";

export const currentTrackIdState = atom({
  key: "currentTrackIdState",
  default: null,
});

export const isPlaylingState = atom({
  key: "isPlaylingState",
  default: null,
});
