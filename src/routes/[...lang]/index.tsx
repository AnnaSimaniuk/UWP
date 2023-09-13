import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Speak } from "qwik-speak";
import { routeLoader$ } from "@builder.io/qwik-city";
import { getFaqs } from "~/lib/actions/faq.action";
import { Hero } from "~/components/shared/home/hero/Hero";
import { Video } from "~/components/shared/home/video/Video";
import { Agency } from "~/components/shared/home/agency/Agency";
import { Cases } from "~/components/shared/home/cases/Cases";
import { Services } from "~/components/shared/home/services/Services";
import { Cooperation } from "~/components/shared/home/cooperation/Cooperation";
import { Faq } from "~/components/shared/home/faq/Faq";
import { HomeForm } from "~/components/shared/home/home-form/HomeForm";
import { Discuss } from "~/components/shared/home/discuss/Discuss";
import { getDiscuss } from "~/lib/actions/discuss.action";
import { getCasesForHomePage } from "~/lib/actions/cases.action";
import { getServicesForHomePage } from "~/lib/actions/services.action";
import { getCooperationForHomePage } from "~/lib/actions/cooperation.action";

export const useDiscussData = routeLoader$(async (requestEvent) => {
  return await getDiscuss(requestEvent);
});

export const useFaqData = routeLoader$(async (requestEvent) => {
  return await getFaqs(requestEvent);
});

export const useCasesData = routeLoader$(async (requestEvent) => {
  return await getCasesForHomePage(requestEvent);
});

export const useServicesData = routeLoader$(async (requestEvent) => {
  return await getServicesForHomePage(requestEvent);
});

export const useCooperationData = routeLoader$(async (requestEvent) => {
  return await getCooperationForHomePage(requestEvent);
});

export default component$(() => {
  return (
    <Speak
      assets={[
        "cases",
        "services",
        "faq",
        "hero",
        "video",
        "agency",
        "cooperation",
      ]}
    >
      <main class="z-10">
        <Hero />
        <Video />
        <Agency />
        <Cases />
        <Services />
        <Discuss />
        {/*<Blog/>*/}
        <Cooperation />
        <Faq />
        <HomeForm />
      </main>
    </Speak>
  );
});

export const head: DocumentHead = {
  title: "runtime.head.home.title",
  meta: [{ name: "description", content: "runtime.head.home.description" }],
};
