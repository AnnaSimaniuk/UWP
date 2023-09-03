import {
  component$,
  HTMLAttributes,
  useContext,
  useTask$,
} from "@builder.io/qwik";
import { ModalProvider } from "~/context";
import { Link } from "@builder.io/qwik-city";

interface PopupProps extends HTMLAttributes<HTMLDivElement> {
  heading: string;
  subtitle: string;
  href: string;
  text: string;
  open: boolean;
}

export const Popup = component$((props: PopupProps) => {
  const { heading, subtitle, text, href, open } = props;
  const { lockWrapper, unlockWrapper } = useContext(ModalProvider);

  useTask$(async () => {
    if (open) {
      await lockWrapper();
    } else {
      await unlockWrapper();
    }
  });
  return (
    <>
      {open && (
        <div
          id="popupForms"
          class="flex lazyload absolute right-0 left-0 top-[var(--header-h)] z-[10] h-screen min-h-max w-full flex-col overflow-y-auto bg-light px-5 text-center dark:bg-dark md:top-[var(--header-h-lg)] lg:top-[var(--header-h-xl)]"
        >
          <div class="grow"></div>
          <div class="mb-[27px] flex flex-col items-center xl:mb-5">
            <svg
              class="h-[66px] w-[66px] xl:h-[84px] xl:w-[84px]"
              viewBox="0 0 68 69"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="34"
                cy="34.408"
                r="33"
                stroke="#FF304D"
                stroke-width="2"
              />
              <path
                d="M20.643 35.096 31.02 45.408l21.836-22"
                stroke="#FF304D"
                stroke-width="2"
              />
            </svg>
          </div>
          <h3 class="mb-[27px] text-4xl font-bold uppercase text-dark dark:text-white lg:text-[42px] lg:leading-[110%] xl:mb-[35px] xl:text-[64px] xl:leading-[70px]">
            {heading}
          </h3>
          <div class="flex justify-center">
            <p class="mb-[47px] text-base font-medium leading-[22px] tracking-[1px] text-middleGrey lg:mb-[51px] lg:w-[488px] xl:mb-[62px] xl:w-[560px] xl:text-xl">
              {subtitle}
            </p>
          </div>
          <div class="mx-auto min-h-[250px]">
            <Link
              id="btnClosePopupForms"
              href={href}
              class="big-red-btn relative"
              aria-label={text}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M15.854 4.008H2.2v-3.6H22v19.8h-3.6V6.554L3.473 21.48.927 18.935 15.855 4.008z"
                />
              </svg>
              <span class="mb-5">{text}</span>
            </Link>
          </div>
          <div class="grow"></div>
        </div>
      )}
    </>
  );
});
