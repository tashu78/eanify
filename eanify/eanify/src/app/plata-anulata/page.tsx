import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Plată anulată",
  description: "Plata a fost anulată. Poți încerca din nou oricând.",
};

export default function PaymentCancelledPage() {
  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <Card className="max-w-2xl mx-auto shadow-xl text-center">
          <CardHeader className="pb-4">
            <div className="w-20 h-20 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center mx-auto mb-6">
              <svg
                className="h-10 w-10 text-amber-600 dark:text-amber-400"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
                />
              </svg>
            </div>
            <CardTitle className="text-3xl">Plată anulată</CardTitle>
            <CardDescription className="text-lg mt-2">
              Plata nu a fost finalizată
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-muted-foreground">
              Ai anulat procesul de plată sau a apărut o problemă.
              Nu îți face griji, nu ți-a fost debitată nicio sumă.
            </p>

            <div className="bg-muted/50 rounded-lg p-6">
              <h3 className="font-semibold mb-3">Ce poți face?</h3>
              <ul className="text-sm text-muted-foreground space-y-2 text-left">
                <li className="flex items-start gap-2">
                  <svg className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span>Încearcă din nou - poate a fost o eroare temporară</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span>Verifică dacă cardul tău permite plăți online</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span>Contactează-ne dacă ai nevoie de ajutor</span>
                </li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button asChild className="bg-gradient-brand hover:opacity-90">
                <Link href="/preturi">Încearcă din nou</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/contact">Contactează-ne</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
