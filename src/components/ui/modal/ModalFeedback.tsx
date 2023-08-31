import { component$ } from "@builder.io/qwik";
import { FeedbackForm } from "~/components/form/FeedbackForm";

export const ModalFeedback = component$(() => {
  return (
    <>
      <h2 class="z-10 mt-[20px] mb-[30px] text-4xl font-bold uppercase leading-[43px] text-white lg:mt-[32px] lg:mb-[24px] lg:leading-[39px] xl:text-[36px] xl:leading-[70px] 2xl:text-[64px]">
        Let’s discuss the project
      </h2>
      <h3 class="mb-[38px] text-sm font-medium leading-[15px] tracking-[1px] text-middleGrey">
        Let’s discuss the project
      </h3>
      <p class="mb-[21px] text-xs font-bold leading-[13px] tracking-[1px] text-middleGrey">
        I am interested in
      </p>
      <FeedbackForm services={true} />
    </>
  );
});
