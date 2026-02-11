import type { Metadata } from "next";
import "./globals.css";
import { NavigationShell } from "@/components/NavigationShell";

export const metadata: Metadata = {
  title: "Upanishadic Wisdom — Ancient Wisdom for Modern Anxiety",
  description:
    "Discover timeless teachings from the Upanishads, designed to help you navigate modern anxiety through progressive insight and daily practice.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-cream-50">
        <NavigationShell>
          <main className="relative">{children}</main>
        </NavigationShell>
      </body>
    </html>
  );
}
