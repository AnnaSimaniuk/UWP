import { component$, Signal } from "@builder.io/qwik";
import { ArrowRightIcon } from "~/assets/icons";
import { useTranslate } from "qwik-speak";
import { Link, useNavigate } from "@builder.io/qwik-city";

interface BurgerNavItemProps {
  text: string;
  link: string;
  classWrapper?: string;
  serviceMenuActive?: Signal<boolean>;
  burgerMenuData: {
    isActive: boolean;
    whiteHeader: boolean;
  };
}

export const BurgerNavItem = component$((props: BurgerNavItemProps) => {
  const { burgerMenuData, text, link, classWrapper, serviceMenuActive } = props;
  const t = useTranslate();
  const nav = useNavigate();

  return (
    <>
      {t(text) === "Services" ? (
        <li class={`${classWrapper}`}>
          <div>
            <button
              aria-label={t(text)}
              class="uppercase translate-underline__hover-line__dark hover-text__grey flex w-[120px] items-center pr-8{class_active_services}"
              id="btnServices"
              onClick$={() => {
                if (serviceMenuActive) serviceMenuActive.value = true;
              }}
            >
              {t(text)}
              <span class="transition-arrov">
                <ArrowRightIcon />
              </span>
            </button>
          </div>
        </li>
      ) : (
        <li class={classWrapper}>
          <Link
            aria-label={t(text)}
            class="translate-underline__hover-line__dark hover-text__grey{class_active_blog}"
            href={link}
            onClick$={() => {
              burgerMenuData.isActive = false;
            }}
          >
            {t(text)}
          </Link>
        </li>
      )}
    </>
  );
});
