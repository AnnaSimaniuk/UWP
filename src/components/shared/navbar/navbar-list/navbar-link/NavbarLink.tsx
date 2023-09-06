import { component$, useSignal, useTask$, useStyles$ } from "@builder.io/qwik";
import styles from "../../../../ui/custom-link/CustomLink.css?inline";
import { useLocation } from "@builder.io/qwik-city";
import { useTranslate } from "qwik-speak";
import { useHref } from "~/hooks/useHref";
import { ArrowDownIcon } from "~/assets/icons";
import { CustomLink, DropdownHover } from "~/components/ui";
import { NavbarDropdownContent } from "~/components/shared/navbar/navbar-dropdown-content/NavbarDropdownContent";

interface NavbarLinkProps {
  text: string;
  link: string;
}

export const NavbarLink = component$((props: NavbarLinkProps) => {
  useStyles$(styles);
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
    <>
      {text === "header.text_services" ? (
        <DropdownHover
          classWrapper={"xl:w-[103px] translate-underline__hover-line__dark"}
        >
          <li q:slot={"trigger"}>
            <CustomLink
              href={href}
              variant={"navLink"}
              ariaLabel={ariaLabel}
              className={`gap-[10px] transition-all hover:text-lightDarkGrey active:text-main ${
                activeLink.value ? "_nav-item-activ" : ""
              }`}
            >
              {t(`${text}`)}
              <ArrowDownIcon />
            </CustomLink>
          </li>
          <NavbarDropdownContent />
        </DropdownHover>
      ) : (
        <li>
          <CustomLink
            href={href}
            variant={"navLink"}
            ariaLabel={ariaLabel}
            className={activeLink.value ? "_nav-item-activ" : ""}
          >
            {t(`${text}`)}
          </CustomLink>
        </li>
      )}
    </>
  );
});
