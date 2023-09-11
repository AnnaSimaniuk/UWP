import { RequestEventLoader } from "@builder.io/qwik-city";
import { extractLanguage, isFourthCharacterUppercase } from "~/tools/stringFn";

export const getLanguages = async (requestEvent: RequestEventLoader) => {
  const lang = isFourthCharacterUppercase(requestEvent.params.lang)
    ? extractLanguage(requestEvent.params.lang)
    : "sv-SE";
  const res = await fetch(
    `${requestEvent.env.get("URI_API")}/i18n/${lang}/header.json`,
  );

  const data = await res.json();
  return data.header.languages;
};
