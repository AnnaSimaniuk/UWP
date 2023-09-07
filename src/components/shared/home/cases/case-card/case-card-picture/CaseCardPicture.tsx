import { component$, useStyles$ } from "@builder.io/qwik";
import styles from "./CaseCardPicture.css?inline";

interface CaseCardPictureProps {
  src: string;
  alt: string;
  text_1: string;
  text_2: string;
  before: string;
  text_3: string;
  text_4: string;
  srcSetWebp: string;
  srcSetJpeg: string;
}

export const CaseCardPicture = component$((props: CaseCardPictureProps) => {
  useStyles$(styles);
  const {
    src,
    alt,
    before,
    text_1,
    text_2,
    text_3,
    text_4,
    srcSetWebp,
    srcSetJpeg,
  } = props;
  return (
    <>
      <picture class="group/card">
        <source type="image/webp" srcSet={srcSetWebp} />
        <source type="image/jpeg" srcSet={srcSetJpeg} />
        <img
          class="lazyload duration-250 inset-0 h-auto w-full object-cover transition ease-out group-hover/scale:scale-105 group-hover/scale:ease-in"
          decoding="async"
          loading="lazy"
          src={src}
          alt={alt}
          width="780"
          height="585"
        />
      </picture>
      <div class="img-desc group/scale">
        <div class="img-desc__wrap">
          <div class="wrap-text">
            <p class="img-desc_big">{text_1}</p>
            <div class="wrap-text__inner">
              <p class="img-desc_small">{text_2}</p>
            </div>
          </div>
        </div>
        <div class="wrap-text__gap">
          <p class="img-desc_small">{before}</p>
          <p class="img-desc_big">{text_3}</p>
        </div>
        <p class="img-desc_small">{text_4}</p>
      </div>
    </>
  );
});
