import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

interface ButtonStickyProps {
  text: string;
  href: string;
}

export const ButtonSticky = component$((props: ButtonStickyProps) => {
  return (
    <Link
      aria-label={props.text}
      class="link-oside lg:mt-[21px] lg:flex xl:!sticky xl:!top-[100px] xl:!mt-0 btn overflow-hidden"
      href={props.href}
    >
      {props.text}
      <svg fill="none" height="15" viewBox="0 0 15 15" width="15">
        <path
          clip-rule="evenodd"
          d="M12.1083 4.37452L12.1083 14.094L14.5 14.094L14.5 -9.53674e-07L1.34559 -3.78677e-07L1.34559 2.56255L10.4171 2.56255L0.500002 13.188L2.19118 15L12.1083 4.37452Z"
          fill="white"
          fill-rule="evenodd"
        ></path>
      </svg>
    </Link>
  );
});
