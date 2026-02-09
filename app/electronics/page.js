"use client";
import React, { useMemo, useState } from "react";
import Image from "next/image";
import { useCart } from "../context/cartcontext";

const products = [
  { id: "5", name: "Asus TUF", image: "/tuf.png", price: 78000, category: "Laptop" },
  { id: "6", name: "ROG Laptop", image: "/rog.png", price: 115000, category: "Laptop" },
  { id: "7", name: "iPhone", image: "/mobile.png", price: 34000, category: "Mobile" },
  { id: "8", name: "Mobile Pro", image: "/mobile2.webp", price: 64000, category: "Mobile" },
];

const categories = ["Laptop", "Mobile"];
const priceRanges = [
  { label: "Under INR 35000", test: (p) => p < 35000 },
  { label: "INR 35000 - INR 65000", test: (p) => p >= 35000 && p <= 65000 },
  { label: "INR 65000 - INR 100000", test: (p) => p > 65000 && p <= 100000 },
  { label: "Above INR 100000", test: (p) => p > 100000 },
];

const FilterChip = ({ active, label, onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className={`text-left px-3 py-2 rounded-md border text-sm transition ${active
      ? "bg-black text-white border-black"
      : "bg-white text-black border-black/15 hover:bg-black/5"}`}
  >
    {label}
  </button>
);

const ProductCard = ({ product, onAdd }) => (
  <div className="bg-white border border-black/10 rounded-lg overflow-hidden flex flex-col">
    <div className="relative aspect-[3/4] bg-[#f3f1ee]">
      <Image
        src={product.image}
        alt={product.name}
        fill
        className="object-contain p-6"
      />
    </div>
    <div className="p-4 flex-1 flex flex-col">
      <p className="text-xs uppercase tracking-widest text-black/60">{product.category}</p>
      <h3 className="mt-1 text-lg font-semibold">{product.name}</h3>
      <p className="mt-2 text-sm text-black/70">INR {product.price}</p>
      <button
        onClick={onAdd}
        className="mt-4 bg-black text-white rounded-md px-4 py-2"
      >
        Add to cart
      </button>
    </div>
  </div>
);

const Page = () => {
  const { addToCart } = useCart();
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedPrice, setSelectedPrice] = useState("");

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const categoryOk = selectedCategory ? product.category === selectedCategory : true;
      const priceOk = selectedPrice
        ? priceRanges.find((r) => r.label === selectedPrice)?.test(product.price)
        : true;
      return categoryOk && priceOk;
    });
  }, [selectedCategory, selectedPrice]);

  const clearFilters = () => {
    setSelectedCategory("");
    setSelectedPrice("");
  };

  return (
    <main className="min-h-screen bg-[#f7f5f2] text-[#111]">
      <section className="border-b border-black/10">
        <div className="max-w-6xl mx-auto px-6 py-10 md:py-12">
          <p className="text-xs uppercase tracking-widest text-black/60">Category</p>
          <h1 className="mt-2 text-3xl md:text-5xl font-semibold">Electronics</h1>
          <p className="mt-3 max-w-2xl text-black/70">
            Discover laptops and mobiles built for performance, productivity, and everyday use.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-10 md:py-12">
        <div className="grid md:grid-cols-[260px_1fr] gap-8">
          {/* Filters */}
          <aside className="bg-white border border-black/10 rounded-lg p-5 h-fit">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">Filters</h2>
              <button
                type="button"
                onClick={clearFilters}
                className="text-sm underline"
              >
                Clear
              </button>
            </div>

            <div className="mt-5">
              <p className="text-sm font-semibold">Category</p>
              <div className="mt-3 grid gap-2">
                {categories.map((c) => (
                  <FilterChip
                    key={c}
                    label={c}
                    active={selectedCategory === c}
                    onClick={() => setSelectedCategory(c === selectedCategory ? "" : c)}
                  />
                ))}
              </div>
            </div>

            <div className="mt-6">
              <p className="text-sm font-semibold">Price</p>
              <div className="mt-3 grid gap-2">
                {priceRanges.map((r) => (
                  <FilterChip
                    key={r.label}
                    label={r.label}
                    active={selectedPrice === r.label}
                    onClick={() => setSelectedPrice(r.label === selectedPrice ? "" : r.label)}
                  />
                ))}
              </div>
            </div>
          </aside>

          {/* Results */}
          <div>
            <div className="flex items-center justify-between">
              <p className="text-sm text-black/70">{filteredProducts.length} items</p>
            </div>
            <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((p) => (
                <ProductCard
                  key={p.id}
                  product={p}
                  onAdd={() =>
                    addToCart({
                      id: p.id,
                      name: p.name,
                      image: p.image,
                      price: p.price,
                      quantity: 1,
                    })
                  }
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Page;
