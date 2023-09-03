import { component$ } from "@builder.io/qwik";
import { Hero } from "~/components/shared/home/hero/Hero";
import { Video } from "~/components/shared/home/video/Video";
import { Agency } from "~/components/shared/home/agency/Agency";
import { Cases } from "~/components/shared/home/cases/Cases";
import { Services } from "~/components/shared/home/services/Services";
import { Discuss } from "~/components/shared/home/discuss/Discuss";
import { Cooperation } from "~/components/shared/home/cooperation/Cooperation";
import { Faq } from "~/components/shared/home/faq/Faq";
import { HomeForm } from "~/components/shared/home/home-form/HomeForm";
import { Speak } from "qwik-speak";

export const HomeApp = component$(() => {
  return (
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
  );
});

export const Home = component$(() => (
  // <Speak assets={["home"]}>
  <HomeApp />
  // </Speak>
));
