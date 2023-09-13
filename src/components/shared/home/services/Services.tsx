import { component$, useStyles$ } from "@builder.io/qwik";
import styles from "./Services.css?inline";
import { ButtonSticky } from "~/components/ui/button/ButtonSticky";
import {
  ServicesCardLeft,
  ServicesCardRight,
} from "~/components/shared/home/services/services-card/ServicesCard";
import { useMediaQuery } from "~/hooks/useMediaQuery";
import { useTranslate } from "qwik-speak";
import { useHref } from "~/hooks/useHref";
import { useServicesData } from "~/routes/[...lang]";

export const Services = component$(() => {
  useStyles$(styles);
  const isLgScreen = useMediaQuery("lg");
  const t = useTranslate();
  const { href } = useHref(t("services.btn_href"));
  const data = useServicesData();

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
              {data.value.map((item, index) => {
                if (index % 2 === 0) {
                  return (
                    <ServicesCardLeft
                      {...item}
                      key={item.name}
                      isLgScreen={isLgScreen}
                      index={index}
                    />
                  );
                }
              })}
            </div>
            <div class="lg:basis-[50%] lg:border-l-[1px] lg:border-l-middleGrey lg:mt-[90px]">
              {data.value.map((item, index) => {
                if (index % 2 !== 0) {
                  return (
                    <ServicesCardRight
                      {...item}
                      key={item.name}
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
