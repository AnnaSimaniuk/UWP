import { component$ } from "@builder.io/qwik";
import { CooperationReason } from "~/components/shared/home/cooperation/cooperation-reason/CooperationReason";
import { ButtonSticky } from "~/components/ui/button/ButtonSticky";
import { useTranslate } from "qwik-speak";
import { useHref } from "~/hooks/useHref";
import { useCooperationData } from "~/routes/[...lang]";

export const Cooperation = component$(() => {
  const t = useTranslate();
  const { href } = useHref(t("cooperation.btn_href"));
  const data = useCooperationData();
  return (
    <section class="cooperation bg-dark pb-[64px] lg:pb-[58px] xl:pb-[162px]">
      <div class="container sm:max-w-full lg:px-[30px] 3xl:max-w-[1920px] 3xl:px-[135px]">
        <div class="xl:border-t-[1px] xl:border-t-middleGrey xl:flex xl:flex-row-reverse xl:justify-between">
          <div class="xl:flex xl:basis-[100%] xl:flex-col 2xl:max-w-full">
            <div class="border-t-[1px] border-t-middleGrey xl:flex xl:justify-between xl:border-t-0 xl:pt-[50px]">
              <h2 class="mb-5 pt-[30px] text-sm font-bold uppercase leading-4 text-middleGrey lg:mb-[30px] lg:pt-[35px] lg:text-base lg:leading-[19px] xl:pt-0 xl:pl-[50px]">
                {t("cooperation.title")}
              </h2>
              <p class="mb-10 text-xl font-medium leading-7 text-white lg:mb-[42px] lg:indent-[88px] xl:mb-[50px] xl:max-w-[630px] xl:indent-[138px] xl:text-[25px] xl:leading-[33px] 2xl:max-w-[950px] 2xl:text-[32px] 2xl:leading-[45px]">
                {t("cooperation.description")}
              </p>
            </div>
            <div class="lg:pb-[10px]">
              <ul class="grid grid-cols-1 lg:grid-cols-2 mb-6 xl:mb-0">
                {data.value.map((item, index) => (
                  <CooperationReason key={item.title} {...item} index={index} />
                ))}
              </ul>
            </div>
          </div>
          <div class="xl:border-r-[1px] xl:border-r-middleGrey xl:max-w-[317px] xl:basis-[43.3%] xl:pt-[48px] xl:pr-[28px] 2xl:max-w-[407px] 2xl:pr-[50px]">
            <ButtonSticky text={t("cooperation.btn_text")} href={href} />
          </div>
        </div>
      </div>
    </section>
  );
});
