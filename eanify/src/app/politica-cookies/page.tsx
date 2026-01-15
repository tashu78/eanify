import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politica cookies",
  description: "Politica de utilizare a cookie-urilor pe website-ul EANify.",
};

export default function CookiesPage() {
  return (
    <>
      <section className="bg-gradient-brand-light py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
            Politica <span className="text-gradient">cookies</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ultima actualizare: Ianuarie 2026
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto prose prose-gray dark:prose-invert">
            <h2>1. Ce sunt cookie-urile?</h2>
            <p>
              Cookie-urile sunt fișiere text de mici dimensiuni care sunt stocate pe dispozitivul dumneavoastră
              (computer, telefon, tabletă) atunci când vizitați un website.
              Acestea permit website-ului să vă recunoască și să rețină informații despre vizita dumneavoastră.
            </p>

            <h2>2. Tipuri de cookie-uri utilizate</h2>

            <h3>Cookie-uri strict necesare</h3>
            <p>
              Aceste cookie-uri sunt esențiale pentru funcționarea website-ului și nu pot fi dezactivate.
              Sunt setate ca răspuns la acțiunile dumneavoastră, cum ar fi setarea preferințelor de confidențialitate,
              autentificarea sau completarea formularelor.
            </p>

            <h3>Cookie-uri de performanță</h3>
            <p>
              Ne ajută să înțelegem cum utilizați website-ul, colectând informații anonime despre paginile vizitate.
              Acestea ne permit să îmbunătățim performanța website-ului.
            </p>

            <h3>Cookie-uri funcționale</h3>
            <p>
              Permit website-ului să rețină alegerile dumneavoastră (cum ar fi limba preferată)
              și să ofere funcționalități personalizate.
            </p>

            <h3>Cookie-uri de marketing</h3>
            <p>
              Sunt utilizate pentru a afișa reclame relevante pentru dumneavoastră.
              De asemenea, limitează numărul de afișări ale unei reclame și măsoară eficiența campaniilor publicitare.
            </p>

            <h2>3. Cookie-uri terțe</h2>
            <p>Website-ul nostru poate utiliza servicii terțe care setează propriile cookie-uri:</p>
            <ul>
              <li><strong>Google Analytics</strong> - pentru analiza traficului website-ului</li>
              <li><strong>Procesatori de plăți</strong> - pentru procesarea securizată a tranzacțiilor</li>
            </ul>

            <h2>4. Durata de viață a cookie-urilor</h2>
            <ul>
              <li><strong>Cookie-uri de sesiune</strong> - sunt șterse automat când închideți browserul</li>
              <li><strong>Cookie-uri persistente</strong> - rămân pe dispozitiv pentru o perioadă determinată sau până sunt șterse manual</li>
            </ul>

            <h2>5. Gestionarea cookie-urilor</h2>
            <p>
              Puteți controla și gestiona cookie-urile prin setările browserului dumneavoastră.
              Majoritatea browserelor vă permit să:
            </p>
            <ul>
              <li>Vizualizați cookie-urile stocate și să le ștergeți individual</li>
              <li>Blocați cookie-urile terțe</li>
              <li>Blocați cookie-urile de pe anumite website-uri</li>
              <li>Blocați toate cookie-urile</li>
              <li>Ștergeți toate cookie-urile când închideți browserul</li>
            </ul>

            <h2>6. Instrucțiuni pentru browsere populare</h2>
            <ul>
              <li><strong>Chrome:</strong> Setări &gt; Confidențialitate și securitate &gt; Cookie-uri</li>
              <li><strong>Firefox:</strong> Opțiuni &gt; Confidențialitate &gt; Cookie-uri</li>
              <li><strong>Safari:</strong> Preferințe &gt; Confidențialitate</li>
              <li><strong>Edge:</strong> Setări &gt; Cookie-uri și permisiuni site</li>
            </ul>

            <h2>7. Consecințele dezactivării cookie-urilor</h2>
            <p>
              Dezactivarea cookie-urilor poate afecta funcționalitatea website-ului.
              Unele funcții pot să nu fie disponibile sau să funcționeze incorect.
            </p>

            <h2>8. Actualizări</h2>
            <p>
              Această politică poate fi actualizată periodic pentru a reflecta modificările în practicile noastre.
              Vă recomandăm să consultați această pagină regulat.
            </p>

            <h2>9. Contact</h2>
            <p>
              Pentru întrebări despre utilizarea cookie-urilor, ne puteți contacta la: contact@eanify.store
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
