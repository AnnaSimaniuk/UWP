import { RequestEventLoader } from "@builder.io/qwik-city";
import { IService } from "~/types/IService";

export const getAllNamesOfServices = async (
  requestEvent: RequestEventLoader,
) => {
  const lang = requestEvent.params.lang !== "en" ? "sv" : "en";
  const res = await fetch(
    `${requestEvent.env.get("URI_API")}/i18n/${lang}/menu.json`,
  );
  const data = await res.json();
  const services = data.menu.find(
    (item: any) => item.name === "Services" || item.name === "Tjänster",
  );
  return services?.submenu;
};

export const getServicesForHomePage = async (
  requestEvent: RequestEventLoader,
) => {
  const lang = requestEvent.params.lang !== "en" ? "sv" : "en";
  const res = await fetch(
    `${requestEvent.env.get("URI_API")}/i18n/${lang}/services.json`,
  );
  const data = await res.json();
  return data?.services?.items as IService[];
};
