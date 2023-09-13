import { component$, useStyles$ } from "@builder.io/qwik";
import styles from "./CaseCardPicture.css?inline";
import { Image } from "@unpic/qwik";

interface CaseCardPictureProps {
  image: string;
  name: string;
  text_1: string;
  text_2: string;
  text_before: string;
  text_3: string;
  text_4: string;
}

export const CaseCardPicture = component$((props: CaseCardPictureProps) => {
  useStyles$(styles);
  const { image, name, text_before, text_1, text_2, text_3, text_4 } = props;
  return (
    <>
      <div class="group/card">
        <Image
          class="lazyload duration-250 inset-0 h-auto w-full object-cover transition ease-out group-hover/scale:scale-105 group-hover/scale:ease-in"
          src={image}
          cdn={"builder.io"}
          alt={name}
          width={780}
          height={585}
        />
      </div>
      <div class="img-desc group/scale">
        <div class="img-desc__wrap">
          <div class="wrap-text">
            {text_1 && <p class="img-desc_big">{text_1}</p>}
            <div class="wrap-text__inner">
              {text_2 && <p class="img-desc_small">{text_2}</p>}
            </div>
          </div>
        </div>
        <div class="wrap-text__gap">
          {text_before && <p class="img-desc_small">{text_before}</p>}
          {text_3 && <p class="img-desc_big">{text_3}</p>}
        </div>
        {text_4 && <p class="img-desc_small">{text_4}</p>}
      </div>
    </>
  );
});
