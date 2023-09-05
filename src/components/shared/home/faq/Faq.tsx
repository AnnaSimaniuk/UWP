import { component$, useSignal } from "@builder.io/qwik";
import { FaqItem } from "~/components/shared/home/faq/faq-item/FaqItem";
import { useTranslate } from "qwik-speak";
import {useFaqData} from "~/routes/[...lang]";
export const Faq = component$(() => {
  const activeQuestion = useSignal(0);
  const t = useTranslate();
  const data = useFaqData();
  return (
    <section
      itemScope
      itemType="https://schema.org/FAQPage"
      class="support bg-light pt-10 pb-[76px] dark:bg-dark lg:pt-[74px] lg:pb-[142px] xl:pt-[33px] xl:pb-[121px] 2xl:pt-[96px] 2xl:pb-[121px]"
    >
      <div class="container sm:max-w-full lg:px-[30px] 3xl:max-w-[1920px] 3xl:px-[135px]">
        <p class="mb-7 text-xs font-bold leading-4 tracking-[1px] text-middleGrey lg:mb-[15px] xl:hidden">
          {t("faq.description")}
        </p>
        <h2 class="mb-5 text-4xl font-bold uppercase leading-[43px] text-dark dark:text-white lg:mb-[15px] lg:text-[45px] lg:leading-[54px] xl:mb-[8px] xl:ml-[-8px] xl:text-[51px] xl:leading-[108px] 2xl:mb-[50px] 2xl:ml-[-8px] 2xl:text-[90px] 2xl:leading-[108px]">
          {t("faq.title")}
        </h2>
        <div class="xl:border-t-[1px] xl:border-t-middleGrey xl:flex xl:justify-between xl:gap-[28px] 2xl:gap-[48px]">
          <div class="xl:max-w-[287px] 2xl:max-w-[357px]">
            <p class="hidden text-base font-bold tracking-[1px] text-middleGrey xl:block xl:pt-[27px] 2xl:pt-[50px]">
              {t("faq.description")}
            </p>
          </div>
          <div
            class="support border-t-[1px] border-t-middleGrey xl:border-l-[1px] xl:border-l-middleGrey lg:pr-[4px] xl:max-w-[904px] xl:border-t-0 xl:pb-[48px] xl:pl-[41px] 2xl:max-w-[1244px] 2xl:pb-[48px] 2xl:pl-[152px]"
            id="faqWrp"
          >
            {data.value.map((item, index) => (
              <FaqItem
                index={index}
                key={item.name}
                question={item.name}
                answer={item.description}
                activeQuestion={activeQuestion}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});
