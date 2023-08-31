import { component$, Slot } from "@builder.io/qwik";

interface DropdownProps {
  classWrapper?: string;
  classContent?: string;
}

export const DropdownHover = component$((props: DropdownProps) => {
  return (
    <div class={`group/item relative ${props.classWrapper}`}>
      <Slot name={"trigger"} />
      <div class="invisible z-10 opacity-0 transition-all group-hover/item:visible group-hover/item:opacity-100">
        <div class="absolute left-0 top-[20px] flex justify-center pt-[34px]">
          <div
            class={`dropdown__wrapper flex min-w-max cursor-default rounded-[10px] bg-light px-6 py-[30px] text-dark shadow-2xl ${props.classContent}`}
          >
            <Slot />
          </div>
        </div>
      </div>
    </div>
  );
});
