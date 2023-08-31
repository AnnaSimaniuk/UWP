import { QRL } from "@builder.io/qwik";

export type ModalDataStore = {
  dynamicFormWrapperClass: string;
  formMenuClass: string;
  showDynamicForm: QRL<(this: ModalDataStore) => void>;
  closeDynamicForm: QRL<(this: ModalDataStore) => void>;
};
