import { component$, QwikIntrinsicElements, Slot } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { cva } from "class-variance-authority";
import type { VariantProps } from "class-variance-authority";

const linkVariants = cva("inline-flex items-center relative justify-center", {
  variants: {
    variant: {
      navLink: "translate-underline__hover-line__dark",
      navLinkDropdown:
        "dropdown__link translate-underline__hover-line__dark flex max-w-fit transition-all text-base font-medium hover:text-lightDarkGrey active:text-main",
    },
  },
  defaultVariants: {
    variant: "navLink",
  },
});

interface CustomLinkProps extends VariantProps<typeof linkVariants> {
  href: string;
  className?: string;
  attributes?: QwikIntrinsicElements["a"];
  id?: string;
  ariaLabel?: string;
}

export const CustomLink = component$((props: CustomLinkProps) => {
  const { ariaLabel, variant, href, className, ...otherProps } = props;
  return (
    <Link
      class={linkVariants({ variant, className })}
      href={href}
      {...otherProps}
      aria-label={ariaLabel}
    >
      <Slot />
    </Link>
  );
});
