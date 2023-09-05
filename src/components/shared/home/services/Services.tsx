import { component$ } from "@builder.io/qwik";
import { ButtonSticky } from "~/components/ui/button/ButtonSticky";
import {
  ServicesCardLeft,
  ServicesCardRight,
} from "~/components/shared/home/services/services-card/ServicesCard";
import { useMediaQuery } from "~/hooks/useMediaQuery";
import { useTranslate } from "qwik-speak";
import { useHref } from "~/hooks/useHref";

const data = [
  {
    heading: "Web development",
    href: "/services/web-development",
    srcSetWebp:
      "https://uwp.digital/s/img/services/digital-marketing-small.webp",
    srcSetPng:
      "https://uwp.digital/s/img/services/digital-marketing-small.webp",
    src: "https://uwp.digital/s/img/services/digital-marketing-small.webp",
    alt: "Web development",
    srcSetWebpMobile:
      "https://uwp.digital/s/img/services/digital-marketing-small.webp",
    srcSetPngMobile:
      "https://uwp.digital/s/img/services/digital-marketing-small.webp",
    srcMobile:
      "https://uwp.digital/s/img/services/digital-marketing-small.webp",
    altMobile: "Web development",
    text: "We create websites and web applications of any complexity, from simple landing pages to complex web services and online stores.",
    btnText: "Web development",
  },
  {
    heading: "Mobile development",
    href: "/services/mobile-development",
    srcSetWebp: "https://uwp.digital/s/img/services/smm-small.webp",
    srcSetPng: "https://uwp.digital/s/img/services/smm-small.webp",
    src: "https://uwp.digital/s/img/services/smm-small.webp",
    alt: "Mobile development",
    srcSetWebpMobile: "https://uwp.digital/s/img/services/smm-small.webp",
    srcSetPngMobile: "https://uwp.digital/s/img/services/smm-small.webp",
    srcMobile: "https://uwp.digital/s/img/services/smm-small.webp",
    altMobile: "Mobile development",
    text: "We develop mobile applications for iOS and Android. We create applications of any complexity, from simple applications to complex services.",
    btnText: "Mobile development",
  },
  {
    heading: "UI/UX design",
    href: "/services/ui-ux-design",
    srcSetWebp: "https://uwp.digital/s/img/services/seo-small.webp",
    srcSetPng: "https://uwp.digital/s/img/services/seo-small.webp",
    src: "https://uwp.digital/s/img/services/seo-small.webp",
    alt: "UI/UX design",
    srcSetWebpMobile: "https://uwp.digital/s/img/services/seo-small.webp",
    srcSetPngMobile: "https://uwp.digital/s/img/services/seo-small.webp",
    srcMobile: "https://uwp.digital/s/img/services/seo-small.webp",
    altMobile: "UI/UX design",
    text: "We create a unique design for your product. We develop a design concept, create a prototype, and design the interface.",
    btnText: "UI/UX design",
  },
  {
    heading: "Branding",
    href: "/services/branding",
    srcSetWebp:
      "https://uwp.digital/s/img/services/website-development-small.webp",
    srcSetPng:
      "https://uwp.digital/s/img/services/website-development-small.webp",
    src: "https://uwp.digital/s/img/services/website-development-small.webp",
    alt: "Branding",
    srcSetWebpMobile:
      "https://uwp.digital/s/img/services/website-development-small.webp",
    srcSetPngMobile:
      "https://uwp.digital/s/img/services/website-development-small.webp",
    srcMobile:
      "https://uwp.digital/s/img/services/website-development-small.webp",
    altMobile: "Branding",
    text: "We create a unique brand for your product. We develop a brand concept, create a logo, and design a corporate identity.",
    btnText: "Branding",
  },
];

export const Services = component$(() => {
  const isLgScreen = useMediaQuery("lg");
  const t = useTranslate();
  const { href } = useHref(t("services.btn_href"));
  return (
    <section
      class="services bg-light pt-[24px] pb-[44px] dark:bg-dark dark:text-white lg:pt-[2px] lg:pb-[111px] xl:pt-[31px] xl:pb-[182px]"
      id="services"
    >
      <div class="container sm:max-w-full lg:px-[30px] 3xl:max-w-[1920px] 3xl:px-[135px]">
        <h2 class="mb-[29px] text-4xl font-bold uppercase lg:mb-[39px] lg:text-[45px] lg:leading-[54px] xl:mb-[26px] xl:text-[50px] 2xl:mb-[73px] 2xl:text-[90px]">
          {t("services.title")}
        </h2>
        <p class="border-t-[1px] border-t-middleGrey pt-[31px] text-base font-medium leading-[137%] lg:mb-0 lg:pt-[40px] lg:leading-[140%] xl:hidden">
          {t("services.description")}
        </p>
        <div class="xl:border-t-[1px] xl:border-t-middleGrey xl:flex xl:flex-row-reverse xl:justify-between xl:gap-[28px] 2xl:gap-[48px]">
          <div
            class="lg:flex-col-2 lg:flex xl:w-full lg:pb-[38px]"
            id="servicesCardsWrp"
          >
            <div class="xl:border-l-[1px] xl:border-l-middleGrey lg:basis-[50%] xl:pl-[50px]">
              {data.map((item, index) => {
                if (index % 2 !== 0) {
                  return (
                    <ServicesCardLeft
                      {...item}
                      key={item.heading}
                      isLgScreen={isLgScreen}
                      index={index}
                    />
                  );
                }
              })}
            </div>
            <div class="lg:basis-[50%] lg:border-l-[1px] lg:border-l-middleGrey lg:mt-[90px]">
              {data.map((item, index) => {
                if (index % 2 === 0) {
                  return (
                    <ServicesCardRight
                      {...item}
                      key={item.heading}
                      isLgScreen={isLgScreen}
                      index={index}
                    />
                  );
                }
              })}
            </div>
          </div>
          <div class="xl:mt-0 xl:max-w-[287px] 2xl:max-w-[357px]">
            <p class="achievements__subtitle hidden xl:flex xl:pt-[27px] xl:pb-[33px] 2xl:pt-[50px] 2xl:pb-[51px]">
              {t("services.description")}
            </p>
            {isLgScreen && (
              <ButtonSticky text={t("services.btn_text")} href={href} />
            )}
          </div>
        </div>
      </div>
    </section>
  );
});
