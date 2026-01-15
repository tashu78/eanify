import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Generator cod de bare EAN",
  description: "Generează gratuit imagini de cod de bare EAN-13 scanabile. Introdu codul EAN existent și descarcă imaginea în format PNG sau SVG.",
};

export default function GeneratorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
