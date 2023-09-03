import { $, component$, useOnDocument } from "@builder.io/qwik";

export const Up = component$(() => {
  useOnDocument(
    "click",
    $((ev) => {
      console.log(ev);
      //
      // document.body.scrollTop = 0;
      // document.documentElement.scrollTop = 0;
    }),
  );
  return (
    <div class="mb-[42px] flex justify-between">
      <span class="text-sm font-medium leading-[1.3] text-middleGrey">Up</span>
      <button
        aria-label="button up"
        class="flex items-center text-sm font-medium leading-[1.3] text-middleGrey transition-all hover:text-main active:text-main"
        id="upButton"
        type="button"
        onClick$={() => {}}
      >
        Up
        <svg
          class="ml-[6px]"
          height="15"
          viewBox="0 0 15 15"
          width="15"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clip-rule="evenodd"
            d="M7.99797 4.1301L12.8616 8.99369L14.0584 7.79689L7.00577 0.744298L0.423353 7.32672L1.70564 8.60901L6.24499 4.06966L6.59945 14.3491L8.35243 14.4095L7.99797 4.1301Z"
            fill="currentColor"
            fill-rule="evenodd"
          />
        </svg>
      </button>
    </div>
  );
});
