import { component$ } from "@builder.io/qwik";
import { FeedbackForm } from "~/components/form/FeedbackForm";
import { Address } from "~/components/shared/home/home-form/address/Address";
import { Contacts } from "~/components/shared/home/home-form/contacts/Contacts";

const data = [
  {
    label: "Email",
    href: "mailto:info@uwp.digital",
    itemprop: "email",
    text: "Shoot us a message",
    class: "mb-5 xl:mb-10",
    textLink: "info@uwp.digital",
  },
  {
    label: "Phone",
    href: "tel:+380 44 333 33 33",
    itemprop: "telephone",
    text: "Call us",
    class: "",
    textLink: "+380 44 333 33 33",
  },
];

export const HomeForm = component$(() => {
  return (
    <section class="form red-gradient-form rounded-b-[30px] bg-dark pt-8 pb-[50px] lg:rounded-b-[40px] lg:pt-[49px] lg:pb-[49px] xl:rounded-b-[50px] xl:pt-[41px] xl:pb-[58px] 2xl:pt-[90px] 2xl:pb-[58px]">
      <div class="container sm:max-w-full lg:px-[30px] 3xl:max-w-[1920px] 3xl:px-[135px]">
        <div class="sticky" id="mainFormWrapper">
          <div>
            <p class="mb-[26px] text-xs font-bold leading-4 text-middleGrey lg:mb-[17px] lg:leading-[140%] xl:hidden">
              GET A DETAILED AND COMPREHENSIVE COMMERCIAL PROPOSAL
            </p>
          </div>
          <div>
            <h2 class="sticy xl:border-b-[1px] xl:border-b-middleGrey m-0 pb-[62px] text-4xl font-bold uppercase leading-[43px] text-white lg:pt-[2px] lg:pb-[44px] lg:text-4xl lg:tracking-[1px] xl:pb-[33px] xl:text-[40px] xl:leading-[59px] xl:tracking-[0px] 2xl:pb-[50px] 2xl:text-[64px] 2xl:leading-[64px] 2xl:tracking-[0px]">
              LET’S PROMOTE YOUR BUSINESS
            </h2>
          </div>
          <div class="xl:flex">
            <div class="mb-[26px] hidden lg:mb-[17px] xl:block xl:pt-[29px] xl:pr-[20px] 2xl:mr-[100px] 2xl:block 2xl:pt-[61px]">
              <p class="uppercase text-xs font-bold leading-4 text-middleGrey xl:max-w-[420px] xl:text-[12px] xl:leading-[23px] xl:tracking-[1px] 2xl:max-w-[300px] 2xl:text-base 2xl:leading-[24px]">
                GET A DETAILED AND COMPREHENSIVE COMMERCIAL PROPOSAL
              </p>
            </div>
            <FeedbackForm
              services={false}
              classForm={
                "flex flex-col xl:mr-[26px] xl:basis-[829px] xl:pt-[28px] 2xl:mr-[70px] 2xl:basis-[754px] 2xl:pt-[65px]"
              }
            />
            <div
              itemScope
              itemType="https://schema.org/LocalBusiness"
              class="lg:border-t-[1px] lg:border-t-middleGrey xl:border-l-[1px] xl:border-l-middleGrey z-10 lg:pt-[29px] xl:mb-[39px] xl:border-t-0 xl:pt-[65px] xl:pl-[25px] 2xl:pl-[45px] 2xl:pr-[133px]"
            >
              <span class="hidden" itemProp="name">
                UWP Group
              </span>
              <Address />
              <div class="lg:grid lg:grid-cols-2 xl:block">
                {data.map((item) => (
                  <Contacts key={item.text} {...item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});
