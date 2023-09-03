import { QRL } from "@builder.io/qwik";

export type ModalDataStore = {
  dynamicFormWrapperClass: string;
  formMenuClass: string;
  lockClass: string;
  wrapperClass: string;
  headerClass: string;
  showDynamicForm: QRL<(this: ModalDataStore) => void>;
  closeDynamicForm: QRL<(this: ModalDataStore) => void>;
  lockWrapper: QRL<(this: ModalDataStore) => void>;
  unlockWrapper: QRL<(this: ModalDataStore) => void>;
};
