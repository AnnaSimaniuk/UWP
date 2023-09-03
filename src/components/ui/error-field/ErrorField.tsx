import { component$ } from "@builder.io/qwik";

interface ErrorFieldProps {
  message: string;
}

export const ErrorField = component$((props: ErrorFieldProps) => {
  return (
    <p class="popup_username ml-[25px] mt-3 hidden text-sm font-medium text-main">
      {props.message}
    </p>
  );
});
