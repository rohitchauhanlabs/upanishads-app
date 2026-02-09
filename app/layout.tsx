import type { Metadata } from "next";
import "./globals.css";

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
        <main className="relative">{children}</main>
      </body>
    </html>
  );
}
