"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const cookieChoice = localStorage.getItem("eanify-cookie-consent");
    if (!cookieChoice) {
      // Small delay for better UX
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("eanify-cookie-consent", "accepted");
    setIsVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem("eanify-cookie-consent", "rejected");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 animate-in slide-in-from-bottom duration-500">
      <div className="container mx-auto max-w-4xl">
        <div className="bg-card border shadow-2xl rounded-xl p-6">
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
            {/* Cookie Icon */}
            <div className="flex-shrink-0">
              <div className="w-12 h-12 rounded-full bg-gradient-brand flex items-center justify-center">
                <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.87c1.355 0 2.697.055 4.024.165C17.155 8.51 18 9.473 18 10.608v2.513m-3-4.87v-1.5m-6 1.5v-1.5m12 9.75l-1.5.75a3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0L3 16.5m15-3.38a48.474 48.474 0 00-6-.37c-2.032 0-4.034.125-6 .37m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.17c0 .62-.504 1.124-1.125 1.124H4.125A1.125 1.125 0 013 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 016 13.12M12.265 3.11a.375.375 0 11-.53 0L12 2.845l.265.265zm-3 0a.375.375 0 11-.53 0L9 2.845l.265.265zm6 0a.375.375 0 11-.53 0L15 2.845l.265.265z" />
                </svg>
              </div>
            </div>

            {/* Text */}
            <div className="flex-1">
              <h3 className="font-semibold text-foreground mb-1">Utilizăm cookie-uri</h3>
              <p className="text-sm text-muted-foreground">
                Acest site folosește cookie-uri pentru a îmbunătăți experiența utilizatorului și pentru analiză.
                Poți accepta sau refuza utilizarea cookie-urilor.{" "}
                <Link href="/politica-cookies" className="text-primary hover:underline font-medium">
                  Politica cookies
                </Link>
              </p>
            </div>

            {/* Buttons */}
            <div className="flex gap-3 w-full md:w-auto">
              <Button
                variant="outline"
                onClick={handleReject}
                className="flex-1 md:flex-none"
              >
                Refuză
              </Button>
              <Button
                onClick={handleAccept}
                className="flex-1 md:flex-none bg-gradient-brand hover:opacity-90"
              >
                Acceptă toate
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
