import { component$ } from "@builder.io/qwik";

export const Agency = component$(() => {
  return (
    <section class="agency Grey bg-light pt-[77px] pb-[67px] dark:bg-dark lg:pt-[47px] lg:pb-[79px] xl:pt-[50px] xl:pb-[29px] 2xl:pt-[105px] 2xl:pb-[97px]">
      <div class="container sm:max-w-full lg:px-[30px] 3xl:max-w-[1920px] 3xl:px-[135px]">
        <div class="lg:flex lg:gap-[28px] lg:border-t lg:border-lightDarkGrey xl:gap-[32px] 2xl:gap-[43px]">
          <div class="border-b-[1px] border-b-middleGrey pb-[26px] lg:border-b-0 lg:pb-0 lg:pt-[27px] xl:gap-[70px] xl:pt-[19px] 2xl:pt-[50px]">
            <h2 class="text-xl font-bold uppercase leading-[1.4] tracking-[-0.5px] text-black dark:text-white lg:mb-[-2px] lg:w-[220px] lg:text-base xl:w-[284px] xl:text-[22px] xl:leading-[117%] 2xl:w-[365px] 2xl:text-2xl 2xl:leading-[130%]">
              LIMITLESS IS YOUR NEW RULE IN BUSINESS DEVELOPMENT
            </h2>
          </div>
          <div class="lg:border-l-[1px] lg:border-l-middleGrey pt-[29px] lg:pl-[56px] lg:pt-[27px] lg:pb-[12px] xl:pt-[19px] xl:pl-[39px] 2xl:pt-[50px] 2xl:pl-[153px]">
            <p class="text-xl font-medium leading-[130%] text-black dark:text-white lg:text-base lg:leading-[140%] xl:text-2xl xl:leading-[140%] 2xl:text-2xl 2xl:leading-[140%]">
              The digital world offers limitless possibilities for turning an
              idea into a successful business. We are a digital marketing agency
              that opens these opportunities to you. With the help of marketing
              tools and smart technologies, UWP Digital connects customers with
              their favorite brands.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
});
