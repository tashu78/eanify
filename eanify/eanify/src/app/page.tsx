import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Disclaimer } from "@/components/Disclaimer";
import { BarcodeHeroImage } from "@/components/Logo";
import { CheckoutButton } from "@/components/CheckoutButton";

const packages = [
  { id: "ean-10", quantity: 10, price: 25, perCode: 2.5 },
  { id: "ean-25", quantity: 25, price: 35, perCode: 1.4 },
  { id: "ean-50", quantity: 50, price: 50, perCode: 1 },
  { id: "ean-100", quantity: 100, price: 80, perCode: 0.8, popular: true },
  { id: "ean-500", quantity: 500, price: 220, perCode: 0.44 },
  { id: "ean-1000", quantity: 1000, price: 350, perCode: 0.35 },
  { id: "ean-5000", quantity: 5000, price: 995, perCode: 0.199 },
];

const benefits = [
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    title: "Livrare instant",
    description: "Primești codurile EAN imediat după confirmarea plății, direct pe email.",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Fără abonament anual",
    description: "Plătești o singură dată și folosești codurile pe termen nelimitat.",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: "Acceptate pe marketplace-uri",
    description: "Codurile funcționează pe Amazon, eMAG, Shopify și alte platforme.",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
      </svg>
    ),
    title: "Plată securizată",
    description: "Procesăm plățile prin metode sigure și verificate.",
  },
];

const steps = [
  {
    number: "01",
    title: "Alegi pachetul",
    description: "Selectează numărul de coduri EAN de care ai nevoie pentru produsele tale.",
  },
  {
    number: "02",
    title: "Plătești online",
    description: "Finalizezi comanda prin metoda de plată preferată, rapid și sigur.",
  },
  {
    number: "03",
    title: "Primești codurile instant",
    description: "Imediat după plată, primești codurile EAN pe email în format PDF și CSV.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-brand-light">
        <div className="container mx-auto px-4 py-16 lg:py-24 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Text */}
            <div className="text-center lg:text-left">
              <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20 border-0">
                Livrare instant pe email
              </Badge>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl mb-6">
                Coduri EAN valide pentru{" "}
                <span className="text-gradient">marketplace-uri online</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
                Livrare instant • Fără taxe anuale • Coduri verificate
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" asChild className="bg-gradient-brand hover:opacity-90 text-base px-8">
                  <Link href="/preturi">Cumpără coduri EAN</Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="text-base px-8">
                  <Link href="/cum-functioneaza">Află mai multe</Link>
                </Button>
              </div>
            </div>
            {/* Right side - Barcode Image */}
            <div className="hidden lg:block">
              <BarcodeHeroImage />
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-0 translate-y-1/2 translate-x-1/2 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      </section>

      {/* Benefits Section */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">De ce să alegi EANify?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Oferim coduri EAN de calitate pentru afacerea ta, cu cele mai bune prețuri și livrare instantă.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit) => (
              <Card key={benefit.title} className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-card">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-gradient-brand flex items-center justify-center text-white mb-4">
                    {benefit.icon}
                  </div>
                  <CardTitle className="text-lg">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Pachete coduri EAN</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Alege pachetul potrivit pentru nevoile tale. Cu cât cumperi mai multe, cu atât economisești mai mult.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-4">
            {packages.map((pkg) => (
              <Card
                key={pkg.quantity}
                className={`relative hover:shadow-xl transition-all ${
                  pkg.popular ? "border-primary shadow-lg scale-105 z-10" : "border-border"
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge className="bg-gradient-brand text-white border-0 text-xs whitespace-nowrap">
                      Cel mai vândut
                    </Badge>
                  </div>
                )}
                <CardHeader className="text-center pb-2 pt-6">
                  <CardTitle className="text-3xl font-bold text-gradient">{pkg.quantity}</CardTitle>
                  <CardDescription className="text-sm">
                    coduri EAN
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center pb-2">
                  <div className="mb-2">
                    <span className="text-2xl font-bold">{pkg.price}</span>
                    <span className="text-muted-foreground text-sm"> LEI</span>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    {pkg.perCode.toFixed(2)} LEI / cod
                  </p>
                </CardContent>
                <CardFooter className="pt-0">
                  <CheckoutButton
                    packageId={pkg.id}
                    popular={pkg.popular}
                    size="sm"
                    className="w-full"
                  >
                    Cumpără
                  </CheckoutButton>
                </CardFooter>
              </Card>
            ))}
          </div>
          <div className="mt-6 text-center">
            <p className="text-sm text-muted-foreground">
              Toate prețurile afișate pe site sunt exprimate în lei (RON) și includ TVA.
            </p>
          </div>
          <div className="mt-6 max-w-3xl mx-auto">
            <Disclaimer />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Cum funcționează?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Procesul de achiziție este simplu și rapid. În doar 3 pași ai codurile EAN.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {steps.map((step, index) => (
              <div key={step.number} className="relative">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-brand text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-gradient-brand opacity-30" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-gradient-brand text-white">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Începe acum</h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto text-lg">
            Obține codurile EAN de care ai nevoie pentru a-ți lista produsele pe marketplace-uri.
          </p>
          <Button size="lg" variant="secondary" asChild className="text-primary font-semibold px-8">
            <Link href="/preturi">Cumpără coduri EAN</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
