import { component$, Signal, useSignal, useTask$ } from "@builder.io/qwik";
import { ArrowRightIcon } from "~/assets/icons";
import { useTranslate } from "qwik-speak";
import { Link, useLocation, useNavigate } from "@builder.io/qwik-city";
import { useHref } from "~/hooks/useHref";

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
  const { url } = useLocation();
  const { href } = useHref(t(`${link}`));
  const activeLink = useSignal(false);
  const nav = useNavigate();
  useTask$(({ track }) => {
    track(() => url.pathname);
    if (text === "header.text_services") {
      activeLink.value = url.pathname.includes(href);
      return;
    }
    activeLink.value = url.pathname.endsWith(`${href}/`);
  });
  return (
    <>
      {text === "header.text_services" ? (
        <li class={`${classWrapper}`}>
          <div>
            <button
              aria-label={t(text)}
              class={`uppercase translate-underline__hover-line__dark hover-text__grey flex w-[120px] items-center pr-8 ${
                activeLink.value ? "_nav-item-activ" : ""
              }`}
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
          <button
            aria-label={t(text)}
            class={`translate-underline__hover-line__dark hover-text__grey uppercase ${
              activeLink.value ? "_nav-item-activ" : ""
            }`}
            onClick$={() => {
              nav(href);
              props.burgerMenuData.isActive = !burgerMenuData.isActive;
            }}
          >
            {t(text)}
          </button>
        </li>
      )}
    </>
  );
});
