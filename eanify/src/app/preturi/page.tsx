import type { Metadata } from "next";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Disclaimer } from "@/components/Disclaimer";
import { CheckoutButton } from "@/components/CheckoutButton";

export const metadata: Metadata = {
  title: "Prețuri coduri EAN",
  description: "Pachete de coduri EAN la cele mai bune prețuri. Livrare instant, format PDF și CSV, fără taxe anuale.",
};

const packages = [
  {
    id: "ean-10",
    quantity: 10,
    price: 25,
    perCode: 2.5,
    features: ["Livrare instant pe email", "Format PDF + CSV", "10 coduri EAN-13 valide", "Suport tehnic inclus"]
  },
  {
    id: "ean-25",
    quantity: 25,
    price: 35,
    perCode: 1.4,
    features: ["Livrare instant pe email", "Format PDF + CSV", "25 coduri EAN-13 valide", "Suport tehnic inclus", "Economisești 44%"]
  },
  {
    id: "ean-50",
    quantity: 50,
    price: 50,
    perCode: 1,
    features: ["Livrare instant pe email", "Format PDF + CSV", "50 coduri EAN-13 valide", "Suport tehnic inclus", "Economisești 60%"]
  },
  {
    id: "ean-100",
    quantity: 100,
    price: 80,
    perCode: 0.8,
    popular: true,
    features: ["Livrare instant pe email", "Format PDF + CSV", "100 coduri EAN-13 valide", "Suport tehnic prioritar", "Economisești 68%"]
  },
  {
    id: "ean-500",
    quantity: 500,
    price: 220,
    perCode: 0.44,
    features: ["Livrare instant pe email", "Format PDF + CSV", "500 coduri EAN-13 valide", "Suport tehnic prioritar", "Economisești 82%"]
  },
  {
    id: "ean-1000",
    quantity: 1000,
    price: 350,
    perCode: 0.35,
    features: ["Livrare instant pe email", "Format PDF + CSV", "1000 coduri EAN-13 valide", "Suport tehnic dedicat", "Economisești 86%"]
  },
  {
    id: "ean-5000",
    quantity: 5000,
    price: 995,
    perCode: 0.199,
    features: ["Livrare instant pe email", "Format PDF + CSV", "5000 coduri EAN-13 valide", "Suport tehnic dedicat", "Economisești 92%"]
  },
];

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-brand-light py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
            Prețuri <span className="text-gradient">transparente</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Alege pachetul potrivit pentru afacerea ta. Toate pachetele includ livrare instant și suport.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {packages.map((pkg) => (
              <Card
                key={pkg.quantity}
                className={`relative flex flex-col ${
                  pkg.popular ? "border-primary shadow-xl scale-105 z-10" : "border-border shadow-lg"
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge className="bg-gradient-brand text-white border-0 px-4 py-1">
                      Cel mai vândut
                    </Badge>
                  </div>
                )}
                <CardHeader className="text-center pt-8">
                  <CardTitle className="text-5xl font-bold text-gradient">{pkg.quantity}</CardTitle>
                  <CardDescription className="text-lg">
                    coduri EAN
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="text-center mb-6">
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-4xl font-bold">{pkg.price}</span>
                      <span className="text-xl text-muted-foreground">LEI</span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">
                      {pkg.perCode.toFixed(2)} LEI / cod
                    </p>
                  </div>
                  <ul className="space-y-3">
                    {pkg.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <svg className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="pt-4">
                  <CheckoutButton
                    packageId={pkg.id}
                    popular={pkg.popular}
                    size="lg"
                    className="w-full"
                  >
                    Cumpără acum
                  </CheckoutButton>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground">
              Toate prețurile afișate pe site sunt exprimate în lei (RON) și includ TVA.
            </p>
          </div>

          <Disclaimer />

          {/* Additional Info */}
          <div className="mt-16 max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-8">Ce primești?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6 rounded-lg bg-muted/50">
                <div className="w-12 h-12 rounded-full bg-gradient-brand text-white flex items-center justify-center mx-auto mb-4">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">Format PDF</h3>
                <p className="text-sm text-muted-foreground">Document PDF cu toate codurile și imaginile de bare</p>
              </div>
              <div className="text-center p-6 rounded-lg bg-muted/50">
                <div className="w-12 h-12 rounded-full bg-gradient-brand text-white flex items-center justify-center mx-auto mb-4">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h7.5c.621 0 1.125-.504 1.125-1.125m-9.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-7.5A1.125 1.125 0 0112 18.375m9.75-12.75c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125m19.5 0v1.5c0 .621-.504 1.125-1.125 1.125M2.25 5.625v1.5c0 .621.504 1.125 1.125 1.125m0 0h17.25m-17.25 0h7.5c.621 0 1.125.504 1.125 1.125M3.375 8.25c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m17.25-3.75h-7.5c-.621 0-1.125.504-1.125 1.125m8.625-1.125c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M12 10.875v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125M13.125 12h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125M20.625 12c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5M12 14.625v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 14.625c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m0 1.5v-1.5m0 0c0-.621.504-1.125 1.125-1.125m0 0h7.5" />
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">Format CSV</h3>
                <p className="text-sm text-muted-foreground">Fișier CSV pentru import rapid în sisteme</p>
              </div>
              <div className="text-center p-6 rounded-lg bg-muted/50">
                <div className="w-12 h-12 rounded-full bg-gradient-brand text-white flex items-center justify-center mx-auto mb-4">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                </div>
                <h3 className="font-semibold mb-2">Coduri valide</h3>
                <p className="text-sm text-muted-foreground">Toate codurile sunt verificate și funcționale</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
