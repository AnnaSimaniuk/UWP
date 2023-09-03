import { useLocation } from "@builder.io/qwik-city";
import { SpeakLocale, useSpeakConfig, useSpeakLocale } from "qwik-speak";
import { $ } from "@builder.io/qwik";

export const useLocale = () => {
  const loc = useLocation();
  const config = useSpeakConfig();
  const locale = useSpeakLocale();
  const navigateByLocale$ = $((newLocale: string) => {
    const url = new URL(location.href);
    if (loc.params.lang) {
      if (newLocale !== config.defaultLocale.lang) {
        url.pathname = url.pathname.replace(loc.params.lang, newLocale);
      } else {
        url.pathname = url.pathname.replace(
          new RegExp(`(/${loc.params.lang}/)|(/${loc.params.lang}$)`),
          "/",
        );
      }
    } else if (newLocale !== config.defaultLocale.lang) {
      url.pathname = `/${newLocale}${url.pathname}`;
    }

    location.href = url.toString();
  });

  return { locale, navigateByLocale$ };
};
