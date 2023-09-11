import { component$, useStyles$, useVisibleTask$ } from "@builder.io/qwik";
import { useDiscussData } from "~/routes/[...lang]";
import { useTranslate } from "qwik-speak";
import { ButtonSticky } from "~/components/ui/button/ButtonSticky";
import { DiscussSlide } from "~/components/shared/home/discuss/discuss-slide/DiscussSlide";
import { DiscussButtonNext } from "~/components/ui/button/DiscussButtonNext";
import { type IItemsDiscuss } from "~/types/IDiscuss";
import Splide from "@splidejs/splide";
import styles from "./discuss.css?inline";

export const Discuss = component$(() => {
  useStyles$(styles);

  const t = useTranslate();
  const data = useDiscussData();

  useVisibleTask$(() => {
    const sp = new Splide(".discussSlider", {
      type: "fade",
      autoHeight: true,
      autoplay: true,
      rewind: true,
      speed: 200,
      pagination: true,
      interval: 2500,
      pauseOnHover: true,
      live: true,
    });
    sp.mount();
  });

  return (
    <section class="discuss overflow-x-hidden bg-dark pt-[62px] pb-[80px] lg:pt-[65px] lg:pb-[80px] xl:pt-[47px] xl:pb-[41px] 2xl:pt-[110px] 2xl:pb-[41px]">
      <div class="container sm:max-w-full lg:px-[30px] 3xl:max-w-[1920px] 3xl:px-[135px]">
        <h2 class=" mb-[33px] text-4xl font-bold uppercase leading-[120%] text-light lg:mb-[39px] lg:text-[45px] xl:mb-[15px] xl:text-[49px] xl:leading-[96px] xl:tracking-[0.7px] 2xl:mb-[50px] 2xl:text-[90px] 2xl:leading-[108px]">
          LET’S DISCUSS THE PROJECT
        </h2>
        <div class=" discussSlider h-[700px] splide xl:flex xl:flex-row-reverse xl:justify-between xl:border-t-[1px] xl:border-middleGrey">
          <div class="splide__track overflow-hidden sm:h-[800px] md:h-[800px] lg:h-[485px] xl:h-[650px] 3xl:h-[650px]">
            <div class="splide__list flex ">
              {data.value.items.map((item: IItemsDiscuss) => (
                <DiscussSlide key={item.name} {...item} />
              ))}
            </div>
          </div>
          <DiscussButtonNext />
          <div class="splide__pagination relative top-[-80px] left-[calc(100vw/2-38px)] lg:top-[-60px] xl:top-[656px] xl:left-[36vmax] splide__pagination--ltr flex w-0 h-0 z-[2] gap-6 3xl:gap-8"></div>
          <div class="xl:border-r w-full border-t-[1px] border-middleGrey pt-[32px] xl:max-w-[317px] xl:border-t-0 xl:pt-[50px] xl:pr-[28px] 2xl:max-w-[407px] 2xl:pr-[50px]">
            <p class="pb-[30px] text-base font-medium leading-[22px] tracking-[0.4px] text-light lg:mt-0 lg:pt-[31px] lg:pb-10 xl:mt-0 xl:pb-[34px] xl:pt-[27px] 2xl:mt-0 2xl:pb-[53px] 2xl:pt-[50px]">
              {t(data.value.description)}
            </p>
            {/*{list}*/}
            <ButtonSticky
              text={t(data.value.btn_text)}
              href={t(data.value.btn_href)}
            />
            C
          </div>
        </div>
      </div>
    </section>
  );
});
