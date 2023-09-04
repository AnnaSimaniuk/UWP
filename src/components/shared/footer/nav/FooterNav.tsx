import { component$ } from "@builder.io/qwik";
import { MainNavList } from "~/components/shared/footer/nav/main-nav-list/MainNavList";
import { SecondaryNavList } from "~/components/shared/footer/nav/secondary-nav-list/SecondaryNavList";
import { Social } from "~/components/shared/social/Social";

export const FooterNav = component$(() => {
  return (
    <nav class="lg:grid lg:grid-cols-1">
      <MainNavList />
      <SecondaryNavList />
      <Social
        classLink={"social__link"}
        classIcon={"icon"}
        classList={
          "lg:border__top flex flex-row items-center justify-center gap-2 pt-[28px] pb-[19px] sm:gap-5 lg:gap-[50px] lg:pt-[20px] lg:pb-[28px] xl:order-1 xl:mt-[-4px] xl:justify-end xl:gap-[24px] xl:border-t-0 xl:pl-0 xl:pr-0 xl:pt-0 xl:pb-[40px]"
        }
      />
    </nav>
  );
});
