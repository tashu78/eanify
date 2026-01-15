import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politica de confidențialitate",
  description: "Politica de confidențialitate EANify - cum colectăm, utilizăm și protejăm datele personale.",
};

export default function PrivacyPage() {
  return (
    <>
      <section className="bg-gradient-brand-light py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
            Politica de <span className="text-gradient">confidențialitate</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ultima actualizare: Ianuarie 2026
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto prose prose-gray dark:prose-invert">
            <h2>1. Introducere</h2>
            <p>
              EANify respectă confidențialitatea datelor dumneavoastră personale.
              Această politică descrie modul în care colectăm, utilizăm și protejăm informațiile personale
              în conformitate cu Regulamentul General privind Protecția Datelor (GDPR).
            </p>

            <h2>2. Date colectate</h2>
            <p>Colectăm următoarele categorii de date personale:</p>
            <ul>
              <li><strong>Date de identificare:</strong> nume, prenume</li>
              <li><strong>Date de contact:</strong> adresă de email, număr de telefon</li>
              <li><strong>Date de facturare:</strong> adresă, date firmă (pentru persoane juridice)</li>
              <li><strong>Date tehnice:</strong> adresă IP, tip browser, date despre dispozitiv</li>
              <li><strong>Date de tranzacție:</strong> istoricul comenzilor, metode de plată utilizate</li>
            </ul>

            <h2>3. Scopul colectării datelor</h2>
            <p>Utilizăm datele personale pentru:</p>
            <ul>
              <li>Procesarea și livrarea comenzilor</li>
              <li>Emiterea facturilor fiscale</li>
              <li>Comunicarea cu clienții privind comenzile</li>
              <li>Îmbunătățirea serviciilor noastre</li>
              <li>Respectarea obligațiilor legale</li>
              <li>Trimiterea de comunicări comerciale (cu acordul explicit)</li>
            </ul>

            <h2>4. Temeiul legal</h2>
            <p>Prelucrăm datele personale în baza:</p>
            <ul>
              <li>Executării contractului (procesarea comenzilor)</li>
              <li>Obligațiilor legale (facturare, contabilitate)</li>
              <li>Consimțământului (newsletter, comunicări comerciale)</li>
              <li>Interesului legitim (îmbunătățirea serviciilor)</li>
            </ul>

            <h2>5. Perioada de stocare</h2>
            <p>
              Păstrăm datele personale pentru perioada necesară îndeplinirii scopurilor pentru care au fost colectate:
            </p>
            <ul>
              <li>Datele de comandă: 10 ani (obligații fiscale)</li>
              <li>Datele de cont: până la solicitarea ștergerii</li>
              <li>Datele tehnice: 12 luni</li>
              <li>Comunicări marketing: până la retragerea consimțământului</li>
            </ul>

            <h2>6. Drepturile dumneavoastră</h2>
            <p>Conform GDPR, aveți următoarele drepturi:</p>
            <ul>
              <li><strong>Dreptul de acces</strong> - să solicitați o copie a datelor personale</li>
              <li><strong>Dreptul la rectificare</strong> - să corectați datele incorecte</li>
              <li><strong>Dreptul la ștergere</strong> - să solicitați ștergerea datelor</li>
              <li><strong>Dreptul la restricționare</strong> - să limitați prelucrarea</li>
              <li><strong>Dreptul la portabilitate</strong> - să primiți datele în format electronic</li>
              <li><strong>Dreptul la opoziție</strong> - să vă opuneți prelucrării</li>
            </ul>

            <h2>7. Partajarea datelor</h2>
            <p>Putem partaja datele personale cu:</p>
            <ul>
              <li>Procesatori de plăți (pentru procesarea tranzacțiilor)</li>
              <li>Furnizori de servicii email (pentru livrarea codurilor)</li>
              <li>Autorități (când legea o impune)</li>
            </ul>
            <p>Nu vindem și nu închiriem datele personale către terți.</p>

            <h2>8. Securitatea datelor</h2>
            <p>
              Implementăm măsuri tehnice și organizatorice adecvate pentru protecția datelor personale,
              inclusiv criptare, acces restricționat și monitorizare continuă.
            </p>

            <h2>9. Transferuri internaționale</h2>
            <p>
              Datele personale pot fi procesate în afara Spațiului Economic European.
              În astfel de cazuri, asigurăm un nivel adecvat de protecție prin clauze contractuale standard.
            </p>

            <h2>10. Contact</h2>
            <p>
              Pentru exercitarea drepturilor sau întrebări privind protecția datelor,
              ne puteți contacta la: contact@eanify.store
            </p>

            <h2>11. Modificări</h2>
            <p>
              Această politică poate fi actualizată periodic.
              Vă recomandăm să o consultați regulat pentru a fi la curent cu practicile noastre.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
