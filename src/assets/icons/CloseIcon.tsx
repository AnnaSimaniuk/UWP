import { component$ } from "@builder.io/qwik";
import { IIcon } from "~/types/IIcon";

export const CloseIcon = component$((props: IIcon) => (
  <svg
    class={props.class}
    fill="none"
    height="24"
    viewBox="0 0 24 24"
    width="24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M2.84766 0.814453L23.1853 21.1521L21.1516 23.1859L0.813887 2.84822L2.84766 0.814453Z" />
    <path d="M0.813965 21.1523L21.1517 0.814654L23.1854 2.84842L2.84773 23.1861L0.813965 21.1523Z" />
  </svg>
));
