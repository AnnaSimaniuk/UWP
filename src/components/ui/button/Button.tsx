import { component$, QwikIntrinsicElements, Slot } from "@builder.io/qwik";
import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";

const buttonVariants = cva("inline-flex items-center relative justify-center", {
  variants: {
    variant: {
      default: "",
      destructive: "",
      outline: "",
      secondary: "",
      ghost: "",
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

interface ButtonProps extends VariantProps<typeof buttonVariants> {
  attributes?: QwikIntrinsicElements["button"];
  className?: string;
  id?: string;
  type?: "button" | "submit" | "reset";
  onClick$?: () => void;
  ariaLabel: string;
}

export const Button = component$((props: ButtonProps) => {
  const { attributes, variant, size, className, ...otherProps } = props;
  return (
    <button
      class={buttonVariants({ variant, size, className })}
      {...otherProps}
      {...attributes}
    >
      <Slot />
    </button>
  );
});
