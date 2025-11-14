import type { Metadata } from "next";
import { RootProvider } from 'fumadocs-ui/provider';
import { Inter } from 'next/font/google';
import type { ReactNode } from 'react';
import "./globals.css";

const inter = Inter({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: "Megazord UI",
  description: "A React UI component library built with TailwindCSS v4",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body>
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
