"use client";

import { useState, useRef, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// EAN-13 encoding patterns
const L_PATTERNS = [
  "0001101", "0011001", "0010011", "0111101", "0100011",
  "0110001", "0101111", "0111011", "0110111", "0001011"
];

const G_PATTERNS = [
  "0100111", "0110011", "0011011", "0100001", "0011101",
  "0111001", "0000101", "0010001", "0001001", "0010111"
];

const R_PATTERNS = [
  "1110010", "1100110", "1101100", "1000010", "1011100",
  "1001110", "1010000", "1000100", "1001000", "1110100"
];

// First digit encoding (which pattern to use for digits 2-7)
const FIRST_DIGIT_PATTERNS = [
  "LLLLLL", "LLGLGG", "LLGGLG", "LLGGGL", "LGLLGG",
  "LGGLLG", "LGGGLL", "LGLGLG", "LGLGGL", "LGGLGL"
];

function validateEAN13(code: string): { valid: boolean; message: string } {
  const cleanCode = code.replace(/[\s-]/g, "");

  if (!/^\d{13}$/.test(cleanCode)) {
    return { valid: false, message: "Codul trebuie să conțină exact 13 cifre." };
  }

  const digits = cleanCode.split("").map(Number);
  let sum = 0;
  for (let i = 0; i < 12; i++) {
    sum += digits[i] * (i % 2 === 0 ? 1 : 3);
  }
  const checkDigit = (10 - (sum % 10)) % 10;

  if (checkDigit === digits[12]) {
    return { valid: true, message: "Cod EAN valid" };
  }
  return { valid: false, message: "Cifra de control este incorectă." };
}

function generateEAN13Pattern(code: string): string {
  const digits = code.split("").map(Number);
  const firstDigit = digits[0];
  const pattern = FIRST_DIGIT_PATTERNS[firstDigit];

  let barcode = "101"; // Start guard

  // Left side (digits 2-7, index 1-6)
  for (let i = 0; i < 6; i++) {
    const digit = digits[i + 1];
    if (pattern[i] === "L") {
      barcode += L_PATTERNS[digit];
    } else {
      barcode += G_PATTERNS[digit];
    }
  }

  barcode += "01010"; // Center guard

  // Right side (digits 8-13, index 7-12)
  for (let i = 7; i < 13; i++) {
    barcode += R_PATTERNS[digits[i]];
  }

  barcode += "101"; // End guard

  return barcode;
}

// Helper function to generate barcode canvas data URL
function generateBarcodeDataURL(code: string): string {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  if (!ctx) return "";

  const pattern = generateEAN13Pattern(code);
  const barWidth = 3;
  const height = 150;
  const quietZone = 30;
  const textHeight = 30;

  canvas.width = pattern.length * barWidth + quietZone * 2;
  canvas.height = height + textHeight + 20;

  ctx.fillStyle = "#ffffff";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  let x = quietZone;
  for (let i = 0; i < pattern.length; i++) {
    if (pattern[i] === "1") {
      ctx.fillStyle = "#000000";
      const isGuard = i < 3 || i >= pattern.length - 3 || (i >= 45 && i < 50);
      const barHeight = isGuard ? height + 10 : height;
      ctx.fillRect(x, 10, barWidth, barHeight);
    }
    x += barWidth;
  }

  ctx.fillStyle = "#000000";
  ctx.font = "bold 18px monospace";
  ctx.textAlign = "center";
  ctx.fillText(code[0], quietZone - 12, height + textHeight);
  const leftGroupX = quietZone + 3 * barWidth + (6 * 7 * barWidth) / 2;
  ctx.fillText(code.slice(1, 7), leftGroupX, height + textHeight);
  const rightGroupX = quietZone + 3 * barWidth + 6 * 7 * barWidth + 5 * barWidth + (6 * 7 * barWidth) / 2;
  ctx.fillText(code.slice(7), rightGroupX, height + textHeight);

  return canvas.toDataURL("image/png");
}

interface BulkResult {
  code: string;
  valid: boolean;
  message: string;
  dataUrl?: string;
}

export default function BarcodeGeneratorPage() {
  const [code, setCode] = useState("");
  const [generatedCode, setGeneratedCode] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Bulk generation state
  const [bulkCodes, setBulkCodes] = useState("");
  const [bulkResults, setBulkResults] = useState<BulkResult[]>([]);
  const [bulkProcessing, setBulkProcessing] = useState(false);
  const [activeTab, setActiveTab] = useState<"single" | "bulk">("single");

  const generateBarcode = useCallback(() => {
    const validation = validateEAN13(code);
    if (!validation.valid) {
      setError(validation.message);
      setGeneratedCode(null);
      return;
    }

    setError(null);
    const cleanCode = code.replace(/[\s-]/g, "");
    setGeneratedCode(cleanCode);

    // Draw barcode on canvas
    setTimeout(() => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const pattern = generateEAN13Pattern(cleanCode);
      const barWidth = 3;
      const height = 150;
      const quietZone = 30;
      const textHeight = 30;

      canvas.width = pattern.length * barWidth + quietZone * 2;
      canvas.height = height + textHeight + 20;

      // White background
      ctx.fillStyle = "#ffffff";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw bars
      let x = quietZone;
      for (let i = 0; i < pattern.length; i++) {
        if (pattern[i] === "1") {
          ctx.fillStyle = "#000000";
          // Guard bars are taller
          const isGuard = i < 3 || i >= pattern.length - 3 || (i >= 45 && i < 50);
          const barHeight = isGuard ? height + 10 : height;
          ctx.fillRect(x, 10, barWidth, barHeight);
        }
        x += barWidth;
      }

      // Draw text
      ctx.fillStyle = "#000000";
      ctx.font = "bold 18px monospace";
      ctx.textAlign = "center";

      // First digit (outside left)
      ctx.fillText(cleanCode[0], quietZone - 12, height + textHeight);

      // Left group (digits 2-7)
      const leftGroupX = quietZone + 3 * barWidth + (6 * 7 * barWidth) / 2;
      ctx.fillText(cleanCode.slice(1, 7), leftGroupX, height + textHeight);

      // Right group (digits 8-13)
      const rightGroupX = quietZone + 3 * barWidth + 6 * 7 * barWidth + 5 * barWidth + (6 * 7 * barWidth) / 2;
      ctx.fillText(cleanCode.slice(7), rightGroupX, height + textHeight);
    }, 50);
  }, [code]);

  const downloadBarcode = useCallback((format: "png" | "svg") => {
    if (!generatedCode) return;

    if (format === "png") {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const link = document.createElement("a");
      link.download = `EAN-${generatedCode}.png`;
      link.href = canvas.toDataURL("image/png");
      link.click();
    } else {
      // Generate SVG
      const pattern = generateEAN13Pattern(generatedCode);
      const barWidth = 3;
      const height = 150;
      const quietZone = 30;
      const textHeight = 30;
      const width = pattern.length * barWidth + quietZone * 2;
      const totalHeight = height + textHeight + 20;

      let bars = "";
      let x = quietZone;
      for (let i = 0; i < pattern.length; i++) {
        if (pattern[i] === "1") {
          const isGuard = i < 3 || i >= pattern.length - 3 || (i >= 45 && i < 50);
          const barHeight = isGuard ? height + 10 : height;
          bars += `<rect x="${x}" y="10" width="${barWidth}" height="${barHeight}" fill="#000"/>`;
        }
        x += barWidth;
      }

      const leftGroupX = quietZone + 3 * barWidth + (6 * 7 * barWidth) / 2;
      const rightGroupX = quietZone + 3 * barWidth + 6 * 7 * barWidth + 5 * barWidth + (6 * 7 * barWidth) / 2;

      const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${totalHeight}" viewBox="0 0 ${width} ${totalHeight}">
  <rect width="100%" height="100%" fill="#fff"/>
  ${bars}
  <text x="${quietZone - 12}" y="${height + textHeight}" font-family="monospace" font-size="18" font-weight="bold" text-anchor="middle">${generatedCode[0]}</text>
  <text x="${leftGroupX}" y="${height + textHeight}" font-family="monospace" font-size="18" font-weight="bold" text-anchor="middle">${generatedCode.slice(1, 7)}</text>
  <text x="${rightGroupX}" y="${height + textHeight}" font-family="monospace" font-size="18" font-weight="bold" text-anchor="middle">${generatedCode.slice(7)}</text>
</svg>`;

      const blob = new Blob([svg], { type: "image/svg+xml" });
      const link = document.createElement("a");
      link.download = `EAN-${generatedCode}.svg`;
      link.href = URL.createObjectURL(blob);
      link.click();
      URL.revokeObjectURL(link.href);
    }
  }, [generatedCode]);

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      generateBarcode();
    }
  };

  // Bulk generation functions
  const generateBulkBarcodes = useCallback(() => {
    setBulkProcessing(true);
    const codes = bulkCodes
      .split("\n")
      .map((c) => c.trim().replace(/[\s-]/g, ""))
      .filter((c) => c.length > 0);

    const results: BulkResult[] = codes.map((code) => {
      const validation = validateEAN13(code);
      if (validation.valid) {
        return {
          code,
          valid: true,
          message: validation.message,
          dataUrl: generateBarcodeDataURL(code),
        };
      }
      return {
        code,
        valid: false,
        message: validation.message,
      };
    });

    setBulkResults(results);
    setBulkProcessing(false);
  }, [bulkCodes]);

  const downloadSingleBulk = useCallback((result: BulkResult) => {
    if (!result.dataUrl) return;
    const link = document.createElement("a");
    link.download = `EAN-${result.code}.png`;
    link.href = result.dataUrl;
    link.click();
  }, []);

  const downloadAllBulk = useCallback(async () => {
    const validResults = bulkResults.filter((r) => r.valid && r.dataUrl);
    if (validResults.length === 0) return;

    // Dynamic import for JSZip
    const JSZip = (await import("jszip")).default;
    const zip = new JSZip();

    for (const result of validResults) {
      if (result.dataUrl) {
        const base64Data = result.dataUrl.split(",")[1];
        zip.file(`EAN-${result.code}.png`, base64Data, { base64: true });
      }
    }

    const blob = await zip.generateAsync({ type: "blob" });
    const link = document.createElement("a");
    link.download = `EAN-coduri-bare-${validResults.length}.zip`;
    link.href = URL.createObjectURL(blob);
    link.click();
    URL.revokeObjectURL(link.href);
  }, [bulkResults]);

  const validCount = bulkResults.filter((r) => r.valid).length;
  const invalidCount = bulkResults.filter((r) => !r.valid).length;

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-brand-light py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
            Generator <span className="text-gradient">cod de bare EAN</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Introdu un cod EAN-13 existent pentru a genera imaginea codului de bare,
            gata de utilizare pentru etichete, ambalaje sau listări online.
          </p>
        </div>
      </section>

      {/* Generator */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Tab Navigation */}
          <div className="max-w-3xl mx-auto mb-8">
            <div className="flex justify-center">
              <div className="inline-flex rounded-lg bg-muted p-1">
                <button
                  onClick={() => setActiveTab("single")}
                  className={`px-6 py-2 rounded-md text-sm font-medium transition-all ${
                    activeTab === "single"
                      ? "bg-background shadow text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  Cod individual
                </button>
                <button
                  onClick={() => setActiveTab("bulk")}
                  className={`px-6 py-2 rounded-md text-sm font-medium transition-all ${
                    activeTab === "bulk"
                      ? "bg-background shadow text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  Generare în lot
                </button>
              </div>
            </div>
          </div>

          {/* Single Code Generator */}
          {activeTab === "single" && (
            <Card className="max-w-2xl mx-auto shadow-xl">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Generează cod de bare</CardTitle>
                <CardDescription>
                  Introdu codul EAN-13 pentru a genera imaginea codului de bare scanabil.
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
                      setError(null);
                    }}
                    onKeyPress={handleKeyPress}
                    maxLength={13}
                    className="text-lg text-center tracking-widest font-mono"
                  />
                  <Button onClick={generateBarcode} className="bg-gradient-brand hover:opacity-90 px-6">
                    Generează
                  </Button>
                </div>

                {error && (
                  <div className="p-4 rounded-lg bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-900 flex items-center gap-3">
                    <svg className="h-5 w-5 text-red-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                    </svg>
                    <span className="text-red-800 dark:text-red-200">{error}</span>
                  </div>
                )}

                {generatedCode && (
                  <div className="space-y-6">
                    <div className="flex justify-center p-6 bg-white rounded-lg border">
                      <canvas ref={canvasRef} className="max-w-full" />
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                      <Button
                        onClick={() => downloadBarcode("png")}
                        className="bg-gradient-brand hover:opacity-90"
                      >
                        <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                        </svg>
                        Descarcă PNG
                      </Button>
                      <Button
                        onClick={() => downloadBarcode("svg")}
                        variant="outline"
                      >
                        <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                        </svg>
                        Descarcă SVG
                      </Button>
                    </div>

                    <div className="text-center text-sm text-muted-foreground">
                      <p>Cod generat: <span className="font-mono font-bold">{generatedCode}</span></p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          )}

          {/* Bulk Code Generator */}
          {activeTab === "bulk" && (
            <Card className="max-w-3xl mx-auto shadow-xl">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Generare în lot</CardTitle>
                <CardDescription>
                  Introdu mai multe coduri EAN-13 (unul pe fiecare rând) pentru a genera toate codurile de bare odată.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-3">
                  <textarea
                    placeholder={"5901234123457\n5901234123464\n5901234123471\n..."}
                    value={bulkCodes}
                    onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
                      setBulkCodes(e.target.value);
                      setBulkResults([]);
                    }}
                    rows={8}
                    className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 font-mono"
                  />
                  <div className="flex justify-between items-center">
                    <p className="text-sm text-muted-foreground">
                      {bulkCodes.split("\n").filter(c => c.trim()).length} coduri introduse
                    </p>
                    <Button
                      onClick={generateBulkBarcodes}
                      className="bg-gradient-brand hover:opacity-90"
                      disabled={bulkProcessing || !bulkCodes.trim()}
                    >
                      {bulkProcessing ? "Se procesează..." : "Generează coduri de bare"}
                    </Button>
                  </div>
                </div>

                {/* Results */}
                {bulkResults.length > 0 && (
                  <div className="space-y-4">
                    {/* Summary */}
                    <div className="flex flex-wrap gap-4 justify-center">
                      <Badge className="bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300 px-4 py-2">
                        {validCount} coduri valide
                      </Badge>
                      {invalidCount > 0 && (
                        <Badge className="bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300 px-4 py-2">
                          {invalidCount} coduri invalide
                        </Badge>
                      )}
                    </div>

                    {/* Download All Button */}
                    {validCount > 0 && (
                      <div className="flex justify-center">
                        <Button onClick={downloadAllBulk} className="bg-gradient-brand hover:opacity-90">
                          <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m8.25 3v6.75m0 0l-3-3m3 3l3-3M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                          </svg>
                          Descarcă toate ({validCount} imagini ZIP)
                        </Button>
                      </div>
                    )}

                    {/* Individual Results */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-h-[600px] overflow-y-auto p-2">
                      {bulkResults.map((result, index) => (
                        <div
                          key={index}
                          className={`rounded-lg border p-4 ${
                            result.valid
                              ? "bg-white border-green-200"
                              : "bg-red-50 dark:bg-red-950/20 border-red-200 dark:border-red-900"
                          }`}
                        >
                          <div className="text-center">
                            <p className={`font-mono text-sm mb-2 ${result.valid ? "" : "text-red-600 dark:text-red-400"}`}>
                              {result.code || "(cod gol)"}
                            </p>
                            {result.valid && result.dataUrl ? (
                              <>
                                <img
                                  src={result.dataUrl}
                                  alt={`EAN-${result.code}`}
                                  className="mx-auto max-w-full h-auto mb-2"
                                />
                                <Button
                                  size="sm"
                                  variant="outline"
                                  onClick={() => downloadSingleBulk(result)}
                                  className="text-xs"
                                >
                                  Descarcă
                                </Button>
                              </>
                            ) : (
                              <p className="text-xs text-red-600 dark:text-red-400">
                                {result.message}
                              </p>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          )}

          {/* Legal Notice */}
          <div className="max-w-2xl mx-auto mt-8">
            <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900 rounded-lg p-4">
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
                  <strong>Notă importantă:</strong> Acest instrument generează doar reprezentarea grafică
                  a unui cod EAN existent. Nu generează și nu înregistrează coduri noi în baza GS1.
                </p>
              </div>
            </div>
          </div>

          {/* Instructions */}
          <div className="max-w-2xl mx-auto mt-12">
            <h2 className="text-2xl font-bold text-center mb-8">Cum funcționează?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6 rounded-lg bg-muted/50">
                <div className="w-12 h-12 rounded-full bg-gradient-brand text-white flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  1
                </div>
                <h3 className="font-semibold mb-2">Introdu codul</h3>
                <p className="text-sm text-muted-foreground">
                  Scrie cele 13 cifre ale codului EAN-13 în câmpul de mai sus.
                </p>
              </div>
              <div className="text-center p-6 rounded-lg bg-muted/50">
                <div className="w-12 h-12 rounded-full bg-gradient-brand text-white flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  2
                </div>
                <h3 className="font-semibold mb-2">Generează</h3>
                <p className="text-sm text-muted-foreground">
                  Apasă butonul pentru a genera imaginea codului de bare.
                </p>
              </div>
              <div className="text-center p-6 rounded-lg bg-muted/50">
                <div className="w-12 h-12 rounded-full bg-gradient-brand text-white flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  3
                </div>
                <h3 className="font-semibold mb-2">Descarcă</h3>
                <p className="text-sm text-muted-foreground">
                  Descarcă imaginea în format PNG sau SVG pentru utilizare.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
