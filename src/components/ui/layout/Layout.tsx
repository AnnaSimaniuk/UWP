import {component$, Slot, useContext} from "@builder.io/qwik";
import {ModalProvider} from "~/context";
import {PopupProvider} from "~/context/popup-context/PopupProvider";

export const Layout = component$(() => {
    const {wrapperClass} = useContext(ModalProvider);
    const {wrapperClassFromPopup} = useContext(PopupProvider);
    return (
        <div class={`wrapper ${wrapperClass} ${wrapperClassFromPopup}`}>
            <Slot/>
        </div>
    );
});
