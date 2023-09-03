import { component$ } from "@builder.io/qwik";

export const PlusIcon = component$(() => (
  <svg
    class="min-h-[24px] min-w-[24px] fill-dark dark:fill-white lg:min-h-[36px] lg:min-w-[36px]"
    height="24"
    viewBox="0 0 36 36"
    width="24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path clip-rule="evenodd" d="M36 20H0v-3h36v3z" fill-rule="evenodd" />
    <path clip-rule="evenodd" d="M20 0v36h-3V0h3z" fill-rule="evenodd" />
  </svg>
));
