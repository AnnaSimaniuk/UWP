import { component$ } from "@builder.io/qwik";
import { Image } from "@unpic/qwik";

interface ServicesCardPictureProps {
  src: string;
  alt: string;
}

export const ServicesCardPicture = component$(
  (props: ServicesCardPictureProps) => {
    const { alt, src } = props;
    return (
      <Image
        class="lazyload duration-250 inset-0 h-auto w-full object-cover transition ease-out group-hover/scale:scale-105 group-hover/scale:ease-in"
        decoding="async"
        loading="lazy"
        src={src}
        alt={alt}
        width="450"
        height="338"
      />
    );
  },
);

export const ServicesCardPictureMobile = component$(
  (props: ServicesCardPictureProps) => {
    const { alt, src } = props;
    return (
      <Image
        class="lazyload duration-250 inset-0 h-auto w-full object-cover transition ease-out group-hover/scale:scale-105 group-hover/scale:ease-in"
        decoding="async"
        loading="lazy"
        src={src}
        alt={alt}
        width="280"
        height="210"
      />
    );
  },
);
