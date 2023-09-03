import { component$, useSignal } from "@builder.io/qwik";
import { Speak } from "qwik-speak";

const FooterApp = component$(() => {
  const footerClass = useSignal(false);
  return (
    <footer
      class={`shrink-0 bg-light pt-[40px] pb-4 dark:bg-dark lg:pt-[32px] lg:pb-[21px] xl:pt-[34px] xl:pb-[28px] ${
        footerClass.value ? "footer" : ""
      }`}
    >
      <div class="container sm:max-w-full lg:px-[30px] 3xl:max-w-[1920px] 3xl:px-[135px]">
        {up}
        {nav}
        <div class="flex flex-col items-center gap-[5px] pt-[22px] lg:flex-row lg:justify-center lg:gap-[31px] lg:pt-0 xl:gap-[40px]">
          <p class="text-xs font-medium leading-[22px] text-middleGrey transition ease-in xl:text-base">
            ©{year}{" "}
            <a class="hover:text-main" href="{href}">
              {text}
            </a>
          </p>
          <div class="flex flex-row items-start gap-6 lg:gap-[31px] xl:gap-[40px]">
            <a
              class="text-xs font-medium leading-[22px] text-middleGrey transition ease-in hover:text-main xl:text-base"
              href="{href_terms_conditions}"
            >
              {text_terms_conditions}
            </a>
            <a
              class="text-xs font-medium leading-[22px] text-middleGrey transition ease-in hover:text-main xl:text-base"
              href="{href_privacy_policy}"
            >
              {text_privacy_policy}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
});
export const Footer = component$(() => (
  // <Speak assets={["footer"]}>
  <FooterApp />
  // </Speak>
));
