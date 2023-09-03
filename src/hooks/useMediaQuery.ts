import { $, useOnWindow, useSignal } from "@builder.io/qwik";

const breakpoints = {
  sm: "570px",
  md: "768px",
  lg: "820px",
  xl: "1280px",
  "1xl": "1366px",
  "2xl": "1536px",
  "3xl": "1920px",
};
export const useMediaQuery = (query: keyof typeof breakpoints) => {
  const matches = useSignal(false);

  useOnWindow(
    "resize",
    $(() => {
      const match = window.matchMedia(`(min-width: ${breakpoints[query]})`);
      matches.value = match.matches;
    }),
  );

  useOnWindow(
    "load",
    $(() => {
      const match = window.matchMedia(`(min-width: ${breakpoints[query]})`);
      matches.value = match.matches;
    }),
  );

  return matches.value;
};
