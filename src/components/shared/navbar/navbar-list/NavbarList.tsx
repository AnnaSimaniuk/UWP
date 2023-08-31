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

      {/*<li class="translate-underline__hover-line__dark group/item relative xl:w-[103px]">*/}
      {/*  <a*/}
      {/*    aria-label="{text_services}"*/}
      {/*    class="flex items-center gap-[10px] transition-all hover:text-lightDarkGrey active:text-main{class_active_services}"*/}
      {/*    href="{href_services_all}"*/}
      {/*  >*/}
      {/*    {text_services}*/}
      {/*    <span>*/}
      {/*      <svg*/}
      {/*        class="stroke-current transition-all"*/}
      {/*        fill="none"*/}
      {/*        height="6"*/}
      {/*        viewBox="0 0 12 6"*/}
      {/*        width="12"*/}
      {/*        xmlns="http://www.w3.org/2000/svg"*/}
      {/*      >*/}
      {/*        <path*/}
      {/*          d="M0.833008 0.5L5.83301 5.5L10.833 0.5"*/}
      {/*          stroke-linecap="round"*/}
      {/*          stroke-linejoin="round"*/}
      {/*        />*/}
      {/*      </svg>*/}
      {/*    </span>*/}
      {/*  </a>*/}
      {/*  <div class="invisible z-10 opacity-0 transition-all group-hover/item:visible group-hover/item:opacity-100">*/}
      {/*    <div class="absolute left-0 top-[20px] flex justify-center pt-[34px]">*/}
      {/*      <div class="dropdown__wrapper flex min-w-max cursor-default gap-[106px] rounded-[10px] bg-light px-6 py-[30px] text-dark shadow-2xl">*/}
      {/*        <ul class="flex flex-col gap-[10px]">*/}
      {/*          <li>*/}
      {/*            <a*/}
      {/*              aria-label="{text_services_all}"*/}
      {/*              class="dropdown__link translate-underline__hover-line__dark flex max-w-fit transition-all hover:text-lightDarkGrey active:text-main{class_active_services_all}"*/}
      {/*              href="{href_services_all}"*/}
      {/*            >*/}
      {/*              <p class="text-base font-medium">{text_services_all}</p>*/}
      {/*              <span class="pt-[6px] pl-[10px]">*/}
      {/*                <svg*/}
      {/*                  fill="currentColor"*/}
      {/*                  height="11"*/}
      {/*                  viewBox="0 0 11 11"*/}
      {/*                  width="11"*/}
      {/*                  xmlns="http://www.w3.org/2000/svg"*/}
      {/*                >*/}
      {/*                  <path*/}
      {/*                    clip-rule="evenodd"*/}
      {/*                    d="M7.79202 1.8792H0.664396V0H11V10.3356H9.1208V3.208L1.3288 11L0 9.67122L7.79202 1.8792Z"*/}
      {/*                    fill-rule="evenodd"*/}
      {/*                  ></path>*/}
      {/*                </svg>*/}
      {/*              </span>*/}
      {/*            </a>*/}
      {/*          </li>*/}
      {/*          <li>*/}
      {/*            <a*/}
      {/*              aria-label="{text_digital_marketing}"*/}
      {/*              class="dropdown__link translate-underline__hover-line__dark flex max-w-fit transition-all hover:text-lightDarkGrey active:text-main{class_active_digital_marketing}"*/}
      {/*              href="{href_digital_marketing}"*/}
      {/*            >*/}
      {/*              <p class="text-base font-medium">*/}
      {/*                {text_digital_marketing}*/}
      {/*              </p>*/}
      {/*              <span class="pt-[6px] pl-[10px]">*/}
      {/*                <svg*/}
      {/*                  fill="currentColor"*/}
      {/*                  height="11"*/}
      {/*                  viewBox="0 0 11 11"*/}
      {/*                  width="11"*/}
      {/*                  xmlns="http://www.w3.org/2000/svg"*/}
      {/*                >*/}
      {/*                  <path*/}
      {/*                    clip-rule="evenodd"*/}
      {/*                    d="M7.79202 1.8792H0.664396V0H11V10.3356H9.1208V3.208L1.3288 11L0 9.67122L7.79202 1.8792Z"*/}
      {/*                    fill-rule="evenodd"*/}
      {/*                  ></path>*/}
      {/*                </svg>*/}
      {/*              </span>*/}
      {/*            </a>*/}
      {/*          </li>*/}
      {/*          <li>*/}
      {/*            <a*/}
      {/*              aria-label="{text_smm}"*/}
      {/*              class="dropdown__link translate-underline__hover-line__dark flex max-w-fit transition-all hover:text-lightDarkGrey active:text-main{class_active_smm}"*/}
      {/*              href="{href_smm}"*/}
      {/*            >*/}
      {/*              <p class="text-base font-medium">{text_smm}</p>*/}
      {/*              <span class="pt-[6px] pl-[10px]">*/}
      {/*                <svg*/}
      {/*                  fill="currentColor"*/}
      {/*                  height="11"*/}
      {/*                  viewBox="0 0 11 11"*/}
      {/*                  width="11"*/}
      {/*                  xmlns="http://www.w3.org/2000/svg"*/}
      {/*                >*/}
      {/*                  <path*/}
      {/*                    clip-rule="evenodd"*/}
      {/*                    d="M7.79202 1.8792H0.664396V0H11V10.3356H9.1208V3.208L1.3288 11L0 9.67122L7.79202 1.8792Z"*/}
      {/*                    fill-rule="evenodd"*/}
      {/*                  ></path>*/}
      {/*                </svg>*/}
      {/*              </span>*/}
      {/*            </a>*/}
      {/*          </li>*/}
      {/*          <li>*/}
      {/*            <a*/}
      {/*              aria-label="{text_seo}"*/}
      {/*              class="dropdown__link translate-underline__hover-line__dark flex max-w-fit transition-all hover:text-lightDarkGrey active:text-main{class_active_seo}"*/}
      {/*              href="{href_seo}"*/}
      {/*            >*/}
      {/*              <p class="text-base font-medium">{text_seo}</p>*/}
      {/*              <span class="pt-[6px] pl-[10px]">*/}
      {/*                <svg*/}
      {/*                  fill="currentColor"*/}
      {/*                  height="11"*/}
      {/*                  viewBox="0 0 11 11"*/}
      {/*                  width="11"*/}
      {/*                  xmlns="http://www.w3.org/2000/svg"*/}
      {/*                >*/}
      {/*                  <path*/}
      {/*                    clip-rule="evenodd"*/}
      {/*                    d="M7.79202 1.8792H0.664396V0H11V10.3356H9.1208V3.208L1.3288 11L0 9.67122L7.79202 1.8792Z"*/}
      {/*                    fill-rule="evenodd"*/}
      {/*                  ></path>*/}
      {/*                </svg>*/}
      {/*              </span>*/}
      {/*            </a>*/}
      {/*          </li>*/}
      {/*          <li>*/}
      {/*            <a*/}
      {/*              aria-label="{text_web_development}"*/}
      {/*              class="dropdown__link translate-underline__hover-line__dark flex max-w-fit transition-all hover:text-lightDarkGrey active:text-main{class_active_web_development}"*/}
      {/*              href="{href_web_development}"*/}
      {/*            >*/}
      {/*              <p class="text-base font-medium">{text_web_development}</p>*/}
      {/*              <span class="pt-[6px] pl-[10px]">*/}
      {/*                <svg*/}
      {/*                  fill="currentColor"*/}
      {/*                  height="11"*/}
      {/*                  viewBox="0 0 11 11"*/}
      {/*                  width="11"*/}
      {/*                  xmlns="http://www.w3.org/2000/svg"*/}
      {/*                >*/}
      {/*                  <path*/}
      {/*                    clip-rule="evenodd"*/}
      {/*                    d="M7.79202 1.8792H0.664396V0H11V10.3356H9.1208V3.208L1.3288 11L0 9.67122L7.79202 1.8792Z"*/}
      {/*                    fill-rule="evenodd"*/}
      {/*                  ></path>*/}
      {/*                </svg>*/}
      {/*              </span>*/}
      {/*            </a>*/}
      {/*          </li>*/}
      {/*        </ul>*/}
      {/*        <ul class="flex flex-col gap-[10px]">*/}
      {/*          <li>*/}
      {/*            <a*/}
      {/*              aria-label="{text_branding}"*/}
      {/*              class="dropdown__link translate-underline__hover-line__dark flex max-w-fit transition-all hover:text-lightDarkGrey active:text-main{class_active_branding}"*/}
      {/*              href="{href_branding}"*/}
      {/*            >*/}
      {/*              <p class="text-base font-medium">{text_branding}</p>*/}
      {/*              <span class="p-2 pl-[10px]">*/}
      {/*                <svg*/}
      {/*                  fill="currentColor"*/}
      {/*                  height="11"*/}
      {/*                  viewBox="0 0 11 11"*/}
      {/*                  width="11"*/}
      {/*                  xmlns="http://www.w3.org/2000/svg"*/}
      {/*                >*/}
      {/*                  <path*/}
      {/*                    clip-rule="evenodd"*/}
      {/*                    d="M7.79202 1.8792H0.664396V0H11V10.3356H9.1208V3.208L1.3288 11L0 9.67122L7.79202 1.8792Z"*/}
      {/*                    fill-rule="evenodd"*/}
      {/*                  ></path>*/}
      {/*                </svg>*/}
      {/*              </span>*/}
      {/*            </a>*/}
      {/*          </li>*/}
      {/*          <li>*/}
      {/*            <a*/}
      {/*              aria-label="{text_video_motion}"*/}
      {/*              class="dropdown__link translate-underline__hover-line__dark flex max-w-fit transition-all hover:text-lightDarkGrey active:text-main{class_active_video_motion}"*/}
      {/*              href="{href_video_motion}"*/}
      {/*            >*/}
      {/*              <p class="text-base font-medium">{text_video_motion}</p>*/}
      {/*              <span class="pt-[6px] pl-[10px]">*/}
      {/*                <svg*/}
      {/*                  fill="currentColor"*/}
      {/*                  height="11"*/}
      {/*                  viewBox="0 0 11 11"*/}
      {/*                  width="11"*/}
      {/*                  xmlns="http://www.w3.org/2000/svg"*/}
      {/*                >*/}
      {/*                  <path*/}
      {/*                    clip-rule="evenodd"*/}
      {/*                    d="M7.79202 1.8792H0.664396V0H11V10.3356H9.1208V3.208L1.3288 11L0 9.67122L7.79202 1.8792Z"*/}
      {/*                    fill-rule="evenodd"*/}
      {/*                  ></path>*/}
      {/*                </svg>*/}
      {/*              </span>*/}
      {/*            </a>*/}
      {/*          </li>*/}
      {/*          <li>*/}
      {/*            <a*/}
      {/*              aria-label="{text_ppc}"*/}
      {/*              class="dropdown__link translate-underline__hover-line__dark flex max-w-fit transition-all hover:text-lightDarkGrey active:text-main{class_active_ppc}"*/}
      {/*              href="{href_ppc}"*/}
      {/*            >*/}
      {/*              <p class="text-base font-medium">{text_ppc}</p>*/}
      {/*              <span class="pt-[6px] pl-[10px]">*/}
      {/*                <svg*/}
      {/*                  fill="currentColor"*/}
      {/*                  height="11"*/}
      {/*                  viewBox="0 0 11 11"*/}
      {/*                  width="11"*/}
      {/*                  xmlns="http://www.w3.org/2000/svg"*/}
      {/*                >*/}
      {/*                  <path*/}
      {/*                    clip-rule="evenodd"*/}
      {/*                    d="M7.79202 1.8792H0.664396V0H11V10.3356H9.1208V3.208L1.3288 11L0 9.67122L7.79202 1.8792Z"*/}
      {/*                    fill-rule="evenodd"*/}
      {/*                  ></path>*/}
      {/*                </svg>*/}
      {/*              </span>*/}
      {/*            </a>*/}
      {/*          </li>*/}
      {/*          <li>*/}
      {/*            <a*/}
      {/*              aria-label="{text_mobile_promotion}"*/}
      {/*              class="dropdown__link translate-underline__hover-line__dark flex max-w-fit transition-all hover:text-lightDarkGrey active:text-main{class_active_mobile_promotion}"*/}
      {/*              href="{href_mobile_promotion}"*/}
      {/*            >*/}
      {/*              <p class="text-base font-medium">{text_mobile_promotion}</p>*/}
      {/*              <spa class="pt-[6px] pl-[10px]">*/}
      {/*                <svg*/}
      {/*                  fill="currentColor"*/}
      {/*                  height="11"*/}
      {/*                  viewBox="0 0 11 11"*/}
      {/*                  width="11"*/}
      {/*                  xmlns="http://www.w3.org/2000/svg"*/}
      {/*                >*/}
      {/*                  <path*/}
      {/*                    clip-rule="evenodd"*/}
      {/*                    d="M7.79202 1.8792H0.664396V0H11V10.3356H9.1208V3.208L1.3288 11L0 9.67122L7.79202 1.8792Z"*/}
      {/*                    fill-rule="evenodd"*/}
      {/*                  ></path>*/}
      {/*                </svg>*/}
      {/*              </spa>*/}
      {/*            </a>*/}
      {/*          </li>*/}
      {/*          <li>*/}
      {/*            <a*/}
      {/*              aria-label="{text_tiktok}"*/}
      {/*              class="dropdown__link translate-underline__hover-line__dark flex max-w-fit transition-all hover:text-lightDarkGrey active:text-main{class_active_tiktok}"*/}
      {/*              href="{href_tiktok}"*/}
      {/*            >*/}
      {/*              <p class="text-base font-medium">{text_tiktok}</p>*/}
      {/*              <span class="pt-[6px] pl-[10px]">*/}
      {/*                <svg*/}
      {/*                  fill="currentColor"*/}
      {/*                  height="11"*/}
      {/*                  viewBox="0 0 11 11"*/}
      {/*                  width="11"*/}
      {/*                  xmlns="http://www.w3.org/2000/svg"*/}
      {/*                >*/}
      {/*                  <path*/}
      {/*                    clip-rule="evenodd"*/}
      {/*                    d="M7.79202 1.8792H0.664396V0H11V10.3356H9.1208V3.208L1.3288 11L0 9.67122L7.79202 1.8792Z"*/}
      {/*                    fill-rule="evenodd"*/}
      {/*                  ></path>*/}
      {/*                </svg>*/}
      {/*              </span>*/}
      {/*            </a>*/}
      {/*          </li>*/}
      {/*        </ul>*/}
      {/*      </div>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</li>*/}
      {/*<li>*/}
      {/*  <a*/}
      {/*    aria-label="{text_blog}"*/}
      {/*    class="translate-underline__hover-line__dark{class_active_blog}"*/}
      {/*    href="{href_blog}"*/}
      {/*  >*/}
      {/*    {text_blog}*/}
      {/*  </a>*/}
      {/*</li>*/}
      {/*<li>*/}
      {/*  <a*/}
      {/*    aria-label="{text_contact}"*/}
      {/*    class="translate-underline__hover-line__dark{class_active_contact}"*/}
      {/*    href="{href_contact}"*/}
      {/*  >*/}
      {/*    {text_contact}*/}
      {/*  </a>*/}
      {/*</li>*/}
    </ul>
  );
});
