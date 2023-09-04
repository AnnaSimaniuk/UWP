import { component$, useSignal, useTask$ } from "@builder.io/qwik";
import { useTranslate } from "qwik-speak";
import { useLocation } from "@builder.io/qwik-city";
import { useHref } from "~/hooks/useHref";

interface SecondaryNavLinkProps {
  text: string;
  link: string;
}

export const SecondaryNavLink = component$((props: SecondaryNavLinkProps) => {
  const { text, link } = props;
  const t = useTranslate();
  const { url } = useLocation();
  const activeLink = useSignal(false);
  const { href } = useHref(t(`${link}`));
  const ariaLabel = t(`${text}`);

  useTask$(({ track }) => {
    track(() => url.pathname);
    activeLink.value = url.pathname.includes(href);
  });
  return (
    <li
      class={`transition-all hover:text-main dark:text-white dark:hover:text-main ${
        activeLink.value ? "_nav-item-activ" : ""
      }`}
    >
      <a aria-label={ariaLabel} href={href}>
        {t(text)}
      </a>
    </li>
  );
});
