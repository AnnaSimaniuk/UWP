import { component$ } from "@builder.io/qwik";

interface AboutTeamPictureProps {
  alt: string;
  src: string;
  srcSetWebp: string;
  srcSeJpg: string;
}

export const AboutTeamPicture = component$((props: AboutTeamPictureProps) => {
  const { alt, srcSetWebp, srcSeJpg, src } = props;

  return (
    <picture>
      <source type="image/webp" srcSet={srcSetWebp} />
      <source type="image/jpg" srcSet={srcSeJpg} />
      <img
        alt={alt}
        class="lazyload duration-250 w-full object-cover transition ease-out hover:ease-in group-hover:scale-105"
        decoding="async"
        loading="lazy"
        src={src}
        width="390"
        height="520"
      />
    </picture>
  );
});
