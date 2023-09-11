import { component$ } from "@builder.io/qwik";
import { useTranslate } from "qwik-speak";
import { AboutImage } from "~/assets/icons";
import { AboutCardValue } from "../about-card-value/AboutCardValue";

const aboutUsData = {
  heading: "About Us",
  subtitle: "WE WILL TRANSFORM YOUR THOUGHTS ABOUT DIGITAL MARKETING",
  text: [
    "We are UWP Digital — an international company with Ukrainian roots. Our team consists of the best marketers in different parts of the world, who are united by one idea — the development of marketing with the help of smart technologies.",
    "We provide a full range of business promotion services: from web development and conversion optimization to developing marketing strategies. Our mission is to observe the partnership format of cooperation with each client. It means that we share your values, and ideas and turn them into a stable income. For the successful implementation of the project, we analyze market changes, budgets, and your business goals.",
    "That’s why UWP Digital is your trusted digital partner in the marketing world.",
  ],
};

export const AboutAbout = component$(() => {
  const t = useTranslate();

  return (
    <section class="about bg-dark text-light dark:bg-dark dark:text-light">
      <div class="container max-w-full lg:px-[30px] lg:pb-[80px] xl:pb-[105px] 3xl:max-w-[1920px] 3xl:px-[135px]">
        {/* Здесь можно добавить breadcrumb*/}
        <div class="mb-10 flex flex-wrap items-center justify-between pt-8 lg:mb-8 lg:pt-8 xl:mb-[57px] xl:justify-start xl:pt-[20px]">
          <h1 class="mb-7 text-4xl font-bold uppercase leading-[1.1] lg:mb-0 lg:text-[60px] xl:text-[min(7vw,120px)]">
            {aboutUsData.heading}
            {/* {t("about.heading")} */}
          </h1>
          <div class="about-page__videoshow xl:mx-auto">
            <AboutImage class="h-auto w-[273px] xl:w-[min(31vw,593px)]" />
          </div>
        </div>
        <div class="border-t border-middleGrey xl:flex">
          <h2 class="mb-7 border-middleGrey pt-5 font-bold uppercase leading-[1.4] lg:pt-8 xl:mb-0 xl:w-[21vw] xl:min-w-[21vw] xl:border-r xl:pt-[50px] xl:pr-[min(1%,50px)] xl:text-[clamp(16px,1.3vw,24px)]">
            {aboutUsData.subtitle}
            {/* {t("about.subtitle")} */}
          </h2>
          <div class="xl:pl-[max(5vw,60px)] xl:pt-[50px] 2xl:pl-[min(8vw,153px)]">
            {aboutUsData.text.map((paragraph, index) => (
              <p
                key={index}
                class="mb-[26px] leading-[1.35] lg:mb-[24px] xl:mb-[48px] xl:text-[min(2.3vw,32px)] xl:leading-[1.4]"
              >
                {paragraph}
                {/* {t("about.paragraph")} */}
              </p>
            ))}
            <div class="flex flex-col">
              <ul class="flex flex-row gap-[5vw] lg:w-[47.5%] lg:self-center xl:w-[62%] xl:self-start">
                <AboutCardValue title="projects" value="300+" />
                <AboutCardValue title="years in marketing" value="7+" />
              </ul>
              <ul class="flex flex-row gap-[5vw] lg:w-[47.5%] lg:self-end xl:w-[62%]">
                <AboutCardValue title="employees" value="50+" />
                <AboutCardValue title="countries" value="4+" />
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});