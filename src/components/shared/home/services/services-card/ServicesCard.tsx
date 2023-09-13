import { component$, useSignal, useStyles$, useTask$ } from "@builder.io/qwik";
import styles from "./ServiceCard.css?inline";
import {
  ServicesCardPicture,
  ServicesCardPictureMobile,
} from "~/components/shared/home/services/services-card/services-card-picture/ServicesCardPicture";
import { ArrowCardIcon } from "~/assets/icons/ArrowCardIcon";
import { Link, useNavigate } from "@builder.io/qwik-city";
import { IService } from "~/types/IService";
import { useHref } from "~/hooks/useHref";

interface ServicesCardProps extends IService {
  isLgScreen: boolean;
  index?: number;
}

export const ServicesCardRight = component$((props: ServicesCardProps) => {
  useStyles$(styles);
  const { name, index, image, short_description, isLgScreen } = props;
  const title = useSignal(false);
  const content = useSignal(false);
  const nav = useNavigate();
  const { href } = useHref(props.href);

  return (
    <div
      class={`title group/card pointer-events-none pt-[19px] ${
        !isLgScreen && title.value ? "t_active" : ""
      }`}
    >
      <Link aria-label={name} class="lg:pointer-events-auto" href={href}>
        <div class="relative hidden lg:mb-[20px] lg:block lg:h-[216px] lg:w-[216px] lg:rounded-full lg:bg-[#E0E0E0] dark:lg:bg-[#474747] xl:mb-[30px] 2xl:h-[355px] 2xl:w-[355px] lg:ml-[75px] xl:ml-[120px]">
          <div class="absolute mx-[50px] mb-[40px] hidden transition-all ease-out hover:skew-y-2 hover:scale-105 lg:top-[50%] lg:left-[50%] lg:mx-0 lg:ml-0 lg:block lg:w-[124%] lg:translate-x-[-56%] lg:translate-y-[-46%]">
            <ServicesCardPicture alt={name} src={image} />
          </div>
        </div>
      </Link>
      <a
        aria-label={name}
        preventdefault:click
        onClick$={() => {
          if (isLgScreen) {
            nav(href);
          } else {
            title.value = !title.value;
            content.value = !content.value;
          }
        }}
        class="lg:border-b-[1px] lg:border-b-middleGrey pointer-events-none relative block lg:pointer-events-auto"
        href={href}
      >
        <h3 class="btn_key border-b-[1px] border-b-middleGrey text__hover-red translate-underline__hover-line__white pointer-events-auto mb-0 pr-[50px] pb-[17px] text-[19px] font-bold uppercase sm:text-[24px] lg:border-b-0 lg:capitalize lg:pl-[29px] lg:pb-[27px] xl:pt-[8px] xl:pb-[40px] xl:pl-[50px] 2xl:text-[42px] 2xl:leading-[50px]">
          {name}
        </h3>
        <div class="absolute top-[calc(50%-17px)] right-[0px] mt-[-14px] rounded-full p-[13.5px] transition-all ease-in group-hover/card:bg-main lg:top-0 lg:right-[10px] lg:mt-[-16px] lg:p-[23px] xl:top-[-6px] xl:right-[10px] xl:p-[26px] 2xl:top-[-8px] 2xl:p-8">
          <ArrowCardIcon />
        </div>
      </a>
      <div
        class={`content pointer-events-none mb-[19px] lg:block xl:flex xl:flex-col xl:justify-center xl:pl-[50px] lg:pl-[29px] ${
          !isLgScreen && content.value ? "c_active" : "hidden"
        }`}
      >
        <p class="pt-5 pb-10 text-base font-medium leading-[22px] text-dark dark:text-white lg:pt-[32px] xl:pt-[40px] xl:leading-[150%]">
          {short_description}
        </p>
        <div class="pointer-events-auto relative mx-auto mb-[39px] h-[216px] w-[216px] rounded-full bg-[#E0E0E0] dark:bg-[#474747] lg:hidden">
          <Link
            aria-label="{heading}"
            class="absolute top-[50%] left-[50%] mx-[50px] ml-0 w-[116%] translate-x-[-50%] translate-y-[-50%] transition-all ease-out hover:skew-y-2 hover:scale-105"
            href={href}
          >
            <ServicesCardPictureMobile alt={name} src={image} />
          </Link>
        </div>
        <Link
          class="btn__transparent link-oside__red pointer-events-auto mt-5 dark:text-white lg:hidden xl:mt-10"
          href={href}
        >
          {name}
        </Link>
      </div>
    </div>
  );
});

