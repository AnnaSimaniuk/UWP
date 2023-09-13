import { component$, useStyles$ } from "@builder.io/qwik";
import styles from "./CaseCard.css?inline";

import { CaseCardPicture } from "~/components/shared/home/cases/case-card/case-card-picture/CaseCardPicture";
import { ArrowCardIcon } from "~/assets/icons";
import { Link } from "@builder.io/qwik-city";
import { useHref } from "~/hooks/useHref";
import { ICase } from "~/types/ICase";

interface CaseCardProps extends ICase {
  index: number;
}

export const CaseCardRight = component$((props: CaseCardProps) => {
  useStyles$(styles);
  const { name, short_description, category } = props;
  const { href } = useHref(props.href);

  return (
    <div
      class={`cards border__top flex flex-col pt-[30px] pb-[30px] lg:flex-row lg:pt-[25px] xl:py-0`}
    >
      <Link
        aria-label={name}
        class="group/card group/scale xl:border-l-[1px] xl:border-l-middleGrey xl:border-r-[1px] xl:border-r-middleGrey w-full lg:basis-1/2 xl:basis-[52%]"
        href={href}
      >
        <div class="relative mb-[29px] overflow-hidden lg:mb-0 xl:m-[50px]">
          <div class="absolute left-0 top-0 z-[1] h-full w-[80%] bg-gradient-to-r from-[rgba(0,0,0,0.64)]"></div>
          <CaseCardPicture {...props} />
        </div>
      </Link>
      <div class="cards-text__right lg:flex lg:basis-1/2 lg:flex-col lg:justify-between xl:basis-[48%] xl:py-[50px] xl:pl-[50px]">
        <div>
          <Link
            aria-label={name}
            class="cards__link group/text group xl:gap-[16px]"
            href={href}
          >
            <h3 class="cards__title transition ease-in group-hover/text:text-main pr-[10px]">
              {name}
            </h3>
            <div class="cards__btn top-[32px] right-[23px] mt-[-7px] rounded-full p-[13.5px] transition-all ease-in group-hover/text:bg-main lg:mt-[-16px] lg:p-[23px] xl:relative xl:top-[-6px] xl:right-[-2px] xl:p-[26px] 2xl:right-[-32px] 2xl:p-8">
              <ArrowCardIcon />
            </div>
          </Link>
          <div class="cards__text">
            <p>{short_description}</p>
          </div>
        </div>
        <div>
          <p class="cards__desc">{category}</p>
        </div>
      </div>
    </div>
  );
});

export const CaseCardLeft = component$((props: CaseCardProps) => {
  const { name, short_description, category, index } = props;
  const { href } = useHref(props.href);
  useStyles$(styles);
  return (
    <div
      class={`cards ${
        index === 0 ? "" : "border__top"
      } flex flex-col pt-[30px] pb-[30px] lg:flex-row-reverse lg:pt-[25px] xl:py-0`}
    >
      <Link
        aria-label={name}
        class="group/card group/scale w-full lg:flex lg:basis-1/2 lg:flex-col xl:basis-[48%]"
        href={href}
      >
        <div class="relative mb-[29px] overflow-hidden lg:mb-0 xl:my-[50px] xl:ml-[50px]">
          <div class="absolute left-0 top-0 z-[1] h-full w-[80%] bg-gradient-to-r from-[rgba(0,0,0,0.64)]"></div>
          <CaseCardPicture {...props} />
        </div>
      </Link>
      <div class="cards-text__left xl:border-l-[1px] xl:border-l-middleGrey xl:border-r-[1px] xl:border-r-middleGrey lg:flex lg:basis-1/2 lg:flex-col lg:justify-between xl:basis-[52%] xl:p-[50px]">
        <div>
          <Link
            aria-label={name}
            class="cards__link group/text group"
            href={href}
          >
            <h3 class="cards__title transition ease-in group-hover/text:text-main pr-[10px]">
              {name}
            </h3>
            <div class="cards__btn top-[32px] right-[23px] mt-[-7px] rounded-full p-[13.5px] transition-all ease-in group-hover/text:bg-main lg:mt-[-16px] lg:p-[23px] xl:relative xl:top-[-6px] xl:right-[-32px] xl:p-[26px] 2xl:top-[-8px] 2xl:p-8">
              <ArrowCardIcon />
            </div>
          </Link>
          <div class="cards__text">
            <p>{short_description}</p>
          </div>
        </div>
        <div>
          <p class="cards__desc">{category}</p>
        </div>
      </div>
    </div>
  );
});
