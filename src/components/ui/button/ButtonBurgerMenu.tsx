import { component$, useContext, useStyles$ } from "@builder.io/qwik";
import styles from "./ButtonBurgerMenu.css?inline";

import { ModalProvider } from "~/context";
import { ButtonBurgerMenu } from "~/components/ui/button/ButtonBurgerMenu";

interface ButtonBurgerMenuProps {
  burgerMenuData: {
    isActive: boolean;
  };
}

export const ButtonBurgerMenu = component$((props: ButtonBurgerMenuProps) => {
  useStyles$(styles);
  return (
    <button
      aria-label="button burger"
      class={`burger ml-[20px] items-center md:ml-[37px] xl:hidden ${
        props.burgerMenuData.isActive ? "is-active" : ""
      }`}
      type="button"
      onClick$={() =>
        (props.burgerMenuData.isActive = !props.burgerMenuData.isActive)
      }
    >
      <span class="burger__box">
        <span class="burger__inner"></span>
      </span>
    </button>
  );
});
