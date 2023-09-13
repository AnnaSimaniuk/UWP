import { RequestEventLoader } from "@builder.io/qwik-city";

export const getDiscuss = async (requestEvent: RequestEventLoader) => {
  const lang = requestEvent.params.lang !== "en" ? "sv" : "en";
  const res = await fetch(
    `${requestEvent.env.get("URI_API")}/i18n/${lang}/discuss.json`,
  );
  const data = await res.json();
  return data?.discuss;
};
