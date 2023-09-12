import { component$ } from "@builder.io/qwik";
import { Image } from "@unpic/qwik";
import { type IAchievementsItems, type IItemsDiscuss } from "~/types/IDiscuss";

export const DiscussSlide = component$((props: IItemsDiscuss) => {
  const { achievements, description, image, name, position } = props;

  return (
    <div class="splide__slide sm: min-w-[88vw] min-h-[800px] md: lg:min-h-[460px] xl: 1xl:min-w-[60vw] 2xl:min-w-[60vw] 3xl:min-w-[60vw] ">
      <div class="relative float-left w-full">
        <div class="border-t-[1px] border-middleGrey pb-[76px] lg:flex lg:pb-[88px] xl:gap-[40px] xl:border-t-0 xl:pl-[50px] 2xl:gap-[63px] 2xl:pl-[152px]">
          <div class="relative mt-[34px] mb-9 flex lg:mt-10 lg:mb-0 lg:basis-[320px] xl:mt-[50px]">
            <div class="relative h-fit">
              <Image
                class="lazyload max-w-[150px] sm:max-w-[240px] xl:max-w-[390px]"
                src={image}
                layout="constrained"
                width={390}
                height={520}
                alt="slide image"
              />
            </div>
            <div class="mt-2 ml-5 lg:hidden">
              <svg
                fill="none"
                height="36"
                width="36"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect fill="#F8F8F8" height="36" rx="18" width="36" />
                <g clip-path="url(#clip0_2259_43482)">
                  <path
                    d="M19.155 17.405v-6.294H25v9.42c0 1.937-.7 3.39-2.098 4.358h-2.847a5.732 5.732 0 0 0 1.498-1.856c.4-.7.6-1.534.6-2.502v-3.125h-2.998zM11 11.111v6.294h2.997v3.126c0 .968-.2 1.802-.599 2.502a5.73 5.73 0 0 1-1.499 1.856h2.848c1.398-.969 2.098-2.421 2.098-4.358v-9.42H11z"
                    fill="#171717"
                  />
                </g>
              </svg>
              <h3 class="my-[10px] text-xl font-medium leading-5 text-light lg:text-2xl lg:leading-[110%]">
                {name}
              </h3>
              <p class="text-xs font-medium leading-4 tracking-[0.14px] text-middleGrey">
                {position}
              </p>
            </div>
          </div>
          <div class="lg:mt-10 lg:flex lg:flex-col lg:w-[430px]">
            <div class="hidden lg:mb-[30px] lg:block">
              <div class="items-end lg:flex lg:gap-7 xl:gap-[29px]">
                <svg
                  class="h-[36px] w-[36px] rounded-full lg:h-[64px] lg:w-[64px]"
                  fill="none"
                  viewBox="0 0 36 36"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    class="h-[36px] w-[36px]"
                    fill="#F8F8F8"
                    height="36"
                    rx="18"
                    width="36"
                  />
                  <g clip-path="url(#clip0_2259_43482)">
                    <path
                      d="M19.155 17.405v-6.294H25v9.42c0 1.937-.7 3.39-2.098 4.358h-2.847a5.732 5.732 0 0 0 1.498-1.856c.4-.7.6-1.534.6-2.502v-3.125h-2.998zM11 11.111v6.294h2.997v3.126c0 .968-.2 1.802-.599 2.502a5.73 5.73 0 0 1-1.499 1.856h2.848c1.398-.969 2.098-2.421 2.098-4.358v-9.42H11z"
                      fill="#171717"
                    />
                  </g>
                </svg>
                <div class="mb-0">
                  <h3 class="my-[10px] text-xl font-medium leading-5 text-light lg:text-2xl lg:leading-[110%] xl:text-[32px] xl:leading-[35px]">
                    {name}
                  </h3>
                  <p class="text-xs font-medium leading-4 tracking-[0.14px] text-middleGrey lg:tracking-[1.14px] xl:text-base xl:leading-[19px]">
                    {position}
                  </p>
                </div>
              </div>
            </div>
            <div class="lg:grow 2xl:grid 2xl:gap-[115px]">
              <p class="mb-[99px] text-base font-medium leading-[139%] text-light lg:mb-[53px] lg:max-w-[456px] xl:max-w-[400px] 2xl:min-w-[470px] 3xl:min-w-[630px] 2xl:text-2xl 2xl:leading-[34px]">
                {description}
              </p>
            </div>
            <div class="flex gap-[35px] lg:gap-0">
              {achievements.map((item: IAchievementsItems) => {
                return (
                  <>
                    <div class="flex items-center gap-2">
                      <div class="text-[28px] font-bold leading-[1.2] tracking-[2.56px] text-[#FF304D] xl:text-[38px] 2xl:text-[64px]">
                        {item.text_1}
                      </div>
                      <div class="text-[10px] font-medium leading-[1.2] text-light xl:text-base">
                        {item.text_2}
                      </div>
                    </div>
                    ;
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
