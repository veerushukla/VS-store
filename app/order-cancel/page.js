"use client";

import React from "react";
import Link from "next/link";

const OrderCancelPage = () => {
  return (
    <main className="min-h-screen bg-[#f7f5f2] text-[#111]">
      <section className="max-w-3xl mx-auto px-6 py-16">
        <div className="bg-white border border-black/10 rounded-lg p-6">
          <p className="text-xs uppercase tracking-widest text-black/60">Payment canceled</p>
          <h1 className="mt-2 text-3xl md:text-4xl font-semibold">Your payment was canceled</h1>
          <p className="mt-3 text-black/70">
            No charge was made. You can return to checkout anytime.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/checkout" className="bg-black text-white px-4 py-2 rounded-md">
              Back to checkout
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

export default OrderCancelPage;
