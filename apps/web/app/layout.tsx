import type { Metadata } from "next";
import { SiteFooter } from "@components/site-footer";
import { SiteHeader } from "@components/site-header";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "more than work. — Tu vida es mucho más",
  description:
    "Descubre hobbies y experiencias reales que te ayuden a sentirte más tranquilo, feliz y tú otra vez. Pequeños pasos, grandes cambios.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body className="flex min-h-svh flex-col bg-background text-ink [--page-gutter:min(4.45vw,53.4px)] stacked:[--page-gutter:24px]">
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
