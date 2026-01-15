import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Disclaimer } from "@/components/Disclaimer";

export const metadata: Metadata = {
  title: "Despre noi",
  description: "Aflați mai multe despre EANify - furnizor de coduri EAN pentru afaceri online din România.",
};

const stats = [
  { value: "10.000+", label: "Coduri livrate" },
  { value: "500+", label: "Clienți mulțumiți" },
  { value: "99.9%", label: "Rată de satisfacție" },
  { value: "24/7", label: "Suport disponibil" },
];

const values = [
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    title: "Rapiditate",
    description: "Livrăm codurile instant, imediat după confirmarea plății.",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: "Calitate",
    description: "Toate codurile sunt verificate și funcționale pe marketplace-uri.",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
      </svg>
    ),
    title: "Transparență",
    description: "Prețuri clare, fără costuri ascunse sau taxe anuale.",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
      </svg>
    ),
    title: "Suport",
    description: "Echipa noastră este mereu disponibilă să te ajute.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-gradient-brand-light py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
            Despre <span className="text-gradient">EANify</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Suntem dedicați să oferim coduri EAN de calitate pentru afacerile online din România.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-gradient mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Povestea noastră</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                EANify s-a născut din dorința de a simplifica accesul antreprenorilor români la codurile de bare
                necesare pentru vânzarea online. Am observat că mulți vânzători întâmpină dificultăți în obținerea
                codurilor EAN rapid și la prețuri accesibile.
              </p>
              <p>
                Misiunea noastră este să oferim un proces simplu, rapid și transparent pentru achiziția codurilor EAN.
                Credem că fiecare afacere, indiferent de dimensiune, merită acces la instrumentele necesare pentru
                a-și lista produsele pe marketplace-uri internaționale.
              </p>
              <p>
                Cu o echipă dedicată și un sistem automatizat de livrare, garantăm că vei primi codurile EAN
                în câteva minute de la finalizarea comenzii.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Valorile noastre</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Principiile care ne ghidează în fiecare zi.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {values.map((value) => (
              <Card key={value.title} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-brand text-white flex items-center justify-center mx-auto mb-4">
                    {value.icon}
                  </div>
                  <h3 className="font-semibold mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <Disclaimer />
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-gradient-brand text-white">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Pregătit să începi?</h2>
          <p className="text-white/90 mb-8 max-w-xl mx-auto">
            Alege pachetul potrivit și primește codurile EAN în câteva minute.
          </p>
          <Button size="lg" variant="secondary" asChild className="text-primary font-semibold">
            <Link href="/preturi">Vezi prețurile</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
