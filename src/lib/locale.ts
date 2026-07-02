import { notFound } from "next/navigation";
import { isSupportedLocale, type Locale } from "@/src/config/locales";

export async function readLocale(
  params: Promise<{ locale: string }>,
): Promise<Locale> {
  const { locale } = await params;

  if (!isSupportedLocale(locale)) {
    notFound();
  }

  return locale;
}

