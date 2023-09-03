import { component$, useStyles$, useVisibleTask$ } from "@builder.io/qwik";
// @ts-ignore
// import swiperStyles from "swiper/css";
import Swiper from "swiper";
import { ButtonSticky } from "~/components/ui/button/ButtonSticky";
import { DiscussSlide } from "~/components/shared/home/discuss/discuss-slide/DiscussSlide";

const data = [
  {
    heading: "Serhii",
    src: "https://uwp.digital/s/img/about/serhii-founder-medium.webp",
    alt: "Serhii",
    srcWebp: "https://uwp.digital/s/img/about/serhii-founder-medium.webp",
    srcJpg: "https://uwp.digital/s/img/about/serhii-founder-medium.webp",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quibusdam.",
    text: "Lorem",
    text_1: "Lorem",
    text_2: "Lorem",
    text_3: "Lorem",
    text_4: "Lorem",
  },
  {
    heading: "Daniella",
    src: "https://uwp.digital/s/img/about/daniella-project-manager-medium.webp",
    alt: "Serhii",
    srcWebp:
      "https://uwp.digital/s/img/about/daniella-project-manager-medium.webp",
    srcJpg:
      "https://uwp.digital/s/img/about/daniella-project-manager-medium.webp",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quibusdam.",
    text: "Lorem",
    text_1: "Lorem",
    text_2: "Lorem",
    text_3: "Lorem",
    text_4: "Lorem",
  },
];

export const Discuss = component$(() => {
  // useStyles$(swiperStyles);
  useVisibleTask$(() => {
    const swiper = new Swiper(".mySwiper", {
      loop: true,
      autoplay: { delay: 1e4 },
      pagination: { el: ".swiper-pagination", clickable: true },
      effect: "fade",
      fadeEffect: { crossFade: true },
      navigation: { nextEl: ".swiper-next-slide" },
    });
    // const swiperBlog = new Swiper(".blogSwiper", {
    //   spaceBetween: 31,
    //   breakpoints: {
    //     820: { spaceBetween: 20 },
    //     1280: { spaceBetween: 30 },
    //   },
    //   slidesPerView: "auto",
    //   freeMode: true,
    // });
    // swiperBlog.setGrabCursor();
  });

  return (
    <section class="discuss bg-dark pt-[62px] pb-[80px] lg:pt-[65px] lg:pb-[80px] xl:pt-[47px] xl:pb-[41px] 2xl:pt-[110px] 2xl:pb-[41px]">
      <div class="container sm:max-w-full lg:px-[30px] 3xl:max-w-[1920px] 3xl:px-[135px]">
        <h2 class="mb-[33px] text-4xl font-bold uppercase leading-[120%] text-light lg:mb-[39px] lg:text-[45px] xl:mb-[15px] xl:text-[49px] xl:leading-[96px] xl:tracking-[0.7px] 2xl:mb-[50px] 2xl:text-[90px] 2xl:leading-[108px]">
          LET’S DISCUSS THE PROJECT
        </h2>
        <div class="xl:flex xl:flex-row-reverse xl:justify-between xl:border-t-[1px] xl:border-middleGrey">
          <div class="mySwiper swiper">
            <div class="swiper-wrapper">
              {data.map((item, index) => (
                <DiscussSlide key={item.heading} {...item} />
              ))}
            </div>
            <div class="swiper-pagination"></div>
          </div>
          <div class="xl:border__right w-full border-t-[1px] border-middleGrey pt-[32px] xl:max-w-[317px] xl:border-t-0 xl:pt-[50px] xl:pr-[28px] 2xl:max-w-[407px] 2xl:pr-[50px]">
            <p class="pb-[30px] text-base font-medium leading-[22px] tracking-[0.4px] text-light lg:mt-0 lg:pt-[31px] lg:pb-10 xl:mt-0 xl:pb-[34px] xl:pt-[27px] 2xl:mt-0 2xl:pb-[53px] 2xl:pt-[50px]">
              Marketing is often viewed as simply creating beautiful
              advertising. We want to change this impression and turn it 180°.
              If you need an SEO agency, an AdWords agency, a personal web
              programmer, or an entire digital media agency — welcome to UWP
              Digital.
            </p>
            {/*{list}*/}
            <ButtonSticky text={"Order"} href={"/contact"} />
          </div>
        </div>
      </div>
    </section>
  );
});
