import { component$ } from "@builder.io/qwik";
import { useHref } from "~/hooks/useHref";
import { ButtonSticky } from "~/components/ui/button/ButtonSticky";
import { useTranslate } from "qwik-speak";
import { AboutTeamItem } from "./about-team-item/AboutTeamItem";

const teamMembers = [
  {
    name: "Serhii",
    position: "Ceo & founder",
    alt: "Serhii Picture",
    src: "https://uwp.zoometr.com/images/serhii-founder.png",
  },
  {
    name: "Daniella",
    position: "Project manager",
    alt: "Daniella Picture",
    src: "https://uwp.zoometr.com/images/daniella-project-manager.png",
  },
];

export const AboutTeam = component$(() => {
  const t = useTranslate();
  const { href } = useHref(t("about_us.btn_href"));
  return (
    <section class="about bg-dark text-light dark:bg-dark dark:text-light">
      <div class="container max-w-none pt-[36px] pb-[120px] lg:px-[30px] lg:pt-3 lg:pb-[60px] xl:pt-[24px] xl:pb-[213px] 3xl:max-w-[1920px] 3xl:px-[135px]">
        <h2 class="mb-[29px] text-4xl font-bold uppercase leading-[1.1] lg:text-[60px] xl:text-[min(7vw,120px)]">
          {t("about_section_team.title")}
        </h2>
        <div class="border-t border-middleGrey xl:flex">
          <div class="pb-[64px] lg:pb-[50px] xl:w-[21vw] xl:min-w-[21vw] xl:border-r xl:border-middleGrey xl:pb-0 xl:pt-[68px] xl:pr-[min(1%,50px)]">
            <p class="mb-[40px] pt-[30px] leading-[1.35] lg:max-w-[500px] xl:mb-[55px] xl:border-t-0 xl:pt-0">
              {t("about_section_team.description")}
            </p>
            <ButtonSticky text={t("about_section_team.btn_text")} href={href} />
          </div>
          <div>
            <ul class="mb-[50px] grid grid-cols-2 lg:mb-8 lg:grid-cols-[calc(100%/3-12px),calc(100%/3+12px),calc(100%/3-12px)] xl:mb-[42px] xl:grid-cols-[calc(100%/3-28px),calc(100%/3+28px),calc(100%/3-28px)] xl:pt-[68px] xl:pl-[max(5vw,60px)] 2xl:pl-[min(8vw,153px)]">
              {teamMembers.map((item) => (
                <AboutTeamItem {...item} key={item.src} />
              ))}
            </ul>
            <p class="text-xl font-bold uppercase xl:pl-[min(8vw,153px)] xl:text-[32px] xl:leading-[1.5]">
              {t("about_section_team.text_1")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
});
