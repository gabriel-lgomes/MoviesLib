import type { Metadata } from "next";
import "./globals.css";
import "tailwindcss/tailwind.css";
import { Inter } from "next/font/google";
import Bebas from "next/font/local";

export const metadata: Metadata = {
  title: "MoviesLib",
  description: "",
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const bebas = Bebas({
  src: "./../../fonts/bebas-neue.ttf",
  variable: "--font-bebas",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} ${bebas.variable}`}>{children}</body>
    </html>
  );
}
