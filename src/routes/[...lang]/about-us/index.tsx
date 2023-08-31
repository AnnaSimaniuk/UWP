import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Speak, useTranslate } from "qwik-speak";

export const Page = component$(() => {
  return <div class="content">Paaaaage</div>;
});

export default component$(() => {
  return (
    /**
     * Add Page translations (only available in child components)
     */
    <Speak assets={["page"]}>
      <Page />
    </Speak>
  );
});

export const head: DocumentHead = {
  title: "runtime.head.page.title",
  meta: [{ name: "description", content: "runtime.head.page.description" }],
};
