import { Button } from "~/components/ui";
import {
  $,
  component$,
  useSignal,
  useStore,
  useVisibleTask$,
} from "@builder.io/qwik";
import { DarkThemeIcon } from "~/assets/icons";
import { LightThemeIcon } from "~/assets/icons";

export const ButtonTheme = component$(() => {
  const store = useStore({
    theme:
      (typeof window !== "undefined" && window?.localStorage?.theme) ||
      undefined,
  });
  const classDark = useSignal("hidden");
  const classLight = useSignal("hidden");

  useVisibleTask$(() => {
    store.theme = document.documentElement.classList.contains("dark")
      ? "dark"
      : "light";
    classDark.value = store.theme === "dark" ? "hidden" : "";
    classLight.value = store.theme === "dark" ? "" : "hidden";
  });

  const toggleTheme = $(() => {
    switch (store.theme) {
      case "dark":
        document.documentElement.classList.remove("dark");
        classLight.value = "hidden";
        classDark.value = "";
        store.theme = window.localStorage.theme = "light";
        break;
      default:
        document.documentElement.classList.add("dark");
        classDark.value = "hidden";
        classLight.value = "";
        store.theme = window.localStorage.theme = "dark";
        break;
    }
  });

  return (
    <Button
      variant="icon"
      aria-label="thema dark"
      id="mode"
      type="button"
      onClick$={toggleTheme}
      className={"relative w-[32px] h-[32px]"}
    >
      <DarkThemeIcon class={classDark.value} />
      <LightThemeIcon class={classLight.value} />
    </Button>
  );
});

export const DarkThemeLauncher = () => (
  <script
    dangerouslySetInnerHTML={`if(localStorage.theme==="dark"){document.documentElement.classList.add("dark");}else if(typeof localStorage.theme==="undefined"){if(window.matchMedia("(prefers-color-scheme: dark)").matches){document.documentElement.classList.add("dark");}}`}
  />
);
