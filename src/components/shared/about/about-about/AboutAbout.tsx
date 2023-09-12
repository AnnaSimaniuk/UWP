import { component$ } from "@builder.io/qwik";
import { useTranslate } from "qwik-speak";
import { AboutImage } from "~/assets/icons";
import { AboutCardValue } from "../about-card-value/AboutCardValue";
import { Breadcrumb } from "../../../ui/breadcrumb/Breadcrumd";

export const AboutAbout = component$(() => {
  const t = useTranslate();

  const breadcrumbItems = [
    { text: "Home", href: "/" },
    { text: t("about_us.title") },
  ];

  return (
    <section class="about bg-dark text-light dark:bg-dark dark:text-light">
      <div class="container max-w-full lg:px-[30px] lg:pb-[80px] xl:pb-[105px] 3xl:max-w-[1920px] 3xl:px-[135px]">
        <Breadcrumb items={breadcrumbItems} currentPage={"about-us"} />
        <div class="mb-10 flex flex-wrap items-center justify-between pt-8 lg:mb-8 lg:pt-8 xl:mb-[57px] xl:justify-start xl:pt-[20px]">
          <h1 class="mb-7 text-4xl font-bold uppercase leading-[1.1] lg:mb-0 lg:text-[60px] xl:text-[min(7vw,120px)]">
            {t("about_us.title")}
          </h1>
          <div class="about-page__videoshow xl:mx-auto">
            <AboutImage class="h-auto w-[273px] xl:w-[min(31vw,593px)]" />
          </div>
        </div>
        <div class="border-t border-middleGrey xl:flex">
          <h2 class="mb-7 border-middleGrey pt-5 font-bold uppercase leading-[1.4] lg:pt-8 xl:mb-0 xl:w-[21vw] xl:min-w-[21vw] xl:border-r xl:pt-[50px] xl:pr-[min(1%,50px)] xl:text-[clamp(16px,1.3vw,24px)]">
            {t("about_us.description")}
          </h2>
          <div class="xl:pl-[max(5vw,60px)] xl:pt-[50px] 2xl:pl-[min(8vw,153px)]">
            <p class="mb-[26px] leading-[1.35] lg:mb-[24px] xl:mb-[48px] xl:text-[min(2.3vw,32px)] xl:leading-[1.4]">
              {t("about_us.p_1")}
            </p>
            <p class="mb-[26px] leading-[1.35] lg:mb-[30px] xl:mb-[48px] xl:text-[min(2.3vw,32px)] xl:leading-[1.4]">
              {t("about_us.p_2")}
            </p>
            <p class="mb-[62px] leading-[1.35] lg:mb-[40px] xl:mb-[108px] xl:text-[min(2.3vw,32px)] xl:leading-[1.4]">
              {t("about_us.p_3")}
            </p>
            <div class="flex flex-col">
              <ul class="flex flex-row gap-[5vw] lg:w-[47.5%] lg:self-center xl:w-[62%] xl:self-start">
                <AboutCardValue
                  title={t("about_us.achievements.text_1")}
                  value={t("about_us.achievements.text_2")}
                />
                <AboutCardValue
                  title={t("about_us.achievements.text_3")}
                  value={t("about_us.achievements.text_4")}
                />
              </ul>
              <ul class="flex flex-row gap-[5vw] lg:w-[47.5%] lg:self-end xl:w-[62%]">
                <AboutCardValue
                  title={t("about_us.achievements.text_5")}
                  value={t("about_us.achievements.text_6")}
                />
                <AboutCardValue
                  title={t("about_us.achievements.text_7")}
                  value={t("about_us.achievements.text_8")}
                />
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});
