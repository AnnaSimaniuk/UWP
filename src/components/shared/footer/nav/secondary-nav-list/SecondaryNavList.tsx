import { component$, useStyles$ } from "@builder.io/qwik";
import styles from "./SecondaryNavList.css?inline";
import { NAV_LINKS } from "~/tools/variables/navLinks";
import { SecondaryNavLink } from "~/components/shared/footer/nav/secondary-nav-list/secondary-nav-link/SecondaryNavLink";

export const SecondaryNavList = component$(() => {
  useStyles$(styles);

  return (
    <ul
      class="border__bottom border__top xl:border__top xl:border__bottom flex flex-col gap-y-5 pt-[32px]
    pb-8 text-sm font-medium uppercase leading-[18px] text-dark sm:flex-row sm:flex-wrap sm:gap-x-[53px]
    lg:flex lg:flex-wrap lg:gap-x-[53px] lg:border-0 lg:pt-5 lg:pb-5 xl:order-3 xl:col-span-2 xl:mb-[51px]
    xl:w-full xl:justify-between xl:pt-[23px] xl:text-base"
    >
      {NAV_LINKS.map((link) => (
        <SecondaryNavLink text={link.name} link={link.path} key={link.name} />
      ))}
    </ul>
  );
});
