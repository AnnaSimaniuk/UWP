import { component$ } from "@builder.io/qwik";
import { NavbarList } from "~/components/shared/navbar/navbar-list/NavbarList";

export const Navbar = component$(() => {
  return (
    <nav class="xl:block w-[450px] xl:ml-auto xl:mr-auto xl:w-[573px] 2xl:ml-0 2xl:mr-0 2xl:w-[568px]">
      <NavbarList />
    </nav>
  );
});
