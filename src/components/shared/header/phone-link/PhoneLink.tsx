import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { PhoneIcon } from "~/assets/icons";

export const PhoneLink = component$(() => {
  return (
    <Link
      href={"tel:+46 73 718 77 47"}
      aria-label="+46 73 718 77 47"
      class={"relative group/item w-[210px] h-[48px] py-[2px]"}
    >
      <div
        class={
          "relative ml-auto border-2 border-main overflow-hidden w-[48px] h-[48px] rounded-full transition-all group-hover/item:w-[105%]"
        }
      >
        <div class={"absolute top-[10px] left-[10px]"}>
          <PhoneIcon />
        </div>
      </div>
      <div class={"absolute top-[3px] left-[58px] flex items-center gap-2.5"}>
        <div
          class={
            "flex flex-col font-medium opacity-0 scale-y-0 origin-top group-hover/item:transition-all group-hover/item:opacity-100 group-hover/item:scale-y-100 group-hover/item:delay-150"
          }
        >
          <span class={"text-base text-grey dark:text-white"}>
            +46 73 718 77 47
          </span>
          <span class={"text-xs opacity-50 text-black dark:text-light"}>
            Mon - Fri: 10:00 - 18:00
          </span>
        </div>
      </div>
    </Link>
  );
});
