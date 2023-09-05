import { RequestEventLoader } from "@builder.io/qwik-city";
import { extractLanguage, isFourthCharacterUppercase } from "~/tools/stringFn";
import { IFaq } from "~/types/IFaq";

export const getFaqs = async (requestEvent: RequestEventLoader) => {
  const lang = isFourthCharacterUppercase(requestEvent.params.lang)
    ? extractLanguage(requestEvent.params.lang)
    : "sv-SE";
  const res = await fetch(
    `${requestEvent.env.get("URI_API")}/i18n/${lang}/faq.json`,
  );
  const data = await res.json();
  return data?.faq?.items as IFaq[];
};
