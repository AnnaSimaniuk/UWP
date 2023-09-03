import { component$, Slot } from "@builder.io/qwik";
import { Footer, Header } from "~/components/shared";
import { Layout, Modal, ModalFeedback } from "~/components/ui";
import { ModalContextProvider } from "~/context/modal-context/ModalProvider";
import { routeLoader$ } from "@builder.io/qwik-city";
import { InitialValues } from "@modular-forms/qwik";
import { FeedbackFormType } from "~/components/form/FeedbackForm";

export const useFormLoader = routeLoader$<InitialValues<FeedbackFormType>>(
  () => ({
    username: "",
    email: "",
    phone: "",
    company: "",
    message: "",
    services: [],
  }),
);

export default component$(() => {
  return (
    <ModalContextProvider>
      <Layout>
        <Header />
        <Slot />
        <Footer />
      </Layout>
      <Modal>
        <ModalFeedback />
      </Modal>
    </ModalContextProvider>
  );
});
