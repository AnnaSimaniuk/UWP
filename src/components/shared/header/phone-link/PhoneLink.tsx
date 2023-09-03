import { component$, Signal } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { PhoneIcon } from "~/assets/icons";

interface PhoneLinkProps {
  isHoveredPhoneLink: {
    isHovered: boolean;
  };
  isBurgerActive: boolean;
  isWhiteHeader: boolean;
}

export const PhoneLink = component$((props: PhoneLinkProps) => {
  return (
    <Link
      href={"tel:+46 73 718 77 47"}
      aria-label="+46 73 718 77 47"
      class={`relative group/item lg:h-[48px] w-[40px] h-[40px] py-[2px]`}
      onMouseEnter$={() => (props.isHoveredPhoneLink.isHovered = true)}
      onMouseLeave$={() => (props.isHoveredPhoneLink.isHovered = false)}
    >
      <div
        class={
          "relative ml-auto border-2 border-main overflow-hidden lg:w-[48px] lg:h-[48px] w-[40px] h-[40px] rounded-full transition-all group-hover/item:lg:w-[207px] duration-300"
        }
      >
        <div
          class={"absolute top-[9px] left-[9px] lg:top-[10px] lg:left-[10px]"}
        >
          <PhoneIcon />
        </div>
      </div>
      <div
        class={
          "hidden lg:flex absolute top-[3px] left-[58px] items-center gap-2.5 w-max"
        }
      >
        <div
          class={
            "flex flex-col font-medium opacity-0 scale-y-0 origin-top transition-scale group-hover/item:opacity-100 group-hover/item:scale-y-100 group-hover/item:delay-300 duration-300"
          }
        >
          <span
            class={`text-base text-grey dark:text-white ${
              props.isBurgerActive || !props.isWhiteHeader ? "text-white" : ""
            }`}
          >
            +46 73 718 77 47
          </span>
          <span
            class={`text-xs opacity-50 text-black dark:text-light ${
              props.isBurgerActive || !props.isWhiteHeader ? "text-light" : ""
            }`}
          >
            Mon - Fri: 10:00 - 18:00
          </span>
        </div>
      </div>
    </Link>
  );
});
