import { component$, useComputed$, useStore, useTask$ } from "@builder.io/qwik";
import { useLocale } from "~/hooks/useLocale";

export interface Language {
  text: string;
  icon: string;
  href: string;
  label: string;
}

interface ButtonLanguageProps {
  languageData: Language[];
}

export const data = [
  {
    text: "SV",
    icon:
      '<svg class="{class}" fill="none" height="24" viewBox="0 0 33 24" width="33" xmlns="http://www.w3.org/2000/svg">\n' +
      '    <path d="M28.9449 0H13.8338V9.77778H32.5005V3.55556C32.5005 2.61256 32.1259 1.70819 31.4591 1.0414C30.7923 0.374602 29.8879 0 28.9449 0ZM13.8338 23.1111H28.9449C30.9085 23.1111 32.5005 21.5191 32.5005 19.1111V13.3333H13.8338V23.1111ZM0.500488 13.3333V19.1111C0.500488 21.5191 2.09249 23.1111 4.05604 23.1111H10.2783V13.3333H0.500488ZM10.2783 0H4.05604C3.11305 0 2.20868 0.374602 1.54189 1.0414C0.87509 1.70819 0.500488 2.61256 0.500488 3.55556L0.500488 9.77778H10.2783V0Z" fill="#C60C30"/>\n' +
      '    <path d="M13.8338 0H10.2783V9.77778H0.500488V13.3333H10.2783V23.1111H13.8338V13.3333H32.5005V9.77778H13.8338V0Z" fill="#EEEEEE"/>\n' +
      "</svg>",
    href: "sv-SE",
    label: "SV",
  },
  {
    text: "EN",
    icon:
      '<svg class="{class}" fill="none" height="24" viewBox="0 0 34 25" width="33">\n' +
      '    <path d="M0 3.46471C0 1.82734 1.3293 0.5 2.96907 0.5H30.6804C32.3202 0.5 33.6495 1.82734 33.6495 3.46471V21.5353C33.6495 23.1727 32.3202 24.5 30.6804 24.5H2.96907C1.3293 24.5 0 23.1727 0 21.5353V3.46471Z" fill="#0A17A7"></path>\n' +
      '    <path clip-rule="evenodd" d="M0 8.45598H7.99954L0.025137 3.07717C0.177812 1.90943 1.01103 0.95531 2.11432 0.624697L12.7935 7.82787V0.5H20.7971V7.82824L31.4944 0.612801C32.6064 0.92866 33.4524 1.87553 33.6194 3.04111L25.5915 8.45598H33.6029V16.4596H25.5905L33.6294 21.8819C33.4929 23.0522 32.6739 24.0145 31.5803 24.3614L20.7971 17.088V24.5H12.7935V17.0884L2.02979 24.3486C0.944621 23.9875 0.138033 23.0179 0.0160304 21.8452L8.00057 16.4596H0V8.45598Z" fill="white" fill-rule="evenodd"></path>\n' +
      '    <path clip-rule="evenodd" d="M0 14.9H14.4212V24.5H19.2283V14.9H33.6495V10.1H19.2283V0.5H14.4212V10.1H0V14.9Z" fill="#E6273E" fill-rule="evenodd"></path>\n' +
      '    <path clip-rule="evenodd" d="M0.82938 23.5927C0.676051 23.4339 0.540311 23.258 0.425293 23.0681L10.4953 16.39C10.6473 16.2892 10.8523 16.3307 10.9531 16.4827C11.0539 16.6347 11.0124 16.8397 10.8604 16.9405L0.82938 23.5927Z" fill="#FF304D" fill-rule="evenodd"></path>\n' +
      '    <path clip-rule="evenodd" d="M0.936291 1.30225L10.3684 7.68922C10.519 7.79121 10.5589 7.99656 10.4574 8.14789C10.3559 8.29922 10.1515 8.33922 10.0009 8.23724L0.505371 1.80736C0.629895 1.62322 0.77459 1.45379 0.936291 1.30225Z" fill="#FF304D" fill-rule="evenodd"></path>\n' +
      '    <path clip-rule="evenodd" d="M33.1724 23.1475C33.0519 23.3328 32.9113 23.5039 32.7537 23.6575L23.0315 17.1809C22.8799 17.0799 22.8399 16.8766 22.9421 16.7268C23.0442 16.577 23.2499 16.5374 23.4015 16.6384L33.1724 23.1475Z" fill="#FF304D" fill-rule="evenodd"></path>\n' +
      '    <path clip-rule="evenodd" d="M33.1524 1.823L23.3953 8.23992C23.2435 8.33973 23.0395 8.29765 22.9397 8.14593C22.8398 7.9942 22.8819 7.79028 23.0337 7.69047L32.7257 1.31641C32.886 1.46861 33.0293 1.63852 33.1524 1.823Z" fill="#FF304D" fill-rule="evenodd"></path>\n' +
      "</svg>",
    href: "en-US",
    label: "EN",
  },
];
export const ButtonLanguage = component$((props: ButtonLanguageProps) => {
  const { locale, navigateByLocale$ } = useLocale();
  const activeLanguage = useStore<Language>({
    text: "",
    icon: "",
    href: "",
    label: "",
  });
  const lang = useComputed$(() => locale.lang);

  useTask$(({ track }) => {
    track(() => lang);
    props.languageData.forEach((lang) => {
      if (lang.href === locale.lang) {
        activeLanguage.text = lang.text;
        activeLanguage.icon = lang.icon;
        activeLanguage.href = lang.href;
        activeLanguage.label = lang.label;
      }
    });
  });

  return (
    <div class="hidden xl:block">
      <div class="flex items-center pl-[22px] group/item xl:relative xl:pl-[37px] 2xl:pl-[22px]">
        <span class="gap-2.5 rounded-lg p-2.5 transition-all ease-in hover:text-main dark:hover:bg-none lg:flex">
          <div dangerouslySetInnerHTML={activeLanguage?.icon}></div>
          <span class="btn__language-desc uppercase transition-all ease-in">
            {activeLanguage?.text}
          </span>
        </span>
        <div class="z-10 transition-all group-hover/item:visible group-hover/item:opacity-100 opacity-0 invisible">
          <div class="absolute left-[37px] top-[32px] flex justify-center pt-[13px] 2xl:left-[23px]">
            <div class="language-wrapper dropdown__wrapper flex min-w-max cursor-default gap-[106px] rounded-[5px] bg-[#343434] py-[4px] shadow-2xl">
              <ul class="language-list flex flex-col gap-[2px] text-lightGrey">
                {props.languageData.map((lang) => {
                  if (lang.href !== activeLanguage?.href) {
                    return (
                      <li class="group" key={lang.text}>
                        <button
                          aria-label={lang.label}
                          class="language-item flex items-center gap-[5.5px] rounded-[5px] p-2.5 transition-all ease-in hover:bg-[#4E4E4E] lg:flex"
                          onClick$={() => navigateByLocale$(lang.href)}
                        >
                          <div dangerouslySetInnerHTML={lang?.icon}></div>
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
