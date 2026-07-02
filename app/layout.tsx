import type { Metadata } from "next";
import ThemeRegistry from "@/src/theme/ThemeRegistry";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Q Clinic - Medical Travel",
    template: "%s | Q Clinic",
  },
  description:
    "Template de prezentare pentru clinica medical travel in Turcia, cu pagini de proceduri si formular de contact.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry>{children}</ThemeRegistry>
      </body>
    </html>
  );
}
