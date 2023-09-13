import { component$ } from "@builder.io/qwik";

interface AboutCardValueProps {
  title: string;
  value: string;
}

export const AboutCardValue = component$((props: AboutCardValueProps) => {
  const { title, value } = props;

  return (
    <li class="w-full border-t border-middleGrey pb-[55px] pt-[30px] lg:pt-9 lg:pb-[68px] xl:pt-[33px]">
      <div class="about-page__grid-card">
        <p class="mb-[15px] text-sm leading-[1.4] xl:text-base xl:leading-[1.4]">
          {title}
        </p>
        <p class="text-4xl font-bold leading-[1.1] xl:text-[min(5vw,90px)]">
          {value}
        </p>
      </div>
    </li>
  );
});
