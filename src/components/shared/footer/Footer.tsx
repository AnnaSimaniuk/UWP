import { component$, useSignal } from "@builder.io/qwik";
import { Speak } from "qwik-speak";
import { Up } from "~/components/shared/footer/up/Up";
import { FooterNav } from "~/components/shared/footer/nav/FooterNav";

const FooterApp = component$(() => {
  const footerClass = useSignal(true);
  return (
    <footer
      class={`shrink-0 bg-light pt-[40px] pb-4 dark:bg-dark lg:pt-[32px] lg:pb-[21px] xl:pt-[34px] xl:pb-[28px] ${
        footerClass.value ? "footer" : ""
      }`}
    >
      <div class="container sm:max-w-full lg:px-[30px] 3xl:max-w-[1920px] 3xl:px-[135px]">
        <Up />
        <FooterNav />
        <div class="flex flex-col items-center gap-[5px] pt-[22px] lg:flex-row lg:justify-center lg:gap-[31px] lg:pt-0 xl:gap-[40px]">
          <p class="text-xs font-medium leading-[22px] text-middleGrey transition ease-in xl:text-base">
            ©2023{" "}
            <a class="hover:text-main" href={"href"}>
              UWP Digital. All rights reserved.
            </a>
          </p>
          <div class="flex flex-row items-start gap-6 lg:gap-[31px] xl:gap-[40px]">
            <a
              class="text-xs font-medium leading-[22px] text-middleGrey transition ease-in hover:text-main xl:text-base"
              href={"href_terms_conditions"}
            >
              Terms & Conditions
            </a>
            <a
              class="text-xs font-medium leading-[22px] text-middleGrey transition ease-in hover:text-main xl:text-base"
              href={"href_privacy_policy"}
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
});
export const Footer = component$(() => (
  <Speak assets={["header"]}>
    <FooterApp />
  </Speak>
));
