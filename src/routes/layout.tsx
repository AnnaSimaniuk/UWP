import {
    component$,
    createContextId,
    Slot,
    useContextProvider,
} from "@builder.io/qwik";
import {Footer, Header} from "~/components/shared";
import {Layout, Modal, ModalFeedback} from "~/components/ui";
import {ModalContextProvider} from "~/context/modal-context/ModalProvider";
import {routeLoader$} from "@builder.io/qwik-city";
import type {InitialValues} from "@modular-forms/qwik";
import type {FeedbackFormType} from "~/components/form/FeedbackForm";
import type {ILanguage} from "~/types/ILanguage";
import {getAllNamesOfServices} from "~/lib/actions/services.action";
import type {ILink} from "~/types/ILink";
import {getLanguages} from "~/lib/actions/language.action";
import {PopupContextProvider} from "~/context/popup-context/PopupProvider";
import {Popup} from "~/components/ui/popup/Popup";

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
            <PopupContextProvider>
                <Layout>
                    <Header/>
                    <Slot/>
                    <Footer/>
                </Layout>
                <Modal>
                    <ModalFeedback/>
                </Modal>
                <Popup/>
            </PopupContextProvider>
        </ModalContextProvider>
    );
});
