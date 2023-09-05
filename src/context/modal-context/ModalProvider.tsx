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
    headerClass: "",
    wrapperClass: "",
    lockClass: "",
    showDynamicForm: $(function (this: ModalDataStore) {
      this.formMenuClass = "";
      this.dynamicFormWrapperClass = "";
      this.headerClass = "z-0";
      this.wrapperClass = "overflow-y-hidden h-screen";
    }),
    closeDynamicForm: $(function (this: ModalDataStore) {
      this.formMenuClass = "invisible opacity-0";
      this.dynamicFormWrapperClass = "translate-x-full";
      this.headerClass = "";
      this.wrapperClass = "";
    }),
    lockWrapper: $(function (this: ModalDataStore) {
      this.wrapperClass = "overflow-y-hidden h-screen";
    }),
    unlockWrapper: $(function (this: ModalDataStore) {
      this.wrapperClass = "";
    }),
  });
  useContextProvider(ModalProvider, modalData);

  return <Slot />;
});
