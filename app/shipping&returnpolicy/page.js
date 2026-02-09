"use client"

import React from 'react'
import CustomTypewriter from '@/Components/CustomTypewriter'

const page = () => {
  return (
    <main className="min-h-screen bg-[#f7f5f2] text-[#111]">
      {/* Hero */}
      <section className="border-b border-black/10">
        <div className="max-w-6xl mx-auto px-6 py-12 md:py-16">
          <p className="text-xs uppercase tracking-widest text-black/60">Shipping</p>
          <h1 className="mt-2 text-4xl md:text-6xl font-semibold">Shipping & Return Policy</h1>
          <p className="mt-3 max-w-2xl text-black/70">
            This policy explains how shipping and returns would work in a real store. It is a demo policy for UI
            purposes only.
          </p>
        </div>
      </section>

      {/* Shipping */}
      <section className="max-w-6xl mx-auto px-6 py-8">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white border border-black/10 rounded-lg p-6">
            <h3 className="text-lg font-semibold">Shipping Times</h3>
            <p className="mt-2 text-sm text-black/70">Orders ship within 24 hours. Delivery takes 3�5 business days.</p>
          </div>
          <div className="bg-white border border-black/10 rounded-lg p-6">
            <h3 className="text-lg font-semibold">Shipping Costs</h3>
            <p className="mt-2 text-sm text-black/70">Free shipping on eligible orders. Standard rates apply otherwise.</p>
          </div>
        </div>
      </section>

      {/* Returns */}
      <section className="max-w-6xl mx-auto px-6 pb-12 md:pb-16">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white border border-black/10 rounded-lg p-6">
            <h3 className="text-lg font-semibold">Return Window</h3>
            <p className="mt-2 text-sm text-black/70">Returns are accepted within 7 days of delivery.</p>
          </div>
          <div className="bg-white border border-black/10 rounded-lg p-6">
            <h3 className="text-lg font-semibold">Refunds</h3>
            <p className="mt-2 text-sm text-black/70">Refunds are processed within 3�5 business days after approval.</p>
          </div>
        </div>
      </section>

      {/* Typewriter */}
      <section className="max-w-6xl mx-auto px-6 pb-12 md:pb-16">
        <div className="bg-white border border-black/10 rounded-lg p-6">
          <h2 className="text-lg font-semibold">In Plain Words</h2>
          <div className="mt-3 text-sm text-black/70">
            <CustomTypewriter
              text="This demo store ships quickly, accepts simple returns, and processes refunds within a few days."
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
            <h2 className="text-2xl md:text-3xl font-semibold">Need help with an order?</h2>
            <p className="mt-2 text-white/70">We�re here to help with shipping and returns.</p>
          </div>
          <button className="bg-white text-black px-5 py-2 rounded-md">Contact Support</button>
        </div>
      </section>
    </main>
  )
}

export default page
