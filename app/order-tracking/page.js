"use client";

import React, { useState } from "react";

const OrderTrackingPage = () => {
  const [orderId, setOrderId] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  const handleTrack = (e) => {
    e.preventDefault();
    if (!orderId || !email) {
      setStatus("Please enter order ID and email.");
      return;
    }
    setStatus("Order is being prepared. Estimated delivery: 3 to 5 business days.");
  };

  return (
    <main className="min-h-screen bg-[#f7f5f2] text-[#111]">
      <section className="border-b border-black/10">
        <div className="max-w-6xl mx-auto px-6 py-10 md:py-12">
          <p className="text-xs uppercase tracking-widest text-black/60">Delivery</p>
          <h1 className="mt-2 text-3xl md:text-5xl font-semibold">Order tracking</h1>
          <p className="mt-3 max-w-2xl text-black/70">
            Enter your order ID and email to view delivery status.
          </p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-10 md:py-12">
        <form onSubmit={handleTrack} className="bg-white border border-black/10 rounded-lg p-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-semibold">Order ID</label>
              <input
                type="text"
                value={orderId}
                onChange={(e) => setOrderId(e.target.value)}
                className="mt-2 w-full border border-black/15 rounded-md px-3 py-2"
                placeholder="ex: ORDER-12345"
              />
            </div>
            <div>
              <label className="text-sm font-semibold">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-2 w-full border border-black/15 rounded-md px-3 py-2"
                placeholder="you@example.com"
              />
            </div>
          </div>
          <button type="submit" className="mt-5 bg-black text-white rounded-md px-5 py-2">
            Track order
          </button>
          {status && <p className="mt-4 text-sm text-black/70">{status}</p>}
        </form>
      </section>
    </main>
  );
};

export default OrderTrackingPage;
