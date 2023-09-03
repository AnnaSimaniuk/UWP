import { component$ } from "@builder.io/qwik";

export const BackIcon = component$(() => {
  return (
    <svg
      fill="none"
      height="12"
      viewBox="0 0 7 12"
      width="7"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6 0.5L1 6L6 11.5"
        stroke="#FF304D"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
});
