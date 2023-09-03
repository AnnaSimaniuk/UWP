import { component$ } from "@builder.io/qwik";
import { NAV_LINKS } from "~/tools/variables/navLinks";
import { NavbarLink } from "~/components/shared/navbar/navbar-list/navbar-link/NavbarLink";

export const NavbarList = component$(() => {
  return (
    <ul
      class="text-base text-light transition-all xl:flex xl:justify-between uppercase"
      id="nav"
    >
      {NAV_LINKS.map(({ name, path }) => (
        <NavbarLink text={name} link={path} key={name} />
      ))}
    </ul>
  );
});
