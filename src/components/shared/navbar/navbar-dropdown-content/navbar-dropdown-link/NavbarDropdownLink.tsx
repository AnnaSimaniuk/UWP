import { useTranslate } from "qwik-speak";
import { useLocation } from "@builder.io/qwik-city";
import { component$, useSignal, useTask$ } from "@builder.io/qwik";
import { useHref } from "~/hooks/useHref";
import { CustomLink } from "~/components/ui";
import { ArrowLinkDropdownIcon } from "~/assets/icons";

interface NavbarLinkProps {
  text: string;
  link: string;
}

export const NavbarDropdownLink = component$((props: NavbarLinkProps) => {
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
    <li>
      <CustomLink
        aria-label={ariaLabel}
        href={href}
        variant={"navLinkDropdown"}
        className={activeLink.value ? "_nav-item-activ" : ""}
      >
        <p>{t(`${text}`)}</p>
        <span class="pt-[6px] pl-[10px]">
          <ArrowLinkDropdownIcon />
        </span>
      </CustomLink>
    </li>
  );
});
