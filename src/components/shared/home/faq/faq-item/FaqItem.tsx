import {
  component$,
  Signal,
  useSignal,
  useTask$,
  useStyles$,
} from "@builder.io/qwik";
import styles from "./FaqItem.css?inline";
import { MinesIcon, PlusIcon } from "~/assets/icons";

interface FaqItemProps {
  question: string;
  answer: string;
  index: number;
  activeQuestion: Signal<number>;
}

export const FaqItem = component$((props: FaqItemProps) => {
  useStyles$(styles);
  const { question, answer, index, activeQuestion } = props;
  const title = useSignal(false);
  const icon = useSignal(false);
  const content = useSignal(false);

  useTask$(({ track }) => {
    track(activeQuestion);
    title.value = index === activeQuestion.value;
    icon.value = index === activeQuestion.value;
    content.value = index === activeQuestion.value;
  });

  return (
    <div
      itemScope
      itemProp="mainEntity"
      itemType="https://schema.org/Question"
      class="item border__bottom"
    >
      <h3
        itemProp="name"
        class={`title title-accordion flex items-center justify-between xl:pr-[11px] ${
          title.value ? "t_active text-main dark:text-main" : ""
        }`}
        onClick$={() => (activeQuestion.value = index)}
      >
        {question}
        {icon.value ? <MinesIcon /> : <PlusIcon />}
      </h3>
      <div
        itemScope
        itemProp="acceptedAnswer"
        itemType="https://schema.org/Answer"
        class={`content text-accordion ${content.value ? "c_active" : ""}`}
      >
        <span itemProp="text">{answer}</span>
      </div>
    </div>
  );
});
