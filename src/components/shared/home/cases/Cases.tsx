import { component$ } from "@builder.io/qwik";
import { ButtonSticky } from "~/components/ui/button/ButtonSticky";
import {
  CaseCardLeft,
  CaseCardRight,
} from "~/components/shared/home/cases/case-card/CaseCard";

const cases = [
  {
    src: "https://uwp.digital/s/img/cases/next/case-11/marketing-services-online-casino-origin.jpg",
    alt: "case-1",
    before: "Before",
    text_1: "After",
    text_2: "After",
    text_3: "After",
    text_4: "After",
    heading: "Case 1",
    href: "/case-1",
    subtitle: "Case 1",
    text: "Case 1",
    srcSetWebp:
      "https://uwp.digital/s/img/cases/next/case-11/marketing-services-online-casino-origin.jpg",
    srcSetJpeg:
      "https://uwp.digital/s/img/cases/next/case-11/marketing-services-online-casino-origin.jpg",
  },
  {
    src: "https://uwp.digital/s/img/cases/next/case-10/beautystory-medium.jpg",
    alt: "case-2",
    before: "Before",
    text_1: "After",
    text_2: "After",
    text_3: "After",
    text_4: "After",
    heading: "Case 2",
    href: "/case-2",
    subtitle: "Case 2",
    text: "Case 2",
    srcSetWebp:
      "https://uwp.digital/s/img/cases/next/case-10/beautystory-medium.jpg",
    srcSetJpeg:
      "https://uwp.digital/s/img/cases/next/case-10/beautystory-medium.jpg",
  },
];

export const Cases = component$(() => {
  return (
    <section class="achievements bg-light pt-1 pb-[82px] dark:bg-dark lg:pb-[90px] xl:pb-[172px] xl:pt-10">
      <div class="container sm:max-w-full lg:px-[30px] 3xl:max-w-[1920px] 3xl:px-[135px]">
        <h2 class="achievements__title dark:text-white">OUR ACHIEVEMENTS</h2>
        <p class="achievements__subtitle border-t-[1px] border-t-middleGrey border-b-[1px] border-b-middleGrey dark:text-white">
          Whether you need to create a website, develop a UX UI design, conduct
          SEO optimization, develop a marketing strategy for your business, set
          up Google ads, and Facebook ads, or get more followers on Instagram —
          welcome to UWP Digital.
        </p>
        <div class="wrapper_01 xl:border-t-[1px] xl:border-t-middleGrey xl:flex xl:flex-row-reverse xl:justify-between xl:gap-[29px] 2xl:gap-[44px]">
          <div class="overflow-x-hidden">
            {cases.map((item, index) => {
              if (index % 2 !== 0) {
                return <CaseCardRight {...item} key={item.heading} />;
              } else {
                return <CaseCardLeft {...item} key={item.heading} />;
              }
            })}
          </div>
          <div class="mt-[20px] lg:mt-0 xl:mt-0 xl:max-w-[287px] 2xl:max-w-[362px]">
            <p class="achievements__subtitle hidden xl:flex xl:pt-[31px] xl:pb-[53px] 2xl:pt-[50px] 2xl:pb-[39px]">
              Whether you need to create a website, develop a UX UI design,
              conduct SEO optimization, develop a marketing strategy for your
              business, set up Google ads, and Facebook ads, or get more
              followers on Instagram — welcome to UWP Digital.
            </p>
            <ButtonSticky text="View all cases" href="/cases" />
          </div>
        </div>
      </div>
    </section>
  );
});
