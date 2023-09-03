import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

interface SocialLinkProps {
  label: string;
  href: string;
  icon: string;
  title: string;
}

export const SocialLink = component$((props: SocialLinkProps) => {
  const { label, href, icon, title } = props;
  return (
    <li>
      <Link
        aria-label={label}
        class="social__link-menu"
        href={href}
        rel="noopener noreferrer"
        target="_blank"
        title={title}
      >
        <span class="icon-menu" dangerouslySetInnerHTML={icon} />
      </Link>
    </li>
  );
});
