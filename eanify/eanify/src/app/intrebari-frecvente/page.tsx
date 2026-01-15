import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Disclaimer } from "@/components/Disclaimer";

export const metadata: Metadata = {
  title: "Întrebări frecvente",
  description: "Răspunsuri la cele mai frecvente întrebări despre codurile EAN, procesul de achiziție și utilizare.",
};

const faqs = [
  {
    question: "Ce este un cod EAN?",
    answer: "EAN (European Article Number) este un standard internațional pentru coduri de bare. Codul EAN-13 este cel mai răspândit format și conține 13 cifre. Este utilizat pentru identificarea unică a produselor în comerțul global.",
  },
  {
    question: "Codurile EAN sunt valide și funcționale?",
    answer: "Da, toate codurile EAN pe care le oferim sunt valide din punct de vedere tehnic și au structura corectă conform standardului EAN-13. Acestea pot fi folosite pe marketplace-uri și platforme eCommerce.",
  },
  {
    question: "Codurile sunt înregistrate în baza GS1?",
    answer: "Codurile EAN oferite sunt coduri valide, emise anterior, și NU sunt înregistrate pe numele cumpărătorului în baza de date GS1. Aceste coduri sunt acceptate de majoritatea marketplace-urilor și platformelor eCommerce.",
  },
  {
    question: "Pot folosi codurile pe Amazon?",
    answer: "Da, codurile EAN pe care le oferim sunt acceptate pe Amazon și pot fi folosite pentru listarea produselor. Amazon acceptă coduri EAN valide pentru majoritatea categoriilor de produse.",
  },
  {
    question: "Pot folosi codurile pe eMAG?",
    answer: "Da, codurile EAN sunt acceptate pe eMAG Marketplace. Sunt necesare pentru listarea produselor și gestionarea inventarului pe platformă.",
  },
  {
    question: "Cât de repede primesc codurile?",
    answer: "Livrarea este instantă! Imediat după confirmarea plății, primești codurile pe adresa de email specificată în comandă. Procesul este complet automatizat.",
  },
  {
    question: "În ce format primesc codurile?",
    answer: "Codurile sunt livrate în două formate: PDF (cu imaginile de cod de bare incluse) și CSV (pentru import ușor în sisteme de gestiune). Ambele formate sunt incluse în fiecare comandă.",
  },
  {
    question: "Există taxe anuale sau abonamente?",
    answer: "Nu! Plătești o singură dată pentru codurile comandate și le poți folosi pe termen nelimitat. Nu există taxe anuale, abonamente sau costuri ascunse.",
  },
  {
    question: "Pot folosi un cod pentru mai multe produse?",
    answer: "Nu, fiecare cod EAN ar trebui să fie unic pentru un singur produs (SKU). Dacă ai mai multe produse, ai nevoie de câte un cod pentru fiecare.",
  },
  {
    question: "Ce metode de plată acceptați?",
    answer: "Acceptăm plăți prin card bancar (Visa, Mastercard), transfer bancar și alte metode de plată online. Toate tranzacțiile sunt securizate.",
  },
  {
    question: "Oferiti factură fiscală?",
    answer: "Da, emitem factură fiscală pentru toate comenzile. Factura este trimisă automat pe email după finalizarea comenzii.",
  },
  {
    question: "Pot solicita un pachet personalizat?",
    answer: "Da, pentru cantități mai mari sau cerințe speciale, ne poți contacta și vom crea o ofertă personalizată pentru nevoile tale.",
  },
];

export default function FAQPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-brand-light py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
            Întrebări <span className="text-gradient">frecvente</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Găsește răspunsuri la cele mai comune întrebări despre codurile EAN și serviciile noastre.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border rounded-lg px-6 bg-card shadow-sm"
                >
                  <AccordionTrigger className="text-left font-semibold hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <Disclaimer />
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Nu ai găsit răspunsul?</h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Contactează-ne și îți răspundem în cel mai scurt timp.
          </p>
          <Button asChild className="bg-gradient-brand hover:opacity-90">
            <Link href="/contact">Contactează-ne</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
