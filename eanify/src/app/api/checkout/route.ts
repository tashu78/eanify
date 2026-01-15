import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

// Initialize Stripe with secret key (server-side only)
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2025-12-15.clover",
});

// Package definitions
const packages = [
  { id: "ean-10", quantity: 10, price: 2500, name: "10 coduri EAN" },
  { id: "ean-25", quantity: 25, price: 3500, name: "25 coduri EAN" },
  { id: "ean-50", quantity: 50, price: 5000, name: "50 coduri EAN" },
  { id: "ean-100", quantity: 100, price: 8000, name: "100 coduri EAN" },
  { id: "ean-500", quantity: 500, price: 22000, name: "500 coduri EAN" },
  { id: "ean-1000", quantity: 1000, price: 35000, name: "1000 coduri EAN" },
  { id: "ean-5000", quantity: 5000, price: 99500, name: "5000 coduri EAN" },
];

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { packageId } = body;

    // Find the package
    const pkg = packages.find((p) => p.id === packageId);
    if (!pkg) {
      return NextResponse.json(
        { error: "Pachet invalid" },
        { status: 400 }
      );
    }

    // Get the origin for redirect URLs
    

    // Create Stripe checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "ron",
            product_data: {
              name: pkg.name,
              description: `Pachet de ${pkg.quantity} coduri EAN-13 valide pentru marketplace-uri online. Livrare instant pe email.`,
              images: ["https://eanify.store/favicon.svg"],
            },
            unit_amount: pkg.price, // Price in bani (RON cents)
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: "https://eanify.store/plata-reusita?session_id={CHECKOUT_SESSION_ID}&package=" + pkg.id,
      cancel_url: "https://eanify.store/plata-anulata",
      metadata: {
        packageId: pkg.id,
        quantity: pkg.quantity.toString(),
      },
      locale: "ro",
      billing_address_collection: "required",
      phone_number_collection: {
        enabled: true,
      },
    });

    return NextResponse.json({ sessionId: session.id, url: session.url });
  } catch (error) {
    console.error("Stripe error:", error);
    return NextResponse.json(
      { error: "Eroare la crearea sesiunii de plată" },
      { status: 500 }
    );
  }
}
