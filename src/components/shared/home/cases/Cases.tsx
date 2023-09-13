import { component$, useStyles$ } from "@builder.io/qwik";
import styles from "./Cases.css?inline";
import { ButtonSticky } from "~/components/ui/button/ButtonSticky";
import {
  CaseCardLeft,
  CaseCardRight,
} from "~/components/shared/home/cases/case-card/CaseCard";
import { useTranslate } from "qwik-speak";
import { useHref } from "~/hooks/useHref";
import { useCasesData } from "~/routes/[...lang]";

export const Cases = component$(() => {
  useStyles$(styles);
  const t = useTranslate();
  const { href } = useHref(t("cases.btn_href"));
  const data = useCasesData();
  return (
    <section class="achievements bg-light pt-1 pb-[82px] dark:bg-dark lg:pb-[90px] xl:pb-[172px] xl:pt-10">
      <div class="container sm:max-w-full lg:px-[30px] 3xl:max-w-[1920px] 3xl:px-[135px]">
        <h2 class="achievements__title dark:text-white">{t("cases.title")}</h2>
        <p class="achievements__subtitle border-t-[1px] border-t-middleGrey border-b-[1px] border-b-middleGrey dark:text-white">
          {t("cases.description")}
        </p>
        <div class="wrapper_01 xl:flex xl:flex-row-reverse xl:justify-between xl:gap-[29px] 2xl:gap-[44px]">
          <div class="overflow-x-hidden">
            {data.value.map((item, index) => {
              if (index % 2 !== 0) {
                return (
                  <CaseCardRight {...item} key={item.name} index={index} />
                );
              } else {
                return <CaseCardLeft {...item} key={item.name} index={index} />;
              }
            })}
          </div>
          <div class="mt-[20px] lg:mt-0 xl:mt-0 xl:max-w-[287px] 2xl:max-w-[362px]">
            <p class="achievements__subtitle hidden xl:flex xl:pt-[31px] xl:pb-[53px] 2xl:pt-[50px] 2xl:pb-[39px]">
              {t("cases.description")}
            </p>
            <ButtonSticky text={t("cases.btn_text")} href={href} />
          </div>
        </div>
      </div>
    </section>
  );
});
