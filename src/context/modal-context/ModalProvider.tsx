import {
  $,
  component$,
  createContextId,
  Slot,
  useContextProvider,
  useStore,
} from "@builder.io/qwik";
import { ModalDataStore } from "~/types/Modal";

export const ModalProvider =
  createContextId<ModalDataStore>("docs.modal-context");

export const ModalContextProvider = component$(() => {
  const modalData = useStore<ModalDataStore>({
    dynamicFormWrapperClass: "translate-x-full",
    formMenuClass: "invisible opacity-0",
    showDynamicForm: $(function (this: ModalDataStore) {
      this.formMenuClass = "";
      this.dynamicFormWrapperClass = "";
    }),
    closeDynamicForm: $(function (this: ModalDataStore) {
      this.formMenuClass = "invisible opacity-0";
      this.dynamicFormWrapperClass = "translate-x-full";
    }),
  });
  useContextProvider(ModalProvider, modalData);

  return <Slot />;
});
