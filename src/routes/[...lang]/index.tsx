import { component$, useSignal } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import {
  Speak,
  inlineTranslate,
  useFormatDate,
  useFormatNumber,
  usePlural,
  useRelativeTime,
  useSpeakContext,
  useSpeakLocale,
  useTranslate,
} from "qwik-speak";
import type { SpeakState } from "qwik-speak";

interface TitleProps {
  name: string;
}

export const Title = component$((props: TitleProps) => {
  return <h1>{props.name}</h1>;
});

export const SubTitle = (props: { ctx: SpeakState }) => {
  return <h2>{inlineTranslate("app.subtitle", props.ctx)}</h2>;
};

export const Home = component$(() => {
  const locale = useSpeakLocale();

  return <div class="content"></div>;
});

export default component$(() => {
  return (
    /**
     * Add Home translations (only available in child components)
     */
    <Speak assets={["home"]}>
      <Home />
    </Speak>
  );
});

export const head: DocumentHead = {
  title: "runtime.head.home.title",
  meta: [{ name: "description", content: "runtime.head.home.description" }],
};
