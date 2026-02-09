import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "");

const getSiteUrl = () => {
  return process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
};

export async function POST(req) {
  try {
    const body = await req.json();
    const { items, delivery } = body || {};

    if (!process.env.STRIPE_SECRET_KEY) {
      return new Response(JSON.stringify({ error: "Missing STRIPE_SECRET_KEY" }), { status: 500 });
    }

    if (!Array.isArray(items) || items.length === 0) {
      return new Response(JSON.stringify({ error: "No items" }), { status: 400 });
    }

    const line_items = items.map((item) => {
      const quantity = item.quantity && item.quantity > 0 ? item.quantity : 1;
      const unitAmount = Math.round(Number(item.price) * 100);

      return {
        quantity,
        price_data: {
          currency: "inr",
          unit_amount: unitAmount,
          product_data: {
            name: item.name || "Item",
          },
        },
      };
    });

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items,
      success_url: `${getSiteUrl()}/order-success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${getSiteUrl()}/order-cancel`,
      metadata: {
        delivery_method: delivery?.method || "Standard",
      },
    });

    return new Response(JSON.stringify({ url: session.url }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Checkout error" }), { status: 500 });
  }
}
