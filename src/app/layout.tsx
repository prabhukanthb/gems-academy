import type { Metadata } from "next";
import {
  Cormorant_Garamond,
  Fraunces,
  Great_Vibes,
  Noto_Sans_Telugu,
  Outfit,
} from "next/font/google";
import "./globals.css";

const brand = Cormorant_Garamond({
  variable: "--font-brand",
  subsets: ["latin"],
  weight: ["600", "700"],
});

const display = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const script = Great_Vibes({
  variable: "--font-script",
  subsets: ["latin"],
  weight: "400",
});

const body = Outfit({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const telugu = Noto_Sans_Telugu({
  variable: "--font-telugu",
  subsets: ["telugu"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "GEMS Academy | gemsacademy.in",
    template: "%s | GEMS Academy",
  },
  description:
    "GEMS Academy — bilingual English learning and earning programmes in English and Telugu.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${brand.variable} ${display.variable} ${script.variable} ${body.variable} ${telugu.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
