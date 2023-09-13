import { component$ } from "@builder.io/qwik";

export const ArrowBreadcrumb = component$((props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={3}
    height={5}
    fill="none"
    {...props}
  >
    <path
      fill="#919191"
      d="M.11.105a.388.388 0 0 1 .53 0l2.25 2.142a.345.345 0 0 1 0 .506L.64 4.895a.388.388 0 0 1-.53 0 .345.345 0 0 1 0-.505L2.095 2.5.11.61a.345.345 0 0 1 0-.505Z"
    />
  </svg>
));
