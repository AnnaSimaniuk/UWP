import { component$, Slot, useContext } from "@builder.io/qwik";
import { ModalProvider } from "~/context";

export const Layout = component$(() => {
  const { wrapperClass } = useContext(ModalProvider);
  return (
    <div class={`wrapper ${wrapperClass}`}>
      <Slot />
    </div>
  );
});
