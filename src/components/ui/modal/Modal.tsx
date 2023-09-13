import {
  $,
  component$,
  Slot,
  useContext,
  useOnDocument,
  useStyles$,
} from "@builder.io/qwik";
import { CloseIcon } from "~/assets/icons";
import { Button } from "~/components/ui";
import { ModalProvider } from "~/context";
import styles from "./Modal.css?inline";
import { Speak } from "qwik-speak";
export const Modal = component$(() => {
  useStyles$(styles);
  const {
    closeDynamicForm,
    dynamicFormWrapperClass,
    formMenuClass,
    lockClass,
  } = useContext(ModalProvider);

  useOnDocument(
    "keydown",
    $((event) => {
      const { key } = event as KeyboardEvent;
      if (key === "Escape") {
        closeDynamicForm();
      }
    }),
  );

  return (
    <Speak assets={["project_form"]}>
      <div
        class={`lazyload header__contact-body right-0 z-40 h-full overflow-y-auto overflow-x-hidden ${formMenuClass} ${lockClass}`}
        id="formMenu"
      >
        <div class="wrapper-form-tablet absolute top-0 right-0 w-full">
          <div
            class="absolute top-0 left-0 right-0 bg-main/70 backdrop-blur-xl xl:h-full xl:min-h-screen xl:w-full"
            id="backdrop_02"
          >
            <div class="h-full w-full"></div>
          </div>
          <div
            class={`
            flex flex-col relative right-0 ml-auto h-full min-h-screen w-full ${dynamicFormWrapperClass} bg-dark pl-[20px] pr-[20px] pt-[31px] pb-[38px] transition-all lg:px-[30px] lg:pt-[24px] lg:pb-[312px] xl:w-[56.7%] xl:flex-auto xl:pl-[30px] xl:pr-[60px] xl:pt-[44px] 2xl:pl-[140px] 2xl:pr-[60px] 2xl:pt-[44px]
          `}
            id="dynamicFormWrapper"
          >
            <Button
              aria-label="close"
              variant={"iconBorder"}
              id="btnFormMenu"
              type="button"
              onClick$={() => closeDynamicForm()}
            >
              <CloseIcon class={"fill-white group-hover:fill-black"} />
            </Button>
            <Slot />
          </div>
        </div>
      </div>
    </Speak>
  );
});
