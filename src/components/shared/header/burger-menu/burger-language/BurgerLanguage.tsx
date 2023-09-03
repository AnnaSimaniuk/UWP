import { component$, useComputed$, useStore, useTask$ } from "@builder.io/qwik";
import { useLocale } from "~/hooks/useLocale";
import { Language } from "~/components/shared/header/button-language/ButtonLanguage";

interface BurgerLanguageProps {
  languageData: Language[];
}

export const BurgerLanguage = component$((props: BurgerLanguageProps) => {
  const { locale, navigateByLocale$ } = useLocale();

  return (
    <>
      {props.languageData.map((lang) => {
        if (lang.href === locale.lang) {
          return (
            <span
              key={lang.text}
              class="order-2 group active-language-menu z-20 flex items-center gap-[4.7px] rounded-[2.85px] p-[7px] transition-all ease-in hover:bg-grey lg:flex"
            >
              <div dangerouslySetInnerHTML={lang?.icon}></div>
              <span class="font-medium text-[12px] leading-[1.3] uppercase text-white transition-all ease-in group-hover:text-main">
                {lang.text}
              </span>
            </span>
          );
        } else {
          return null;
        }
      })}
      {props.languageData.map((lang) => {
        if (lang.href !== locale.lang) {
          return (
            <button
              key={lang.text}
              onClick$={() => navigateByLocale$(lang.href)}
              aria-label={lang.label}
              class="order-2 group flex items-center gap-[4.7px] rounded-[2.85px] p-[7px] transition-all ease-in hover:bg-grey lg:flex"
            >
              <div dangerouslySetInnerHTML={lang?.icon}></div>
              <span class="font-medium text-[12px] leading-[1.3] uppercase text-middleGrey transition-all ease-in group-hover:text-main">
                {lang.text}
              </span>
            </button>
          );
        } else {
          return null;
        }
      })}
    </>
  );
});
