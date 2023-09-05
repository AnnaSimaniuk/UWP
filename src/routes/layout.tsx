import {
  component$,
  createContextId,
  Slot,
  useContextProvider,
} from "@builder.io/qwik";
import { Footer, Header } from "~/components/shared";
import { Layout, Modal, ModalFeedback } from "~/components/ui";
import { ModalContextProvider } from "~/context/modal-context/ModalProvider";
import { routeLoader$ } from "@builder.io/qwik-city";
import { InitialValues } from "@modular-forms/qwik";
import { FeedbackFormType } from "~/components/form/FeedbackForm";
import { ILanguage } from "~/types/ILanguage";
import { getAllNamesOfServices } from "~/lib/actions/services.action";
import { ILink } from "~/types/ILink";
import { getLanguages } from "~/lib/actions/language.action";

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
export const useLanguageData = routeLoader$(async (requestEvent) => {
  return (await getLanguages(requestEvent)) as ILanguage[];
});

export const useMenuServices = routeLoader$(async (requestEvent) => {
  return (await getAllNamesOfServices(requestEvent)) as ILink[];
});
export const MenuServices = createContextId<ILink[]>("menuServices");
export default component$(() => {
  const menuServices = useMenuServices();
  useContextProvider(MenuServices, menuServices.value);

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
