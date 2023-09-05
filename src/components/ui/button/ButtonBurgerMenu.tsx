import { component$, useContext } from "@builder.io/qwik";
import { ModalProvider } from "~/context";

interface ButtonBurgerMenuProps {
  burgerMenuData: {
    isActive: boolean;
  };
}

export const ButtonBurgerMenu = component$((props: ButtonBurgerMenuProps) => {
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
