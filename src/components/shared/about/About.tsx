import { component$, useStyles$ } from "@builder.io/qwik";
import styles from "./About.css?inline";
import { useTranslate } from "qwik-speak";
import { AboutImage } from "~/assets/icons";

const aboutUsData = {
  heading: "About Us",
  subtitle: "WE WILL TRANSFORM YOUR THOUGHTS ABOUT DIGITAL MARKETING",
  text: ["Paragraph 1", "Paragraph 2", "Paragraph 3"],
};

export const About = component$(() => {
  useStyles$(styles);
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
          </div>
        </div>
      </div>
    </section>
  );
});
