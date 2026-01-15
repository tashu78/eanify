import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { Logo } from "@/components/Logo";

const footerLinks = {
  produs: [
    { name: "Prețuri", href: "/preturi" },
    { name: "Cum funcționează", href: "/cum-functioneaza" },
    { name: "Verificare EAN", href: "/verificare-ean" },
    { name: "Generator cod de bare", href: "/generator-cod-bare-ean" },
  ],
  companie: [
    { name: "Despre noi", href: "/despre-noi" },
    { name: "Contact", href: "/contact" },
    { name: "Întrebări frecvente", href: "/intrebari-frecvente" },
  ],
  legal: [
    { name: "Termeni și condiții", href: "/termeni-conditii" },
    { name: "Politica de confidențialitate", href: "/politica-confidentialitate" },
    { name: "Politica cookies", href: "/politica-cookies" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <Logo size="md" />
            <p className="text-sm text-muted-foreground max-w-xs">
              Coduri EAN valide pentru marketplace-uri online. Livrare instant, fără taxe anuale.
            </p>
          </div>

          {/* Produs */}
          <div>
            <h3 className="text-sm font-semibold mb-4">Produs</h3>
            <ul className="space-y-3">
              {footerLinks.produs.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Companie */}
          <div>
            <h3 className="text-sm font-semibold mb-4">Companie</h3>
            <ul className="space-y-3">
              {footerLinks.companie.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold mb-4">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Disclaimer */}
        <div className="bg-muted/80 rounded-lg p-4 mb-8">
          <p className="text-xs text-muted-foreground text-center">
            <strong>Disclaimer:</strong> Codurile EAN / GTIN oferite sunt coduri valide, emise anterior,
            și NU sunt înregistrate pe numele cumpărătorului în baza de date GS1.
            Aceste coduri sunt acceptate de marketplace-uri și platforme eCommerce.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} EANify. Toate drepturile rezervate.
          </p>
          <p className="text-sm text-muted-foreground">
            eanify.store
          </p>
        </div>
      </div>
    </footer>
  );
}
