import { component$, useSignal, useTask$ } from "@builder.io/qwik";
import { Link, useLocation } from "@builder.io/qwik-city";
import { useHref } from "~/hooks/useHref";
import { useTranslate } from "qwik-speak";

interface MainNavLinkProps {
  text: string;
  link: string;
}

export const MainNavLink = component$((props: MainNavLinkProps) => {
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
      class={`whitespace-nowrap transition-all hover:text-main dark:hover:text-main ${
        activeLink.value ? "_nav-item-activ" : ""
      }`}
    >
      <Link aria-label={ariaLabel} href={href}>
        {t(text)}
      </Link>
    </li>
  );
});
