import { component$ } from "@builder.io/qwik";

interface ContactsProps {
  label: string;
  href: string;
  itemprop: string;
  text: string;
  class: string;
  textLink: string;
}

export const Contacts = component$((props: ContactsProps) => {
  const { label, href, itemprop, text, class: classProp, textLink } = props;
  return (
    <div>
      <a
        aria-label={label}
        class="mb-1 block whitespace-nowrap text-xl font-semibold leading-[1.1] text-white transition ease-in hover:text-main lg:mb-[11px] lg:text-2xl lg:leading-[1.1] xl:mb-4 xl:text-xl xl:leading-[1.1] 2xl:text-2xl 2xl:leading-[1.1]"
        href={href}
        rel="noopener noreferrer"
      >
        <span itemProp={itemprop}>{textLink}</span>
      </a>
      <p
        class={`text-xs font-medium leading-6 tracking-[0.4px] text-middleGrey lg:text-base xl:text-base ${classProp}`}
      >
        {text}
      </p>
    </div>
  );
});
