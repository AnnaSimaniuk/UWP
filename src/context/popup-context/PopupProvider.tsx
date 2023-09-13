import {
  $,
  component$,
  createContextId,
  Slot,
  useContextProvider,
  useStore,
} from "@builder.io/qwik";
import type { PopupDataStore } from "~/types/IPopup";

export const PopupProvider =
  createContextId<PopupDataStore>("docs.popup-context");

export const PopupContextProvider = component$(() => {
  const popupData = useStore({
    popupClass: "invisible opacity-0",
    wrapperClassFromPopup: "",
    texts: {
      heading: "some head",
      subtitle: "subtitle",
      href: "href",
      text: "some text",
    },
    showPopup: $(function (this: PopupDataStore) {
      this.popupClass = "";
      this.wrapperClassFromPopup = "overflow-y-hidden h-screen";
    }),
    closePopup: $(function (this: PopupDataStore) {
      this.popupClass = "invisible opacity-0";
      this.wrapperClassFromPopup = "";
    }),
  });

  useContextProvider(PopupProvider, popupData);

  return <Slot />;
});
