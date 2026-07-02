export const supportedLocales = ["ro", "en", "tr"] as const;

export type Locale = (typeof supportedLocales)[number];

export const defaultLocale: Locale = "ro";

export function isSupportedLocale(locale: string): locale is Locale {
  return supportedLocales.includes(locale as Locale);
}

