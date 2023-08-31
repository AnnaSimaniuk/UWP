import { $, component$, Slot } from "@builder.io/qwik";
import { Header } from "~/components/shared";
import { Modal, ModalFeedback } from "~/components/ui";
import { ModalContextProvider } from "~/context/modal-context/ModalProvider";

export default component$(() => {
  return (
    <ModalContextProvider>
      <main>
        <Header />
        <Slot />
        <Modal>
          <ModalFeedback />
        </Modal>
      </main>
    </ModalContextProvider>
  );
});
