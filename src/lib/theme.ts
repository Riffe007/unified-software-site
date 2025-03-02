import { atom } from "jotai";

export const themeAtom = atom(
  (typeof window !== "undefined" && localStorage.getItem("theme") === "dark") ? "dark" : "light"
);
