import { component$ } from "@builder.io/qwik";

interface ServicesCardPictureProps {
  srcSetWebp: string;
  srcSetPng: string;
  src: string;
  alt: string;
}

export const ServicesCardPicture = component$(
  (props: ServicesCardPictureProps) => {
    const { alt, srcSetWebp, srcSetPng, src } = props;
    return (
      <picture>
        <source type="image/webp" srcSet={srcSetWebp} />
        <source type="image/png" srcSet={srcSetPng} />
        <img
          class="lazyload duration-250 inset-0 h-auto w-full object-cover transition ease-out group-hover/scale:scale-105 group-hover/scale:ease-in"
          decoding="async"
          loading="lazy"
          src={src}
          alt={alt}
          width="450"
          height="338"
        />
      </picture>
    );
  },
);

export const ServicesCardPictureMobile = component$(
  (props: ServicesCardPictureProps) => {
    const { alt, srcSetWebp, srcSetPng, src } = props;
    return (
      <picture>
        <source type="image/webp" srcSet={srcSetWebp} />
        <source type="image/png" srcSet={srcSetPng} />
        <img
          class="lazyload duration-250 inset-0 h-auto w-full object-cover transition ease-out group-hover/scale:scale-105 group-hover/scale:ease-in"
          decoding="async"
          loading="lazy"
          src={src}
          alt={alt}
          width="280"
          height="210"
        />
      </picture>
    );
  },
);
