import { component$, Signal, useContext, useStyles$ } from "@builder.io/qwik";
import { PencilIcon } from "~/assets/icons";
import { ModalProvider } from "~/context";
import { useTranslate } from "qwik-speak";
import styles from "./ButtonContact.css?inline";
interface ButtonContactProps {
  isHoveredPhoneLink: {
    isHovered: boolean;
  };
  burgerMenuData: {
    isActive: boolean;
  };
}

export const ButtonContact = component$((props: ButtonContactProps) => {
  useStyles$(styles);
  const t = useTranslate();
  const { showDynamicForm } = useContext(ModalProvider);

  return (
    <>
      <button
        aria-label={t("header.btn_text")}
        class={`
          light-theme-white-text btn_a--svg group transition-all ease-in-out duration-250 bg-main lg:bg-transparent uppercase relative w-[40px] h-[40px] hover:bg-white lg:hover:bg-transparent hover:ring-1 hover:ring-inset lg:hover:ring-0 overflow-hidden rounded-full active:ring-main text-white dark:hover:text-white hover:text-white fill-white hover:fill-dark lg:hover:fill-white dark:hover:fill-dark lg:dark:hover:fill-white
        ${
          props.isHoveredPhoneLink.isHovered
            ? "lg:w-[46px] lg:h-[46px]"
            : "lg:w-[190px] lg:h-[46px]"
        }
        `}
        id="{id}"
        onClick$={() => {
          props.burgerMenuData.isActive = false;
          showDynamicForm();
        }}
      >
        <span
          class={`absolute top-[50%] left-[50%] translate-x-[-60%] translate-y-[-50%] text-inherit z-[3] w-full hidden text-base font-medium leading-[21px] transition-all ease-in-out lg:duration-250 group-active:text-main dark:group-active:text-main ${
            props.isHoveredPhoneLink.isHovered
              ? "lg:hidden opacity-0"
              : "lg:block opacity-100"
          }`}
        >
          {t("header.btn_text")}
        </span>
        <PencilIcon
          class={`h-[15px] w-[16px] top-[13px] right-[12px] lg:top-[14px] ${
            props.isHoveredPhoneLink.isHovered
              ? "lg:right-[16px]"
              : "lg:right-[23px]"
          } z-[3] absolute light-theme-white-text transition-all ease-in lg:duration-250 fill-inherit group-active:fill-main dark:group-active:fill-main lg:dark:group-active:fill-main`}
        />
        <svg
          class="btn_a--svg__border hidden lg:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] origin-center"
          enable-background="new 2 29.3 56.9 13.4"
          preserveaspectratio="none"
          viewBox="2 29.3 56.9 13.4"
          width="190"
          x="0px"
          y="0px"
        >
          <g class="btn_a--svg__border--left">
            <path
              class="group path_a transition-all ease-in-out lg:duration-250 group-active:stroke-main"
              d="M30.4,41.9H9c0,0-6.2-0.3-6.2-5.9S9,30.1,9,30.1h21.4"
              fill="none"
              stroke="#FF304D"
              stroke-miterlimit="1"
              stroke-width="0.5"
            ></path>
          </g>
          <g class="btn_a--svg__border--right">
            <path
              class="group path_a transition-all ease-in lg:duration-250 group-active:stroke-main"
              d="M30.4,41.9h21.5c0,0,6.1-0.4,6.1-5.9s-6-5.9-6-5.9H30.4"
              fill="none"
              stroke="#FF304D"
              stroke-miterlimit="1"
              stroke-width="0.5"
            ></path>
          </g>
        </svg>
        <svg
          class="hidden lg:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] origin-center"
          enable-background="new 0 0 60 60"
          viewBox="0 0 60 60"
          width="190"
          x="0px"
          y="0px"
        >
          <circle
            class="transition-all ease-in-out duration-500 scale-[1.1] origin-center group-hover:scale-[0.0001]"
            cx="30"
            cy="30"
            fill="#FF304D"
            r="28.7"
          ></circle>
        </svg>
      </button>
    </>
  );
});
