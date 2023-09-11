import { RequestEventLoader } from "@builder.io/qwik-city";
import { extractLanguage, isFourthCharacterUppercase } from "~/tools/stringFn";

export const getAllNamesOfServices = async (
  requestEvent: RequestEventLoader,
) => {
  const lang = isFourthCharacterUppercase(requestEvent.params.lang)
    ? extractLanguage(requestEvent.params.lang)
    : "sv-SE";
  const res = await fetch(
    `${requestEvent.env.get("URI_API")}/i18n/${lang}/menu.json`,
  );
  const data = await res.json();
  const services = data.menu.find(
    (item: any) => item.name === "Services" || item.name === "Tjänster",
  );
  return services?.submenu;
};
