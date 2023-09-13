import { defineConfig } from "vite";
import { qwikVite } from "@builder.io/qwik/optimizer";
import { qwikCity } from "@builder.io/qwik-city/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { qwikSpeakInline } from "./src/tools/inline";

export default defineConfig(() => {
  return {
    build: {
      minify: false, // To inspect production files
    },
    plugins: [
      qwikCity({
        rewriteRoutes: [
          {
            prefix: "en",
            paths: {
              "om-oss": "about-us",
            },
          },
        ],
      }),
      qwikVite(),
      qwikSpeakInline({
        supportedLangs: ["en", "sv"],
        defaultLang: "sv",
        assetsPath: "i18n",
      }),
      tsconfigPaths(),
    ],
    preview: {
      headers: {
        "Cache-Control": "public, max-age=600",
      },
    },
  };
});
