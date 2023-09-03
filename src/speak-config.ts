import type { SpeakConfig } from "qwik-speak";

/**
 * Speak config
 */
export const config: SpeakConfig = {
  defaultLocale: {
    lang: "sv-SE",
    currency: "EUR",
    timeZone: "Europe/Stockholm",
    units: { length: "kilometer" },
    dir: "ltr",
  },
  supportedLocales: [
    {
      lang: "en-US",
      currency: "USD",
      timeZone: "America/Los_Angeles",
      units: { length: "mile" },
      dir: "ltr",
    },
    {
      lang: "sv-SE",
      currency: "EUR",
      timeZone: "Europe/Stockholm",
      units: { length: "kilometer" },
      dir: "ltr",
    },
  ],
  assets: [
    "app", // Translations shared by the pages
    "header",
  ],
  runtimeAssets: [
    "runtime", // Translations with dynamic keys or parameters
  ],
};
