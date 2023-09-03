import { component$ } from "@builder.io/qwik";

interface DiscussSlideProps {
  heading: string;
  subtitle: string;
  text: string;
  text_1: string;
  text_2: string;
  text_3: string;
  text_4: string;
  srcWebp: string;
  srcJpg: string;
  src: string;
  alt: string;
}

export const DiscussSlide = component$((props: DiscussSlideProps) => {
  const {
    src,
    alt,
    srcJpg,
    srcWebp,
    subtitle,
    heading,
    text,
    text_1,
    text_4,
    text_2,
    text_3,
  } = props;
  return (
    <div class="swiper-slide">
      <div class="relative float-left w-full">
        <div class="border-t-[1px] border-middleGrey pb-[76px] lg:flex lg:pb-[88px] xl:gap-[40px] xl:border-t-0 xl:pl-[50px] 2xl:gap-[63px] 2xl:pl-[152px]">
          <div class="relative mt-[34px] mb-9 flex lg:mt-10 lg:mb-0 lg:basis-[320px] xl:mt-[50px]">
            <div class="relative h-fit">
              <picture>
                <source type="image/webp" srcSet={srcWebp} />
                <source type="image/jpg" srcSet={srcJpg} />
                <img
                  alt={alt}
                  class="lazyload max-w-[150px] sm:max-w-[240px] xl:max-w-[390px]"
                  decoding="async"
                  loading="lazy"
                  src={src}
                  width="390"
                  height="520"
                />
              </picture>
              <button
                aria-label="button"
                class="swiper-next-slide group absolute bottom-0 left-0 flex h-[39px] w-[39px] translate-y-1/2 items-center justify-center rounded-full border-0 bg-light p-0 text-center text-white hover:text-main lg:left-0 lg:h-[58px] lg:w-[58px] lg:rounded-full xl:h-[72px] xl:w-[72px]"
                type="button"
              >
                <svg
                  class="rounded-full"
                  fill="none"
                  viewBox="0 0 39 39"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    class="fill-light"
                    height="38"
                    rx="19"
                    width="38"
                    x=".5"
                    y=".5"
                  />
                  <path
                    class="fill-dark transition-all ease-out"
                    clip-rule="evenodd"
                    d="m24.511 18.374-6.04-6.04 1.592-1.593 8.76 8.759-8.76 8.76-1.593-1.593 6.041-6.04H11.304v-2.253H24.51z"
                  />
                  <rect
                    class="h-[38px] w-[38px]"
                    height="38"
                    rx="19"
                    stroke="currentColor"
                    width="38"
                    x=".5"
                    y=".5"
                  />
                </svg>
              </button>
            </div>
            <div class="mt-2 ml-5 lg:hidden">
              <svg
                fill="none"
                height="36"
                width="36"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect fill="#F8F8F8" height="36" rx="18" width="36" />
                <g clip-path="url(#clip0_2259_43482)">
                  <path
                    d="M19.155 17.405v-6.294H25v9.42c0 1.937-.7 3.39-2.098 4.358h-2.847a5.732 5.732 0 0 0 1.498-1.856c.4-.7.6-1.534.6-2.502v-3.125h-2.998zM11 11.111v6.294h2.997v3.126c0 .968-.2 1.802-.599 2.502a5.73 5.73 0 0 1-1.499 1.856h2.848c1.398-.969 2.098-2.421 2.098-4.358v-9.42H11z"
                    fill="#171717"
                  />
                </g>
              </svg>
              <h3 class="my-[10px] text-xl font-medium leading-5 text-light lg:text-2xl lg:leading-[110%]">
                {heading}
              </h3>
              <p class="text-xs font-medium leading-4 tracking-[0.14px] text-middleGrey">
                {subtitle}
              </p>
            </div>
          </div>
          <div class="lg:mt-10 lg:flex lg:flex-col">
            <div class="hidden lg:mb-[30px] lg:block">
              <div class="items-end lg:flex lg:gap-7 xl:gap-[29px]">
                <svg
                  class="h-[36px] w-[36px] rounded-full lg:h-[64px] lg:w-[64px]"
                  fill="none"
                  viewBox="0 0 36 36"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    class="h-[36px] w-[36px]"
                    fill="#F8F8F8"
                    height="36"
                    rx="18"
                    width="36"
                  />
                  <g clip-path="url(#clip0_2259_43482)">
                    <path
                      d="M19.155 17.405v-6.294H25v9.42c0 1.937-.7 3.39-2.098 4.358h-2.847a5.732 5.732 0 0 0 1.498-1.856c.4-.7.6-1.534.6-2.502v-3.125h-2.998zM11 11.111v6.294h2.997v3.126c0 .968-.2 1.802-.599 2.502a5.73 5.73 0 0 1-1.499 1.856h2.848c1.398-.969 2.098-2.421 2.098-4.358v-9.42H11z"
                      fill="#171717"
                    />
                  </g>
                </svg>
                <div class="mb-0">
                  <h3 class="my-[10px] text-xl font-medium leading-5 text-light lg:text-2xl lg:leading-[110%] xl:text-[32px] xl:leading-[35px]">
                    {heading}
                  </h3>
                  <p class="text-xs font-medium leading-4 tracking-[0.14px] text-middleGrey lg:tracking-[1.14px] xl:text-base xl:leading-[19px]">
                    {subtitle}
                  </p>
                </div>
              </div>
            </div>
            <div class="lg:grow 2xl:grid 2xl:gap-[115px]">
              <p class="mb-[99px] text-base font-medium leading-[139%] text-light lg:mb-[53px] lg:max-w-[456px] 2xl:max-w-[637px] 2xl:text-2xl 2xl:leading-[34px]">
                {text}
              </p>
            </div>
            <div class="flex gap-[35px] lg:gap-[60px]">
              <div class="flex items-center gap-2">
                <div class="text-[28px] font-bold leading-[1.2] tracking-[2.56px] text-[#FF304D] xl:text-[38px] 2xl:text-[64px]">
                  {text_1}
                </div>
                <div class="text-[10px] font-medium leading-[1.2] text-light xl:text-base">
                  {text_2}
                </div>
              </div>
              <div class="flex items-center gap-2">
                <div class="text-[28px] font-bold leading-[1.2] tracking-[2.56px] text-[#FF304D] xl:text-[38px] 2xl:text-[64px]">
                  {text_3}
                </div>
                <div class="text-[10px] font-medium leading-[1.2] text-light xl:text-base">
                  {text_4}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
