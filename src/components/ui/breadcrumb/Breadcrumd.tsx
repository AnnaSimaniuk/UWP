import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { ArrowBreadcrumb } from "~/assets/icons/ArrowBreadcrumb";

interface BreadcrumbItem {
  text: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  currentPage?: string;
}

export const Breadcrumb = component$((props: BreadcrumbProps) => {
  const { items, currentPage } = props;
  console.log("currentPage:", currentPage);

  return (
    <ol class="mb-5 flex items-center gap-1 text-[#919191] lg:mb-[35px] lg:pt-[6px] xl:mb-[25px] xl:gap-[6px] xl:pb-[7px] xl:text-[4px] 2xl:gap-[8px] 2xl:pb-[7px] 2xl:text-[10px]">
      {items.map((item, index) => (
        <li key={index} class="breadcrums-slot">
          {index !== 0 && <ArrowBreadcrumb />}
          {currentPage === item.text ? (
            <span class="text-[8px] font-semibold hover:text-[#919191] leading-[140%] xl:text-[10px]">
              {item.text}
            </span>
          ) : (
            <Link
              id={item.href}
              href={item.href}
              class="text-[8px] font-normal leading-[140%] hover:text-main xl:text-[10px]"
            >
              <span>{item.text}</span>
            </Link>
          )}
          <meta itemProp="position" content={(index + 1).toString()} />
        </li>
      ))}
    </ol>
  );
});
