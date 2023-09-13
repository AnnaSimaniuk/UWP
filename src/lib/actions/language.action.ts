import { RequestEventLoader } from "@builder.io/qwik-city";

export const getLanguages = async (requestEvent: RequestEventLoader) => {
  const lang = requestEvent.params.lang !== "sv" ? "en" : "sv";
  const res = await fetch(
    `${requestEvent.env.get("URI_API")}/i18n/${lang}/header.json`,
  );

  const data = await res.json();
  return data.header.languages;
};