export const ServicesCardLeft = component$((props: ServicesCardProps) => {
  const { name, index, image, short_description, isLgScreen } = props;
  const title = useSignal(false);
  const content = useSignal(false);
  const nav = useNavigate();
  const { href } = useHref(props.href);

  useTask$(() => {
    if (index === 1) {
      title.value = true;
      content.value = true;
    }
  });

  return (
    <div
      class={`title group/card pointer-events-none pt-[19px] lg:py-[30px] ${
        !isLgScreen && title.value ? "t_active" : ""
      }`}
    >
      <Link aria-label={name} class="lg:pointer-events-auto" href={href}>
        <div class="relative hidden lg:mb-[20px] lg:block lg:h-[216px] lg:w-[216px] lg:rounded-full lg:bg-[#E0E0E0] dark:lg:bg-[#474747] xl:mb-[30px] 2xl:h-[355px] 2xl:w-[355px] lg:ml-[35px] xl:ml-[75px]">
          <div class="absolute mx-[50px] mb-[40px] hidden transition-all ease-out hover:skew-y-2 hover:scale-105 lg:top-[50%] lg:left-[50%] lg:mx-0 lg:ml-0 lg:block lg:w-[124%] lg:translate-x-[-56%] lg:translate-y-[-46%]">
            <ServicesCardPicture alt={name} src={image} />
          </div>
        </div>
      </Link>
      <a
        aria-label={name}
        class="lg:border-b-[1px] lg:border-b-middleGrey pointer-events-none relative block lg:pointer-events-auto xl:border-b-0"
        href={href}
        preventdefault:click
        onClick$={() => {
          if (isLgScreen) {
            nav(href);
          } else {
            title.value = !title.value;
            content.value = !content.value;
          }
        }}
      >
        <h3 class="btn_key border-b-[1px] border-b-middleGrey text__hover-red translate-underline__hover-line__white pointer-events-auto mb-0 pr-[50px] pb-[17px] text-[19px] font-bold uppercase sm:text-[24px] lg:border-b-0 lg:capitalize lg:pb-[27px] xl:pb-[40px] 2xl:text-[42px] 2xl:leading-[50px]">
          {name}
        </h3>
        <div class="absolute top-[calc(50%-17px)] right-[0px] mt-[-14px] rounded-full p-[13.5px] transition-all ease-in group-hover/card:bg-main lg:top-0 lg:right-[10px] lg:mt-[-16px] lg:p-[23px] xl:top-[-6px] xl:right-[10px] xl:p-[26px] 2xl:top-[-8px] 2xl:p-8">
          <ArrowCardIcon />
        </div>
      </a>
      <div
        class={`content xl:border-t-[1px] xl:border-t-middleGrey pointer-events-none mb-[19px] lg:block xl:flex xl:flex-col xl:justify-center xl:pr-[50px] lg:pr-[30px] ${
          !isLgScreen && content.value ? "c_active" : "hidden"
        }`}
      >
        <p class="pt-5 pb-10 text-base font-medium leading-[22px] text-dark dark:text-white lg:pt-[32px] xl:pt-[40px] xl:leading-[150%]">
          {short_description}
        </p>
        <div class="pointer-events-auto relative mx-auto mb-[39px] h-[216px] w-[216px] rounded-full bg-[#E0E0E0] dark:bg-[#474747] lg:hidden">
          <Link
            aria-label={name}
            class="absolute top-[50%] left-[50%] mx-[50px] ml-0 w-[116%] translate-x-[-50%] translate-y-[-50%] transition-all ease-out hover:skew-y-2 hover:scale-105"
            href={href}
          >
            <ServicesCardPictureMobile alt={name} src={image} />
          </Link>
        </div>
        <Link
          class="btn__transparent link-oside__red pointer-events-auto mt-5 dark:text-white lg:hidden xl:mt-10"
          href={href}
        >
          {name}
        </Link>
      </div>
    </div>
  );
});
