import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Speak } from "qwik-speak";
import { routeLoader$ } from "@builder.io/qwik-city";
import { Home } from "~/components/shared";
import { getDiscuss } from "~/lib/actions/discuss.action";

export const useDiscussData = routeLoader$(async (requestEvent) => {
  return await getDiscuss(requestEvent);
});

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
