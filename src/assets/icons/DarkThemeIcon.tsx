import { component$ } from "@builder.io/qwik";
import type { IIcon } from "~/types/IIcon";

export const DarkThemeIcon = component$((props: IIcon) => (
  <svg
    id="darkBtn"
    class={`m-1 stroke-current transition-all hover:stroke-red-500 ${props.class}`}
    fill="none"
    height="24"
    viewBox="0 0 25 24"
    width="24"
  >
    <path d="M9.142.596c.532-.177.793-.066.85-.016.014.014.024.026.024.065-.001.052-.025.166-.145.337-1.435 2.037-2 3.693-1.998 5.938.006 7.973 9.076 12.375 15.425 7.512l-.304-.396.304.396c.247-.188.432-.27.55-.297a.25.25 0 0 1 .1-.007c.01.013.037.059.048.174.014.156-.007.392-.1.712-2.817 9.64-15.54 11.564-21.015 3.192-2.707-4.14-2.46-9.992.537-13.616C5.066 2.598 6.843 1.362 9.142.596zm14.814 13.535-.004-.002c.003 0 .005.002.004.002z" />
  </svg>
));
