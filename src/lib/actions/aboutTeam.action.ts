import { RequestEventLoader } from "@builder.io/qwik-city";
import { ITeam } from "~/types/ITeam";

export const getTeams = async (requestEvent: RequestEventLoader) => {
  const lang = requestEvent.params.lang !== "en" ? "sv" : "en";
  const res = await fetch(
    `${requestEvent.env.get("URI_API")}/i18n/${lang}/about_section_team.json`,
  );
  const data = await res.json();
  return data?.about_section_team?.items as ITeam[];
};
