import React from 'react'
import Link from 'next/link'

const page = () => {
  return (
    <main className="min-h-screen bg-[#f7f5f2] text-[#111]">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-black/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,0,0,0.06),transparent_55%),radial-gradient(circle_at_top_right,rgba(0,0,0,0.05),transparent_60%)]" />
        <div className="relative max-w-6xl mx-auto px-6 py-16 md:py-24">
          <div className="inline-flex items-center gap-2 border border-black/15 rounded-full px-3 py-1 text-xs uppercase tracking-widest">
            About VS-store
          </div>
          <h1 className="mt-4 text-4xl md:text-6xl font-semibold leading-tight">
            A modern store built for everyday essentials.
          </h1>
          <p className="mt-4 max-w-2xl text-base md:text-lg text-black/70">
            VS-store is a demo e-commerce experience focused on clean design, fast browsing, and a smooth cart flow.
            Everything you see here is crafted to feel like a real store, from discovery to checkout.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/" className="bg-black text-white px-5 py-2 rounded-md">Shop Now</Link>
            <Link href="/electronics" className="border border-black/20 px-5 py-2 rounded-md">Browse Electronics</Link>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="max-w-6xl mx-auto px-6 py-12 md:py-16">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white border border-black/10 rounded-lg p-6">
            <h3 className="text-lg font-semibold">Curated Categories</h3>
            <p className="mt-2 text-sm text-black/70">Clothes, electronics, and sports essentials � organized for easy discovery.</p>
          </div>
          <div className="bg-white border border-black/10 rounded-lg p-6">
            <h3 className="text-lg font-semibold">Fast & Simple Cart</h3>
            <p className="mt-2 text-sm text-black/70">Add items quickly, review totals instantly, and move to checkout without friction.</p>
          </div>
          <div className="bg-white border border-black/10 rounded-lg p-6">
            <h3 className="text-lg font-semibold">Secure Auth</h3>
            <p className="mt-2 text-sm text-black/70">Sign in or sign up in seconds with a clean, minimal authentication flow.</p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white border-y border-black/10">
        <div className="max-w-6xl mx-auto px-6 py-10 md:py-14">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <p className="text-3xl font-semibold">3</p>
              <p className="text-xs uppercase tracking-widest text-black/60">Categories</p>
            </div>
            <div>
              <p className="text-3xl font-semibold">24/7</p>
              <p className="text-xs uppercase tracking-widest text-black/60">Store Access</p>
            </div>
            <div>
              <p className="text-3xl font-semibold">100%</p>
              <p className="text-xs uppercase tracking-widest text-black/60">Demo Experience</p>
            </div>
            <div>
              <p className="text-3xl font-semibold">Next.js</p>
              <p className="text-xs uppercase tracking-widest text-black/60">Built With</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="max-w-6xl mx-auto px-6 py-12 md:py-16">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold">What this store demonstrates</h2>
            <p className="mt-3 text-black/70">
              This project showcases real e-commerce patterns like product discovery, category navigation,
              responsive layout, and a polished cart drawer. It is intentionally minimal but feels production-ready.
            </p>
          </div>
          <div className="bg-white border border-black/10 rounded-lg p-6">
            <h3 className="text-lg font-semibold">Core features</h3>
            <ul className="mt-3 space-y-2 text-sm text-black/70">
              <li>Authentication</li>
              <li>Search with category shortcuts</li>
              <li>Responsive navigation</li>
              <li>Cart drawer with totals</li>
              <li>Clean product routing</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Policies */}
      <section className="max-w-6xl mx-auto px-6 pb-12 md:pb-16">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white border border-black/10 rounded-lg p-6">
            <h3 className="text-lg font-semibold">Shipping</h3>
            <p className="mt-2 text-sm text-black/70">Fast dispatch in 24 hours. Free shipping on eligible orders.</p>
          </div>
          <div className="bg-white border border-black/10 rounded-lg p-6">
            <h3 className="text-lg font-semibold">Returns</h3>
            <p className="mt-2 text-sm text-black/70">Easy returns within 7 days. No questions asked in this demo.</p>
          </div>
          <div className="bg-white border border-black/10 rounded-lg p-6">
            <h3 className="text-lg font-semibold">Support</h3>
            <p className="mt-2 text-sm text-black/70">Friendly help around the clock with quick email responses.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black text-white">
        <div className="max-w-6xl mx-auto px-6 py-12 md:py-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold">Want the full experience?</h2>
            <p className="mt-2 text-white/70">Explore the store or view the portfolio behind this demo.</p>
          </div>
          <div className="flex gap-3">
            <Link href="/" className="bg-white text-black px-5 py-2 rounded-md">Start Shopping</Link>
            <Link
              className="border border-white/40 px-5 py-2 rounded-md"
              target="_blank"
              rel="noopener noreferrer"
              href="https://veerushukla-portfolio.vercel.app/"
            >
              View Portfolio
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

export default page
