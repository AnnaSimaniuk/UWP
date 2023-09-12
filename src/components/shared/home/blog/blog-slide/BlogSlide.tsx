import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { Image } from "@unpic/qwik";
import { useHref } from "~/hooks/useHref";
import { type IItemsBlog } from "~/types/IBlog";
import { useTranslate } from "qwik-speak";

export const BlogSlide = component$((props: IItemsBlog) => {
  const { name, image, category, date } = props;
  const t = useTranslate();
  const category_href = useHref(t(`${props.category_href}`)).href;
  const { href } = useHref(t(`${props.href}`));

  return (
    <div class="splide__slide mr-[30px]" role="group" aria-label="1 / 3">
      <div class="card-blog w-min">
        <div class="w-[298px] overflow-hidden lg:w-[530px] lg:rounded-none xl:mb-[0px]">
          <picture class="group/card">
            <Image
              class="lazyload duration-250 w-full object-cover transition ease-out hover:scale-105 hover:ease-in ls-is-cached lazyloaded"
              src={image}
              decoding="async"
              loading="lazy"
              // layout="constrained"
              width={530}
              height={298}
              alt="Picture marketing case of Fenty Beauty"
            />
          </picture>
        </div>
        <div class="flex flex-row items-center justify-between pt-[23px] xl:gap-[17px]">
          <Link
            href={category_href}
            class="rounded-[60px] bg-darkGrey py-2 px-4 text-[10px] font-medium uppercase leading-[1.2] lg:text-[14px] lg:leading-[1.2] xl:px-[19px] xl:text-sm xl:leading-[1.2]"
          >
            {category}
          </Link>
          <span class="text-[10px] font-medium leading-[1.2] text-middleGrey lg:text-sm lg:leading-[1.2]">
            {date}
          </span>
        </div>
        <h4 class="hover:text-main mt-4 text-lg font-bold leading-[22px] tracking-tight xl:mt-4 xl:text-2xl xl:leading-[29px]">
          <Link href={href}>{name}</Link>
        </h4>
      </div>
    </div>
  );
});
