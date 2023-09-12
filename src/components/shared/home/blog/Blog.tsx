import { component$, useStyles$, useVisibleTask$ } from "@builder.io/qwik";
import { useTranslate } from "qwik-speak";
import Splide from "@splidejs/splide";
import { useBlogData } from "~/routes/[...lang]";
import { type IItemsBlog } from "~/types/IBlog";
import { BlogSlide } from "./blog-slide/BlogSlide";
import styles from "./Blog.css?inline";

export const Blog = component$(() => {
  useStyles$(styles);

  const t = useTranslate();
  const data = useBlogData();

  // console.log("DATA client", data);

  useVisibleTask$(() => {
    const sp = new Splide(".blogSlider", {
      // perPage: 1,
      wheel: true,
      releaseWheel: true,
      arrows: false,
      pagination: false,
    });
    sp.mount();
  });

  return (
    <section class="blog  bg-dark pt-[2px] pb-[80px] text-white lg:pb-[101px] xl:pb-[170px]">
      <div class="container sm:max-w-full lg:px-[30px] 3xl:max-w-[1920px] 3xl:px-[135px]">
        <div class="mb-8 lg:mb-[43px] xl:mb-[58px]">
          <div class="relative">
            <h2 class="text-4xl font-bold uppercase leading-[43px] lg:text-[45px] lg:leading-[54px] xl:mb-[18px] xl:text-[48px] xl:leading-[108px] 2xl:mb-[58px] 2xl:text-[90px] 2xl:leading-[108px]">
              {t(data.value.title)}
            </h2>
            <a
              href={t(data.value.btn_href)}
              aria-label="read our blog"
              class="group absolute top-[2px] right-0 m-0 lg:flex lg:items-center lg:gap-[13px] xl:pt-[33px]"
            >
              <p class="hidden text-base font-bold lg:block lg:text-[24px] lg:leading-[1.4] xl:text-2xl">
                {t(data.value.btn_text)}
              </p>
              <div class="rounded-full transition-all group-hover:bg-main">
                <svg
                  width="38"
                  height="39"
                  viewBox="0 0 38 39"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    class="fill-current group-hover:fill-white"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M22.6208 17.208L22.6208 24.3356L24.5 24.3356L24.5 14L14.1644 14L14.1644 15.8792L21.292 15.8792L13.5 23.6712L14.8288 25L22.6208 17.208Z"
                  ></path>
                  <rect
                    class="stroke-middleGrey transition-all group-hover:stroke-main"
                    x="0.5"
                    y="1"
                    width="37"
                    height="37"
                    rx="18.5"
                  ></rect>
                </svg>
              </div>
            </a>
          </div>
        </div>
        <div class="blogSlider splide">
          <div class=" splide__track">
            {" "}
            {/* bg-[#666e75] */}
            <div class="splide__list flex">
              {data.value.items.map((item: IItemsBlog) => (
                <BlogSlide key={item.name} {...item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});
