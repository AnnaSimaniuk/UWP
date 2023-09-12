import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Speak } from "qwik-speak";
import { AboutAbout } from "~/components/shared/about/about-about/AboutAbout";
import { AboutTeam } from "~/components/shared/about/about-team/AboutTeam";
import { HomeForm } from "~/components/shared/home/home-form/HomeForm";

export default component$(() => {
  return (
    /**
     * Add Page translations (only available in child components)
     */
    <Speak assets={["about_us", "about_section_team"]}>
      <main class="z-10">
        <AboutAbout />
        <AboutTeam />
        <HomeForm />
      </main>
    </Speak>
  );
});

export const head: DocumentHead = {
  title: "runtime.head.about.title",
  meta: [{ name: "description", content: "runtime.head.about.description" }],
};
