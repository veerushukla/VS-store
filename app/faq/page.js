"use client"
import React from 'react'
import CustomTypewriter from '@/Components/CustomTypewriter'

const page = () => {
  return (
    <main className="min-h-screen bg-[#f7f5f2] text-[#111]">
      {/* Hero */}
      <section className="border-b border-black/10">
        <div className="max-w-6xl mx-auto px-6 py-12 md:py-16">
          <p className="text-xs uppercase tracking-widest text-black/60">Help Center</p>
          <h1 className="mt-2 text-4xl md:text-6xl font-semibold">Frequently Asked Questions</h1>
          <p className="mt-3 max-w-2xl text-black/70">
            Quick answers about orders, shipping, returns, and your account. This is a demo store, but the
            experience is designed to feel like a real one.
          </p>
        </div>
      </section>

      {/* Search prompt */}
      <section className="max-w-6xl mx-auto px-6 py-8">
        <div className="bg-white border border-black/10 rounded-lg p-6">
          <h2 className="text-lg font-semibold">Need help fast?</h2>
          <p className="mt-2 text-sm text-black/70">
            Use search or browse the sections below. Most customers find answers in under a minute.
          </p>
          <div className="mt-4">
            <CustomTypewriter
              text="Try: shipping time, return window, payment methods, account login"
              speed={40}
              cursor={true}
              cursorStyle="|"
            />
          </div>
        </div>
      </section>

      {/* FAQ grid */}
      <section className="max-w-6xl mx-auto px-6 pb-12 md:pb-16">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white border border-black/10 rounded-lg p-6">
            <h3 className="text-lg font-semibold">How long does shipping take?</h3>
            <p className="mt-2 text-sm text-black/70">Orders typically ship within 24 hours. Delivery is 3�5 business days.</p>
          </div>
          <div className="bg-white border border-black/10 rounded-lg p-6">
            <h3 className="text-lg font-semibold">What is your return policy?</h3>
            <p className="mt-2 text-sm text-black/70">Returns are accepted within 7 days of delivery. This is a demo policy.</p>
          </div>
          <div className="bg-white border border-black/10 rounded-lg p-6">
            <h3 className="text-lg font-semibold">Can I track my order?</h3>
            <p className="mt-2 text-sm text-black/70">Yes, you�ll receive a tracking link once the order is dispatched.</p>
          </div>
          <div className="bg-white border border-black/10 rounded-lg p-6">
            <h3 className="text-lg font-semibold">Do you offer cash on delivery?</h3>
            <p className="mt-2 text-sm text-black/70">Currently we support card and UPI payments only.</p>
          </div>
          <div className="bg-white border border-black/10 rounded-lg p-6">
            <h3 className="text-lg font-semibold">How do I contact support?</h3>
            <p className="mt-2 text-sm text-black/70">Email us anytime and we respond within 24 hours.</p>
          </div>
          <div className="bg-white border border-black/10 rounded-lg p-6">
            <h3 className="text-lg font-semibold">Is this a real store?</h3>
            <p className="mt-2 text-sm text-black/70">This is a demo e-commerce experience created for showcasing UI/UX.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black text-white">
        <div className="max-w-6xl mx-auto px-6 py-12 md:py-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold">Still need help?</h2>
            <p className="mt-2 text-white/70">Reach out and we�ll get back quickly.</p>
          </div>
          <button className="bg-white text-black px-5 py-2 rounded-md">Contact Support</button>
        </div>
      </section>
    </main>
  )
}

export default page
