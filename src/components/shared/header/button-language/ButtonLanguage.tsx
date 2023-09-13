import { component$, useComputed$, useStore, useTask$ } from "@builder.io/qwik";
import { useLocale } from "~/hooks/useLocale";
import { useTranslate } from "qwik-speak";
import { ILanguage } from "~/types/ILanguage";
import { Image } from "@unpic/qwik";

interface ButtonLanguageProps {
  languageData: ILanguage[];
}

export const ButtonLanguage = component$((props: ButtonLanguageProps) => {
  const { languageData } = props;
  const { locale, navigateByLocale$ } = useLocale();
  const t = useTranslate();

  const activeLanguage = useStore<ILanguage>({
    text: "",
    icon: "",
    href: "",
  });
  const lang = useComputed$(() => locale.lang);

  useTask$(({ track }) => {
    track(() => lang);
    languageData.forEach((lang) => {
      if (lang.href === locale.lang) {
        activeLanguage.text = lang.text;
        activeLanguage.icon = lang.icon;
        activeLanguage.href = lang.href;
      }
    });
  });

  return (
    <div class="hidden xl:block">
      <div class="flex items-center pl-[22px] group/item xl:relative xl:pl-[37px] 2xl:pl-[22px]">
        <span class="gap-2.5 rounded-lg p-2.5 transition-all ease-in hover:text-main dark:hover:bg-none lg:flex">
          <Image
            src={activeLanguage.icon}
            alt={activeLanguage.text}
            width={33}
            height={24}
          />
          <span class="btn__language-desc uppercase transition-all ease-in">
            {activeLanguage?.text}
          </span>
        </span>
        <div class="z-10 transition-all group-hover/item:visible group-hover/item:opacity-100 opacity-0 invisible">
          <div class="absolute left-[37px] top-[32px] flex justify-center pt-[13px] 2xl:left-[23px]">
            <div class="language-wrapper dropdown__wrapper flex min-w-max cursor-default gap-[106px] rounded-[5px] bg-[#343434] py-[4px] shadow-2xl">
              <ul class="language-list flex flex-col gap-[2px] text-lightGrey">
                {languageData.map((lang) => {
                  if (t(lang.href) !== activeLanguage?.href) {
                    return (
                      <li class="group" key={lang.text}>
                        <button
                          aria-label={lang.text}
                          class="language-item flex items-center gap-[5.5px] rounded-[5px] p-2.5 transition-all ease-in hover:bg-[#4E4E4E] lg:flex"
                          onClick$={() => navigateByLocale$(lang.href)}
                        >
                          <Image
                            src={lang.icon}
                            alt={lang.text}
                            width={33}
                            height={24}
                          />
                          <span class="btn__language-desc uppercase  transition-all ease-in group-hover:text-main">
                            {lang.text}
                          </span>
                        </button>
                      </li>
                    );
                  }
                  return null;
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
