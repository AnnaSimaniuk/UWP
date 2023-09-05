import { useLocation } from "@builder.io/qwik-city";
import { component$, useSignal, useTask$ } from "@builder.io/qwik";
import { CustomLink } from "~/components/ui";
import { ArrowLinkDropdownIcon } from "~/assets/icons";
import { useHref } from "~/hooks/useHref";

interface NavbarLinkProps {
  text: string;
  link: string;
}

export const NavbarDropdownLink = component$((props: NavbarLinkProps) => {
  const { text, link } = props;
  const { url } = useLocation();
  const activeLink = useSignal(false);
  const { href } = useHref(link);
  useTask$(({ track }) => {
    track(() => url.pathname);
    activeLink.value = url.pathname.endsWith(`${link}/`);
  });

  return (
    <li>
      <CustomLink
        aria-label={text}
        href={href}
        variant={"navLinkDropdown"}
        className={activeLink.value ? "_nav-item-activ" : ""}
      >
        <p>{text}</p>
        <span class="pt-[6px] pl-[10px]">
          <ArrowLinkDropdownIcon />
        </span>
      </CustomLink>
    </li>
  );
});
