import { useSpeakConfig, useSpeakLocale } from "qwik-speak";

export const useHref = (name: string) => {
  const lang = useSpeakLocale().lang;
  const config = useSpeakConfig();
  const getHref = () => {
    return lang === config.defaultLocale.lang ? `/${name}` : `/${lang}/${name}`;
  };

  const href = getHref();
  // const category_href = getHref();

  return { href };
};
