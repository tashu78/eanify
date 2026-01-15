// lib/stripe.ts

export async function createCheckoutSession(packageId: string) {
  const response = await fetch("/api/checkout", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ packageId }),
  });

  if (!response.ok) {
    throw new Error("Eroare la inițierea plății");
  }

  return response.json(); // { url }
}
