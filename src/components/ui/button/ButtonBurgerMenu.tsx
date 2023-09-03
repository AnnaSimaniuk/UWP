import { component$ } from "@builder.io/qwik";

interface ButtonBurgerMenuProps {
  burgerMenuData: {
    isActive: boolean;
  };
}

export const ButtonBurgerMenu = component$((props: ButtonBurgerMenuProps) => {
  const { isActive } = props.burgerMenuData;
  return (
    <button
      aria-label="button burger"
      class={`burger ml-[20px] items-center md:ml-[37px] xl:hidden ${
        isActive ? "is-active" : ""
      }`}
      type="button"
      onClick$={() => (props.burgerMenuData.isActive = !isActive)}
    >
      <span class="burger__box">
        <span class="burger__inner"></span>
      </span>
    </button>
  );
});
