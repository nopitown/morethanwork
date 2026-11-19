import type { Metadata } from "next";
import "./globals.css";

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
      <body>{children}<script src="https://mcp.figma.com/mcp/html-to-design/capture.js" async /></body>
    </html>
  );
}
