import {
  component$,
  useStyles$,
  useVisibleTask$,
  $,
  useOnWindow,
} from "@builder.io/qwik";
import { ButtonSticky } from "~/components/ui/button/ButtonSticky";
import { DiscussSlide } from "~/components/shared/home/discuss/discuss-slide/DiscussSlide";
import Splide from "@splidejs/splide";
// import "@splidejs/splide/css/core";

import styles from "./discuss.css?inline";

const data = [
  {
    heading: "Serhii",
    src: "https://uwp.digital/s/img/about/serhii-founder-medium.webp",
    alt: "Serhii",
    srcWebp: "https://uwp.digital/s/img/about/serhii-founder-medium.webp",
    srcJpg: "https://uwp.digital/s/img/about/serhii-founder-medium.webp",
    subtitle: "CEO & Founder",
    text: "Successful financier in the marketing world. UWP Digital is a special project for me. I wanted to assemble a team of top Ukrainian talent and take marketing to the next level. When we talk about the Ukrainian team, we first talk about courage, experience, creativity, and incredibly hard work. All this formed the basis for the UWP Digital creation.",
    text_1: "5",
    text_2: "founded companies",
    text_3: "2+",
    text_4: "years in marketing",
  },
  {
    heading: "Daniella",
    src: "https://uwp.digital/s/img/about/daniella-project-manager-medium.webp",
    alt: "Daniella",
    srcWebp:
      "https://uwp.digital/s/img/about/daniella-project-manager-medium.webp",
    srcJpg:
      "https://uwp.digital/s/img/about/daniella-project-manager-medium.webp",
    subtitle: "Project manager",
    text: "Words are my superpower. Made my way up from copywriter to project manager. I believe that marketing is much more than an attractive picture. It is an opportunity to convey values to people also through words.",
    text_1: "3+",
    text_2: "years in marketing",
    text_3: "150",
    text_4: "successful projects",
  },
];

export const Discuss = component$(() => {
  useStyles$(styles);

  useVisibleTask$(() => {
    new Splide(".splide", {
      // width: "1446px",
      rewind: true,
      speed: 200,
      perPage: 1,
      pagination: true,
      // autoplay: true,
      pauseOnHover: true,
      arrowPath: "m15.5 0.932-4.3 4.38",
    }).mount();
  });

  useOnWindow(
    "load",
    $((event) => {})
  );

  return (
    <section
      // aria-labelledby="carousel-heading"
      class="discuss overflow-x-hidden bg-dark pt-[62px] pb-[80px] lg:pt-[65px] lg:pb-[80px] xl:pt-[47px] xl:pb-[41px] 2xl:pt-[110px] 2xl:pb-[41px]"
      // data-splide='{"type":"slide","perPage":3,"rewind": true, "drag":"free"}'
    >
      <div class="container sm:max-w-full lg:px-[30px] 3xl:max-w-[1920px] 3xl:px-[135px]">
        <h2
          id="carousel-heading"
          class=" mb-[33px] text-4xl font-bold uppercase leading-[120%] text-light lg:mb-[39px] lg:text-[45px] xl:mb-[15px] xl:text-[49px] xl:leading-[96px] xl:tracking-[0.7px] 2xl:mb-[50px] 2xl:text-[90px] 2xl:leading-[108px]"
        >
          LET’S DISCUSS THE PROJECT
        </h2>
        <div class="discussSlider splide xl:flex xl:flex-row-reverse xl:justify-between xl:border-t-[1px] xl:border-middleGrey">
          <div class="splide__track">
            {/* //1900 */}
            <div class="splide__list flex ">
              {data.map((item, index) => (
                <DiscussSlide key={item.heading} {...item} />
              ))}
            </div>
            {/* <div class="swiper-pagination"></div> */}
          </div>
          <div class="border-r xl:border__right w-full border-t-[1px] border-middleGrey pt-[32px] xl:max-w-[317px] xl:border-t-0 xl:pt-[50px] xl:pr-[28px] 2xl:max-w-[407px] 2xl:pr-[50px]">
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
