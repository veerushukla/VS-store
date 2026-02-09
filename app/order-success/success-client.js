"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useCart } from "../context/cartcontext";

const OrderSuccessClient = () => {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session_id");
  const { clearCart } = useCart();

  useEffect(() => {
    clearCart();
  }, [clearCart]);

  return (
    <main className="min-h-screen bg-[#f7f5f2] text-[#111]">
      <section className="max-w-3xl mx-auto px-6 py-16">
        <div className="bg-white border border-black/10 rounded-lg p-6">
          <p className="text-xs uppercase tracking-widest text-black/60">Order confirmed</p>
          <h1 className="mt-2 text-3xl md:text-4xl font-semibold">Thank you for your purchase</h1>
          <p className="mt-3 text-black/70">
            Your payment was successful. We are preparing your order now.
          </p>
          {sessionId && (
            <p className="mt-3 text-sm text-black/60">Session: {sessionId}</p>
          )}
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/order-tracking" className="bg-black text-white px-4 py-2 rounded-md">
              Track order
            </Link>
            <Link href="/" className="border border-black/20 px-4 py-2 rounded-md">
              Continue shopping
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default OrderSuccessClient;
