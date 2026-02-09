"use client";

import React, { useState } from "react";

const ContactPage = () => {
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Thanks! Your message has been received.");
  };

  return (
    <main className="min-h-screen bg-[#f7f5f2] text-[#111]">
      <section className="border-b border-black/10">
        <div className="max-w-6xl mx-auto px-6 py-12 md:py-16">
          <p className="text-xs uppercase tracking-widest text-black/60">Contact</p>
          <h1 className="mt-2 text-4xl md:text-6xl font-semibold">Get in touch</h1>
          <p className="mt-3 max-w-2xl text-black/70">
            Have a question about the demo store or want to collaborate? Send a message and we�ll respond soon.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-10 md:py-12">
        <div className="grid md:grid-cols-[1.2fr_0.8fr] gap-8">
          <form
            onSubmit={handleSubmit}
            className="bg-white border border-black/10 rounded-lg p-6"
          >
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-semibold">Full name</label>
                <input
                  required
                  type="text"
                  className="mt-2 w-full border border-black/15 rounded-md px-3 py-2"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="text-sm font-semibold">Email</label>
                <input
                  required
                  type="email"
                  className="mt-2 w-full border border-black/15 rounded-md px-3 py-2"
                  placeholder="you@example.com"
                />
              </div>
            </div>
            <div className="mt-4">
              <label className="text-sm font-semibold">Subject</label>
              <input
                type="text"
                className="mt-2 w-full border border-black/15 rounded-md px-3 py-2"
                placeholder="How can we help?"
              />
            </div>
            <div className="mt-4">
              <label className="text-sm font-semibold">Message</label>
              <textarea
                required
                rows={5}
                className="mt-2 w-full border border-black/15 rounded-md px-3 py-2"
                placeholder="Write your message..."
              />
            </div>
            <button
              type="submit"
              className="mt-5 bg-black text-white rounded-md px-5 py-2"
            >
              Send message
            </button>
            {status && <p className="mt-3 text-sm text-green-700">{status}</p>}
          </form>

          <aside className="bg-white border border-black/10 rounded-lg p-6 h-fit">
            <h2 className="text-lg font-semibold">Contact details</h2>
            <p className="mt-2 text-sm text-black/70">
              Reach out directly or use the form. We typically respond within 24 hours.
            </p>
            <div className="mt-4 text-sm">
              <p className="text-black/60">Email</p>
              <p className="font-medium">veershukla10a21@gmail.com</p>
            </div>
            <div className="mt-4 text-sm">
              <p className="text-black/60">Hours</p>
              <p className="font-medium">Mon�Sat, 10:00 AM � 6:00 PM</p>
            </div>
            <div className="mt-4 text-sm">
              <p className="text-black/60">Location</p>
              <p className="font-medium">Remote / Online</p>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
