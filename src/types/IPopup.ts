import type { QRL } from "@builder.io/qwik";

export interface PopupDataStore {
  popupClass: string;
  wrapperClassFromPopup: string;
  texts: PopupTexts;
  showPopup: QRL<(this: PopupDataStore) => void>;
  closePopup: QRL<(this: PopupDataStore) => void>;
}

interface PopupTexts {
  heading: string;
  subtitle: string;
  href: string;
  text: string;
}
