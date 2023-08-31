import { component$ } from "@builder.io/qwik";
import { NAV_LINKS } from "~/tools/variables/navLinks";
import { NavbarDropdownLink } from "~/components/shared/navbar/navbar-dropdown-content/navbar-dropdown-link/NavbarDropdownLink";

export const NavbarDropdownContent = component$(() => {
  return (
    <ul class={"grid grid-cols-2 gap-x-[106px] gap-y-[10px]"}>
      {NAV_LINKS.map((link) => (
        <NavbarDropdownLink text={link.name} link={link.path} />
      ))}
    </ul>
  );
});
