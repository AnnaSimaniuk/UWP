import { RequestEventLoader } from "@builder.io/qwik-city";
import { ICooperation } from "~/types/ICooperation";

export const getCooperationForHomePage = async (
  requestEvent: RequestEventLoader,
) => {
  const lang = requestEvent.params.lang !== "en" ? "sv" : "en";
  const res = await fetch(
    `${requestEvent.env.get("URI_API")}/i18n/${lang}/cooperation.json`,
  );
  const data = await res.json();
  return data?.cooperation?.items as ICooperation[];
};
