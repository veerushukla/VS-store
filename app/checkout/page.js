"use client";

import React, { useMemo, useState } from "react";
import { useCart } from "../context/cartcontext";
import Link from "next/link";

const CheckoutPage = () => {
  const { cartItems } = useCart();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    postalCode: "",
    country: "India",
    delivery: "Standard",
  });

  const total = useMemo(() => {
    return cartItems.reduce((sum, item) => sum + Number(item.price || 0), 0);
  }, [cartItems]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          items: cartItems,
          customer: {
            name: form.name,
            email: form.email,
            phone: form.phone,
            address: form.address,
            city: form.city,
            state: form.state,
            postalCode: form.postalCode,
            country: form.country,
          },
          delivery: { method: form.delivery },
        }),
      });

      const data = await res.json();
      if (data?.error === "Missing STRIPE_SECRET_KEY") {
        throw new Error("missing_key");
      }
      if (!res.ok || !data?.url) {
        throw new Error("Checkout failed");
      }

      window.location.href = data.url;
    } catch (err) {
      if (err?.message === "missing_key") {
        setError("Stripe key is missing. Add STRIPE_SECRET_KEY in .env.local to enable payments.");
      } else {
        setError("Could not start checkout. Please try again.");
      }
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#f7f5f2] text-[#111]">
      <section className="border-b border-black/10">
        <div className="max-w-6xl mx-auto px-6 py-10 md:py-12">
          <p className="text-xs uppercase tracking-widest text-black/60">Checkout</p>
          <h1 className="mt-2 text-3xl md:text-5xl font-semibold">Delivery and payment</h1>
          <p className="mt-3 max-w-2xl text-black/70">
            Enter delivery details and proceed to secure payment.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-10 md:py-12">
        {cartItems.length === 0 ? (
          <div className="bg-white border border-black/10 rounded-lg p-6">
            <p>Your cart is empty.</p>
            <Link href="/" className="inline-block mt-4 underline">Continue shopping</Link>
          </div>
        ) : (
          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-8">
            <form onSubmit={handleSubmit} className="bg-white border border-black/10 rounded-lg p-6">
              <h2 className="text-lg font-semibold">Delivery details</h2>

              <div className="mt-4 grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-semibold">Full name</label>
                  <input
                    required
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    type="text"
                    className="mt-2 w-full border border-black/15 rounded-md px-3 py-2"
                  />
                </div>
                <div>
                  <label className="text-sm font-semibold">Email</label>
                  <input
                    required
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    type="email"
                    className="mt-2 w-full border border-black/15 rounded-md px-3 py-2"
                  />
                </div>
                <div>
                  <label className="text-sm font-semibold">Phone</label>
                  <input
                    required
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    type="tel"
                    className="mt-2 w-full border border-black/15 rounded-md px-3 py-2"
                  />
                </div>
                <div>
                  <label className="text-sm font-semibold">City</label>
                  <input
                    required
                    name="city"
                    value={form.city}
                    onChange={handleChange}
                    type="text"
                    className="mt-2 w-full border border-black/15 rounded-md px-3 py-2"
                  />
                </div>
              </div>

              <div className="mt-4">
                <label className="text-sm font-semibold">Address</label>
                <input
                  required
                  name="address"
                  value={form.address}
                  onChange={handleChange}
                  type="text"
                  className="mt-2 w-full border border-black/15 rounded-md px-3 py-2"
                />
              </div>

              <div className="mt-4 grid md:grid-cols-3 gap-4">
                <div>
                  <label className="text-sm font-semibold">State</label>
                  <input
                    required
                    name="state"
                    value={form.state}
                    onChange={handleChange}
                    type="text"
                    className="mt-2 w-full border border-black/15 rounded-md px-3 py-2"
                  />
                </div>
                <div>
                  <label className="text-sm font-semibold">Postal code</label>
                  <input
                    required
                    name="postalCode"
                    value={form.postalCode}
                    onChange={handleChange}
                    type="text"
                    className="mt-2 w-full border border-black/15 rounded-md px-3 py-2"
                  />
                </div>
                <div>
                  <label className="text-sm font-semibold">Country</label>
                  <input
                    required
                    name="country"
                    value={form.country}
                    onChange={handleChange}
                    type="text"
                    className="mt-2 w-full border border-black/15 rounded-md px-3 py-2"
                  />
                </div>
              </div>

              <div className="mt-6">
                <p className="text-sm font-semibold">Delivery method</p>
                <div className="mt-3 grid gap-2">
                  {[
                    "Standard",
                    "Express",
                  ].map((method) => (
                    <label key={method} className="flex items-center gap-2 text-sm">
                      <input
                        type="radio"
                        name="delivery"
                        value={method}
                        checked={form.delivery === method}
                        onChange={handleChange}
                      />
                      {method}
                    </label>
                  ))}
                </div>
              </div>

              {error && <p className="mt-4 text-sm text-red-600">{error}</p>}

              <button
                type="submit"
                disabled={loading}
                className="mt-6 bg-black text-white rounded-md px-5 py-2"
              >
                {loading ? "Redirecting..." : "Pay with Stripe"}
              </button>
            </form>

            <aside className="bg-white border border-black/10 rounded-lg p-6 h-fit">
              <h2 className="text-lg font-semibold">Order summary</h2>
              <ul className="mt-4 space-y-3 text-sm">
                {cartItems.map((item) => (
                  <li key={item.id} className="flex items-center justify-between">
                    <span>{item.name}</span>
                    <span>INR {item.price}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-4 border-t pt-4 flex items-center justify-between font-semibold">
                <span>Total</span>
                <span>INR {total.toFixed(2)}</span>
              </div>
            </aside>
          </div>
        )}
      </section>
    </main>
  );
};

export default CheckoutPage;
