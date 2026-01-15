export function Disclaimer() {
  return (
    <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900 rounded-lg p-4 my-8">
      <div className="flex items-start gap-3">
        <svg
          className="h-5 w-5 text-amber-600 dark:text-amber-500 flex-shrink-0 mt-0.5"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
          />
        </svg>
        <p className="text-sm text-amber-800 dark:text-amber-200">
          <strong>Notă importantă:</strong> Codurile EAN / GTIN oferite sunt coduri valide,
          emise anterior, și NU sunt înregistrate pe numele cumpărătorului în baza de date GS1.
          Aceste coduri sunt acceptate de marketplace-uri și platforme eCommerce.
        </p>
      </div>
    </div>
  );
}
