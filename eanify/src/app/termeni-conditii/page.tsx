import type { Metadata } from "next";
import { Disclaimer } from "@/components/Disclaimer";

export const metadata: Metadata = {
  title: "Termeni și condiții",
  description: "Termenii și condițiile de utilizare a serviciilor EANify pentru achiziția codurilor EAN.",
};

export default function TermsPage() {
  return (
    <>
      <section className="bg-gradient-brand-light py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
            Termeni și <span className="text-gradient">condiții</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ultima actualizare: Ianuarie 2026
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto prose prose-gray dark:prose-invert">
            <Disclaimer />

            <h2>1. Informații generale</h2>
            <p>
              Prezentul document stabilește termenii și condițiile de utilizare a website-ului eanify.store
              și a serviciilor oferite de EANify. Prin accesarea și utilizarea serviciilor noastre,
              acceptați în mod explicit acești termeni.
            </p>

            <h2>2. Definiții</h2>
            <ul>
              <li><strong>EANify</strong> - operatorul website-ului eanify.store</li>
              <li><strong>Utilizator/Client</strong> - persoana care accesează sau achiziționează servicii</li>
              <li><strong>Coduri EAN</strong> - coduri de bare în format EAN-13</li>
              <li><strong>Servicii</strong> - vânzarea și livrarea codurilor EAN</li>
            </ul>

            <h2>3. Servicii oferite</h2>
            <p>
              EANify oferă servicii de vânzare a codurilor EAN (European Article Number) în format EAN-13.
              Codurile sunt livrate electronic, în format PDF și CSV, la adresa de email specificată de client.
            </p>

            <h2>4. Natura codurilor EAN</h2>
            <p>
              Codurile EAN oferite sunt coduri valide din punct de vedere tehnic, emise anterior.
              Aceste coduri NU sunt înregistrate pe numele cumpărătorului în baza de date GS1
              (organizația internațională care administrează standardul EAN).
            </p>
            <p>
              Codurile sunt acceptate de majoritatea marketplace-urilor și platformelor eCommerce,
              dar clientul este responsabil să verifice cerințele specifice ale fiecărei platforme.
            </p>

            <h2>5. Procesul de comandă</h2>
            <p>
              Clientul selectează pachetul dorit, completează datele necesare și efectuează plata.
              După confirmarea plății, codurile sunt livrate automat pe email în câteva minute.
            </p>

            <h2>6. Prețuri și plăți</h2>
            <p>
              Prețurile afișate pe website sunt exprimate în RON și includ toate taxele aplicabile.
              Plata se poate efectua prin metodele disponibile pe website.
              Factura fiscală este emisă și trimisă electronic după finalizarea comenzii.
            </p>

            <h2>7. Livrare</h2>
            <p>
              Livrarea codurilor EAN se face exclusiv în format electronic, prin email.
              Timpul de livrare este instant (câteva minute de la confirmarea plății).
              Clientul este responsabil să furnizeze o adresă de email validă și funcțională.
            </p>

            <h2>8. Politica de returnare</h2>
            <p>
              Datorită naturii digitale a produselor, odată ce codurile au fost livrate,
              acestea nu pot fi returnate. Vă rugăm să verificați cu atenție comanda înainte de finalizare.
            </p>

            <h2>9. Responsabilități</h2>
            <p>
              EANify garantează că codurile livrate sunt valide din punct de vedere tehnic.
              Nu ne asumăm responsabilitatea pentru:
            </p>
            <ul>
              <li>Refuzul anumitor platforme de a accepta codurile</li>
              <li>Modificări ale politicilor marketplace-urilor</li>
              <li>Utilizarea incorectă a codurilor de către client</li>
              <li>Probleme cauzate de furnizarea unor date incorecte de către client</li>
            </ul>

            <h2>10. Proprietate intelectuală</h2>
            <p>
              Conținutul website-ului, inclusiv texte, grafică, logo-uri și design,
              sunt proprietatea EANify și sunt protejate de legile privind drepturile de autor.
            </p>

            <h2>11. Modificări</h2>
            <p>
              EANify își rezervă dreptul de a modifica acești termeni în orice moment.
              Modificările intră în vigoare la data publicării pe website.
            </p>

            <h2>12. Contact</h2>
            <p>
              Pentru orice întrebări legate de acești termeni, ne puteți contacta la: contact@eanify.store
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
