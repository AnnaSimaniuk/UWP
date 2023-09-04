import { component$ } from "@builder.io/qwik";
import { NAV_LINKS } from "~/tools/variables/navLinks";
import { MainNavLink } from "~/components/shared/footer/nav/main-nav-list/main-nav-link/MainNavLink";

export const MainNavList = component$(() => {
  return (
    <ul class="lg:border__bottom grid max-w-[84%] grid-flow-col grid-rows-3 items-center gap-x-[28px] gap-y-[30px] pb-[37px] text-lg font-medium uppercase leading-6 text-dark dark:text-white sm:max-w-full sm:grid-rows-2 sm:gap-x-[8px] sm:pb-[22px] lg:max-w-full lg:grid-rows-1 lg:gap-x-[8px] lg:pb-[22px] lg:text-xl xl:max-w-[72.5%] xl:gap-x-[0px] xl:border-b-0 xl:pb-[49px] xl:text-[20px] 2xl:text-2xl">
      {NAV_LINKS.map((link) => (
        <MainNavLink link={link.path} key={link.path} text={link.name} />
      ))}
    </ul>
  );
});
