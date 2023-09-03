import {
  $,
  component$,
  useContext,
  useOnWindow,
  useSignal,
  useStore,
  useTask$,
} from "@builder.io/qwik";
import { HeaderLogo } from "~/components/shared/header/header-logo/HeaderLogo";
import { ButtonTheme } from "~/components/ui";
import { Navbar } from "~/components/shared/navbar/Navbar";
import { Speak } from "qwik-speak";
import { PhoneLink } from "~/components/shared/header/phone-link/PhoneLink";
import { ButtonContact } from "~/components/ui/button/ButtonContact";
import {
  ButtonLanguage,
  data,
} from "~/components/shared/header/button-language/ButtonLanguage";
import { useMediaQuery } from "~/hooks/useMediaQuery";
import { ButtonBurgerMenu } from "~/components/ui/button/ButtonBurgerMenu";
import { useLocation } from "@builder.io/qwik-city";
import { BurgerMenu } from "~/components/shared/header/burger-menu/BurgerMenu";
import { ModalProvider } from "~/context";

const urlWhiteHeader = ["case", "contact", "blog"];

const HeaderApp = component$(() => {
  const { url } = useLocation();
  const isHoveredPhoneLink = useStore({ isHovered: false });
  const isXlScreen = useMediaQuery("xl");
  const isLgScreen = useMediaQuery("lg");
  const burgerMenuData = useStore({
    isActive: false,
    whiteHeader: false,
  });
  const headerScroll = useSignal("");
  const { headerClass } = useContext(ModalProvider);
  const y = useSignal(0);

  useOnWindow(
    "load",
    $(() => {
      y.value = scrollY;
    }),
  );

  useOnWindow(
    "scroll",
    $(() => {
      if (scrollY > 300 && scrollY > y.value) {
        headerScroll.value = "isFixed";
      }
      if (scrollY < y.value && headerScroll.value === "isFixed") {
        headerScroll.value = "isFixed isVisible";
      }
      if (scrollY === 0) {
        headerScroll.value = "";
      }
      y.value = scrollY;
    }),
  );

  useTask$(async ({ track }) => {
    track(() => url.pathname);
    if (url.pathname.includes("services")) {
      const regex = /\/services\/.+/;
      burgerMenuData.whiteHeader = regex.test(url.pathname);
      return;
    }
    burgerMenuData.whiteHeader = urlWhiteHeader.some((item) => {
      return url.pathname.includes(item);
    });
    return;
  });

  return (
    <header
      class={`header min-h-[var(--header-h)] bg-dark text-white md:min-h-[var(--header-h-lg)] lg:min-h-[var(--header-h-xl)] ${
        burgerMenuData.whiteHeader ? "white-header" : ""
      } ${
        burgerMenuData.whiteHeader && burgerMenuData.isActive
          ? "burger-paint-header-dark"
          : ""
      } ${headerScroll.value} ${headerClass}`}
      id="mainNav"
    >
      <div
        class="container mx-auto flex min-h-[var(--header-h)] sm:max-w-full md:min-h-[var(--header-h-lg)] lg:min-h-[var(--header-h-xl)] lg:px-[30px] 3xl:max-w-[1920px] 3xl:px-[135px]"
        id="header-container"
      >
        <div class="flex grow items-center justify-between">
          <div class="lg:block">
            <div
              class={`flex items-center gap-[20px] sm:gap-[40px] lg:gap-[51px] xl:gap-[38px] 2xl:gap-[51px] transition-all ease-linear
              ${
                burgerMenuData.isActive
                  ? "lg:-translate-y-5 lg:opacity-0"
                  : "opacity-100 transform-none"
              }
              `}
              id="logoOpacity"
            >
              <HeaderLogo isBurgerActive={burgerMenuData.isActive} />
              <ButtonTheme />
            </div>
          </div>
          {isXlScreen && <Navbar />}
          <div class="flex lg:items-center">
            {isLgScreen && !isXlScreen && (
              <div
                class={`${
                  burgerMenuData.isActive
                    ? "lg:translate-y-0 opacity-100 transition-all ease-linear delay-150"
                    : "opacity-0"
                } lg:-translate-y-5 mr-[37px] opacity-0`}
              >
                <HeaderLogo isBurgerActive={burgerMenuData.isActive} />
              </div>
            )}
            <div
              class={`flex items-center lg:w-[260px] lg:justify-between gap-[10px]`}
            >
              <PhoneLink
                isHoveredPhoneLink={isHoveredPhoneLink}
                isBurgerActive={burgerMenuData.isActive}
                isWhiteHeader={burgerMenuData.whiteHeader}
              />
              <ButtonContact
                isHoveredPhoneLink={isHoveredPhoneLink}
                burgerMenuData={burgerMenuData}
              />
            </div>
            {isXlScreen && <ButtonLanguage languageData={data} />}
            {!isXlScreen && (
              <ButtonBurgerMenu burgerMenuData={burgerMenuData} />
            )}
          </div>
        </div>
      </div>
      <div id="progressline"></div>
      {!isXlScreen && <BurgerMenu burgerMenuData={burgerMenuData} />}
    </header>
  );
});
export const Header = component$(() => {
  return (
    <Speak assets={["header"]}>
      <HeaderApp />
    </Speak>
  );
});
