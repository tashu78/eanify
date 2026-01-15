import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Disclaimer } from "@/components/Disclaimer";

export const metadata: Metadata = {
  title: "Cum funcționează",
  description: "Află cum să cumperi coduri EAN în doar 3 pași simpli. Proces rapid, livrare instant pe email.",
};

const steps = [
  {
    number: "01",
    title: "Alegi pachetul potrivit",
    description: "Navighează la pagina de prețuri și selectează pachetul de coduri EAN care se potrivește nevoilor tale. Oferim pachete de la 1 până la 1000 de coduri.",
    details: [
      "Pachete pentru toate bugetele",
      "Prețuri degresive la cantități mari",
      "Transparent, fără costuri ascunse",
    ],
  },
  {
    number: "02",
    title: "Finalizezi comanda",
    description: "Completează datele de facturare și alege metoda de plată preferată. Acceptăm plăți prin card bancar, transfer sau alte metode.",
    details: [
      "Proces de checkout simplu",
      "Plăți securizate",
      "Factură fiscală inclusă",
    ],
  },
  {
    number: "03",
    title: "Primești codurile instant",
    description: "Imediat după confirmarea plății, primești codurile EAN pe adresa de email specificată, în format PDF și CSV.",
    details: [
      "Livrare automată pe email",
      "Format PDF cu imagini de bare",
      "Fișier CSV pentru import",
    ],
  },
];

const useCases = [
  {
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z" />
      </svg>
    ),
    title: "Vânzare pe Amazon",
    description: "Listează-ți produsele pe Amazon cu coduri EAN valide și începe să vinzi global.",
  },
  {
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
      </svg>
    ),
    title: "Vânzare pe eMAG",
    description: "Adaugă produse pe eMAG Marketplace cu coduri EAN acceptate de platformă.",
  },
  {
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
    title: "Magazine Shopify",
    description: "Integrează coduri EAN în magazinul tău Shopify pentru gestionare optimă a stocurilor.",
  },
  {
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
      </svg>
    ),
    title: "Gestiune inventar",
    description: "Organizează-ți inventarul cu coduri de bare unice pentru fiecare produs.",
  },
];

export default function HowItWorksPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-brand-light py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
            Cum <span className="text-gradient">funcționează</span>?
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Procesul de achiziție a codurilor EAN este simplu și rapid. În doar câteva minute ai totul pregătit.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-12">
            {steps.map((step, index) => (
              <div key={step.number} className="flex flex-col md:flex-row gap-8 items-start">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-brand text-white flex items-center justify-center text-3xl font-bold">
                    {step.number}
                  </div>
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold mb-3">{step.title}</h2>
                  <p className="text-muted-foreground mb-4">{step.description}</p>
                  <ul className="space-y-2">
                    {step.details.map((detail) => (
                      <li key={detail} className="flex items-center gap-2">
                        <svg className="h-5 w-5 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                        <span className="text-sm">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute left-10 mt-24 h-16 w-0.5 bg-gradient-brand opacity-30" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Unde poți folosi codurile EAN?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Codurile EAN sunt esențiale pentru vânzarea online și gestionarea produselor.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {useCases.map((useCase) => (
              <Card key={useCase.title} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 rounded-xl bg-gradient-brand text-white flex items-center justify-center mx-auto mb-4">
                    {useCase.icon}
                  </div>
                  <CardTitle className="text-lg">{useCase.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{useCase.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Disclaimer />
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Gata să începi?</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Alege pachetul potrivit și primește codurile EAN în câteva minute.
          </p>
          <Button size="lg" asChild className="bg-gradient-brand hover:opacity-90 px-8">
            <Link href="/preturi">Vezi prețurile</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
