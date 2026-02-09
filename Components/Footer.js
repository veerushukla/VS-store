import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="border-t border-white/10" />

      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid gap-8 md:grid-cols-[1.2fr_2fr]">
          <div>
            <div className="flex items-center gap-3">
              <Link className="bg-white text-black px-3 py-2 rounded-lg" href="/">
                V-S
              </Link>
              <span className="text-xl font-semibold">VS-store</span>
            </div>
            <p className="mt-4 text-sm text-white/70 max-w-xs">
              A modern demo storefront showcasing clean UI, smooth cart flow, and fast browsing across categories.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 text-sm">
            <div>
              <p className="text-xs uppercase tracking-widest text-white/60">Store</p>
              <div className="mt-3 flex flex-col gap-2">
                <Link href="/" className="hover:underline">Home</Link>
                <Link href="/clothes" className="hover:underline">Clothes</Link>
                <Link href="/electronics" className="hover:underline">Electronics</Link>
                <Link href="/sports" className="hover:underline">Sports</Link>
              </div>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-white/60">Company</p>
              <div className="mt-3 flex flex-col gap-2">
                <Link href="/about" className="hover:underline">About</Link>
                <Link href="/faq" className="hover:underline">FAQ</Link>
                <Link href="/contact" className="hover:underline">Contact</Link>
                <Link href="/privacy&policy" className="hover:underline">Privacy Policy</Link>
                <Link href="/terms&condition" className="hover:underline">Terms & Conditions</Link>
              </div>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-white/60">Support</p>
              <div className="mt-3 flex flex-col gap-2">
                <Link href="/shipping&returnpolicy" className="hover:underline">Shipping & Returns</Link>
                <Link href="/order-tracking" className="hover:underline">Order Tracking</Link>
                <Link href="/faq" className="hover:underline">Help Center</Link>
                <span className="text-white/70">veershukla10a21@gamail.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10" />
      <div className="max-w-6xl mx-auto px-6 py-6 text-sm text-white/70 flex flex-col md:flex-row items-start md:items-center justify-between gap-2">
        <span>2026 (c) All Rights Reserved.</span>
        <span>Built by Veeru Shukla</span>
      </div>
    </footer>
  );
};

export default Footer;

