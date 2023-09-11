import { component$ } from "@builder.io/qwik";

export const DiscussButtonNext = component$(() => {
  return (
    <div class="splide__arrows splide__arrows--ltr w-0 h-0 lg:top-[-185px] ">
      <button
        class="splide__arrow  splide__arrow--prev"
        type="button"
        aria-label="Previous slide"
        aria-controls="splide01-track"
      ></button>
      <button
        class="splide__arrow splide__arrow--next relative group  top-[-626px] sm:top-[-508px] lg:top-[-210px] xl:top-[475px] xl:left-[50px] 2xl:left-[152px] left-0 flex h-[39px] w-[39px] translate-y-1/2 items-center justify-center rounded-full border-0 bg-light p-0 text-center text-white hover:text-main lg:left-0 lg:h-[58px] lg:w-[58px] lg:rounded-full xl:h-[72px] xl:w-[72px]"
        type="button"
        aria-label="Previous slide"
        aria-controls="splide01-track"
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
  );
});
