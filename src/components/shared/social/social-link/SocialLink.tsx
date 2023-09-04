import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

interface SocialLinkProps {
  label: string;
  href: string;
  icon: string;
  title: string;
  classLink?: string;
  classIcon?: string;
}

export const SocialLink = component$((props: SocialLinkProps) => {
  const { label, href, icon, title, classIcon, classLink } = props;
  return (
    <li>
      <Link
        aria-label={label}
        class={classLink}
        href={href}
        rel="noopener noreferrer"
        target="_blank"
        title={title}
      >
        <span class={classIcon} dangerouslySetInnerHTML={icon} />
      </Link>
    </li>
  );
});
