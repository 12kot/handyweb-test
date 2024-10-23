import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";
import { LocalePrefix, Pathnames } from "next-intl/routing";

export const locales = ["ru"] as const;
export type ILocales = typeof locales;
export const pathnames: Pathnames<ILocales> = {
  "/": "/",
  "/pathnames": "/pathnames",
};

export const localePrefix: LocalePrefix<ILocales> = "always";

export default getRequestConfig(async ({ locale }) => {
  if (!locales.includes(locale as 'ru')) return notFound();

  return {
    messages: (await import(`./messages/${locale}.json`)).default,
  };
});
