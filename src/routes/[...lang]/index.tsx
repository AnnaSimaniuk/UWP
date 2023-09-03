import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Speak } from "qwik-speak";
import { Home } from "~/components/shared";

export default component$(() => {
  return (
    /**
     * Add Home translations (only available in child components)
     */
    <Speak assets={["header"]}>
      <Home />
    </Speak>
  );
});

export const head: DocumentHead = {
  title: "runtime.head.home.title",
  meta: [{ name: "description", content: "runtime.head.home.description" }],
};
