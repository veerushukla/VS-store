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
          <h1 className="mt-2 text-4xl md:text-6xl font-semibold">Privacy & Policy</h1>
          <p className="mt-3 max-w-2xl text-black/70">
            This policy explains how information is collected and used in this demo store. It is a sample document
            for UI purposes and does not represent a real business policy.
          </p>
        </div>
      </section>

      {/* Summary */}
      <section className="max-w-6xl mx-auto px-6 py-8">
        <div className="bg-white border border-black/10 rounded-lg p-6">
          <h2 className="text-lg font-semibold">Quick Summary</h2>
          <ul className="mt-3 space-y-2 text-sm text-black/70">
            <li>We collect basic account details to improve your shopping experience.</li>
            <li>We use cookies for essential site functionality and analytics.</li>
            <li>We never sell personal data. This is a demo experience.</li>
          </ul>
        </div>
      </section>

      {/* Details */}
      <section className="max-w-6xl mx-auto px-6 pb-12 md:pb-16">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white border border-black/10 rounded-lg p-6">
            <h3 className="text-lg font-semibold">Information We Collect</h3>
            <p className="mt-2 text-sm text-black/70">
              Account details such as name and email, plus order-related information for checkout flow.
              This data is used only to present a realistic demo experience.
            </p>
          </div>
          <div className="bg-white border border-black/10 rounded-lg p-6">
            <h3 className="text-lg font-semibold">How We Use Data</h3>
            <p className="mt-2 text-sm text-black/70">
              To personalize the browsing experience, power search suggestions, and improve UI performance.
              No real transactions or external sharing are performed.
            </p>
          </div>
          <div className="bg-white border border-black/10 rounded-lg p-6">
            <h3 className="text-lg font-semibold">Cookies</h3>
            <p className="mt-2 text-sm text-black/70">
              Cookies are used for login state, cart persistence, and analytics. You can clear cookies at any time.
            </p>
          </div>
          <div className="bg-white border border-black/10 rounded-lg p-6">
            <h3 className="text-lg font-semibold">Contact</h3>
            <p className="mt-2 text-sm text-black/70">
              For questions about this policy, reach out through the demo contact page.
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
              text="This demo store collects basic details to show how a real checkout works, uses cookies for login and cart state, and never sells data."
              speed={40}
              cursor={true}
              cursorStyle="|"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <section className="bg-black text-white">
        <div className="max-w-6xl mx-auto px-6 py-10 md:py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold">Need more details?</h2>
            <p className="mt-2 text-white/70">Send a message and we�ll respond with clarity.</p>
          </div>
          <button className="bg-white text-black px-5 py-2 rounded-md">Contact Support</button>
        </div>
      </section>
    </main>
  )
}

export default page
