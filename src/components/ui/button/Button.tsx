import {
  component$,
  HTMLAttributes,
  QwikIntrinsicElements,
  Slot,
} from "@builder.io/qwik";
import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";

const buttonVariants = cva("inline-flex items-center relative justify-center", {
  variants: {
    variant: {
      default: "",
      submit:
        "btn__red w-full transition-all group-hover:border-white group-hover:bg-white group-hover:text-black group-active:text-main lg:w-auto",
      iconBorder:
        "border__rounded group right-5 ml-auto flex rounded-full pt-[8px] pb-[8px] pl-[15px] pr-[15px] hover:bg-white lg:px-[28px] xl:right-[60px]",
      icon: "h-fit",
    },
    size: {
      default: "",
      sm: "",
      lg: "",
      icon: "",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

interface ButtonProps
  extends VariantProps<typeof buttonVariants>,
    HTMLAttributes<HTMLButtonElement> {
  className?: string;
  id?: string;
  type?: "button" | "submit" | "reset";
}

export const Button = component$((props: ButtonProps) => {
  const { variant, size, className, ...otherProps } = props;
  return (
    <button
      class={buttonVariants({ variant, size, className })}
      {...otherProps}
    >
      <Slot />
    </button>
  );
});
