import { cva } from "class-variance-authority";
import { component$, QwikIntrinsicElements, Slot } from "@builder.io/qwik";
import type { VariantProps } from "class-variance-authority";

const chipVariants = cva("", {
  variants: {
    variant: {
      default:
        "whitespace-nowrap btn-hover__white border__rounded btn-hover__white relative cursor-pointer overflow-hidden pt-[6px] pb-[6px] pl-[15px] pr-[15px] text-xs font-medium text-white peer-checked:border-white peer-checked:bg-white peer-checked:text-black lg:text-[14px] lg:leading-[18px]",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

interface ChipProps extends VariantProps<typeof chipVariants> {
  attributes?: QwikIntrinsicElements["div"];
  className?: string;
  id?: string;
  label: string;
  onClick$?: () => void;
}

export const Chip = component$((props: ChipProps) => {
  const { onClick$, variant, attributes, label, className, ...otherProps } =
    props;
  return (
    <div class={`h-[29px] lg:h-[38px]`} {...attributes} onClick$={onClick$}>
      <input
        class="peer sr-only"
        id={label}
        name={label}
        type="checkbox"
        value={label}
      />
      <label class={chipVariants({ variant, className })} for={label}>
        {label}
      </label>
    </div>
  );
});
