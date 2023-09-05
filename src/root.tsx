import { component$ } from "@builder.io/qwik";
import {
  QwikCityProvider,
  RouterOutlet,
  ServiceWorkerRegister,
} from "@builder.io/qwik-city";
import { QwikSpeakProvider } from "qwik-speak";

import { RouterHead } from "./components/router-head/router-head";
import { config } from "./speak-config";
import { translationFn } from "./speak-functions";

import "./global.css";
import { DarkThemeLauncher } from "~/components/ui/button/ButtonTheme";

export default component$(() => {
  return (
    /**
     * Init Qwik Speak (only available in child components)
     */
    <QwikSpeakProvider config={config} translationFn={translationFn}>
      <QwikCityProvider>
        <head>
          <meta charSet="utf-8" />
          <link rel="manifest" href="/manifest.json" />
          <script src="path-to-the-file/splide.min.js"></script>
          {/* <link rel="stylesheet" href="path-to-the-file/splide.min.css" /> */}
          {/* <link rel="stylesheet" href="url-to-cdn/splide.min.css" /> */}
          <RouterHead />
        </head>
        <body lang="en" class={"bg-light dark:bg-dark"}>
          <RouterOutlet />
          <ServiceWorkerRegister />
          <DarkThemeLauncher />
        </body>
      </QwikCityProvider>
    </QwikSpeakProvider>
  );
});
