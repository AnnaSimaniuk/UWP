import { RequestEventLoader } from "@builder.io/qwik-city";
import { ICase } from "~/types/ICase";

export const getCasesForHomePage = async (requestEvent: RequestEventLoader) => {
  const lang = requestEvent.params.lang !== "en" ? "sv" : "en";
  const res = await fetch(
    `${requestEvent.env.get("URI_API")}/i18n/${lang}/cases.json`,
  );
  const data = await res.json();
  return data?.cases?.items as ICase[];
};
