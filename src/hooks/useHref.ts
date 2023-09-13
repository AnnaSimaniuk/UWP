import { useSpeakConfig, useSpeakLocale } from "qwik-speak";
import { useLocation } from "@builder.io/qwik-city";

export const useHref = (name: string) => {
  const lang = useSpeakLocale().lang;
  const config = useSpeakConfig();
  const location = useLocation();

  const getHref = () => {
    return lang === config.defaultLocale.lang
      ? `${location.url.origin}/${name}`
      : `${location.url.origin}/${lang}/${name}`;
  };

  const href = getHref();
  // const category_href = getHref();

  return { href };
};
