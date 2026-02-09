"use client"

import Image from "next/image";
import React from "react";
import HeroSlider from "@/Components/HerosSider";
import { useCart } from "./context/cartcontext";
import Link from "next/link";

export default function Home() {
  const { addToCart } = useCart();

  const featured = [
    {
      id: "13",
      name: "Laptop - Asus-Tuf",
      price: 78000,
      image: "/tuf.png",
      tag: "Best Seller",
    },
    {
      id: "14",
      name: "Football",
      price: 1200,
      image: "/football.png",
      tag: "New Arrival",
    },
    {
      id: "15",
      name: "T-shirt - VS",
      price: 660,
      image: "/tshirt.avif",
      tag: "Trending",
    },
  ];

  return (
    <main className="min-h-screen bg-[#f7f5f2] text-[#111]">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-black/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,0,0,0.08),transparent_55%),radial-gradient(circle_at_top_right,rgba(0,0,0,0.05),transparent_60%)]" />
        <div className="relative max-w-6xl mx-auto px-6 py-14 md:py-20">
          <p className="text-xs uppercase tracking-widest text-black/60">VS-store</p>
          <h1 className="mt-2 text-4xl md:text-6xl font-semibold leading-tight">
            Shop essentials designed for everyday life.
          </h1>
          <p className="mt-4 max-w-2xl text-black/70">
            A curated demo storefront featuring electronics, sports gear, and apparel. Browse fast, add to cart,
            and experience a polished checkout flow.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/" className="bg-black text-white px-5 py-2 rounded-md">Shop Now</Link>
            <Link href="/electronics" className="border border-black/20 px-5 py-2 rounded-md">Explore Electronics</Link>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-6xl mx-auto px-6 py-10 md:py-14">
        <div className="grid md:grid-cols-3 gap-6">
          <Link href="/electronics" className="bg-white border border-black/10 rounded-lg p-6 hover:shadow-md transition">
            <p className="text-xs uppercase tracking-widest text-black/60">Category</p>
            <h3 className="mt-2 text-lg font-semibold">Electronics</h3>
            <p className="mt-2 text-sm text-black/70">Laptops, gadgets, and everyday tech essentials.</p>
          </Link>
          <Link href="/sports" className="bg-white border border-black/10 rounded-lg p-6 hover:shadow-md transition">
            <p className="text-xs uppercase tracking-widest text-black/60">Category</p>
            <h3 className="mt-2 text-lg font-semibold">Sports</h3>
            <p className="mt-2 text-sm text-black/70">Gear designed for training and performance.</p>
          </Link>
          <Link href="/clothes" className="bg-white border border-black/10 rounded-lg p-6 hover:shadow-md transition">
            <p className="text-xs uppercase tracking-widest text-black/60">Category</p>
            <h3 className="mt-2 text-lg font-semibold">Clothes</h3>
            <p className="mt-2 text-sm text-black/70">Comfortable everyday styles and basics.</p>
          </Link>
        </div>
      </section>

      {/* Featured */}
      <section className="max-w-6xl mx-auto px-6 pb-10 md:pb-14">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-widest text-black/60">Featured</p>
            <h2 className="text-2xl md:text-3xl font-semibold">Top Picks For You</h2>
          </div>
          <Link href="/" className="text-sm underline">View all</Link>
        </div>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          {featured.map((product) => (
              <div key={product.id} className="bg-white border border-black/10 rounded-lg p-5 flex flex-col">
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs uppercase tracking-widest text-black/60 whitespace-nowrap">{product.tag}</span>
                <span className="text-xs bg-black text-white px-2 py-1 rounded-full whitespace-nowrap">INR {product.price}</span>
              </div>
              <div className="mt-4 flex items-center justify-center bg-[#f3f1ee] rounded-md p-4">
                <Image
                  width={240}
                  height={200}
                  alt={product.name}
                  src={product.image}
                  className="object-contain"
                />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{product.name}</h3>
              <button
                onClick={() => addToCart(product)}
                className="mt-4 bg-black text-white rounded-md px-4 py-2"
              >
                Add to cart
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Promo */}
      <section className="bg-black text-white">
        <div className="max-w-6xl mx-auto px-6 py-12 md:py-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold">Limited-time bundles</h2>
            <p className="mt-2 text-white/70">Build your setup with curated bundles and clean savings.</p>
          </div>
          <Link href="/" className="bg-white text-black px-5 py-2 rounded-md">See bundles</Link>
        </div>
      </section>

      {/* Slider */}
      <section className="max-w-6xl mx-auto px-6 py-10 md:py-14">
        <HeroSlider />
      </section>
    </main>
  );
}
