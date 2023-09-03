import { component$, HTMLAttributes } from "@builder.io/qwik";
import { cva } from "class-variance-authority";
import type { VariantProps } from "class-variance-authority";
import { ErrorField } from "~/components/ui/error-field/ErrorField";

const inputVariants = cva("", {
  variants: {
    variant: {
      default:
        "border__rounded form-control m-0 block w-[100%] rounded-[70px] bg-transparent bg-clip-padding pt-[28px] pb-[11px] pl-[30px] pr-[30px] text-sm font-medium leading-[18px] tracking-[1px] text-middleGrey transition ease-in-out focus:border-white focus:text-white focus:shadow-none focus:outline-none focus:outline-0",
    },
    labelVariant: {
      default:
        "pl-[24px] text-sm font-medium leading-[18px] tracking-[1px] text-middleGrey",
    },
  },
  defaultVariants: {
    variant: "default",
    labelVariant: "default",
  },
});

interface InputProps
  extends HTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {
  label: string;
  children?: any;
  value: string;
  field: any;
  type: string;
  required?: boolean;
}

export const Input = component$((props: InputProps) => {
  const {
    required,
    value,
    type,
    label,
    field,
    id,
    placeholder,
    variant,
    labelVariant,
    ...otherProps
  } = props;

  return (
    <div
      class={`formControl mb-[15px] ${field.error && "error"} ${
        required && field.touched && !field.dirty && "error"
      }`}
    >
      <input
        type={type}
        class={inputVariants({ variant })}
        id={id}
        value={value}
        placeholder={placeholder}
        {...otherProps}
      />
      <label class={inputVariants({ labelVariant })} for={id}>
        {label}
      </label>
      {required && field.touched && !field.dirty && (
        <ErrorField message={"Field is required"} />
      )}
      {field.error && <ErrorField message={field.error} />}
    </div>
  );
});
