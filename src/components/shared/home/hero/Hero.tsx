import { component$ } from "@builder.io/qwik";
import { useTranslate } from "qwik-speak";

export const Hero = component$(() => {
  const t = useTranslate();
  return (
    <section class="hero red-gradient-hero flex bg-dark pt-[46px] pb-[66px] lg:pt-[44px] lg:pb-[88px] xl:pt-[36px] xl:pb-[92px] 1xl:pt-[74px] 1xl:pb-[92px] 2xl:py-[115px] 3xl:py-[115px]">
      <div class="container sm:max-w-full lg:px-[30px]">
        <div class="flex flex-col text-center">
          <div class="z-10 lg:flex lg:justify-center">
            <h1 class="mb-5 text-4xl font-bold uppercase leading-[120%] text-white lg:mb-[23px] lg:text-6xl lg:leading-[110%] xl:mb-[18px] xl:text-[66.5px] xl:leading-[69px] 1xl:mb-[22px] 1xl:text-[87px] 1xl:leading-[100%] 2xl:mb-[35px] 2xl:text-[90px] 2xl:leading-[99%] 3xl:mb-[50px] 3xl:text-[120px] 3xl:leading-[99%]">
              {t("hero.title")}
            </h1>
          </div>
          <div class="z-10 lg:flex lg:justify-center">
            <p class="text-base font-normal leading-[130%] text-white lg:px-[170px] xl:text-[20px] 1xl:max-w-[70%] 2xl:ml-[-72px] 2xl:max-w-[988px] 2xl:text-2xl">
              {t("hero.description")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
});
