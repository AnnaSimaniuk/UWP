import { component$ } from "@builder.io/qwik";
import { Image } from "@unpic/qwik";

interface AboutTeamPictureProps {
  alt: string;
  src?: string;
}

export const AboutTeamPicture = component$((props: AboutTeamPictureProps) => {
  const { alt, src } = props;

  return (
    <Image
      class="lazyload duration-250 w-full object-cover transition ease-out hover:ease-in group-hover:scale-105"
      src={src}
      layout="constrained"
      decoding="async"
      loading="lazy"
      width={390}
      height={600}
      alt={alt}
    />
  );
});
