import { component$, useContext, useSignal } from "@builder.io/qwik";
import { Button } from "~/components/ui";
import { ArrowBigRedBtnIcon, UnmutedIcon, MutedIcon } from "~/assets/icons";
import { ModalProvider } from "~/context";
import { useTranslate } from "qwik-speak";

export const Video = component$(() => {
  const t = useTranslate();
  const isMuted = useSignal(true);
  const { showDynamicForm } = useContext(ModalProvider);
  return (
    <section class="video aspect-h-9 relative bg-dark">
      <button
        type="button"
        aria-label={t("video.btn_text")}
        id="btnDiscuss"
        class="big-red-btn top-[-66px] right-[5.5%] z-[1] lg:top-[-92px] lg:right-[11.3%] xl:top-[-71px] xl:right-[18%] 2xl:top-[-90px] 2xl:right-[23.4%]"
        onClick$={() => showDynamicForm()}
      >
        <ArrowBigRedBtnIcon />
        {t("video.btn_text")}
      </button>
      <Button
        variant={"icon"}
        id="mute-btn"
        type="button"
        aria-label="mute"
        class="absolute bottom-10 left-10 z-[1] h-20 w-20"
        onClick$={() => (isMuted.value = !isMuted.value)}
      >
        {isMuted.value ? <MutedIcon /> : <UnmutedIcon />}
      </Button>
      <video
        id="main-video"
        preload="true"
        autoPlay={true}
        muted={isMuted.value}
        loop={true}
        playsInline={true}
        class="h-auto w-full object-cover"
      >
        <source
          src="https://uwp.digital/s/video/video-presentation-uwp-digital-company.mp4"
          type="video/mp4"
        />
        <source
          src="https://uwp.digital/s/video/video-presentation-uwp-digital-company.webm"
          type="video/webm"
        />
        <source
          src="https://uwp.digital/s/video/video-presentation-uwp-digital-company.ogv"
          type="video/ogv"
        />
        <p>Your browser doesn't support HTML5 video.</p>
      </video>
    </section>
  );
});
