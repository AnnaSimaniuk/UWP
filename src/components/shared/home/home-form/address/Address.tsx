import { component$ } from "@builder.io/qwik";

export const Address = component$(() => {
  return (
    <div
      itemProp="address"
      itemScope
      itemType="http://schema.org/PostalAddress"
    >
      <a
        aria-label={"Onnekop, Per Bings vag 13B, 242 98 Horby, Sweden"}
        class="mb-5 block text-xs font-medium leading-6 text-white transition ease-in hover:text-main lg:mb-[24px] lg:text-base xl:mb-[37px] xl:max-w-[195px] 2xl:max-w-[282px]"
        href={
          "https://www.google.com/maps/place/%C3%96nnek%C3%B6p+Per+Bings+v%C3%A4g+13B,+242+98+H%C3%B6rby,+%D0%A8%D0%B2%D0%B5%D1%86%D0%B8%D1%8F/@55.7876804,13.8727175,18z/data=!4m6!3m5!1s0x46540b48629ac2ed:0x23e8d59f75097169!8m2!3d55.7877221!4d13.8730635!16s%2Fg%2F11csh8f9b5?hl=ru&coh=164777&entry=tt&shorturl=1"
        }
        rel="noopenner noreferrer"
        target="_blank"
      >
        <span itemProp="streetAddress">{"Onnekop, Per Bings vag 13B"}</span>,
        <span itemProp="postalCode"> {"242 98"}</span>
        <span itemProp="addressLocality"> {"Horby, Sweden"}</span>
      </a>
    </div>
  );
});
