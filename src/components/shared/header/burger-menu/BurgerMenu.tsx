import {
  $,
  component$,
  useContext,
  useOnDocument,
  useSignal,
  useStyles$,
} from "@builder.io/qwik";
import styles from "./BurgerMenu.css?inline";
import { BurgerLanguage } from "~/components/shared/header/burger-menu/burger-language/BurgerLanguage";
import { BackIcon } from "~/assets/icons";
import { Button } from "~/components/ui";
import { NAV_LINKS } from "~/tools/variables/navLinks";
import { BurgerNavItem } from "~/components/shared/header/burger-menu/burger-nav-item/BurgerNavItem";
import { Social } from "~/components/shared/social/Social";
import { ILanguage } from "~/types/ILanguage";
import { MenuServices } from "~/routes/layout";
interface BurgerMenuProps {
  burgerMenuData: {
    isActive: boolean;
    whiteHeader: boolean;
  };
  languageData: ILanguage[];
}

export const BurgerMenu = component$((props: BurgerMenuProps) => {
  useStyles$(styles);
  const serviceMenuActive = useSignal(false);
  const servicesLinks = useContext(MenuServices);

  useOnDocument(
    "keydown",
    $((event) => {
      const { key } = event as KeyboardEvent;
      if (key === "Escape") {
        props.burgerMenuData.isActive = false;
      }
    })
  );

  return (
    <>
      <div
        class={`absolute top-[76px] left-0 right-0 h-[calc(100vh-76px)] transition-all lg:top-[90px] lg:h-[calc(100vh-90px)] xl:hidden ${
          props.burgerMenuData.isActive
            ? "opacity-100 visible"
            : "opacity-0 invisible"
        }`}
        id="menu"
      >
        <div
          class={`wrapper-menu-tablet h-full flex transition-all duration-300 ease-linear overflow-visible ${
            props.burgerMenuData.isActive ? "" : "translate-x-full"
          }`}
        >
          <div
            class="bg-main/70 backdrop-blur-xl flex-1 relative lg:-top-[90px] h-[100vh]"
            id="backdrop_01"
          ></div>
          <div
            class={`red-gradient-menu header__contact-body right-0 flex w-full flex-col justify-between overflow-y-auto bg-dark px-5 pt-[33px] pb-20 lg:w-[63.7%] lg:px-[32px] lg:pb-[50px] lg:pt-[22px]
         
            `}
            id="dynamicMenu"
          >
            <div
              class={`dynamicMenuContainer z-10 ${
                serviceMenuActive.value ? "min-h-[700px]" : ""
              }`}
            >
              <div class="border__bottom flex gap-[1px] pb-[28px]">
                <BurgerLanguage languageData={props.languageData} />
              </div>
              <nav class="relative">
                <ul
                  class={`mt-[30px] mb-[100px] gap-[30px] text-xl font-medium uppercase leading-[24px] text-white transition-all ${
                    serviceMenuActive.value ? "-translate-x-full" : ""
                  }`}
                  id="servicesMenu"
                >
                  {NAV_LINKS.map((link) => (
                    <BurgerNavItem
                      text={link.name}
                      link={link.path}
                      key={link.path}
                      classWrapper={"mb-[30px]"}
                      serviceMenuActive={serviceMenuActive}
                      burgerMenuData={props.burgerMenuData}
                    />
                  ))}
                </ul>
                <ul
                  class={`text-mainTextLight absolute top-0 mt-[21px] mb-[37px] ml-[7px] h-full text-base font-medium uppercase text-white transition-all ${
                    serviceMenuActive.value ? "" : "translate-x-[100vw]"
                  }`}
                  id="servicesModal"
                >
                  <li>
                    <Button
                      variant={"icon"}
                      aria-label="back"
                      class="uppercase translate-underline__hover-line-back group mb-[30px] flex w-[52px] items-center gap-[10px] text-xs text-main"
                      id="backMenuServices"
                      type="button"
                      onClick$={() => {
                        if (serviceMenuActive) serviceMenuActive.value = false;
                      }}
                    >
                      <span class="transition-arrov__back">
                        <BackIcon />
                      </span>
                      Back
                    </Button>
                  </li>
                  {servicesLinks.map((link) => (
                    <BurgerNavItem
                      text={link.name}
                      link={link.href}
                      key={link.href}
                      classWrapper={"mb-[17px]"}
                      serviceMenuActive={serviceMenuActive}
                      burgerMenuData={props.burgerMenuData}
                    />
                  ))}
                </ul>
              </nav>
            </div>
            <Social
              classList={
                "flex flex-wrap items-center justify-center gap-2 sm:gap-5"
              }
              classIcon={"icon-menu"}
              classLink={"social__link-menu"}
            />
          </div>
        </div>
      </div>
    </>
  );
});
