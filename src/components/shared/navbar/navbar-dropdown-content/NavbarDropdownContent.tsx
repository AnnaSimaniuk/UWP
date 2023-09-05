import { component$, useContext } from "@builder.io/qwik";
import { NavbarDropdownLink } from "~/components/shared/navbar/navbar-dropdown-content/navbar-dropdown-link/NavbarDropdownLink";
import { MenuServices } from "~/routes/layout";

export const NavbarDropdownContent = component$(() => {
  const servicesLinks = useContext(MenuServices);

  return (
    <ul class={"grid grid-cols-2 gap-x-[106px] gap-y-[10px]"}>
      {servicesLinks.map((link) => (
        <NavbarDropdownLink text={link.name} link={link.href} key={link.name} />
      ))}
    </ul>
  );
});
