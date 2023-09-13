import { RequestEventLoader } from "@builder.io/qwik-city";
import { IFaq } from "~/types/IFaq";

export const getFaqs = async (requestEvent: RequestEventLoader) => {
  const lang = requestEvent.params.lang !== "en" ? "sv" : "en";
  const res = await fetch(
    `${requestEvent.env.get("URI_API")}/i18n/${lang}/faq.json`,
  );
  const data = await res.json();
  return data?.faq?.items as IFaq[];
};
