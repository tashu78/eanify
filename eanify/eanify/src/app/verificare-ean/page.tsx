"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

function validateEAN13(code: string): { valid: boolean; message: string } {
  // Remove any spaces or dashes
  const cleanCode = code.replace(/[\s-]/g, "");

  // Check if it's exactly 13 digits
  if (!/^\d{13}$/.test(cleanCode)) {
    return {
      valid: false,
      message: "Codul trebuie să conțină exact 13 cifre.",
    };
  }

  // Calculate checksum
  const digits = cleanCode.split("").map(Number);
  let sum = 0;
  for (let i = 0; i < 12; i++) {
    sum += digits[i] * (i % 2 === 0 ? 1 : 3);
  }
  const checkDigit = (10 - (sum % 10)) % 10;

  if (checkDigit === digits[12]) {
    return {
      valid: true,
      message: "Cod EAN valid - structură corectă",
    };
  }
  return {
    valid: false,
    message: "Cod EAN invalid - cifra de control incorectă",
  };
}

export default function VerifyEANPage() {
  const [code, setCode] = useState("");
  const [result, setResult] = useState<{ valid: boolean; message: string } | null>(null);

  const handleVerify = () => {
    if (!code.trim()) {
      setResult({ valid: false, message: "Introdu un cod EAN pentru verificare." });
      return;
    }
    setResult(validateEAN13(code));
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleVerify();
    }
  };

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-brand-light py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
            Verificare <span className="text-gradient">cod EAN</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Verifică rapid dacă un cod EAN-13 are structura corectă.
          </p>
        </div>
      </section>

      {/* Validator */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <Card className="max-w-xl mx-auto shadow-xl">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Verificator EAN-13</CardTitle>
              <CardDescription>
                Introdu codul EAN pentru a verifica structura și cifra de control.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex gap-3">
                <Input
                  type="text"
                  placeholder="Ex: 5901234123457"
                  value={code}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setCode(e.target.value);
                    setResult(null);
                  }}
                  onKeyPress={handleKeyPress}
                  maxLength={13}
                  className="text-lg text-center tracking-widest font-mono"
                />
                <Button onClick={handleVerify} className="bg-gradient-brand hover:opacity-90 px-6">
                  Verifică
                </Button>
              </div>

              {result && (
                <div
                  className={`p-4 rounded-lg flex items-center gap-3 ${
                    result.valid
                      ? "bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-900"
                      : "bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-900"
                  }`}
                >
                  {result.valid ? (
                    <svg className="h-6 w-6 text-green-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ) : (
                    <svg className="h-6 w-6 text-red-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  )}
                  <span className={`font-medium ${result.valid ? "text-green-800 dark:text-green-200" : "text-red-800 dark:text-red-200"}`}>
                    {result.message}
                  </span>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Info */}
          <div className="mt-12 max-w-2xl mx-auto">
            <div className="bg-muted/50 rounded-lg p-6">
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                </svg>
                Ce verifică acest instrument?
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                Acest instrument verifică structura și cifra de control a codului EAN-13.
                Validarea confirmă că formatul codului este corect conform standardului EAN-13.
              </p>
              <p className="text-sm text-muted-foreground">
                <strong>Notă:</strong> Acest instrument NU verifică înregistrarea codului în baza de date GS1
                sau dacă codul este alocat unui produs specific.
              </p>
            </div>
          </div>

          {/* EAN Structure */}
          <div className="mt-8 max-w-2xl mx-auto">
            <h3 className="font-semibold mb-4 text-center">Structura unui cod EAN-13</h3>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="p-4 rounded-lg bg-primary/10">
                <div className="text-2xl font-bold text-primary font-mono">XXX</div>
                <p className="text-xs text-muted-foreground mt-1">Prefix țară</p>
              </div>
              <div className="p-4 rounded-lg bg-secondary/10">
                <div className="text-2xl font-bold text-secondary font-mono">XXXXX</div>
                <p className="text-xs text-muted-foreground mt-1">Cod companie</p>
              </div>
              <div className="p-4 rounded-lg bg-primary/10">
                <div className="text-2xl font-bold text-primary font-mono">XXXXX</div>
                <p className="text-xs text-muted-foreground mt-1">Cod produs + control</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
