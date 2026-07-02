import type { Metadata } from "next";
import { notFound } from "next/navigation";
import LocaleShell from "@/src/components/site/LocaleShell";
import {
  isSupportedLocale,
  supportedLocales,
  type Locale,
} from "@/src/config/locales";
import { getSiteData } from "@/src/content/site-content";

type LayoutProps = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateStaticParams() {
  return supportedLocales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: LayoutProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isSupportedLocale(locale)) {
    return {};
  }

  const siteData = getSiteData(locale);
  return {
    title: siteData.copy.hero.title,
    description: siteData.copy.hero.subtitle,
  };
}

export default async function LocaleLayout({ children, params }: LayoutProps) {
  const { locale } = await params;

  if (!isSupportedLocale(locale)) {
    notFound();
  }

  return <LocaleShell locale={locale as Locale}>{children}</LocaleShell>;
}

