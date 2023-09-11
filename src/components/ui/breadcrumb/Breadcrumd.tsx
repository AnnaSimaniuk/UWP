import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

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
          {index !== 0 && (
            <span>
              <svg
                width="3"
                height="5"
                viewBox="0 0 3 5"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.109835 0.104605C0.256282 -0.0348683 0.493718 -0.0348683 0.640165 0.104605L2.89016 2.24746C3.03661 2.38693 3.03661 2.61307 2.89016 2.75254L0.640165 4.8954C0.493718 5.03487 0.256282 5.03487 0.109835 4.8954C-0.0366117 4.75592 -0.0366117 4.52979 0.109835 4.39032L2.09467 2.5L0.109835 0.609681C-0.0366117 0.470208 -0.0366117 0.244078 0.109835 0.104605Z"
                  fill="#919191"
                />
              </svg>
            </span>
          )}
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
