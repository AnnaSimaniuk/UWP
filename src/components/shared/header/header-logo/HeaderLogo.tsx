import { component$ } from "@builder.io/qwik";
import { LogoIcon } from "~/assets/icons";
import { Link } from "@builder.io/qwik-city";
import { useTranslate } from "qwik-speak";
import { useHref } from "~/hooks/useHref";

export const HeaderLogo = component$(() => {
  const t = useTranslate();
  const { href } = useHref("");
  return (
    <div class="flex items-center py-[19px] lg:py-[17px] 2xl:py-[21px]">
      <Link
        aria-label={t("header.label_logo")}
        class="logo__link flex h-10 lg:h-12"
        href={href}
      >
        <div class="h-[41px] w-[103px] lg:h-[42px] lg:w-[136px] xl:h-[48px] xl:w-[121px] 2xl:w-[123px]">
          <LogoIcon />
        </div>
      </Link>
    </div>
  );
});
