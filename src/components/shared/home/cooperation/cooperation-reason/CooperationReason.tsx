import { component$ } from "@builder.io/qwik";
import { ICooperation } from "~/types/ICooperation";

interface CooperationReasonProps extends ICooperation {
  index: number;
}
export const CooperationReason = component$((props: CooperationReasonProps) => {
  const { title, description, index } = props;
  return (
    <li
      class={`border-t-[1px] border-t-middleGrey lg:basis-[50%] lg:pr-[30px] xl:basis-[53%] xl:px-[50px] ${
        index % 2 === 0
          ? "lg:border-r-[1px] lg:border-r-middleGrey"
          : "lg:pl-[30px]"
      }`}
    >
      <h4 class="mb-4 pt-[30px] text-base font-bold leading-5 text-white lg:mb-[15px] lg:text-lg lg:leading-[23px] xl:pt-[52px] xl:text-2xl">
        {title}
      </h4>
      <p class="mb-[30px] text-sm font-medium leading-5 text-white lg:mb-[81px] lg:text-base xl:mb-[74px] xl:text-base">
        {description}
      </p>
    </li>
  );
});
