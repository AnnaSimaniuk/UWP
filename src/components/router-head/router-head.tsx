import { useDocumentHead, useLocation } from "@builder.io/qwik-city";

import { component$ } from "@builder.io/qwik";
import { useTranslate } from "qwik-speak";

/**
 * The RouterHead component is placed inside of the document `<head>` element.
 */
export const RouterHead = component$(() => {
  const head = useDocumentHead();
  const loc = useLocation();
  const t = useTranslate();

  return (
    <>
      <title>{t(head.title)}</title>

      <meta content="true" name="HandheldFriendly" />
      <meta content="320" name="MobileOptimized" />
      <link
        href="/favicons/apple-touch-icon.png"
        rel="apple-touch-icon"
        sizes="180x180"
      />
      <link
        href="/favicons/favicon-32x32.png"
        rel="icon"
        sizes="32x32"
        type="image/png"
      />
      <link
        href="/favicons/favicon-16x16.png"
        rel="icon"
        sizes="16x16"
        type="image/png"
      />
      <link href="/favicons/site.webmanifest" rel="manifest" />
      <link
        color="#909090"
        href="/favicons/safari-pinned-tab.svg"
        rel="mask-icon"
      />
      <link href="/favicon.ico" rel="shortcut icon" type="image/x-icon" />
      <meta content="UWP Digital" name="apple-mobile-web-app-title" />
      <meta content="UWP Digital" name="application-name" />
      <meta content="#ff304d" name="msapplication-TileColor" />
      <meta content="/favicons/browserconfig.xml" name="msapplication-config" />
      <meta content="#ffffff" name="theme-color" />
      <meta
        name="facebook-domain-verification"
        content="nqs7t7pyg6tvz4ejq4z5bk6ntc05n9"
      />
      <link rel="canonical" href={loc.url.href} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      {head.meta.map((m) => (
        <meta
          key={m.key}
          name={m.name}
          content={m.name === "description" ? t(m.content!) : m.content}
        />
      ))}

      {head.links.map((l) => (
        <link key={l.key} {...l} />
      ))}

      {head.styles.map((s) => (
        <style key={s.key} {...s.props} dangerouslySetInnerHTML={s.style} />
      ))}
    </>
  );
});
