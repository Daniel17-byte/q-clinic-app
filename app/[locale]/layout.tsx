import type { Metadata } from "next";
import LocaleShell from "@/src/components/site/LocaleShell";
import ThemeRegistry from "@/src/theme/ThemeRegistry";
import { defaultLocale, isSupportedLocale, supportedLocales } from "@/src/config/locales";
import { getSiteData } from "@/src/content/site-content";
import "../globals.css";

export async function generateStaticParams() {
  return supportedLocales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: LayoutProps<"/[locale]">): Promise<Metadata> {
  const { locale } = await params;
  if (!isSupportedLocale(locale)) {
    return {};
  }

  const { copy } = getSiteData(locale);
  return {
    title: {
      default: `${copy.brand} - ${copy.hero.title}`,
      template: `%s | ${copy.brand}`,
    },
    description: copy.hero.subtitle,
  };
}

export default async function LocaleLayout({ children, params }: LayoutProps<"/[locale]">) {
  const { locale } = await params;
  // This layout is the root layout, so it must always render <html>/<body> -
  // unsupported locales are rejected by the pages below (readLocale) and fall
  // back to the default chrome while the not-found page renders.
  const activeLocale = isSupportedLocale(locale) ? locale : defaultLocale;

  return (
    <html lang={activeLocale}>
      <body>
        <ThemeRegistry>
          <LocaleShell locale={activeLocale}>{children}</LocaleShell>
        </ThemeRegistry>
      </body>
    </html>
  );
}
