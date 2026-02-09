"use client"

import React from 'react'
import CustomTypewriter from '@/Components/CustomTypewriter'

const page = () => {
  return (
    <main className="min-h-screen bg-[#f7f5f2] text-[#111]">
      {/* Hero */}
      <section className="border-b border-black/10">
        <div className="max-w-6xl mx-auto px-6 py-12 md:py-16">
          <p className="text-xs uppercase tracking-widest text-black/60">Legal</p>
          <h1 className="mt-2 text-4xl md:text-6xl font-semibold">Terms & Conditions</h1>
          <p className="mt-3 max-w-2xl text-black/70">
            These terms outline how this demo store works. They are written to mirror real e-commerce terms,
            but this project is for showcase purposes only.
          </p>
        </div>
      </section>

      {/* Key Terms */}
      <section className="max-w-6xl mx-auto px-6 py-8">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white border border-black/10 rounded-lg p-6">
            <h3 className="text-lg font-semibold">Use of the Site</h3>
            <p className="mt-2 text-sm text-black/70">
              You may browse products, add items to cart, and explore features. Transactions are simulated.
            </p>
          </div>
          <div className="bg-white border border-black/10 rounded-lg p-6">
            <h3 className="text-lg font-semibold">Pricing</h3>
            <p className="mt-2 text-sm text-black/70">
              Prices displayed are placeholders for UI demonstration and are not real-world offers.
            </p>
          </div>
          <div className="bg-white border border-black/10 rounded-lg p-6">
            <h3 className="text-lg font-semibold">Shipping & Returns</h3>
            <p className="mt-2 text-sm text-black/70">
              Shipping timelines and returns are examples only and exist to demonstrate a full storefront experience.
            </p>
          </div>
          <div className="bg-white border border-black/10 rounded-lg p-6">
            <h3 className="text-lg font-semibold">Accounts</h3>
            <p className="mt-2 text-sm text-black/70">
              Account sign-in is provided for UX realism. No real personal data is stored outside demo flow.
            </p>
          </div>
        </div>
      </section>

      {/* Typewriter */}
      <section className="max-w-6xl mx-auto px-6 pb-12 md:pb-16">
        <div className="bg-white border border-black/10 rounded-lg p-6">
          <h2 className="text-lg font-semibold">In Plain Words</h2>
          <div className="mt-3 text-sm text-black/70">
            <CustomTypewriter
              text="This is a demo store, so all products, payments, and policies are for display only."
              speed={40}
              cursor={true}
              cursorStyle="|"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black text-white">
        <div className="max-w-6xl mx-auto px-6 py-10 md:py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold">Questions about these terms?</h2>
            <p className="mt-2 text-white/70">Reach out and we�ll clarify anything you need.</p>
          </div>
          <button className="bg-white text-black px-5 py-2 rounded-md">Contact Support</button>
        </div>
      </section>
    </main>
  )
}

export default page
