import { server$ } from "@builder.io/qwik-city";
import type { TranslationFn } from "qwik-speak";

const loadTranslation$ = server$(async function (lang: string, asset: string) {
  // Absolute urls on server
  const url = `${this.url.origin}/i18n/${lang}/${asset}.json`;
  const response = await fetch(url);

  if (response.ok) {
    return response.json();
  } else {
    console.error(`loadTranslation$: ${url}`, response);
  }
});
/**
 * Translation functions
 */
export const translationFn: TranslationFn = {
  loadTranslation$: loadTranslation$,
};
