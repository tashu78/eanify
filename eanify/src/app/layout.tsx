import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CookieBanner } from "@/components/CookieBanner";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "EANify - Coduri EAN valide pentru marketplace-uri online",
    template: "%s | EANify",
  },
  description:
    "Cumpără coduri EAN / GTIN valide pentru Amazon, eMAG, Shopify și alte platforme eCommerce. Livrare instant după plată, fără taxe anuale.",
  keywords: [
    "coduri EAN",
    "coduri GTIN",
    "EAN pentru Amazon",
    "EAN pentru eMAG",
    "coduri de bare",
    "barcode",
    "EAN-13",
    "vânzare coduri EAN",
    "cumpără EAN",
  ],
  authors: [{ name: "EANify" }],
  creator: "EANify",
  metadataBase: new URL("https://eanify.store"),
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    type: "website",
    locale: "ro_RO",
    url: "https://eanify.store",
    siteName: "EANify",
    title: "EANify - Coduri EAN valide pentru marketplace-uri online",
    description:
      "Cumpără coduri EAN / GTIN valide pentru Amazon, eMAG, Shopify și alte platforme eCommerce. Livrare instant după plată.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ro" className={inter.variable}>
      <body className="min-h-screen flex flex-col font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
