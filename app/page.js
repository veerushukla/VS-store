"use client";

import Image from "next/image";
import React from "react";
import HeroSlider from "@/Components/HerosSider";
import { useCart } from "./context/cartcontext";

export default function Home() {
  const { addToCart } = useCart();

  // Define your products with id, name, price, and image
  const electronicsProduct = {
    id: "13",
    name: "Laptop - Asus-Tuf",
    price: 78000,
    image: "/tuf.png",
  };

  const sportProduct = {
    id: "14",
    name: "Football",
    price: 1200,
    image: "/football.png",
  };

  const clothProduct = {
    id: "15",
    name: "T-shirt - VS",
    price: 660,
    image: "/tshirt.avif",
  };

  return (
      <main className="shop min-h-screen">
        <div className="p-4">
          {/* items */}
          <div className="grid lg:grid-cols-[auto_auto] grid-rows-[auto_auto] gap-4 p-2">
            {/* electronics */}
            <div className="electronics flex flex-col md:flex-row items-center justify-around md:h-120 h-auto overflow-hidden border-2 border-white rounded-md hover:border-blue-700 bg-[#171717] p-4">
              <Image
                height={300}
                width={400}
                alt={electronicsProduct.name}
                src={electronicsProduct.image}
                className="object-cover hover:scale-105 transition-all transform duration-300"
              />
              <button
                onClick={() => addToCart(electronicsProduct)}
                className="w-full sm:w-auto shadow-md font-medium text-gray-800 rounded-full px-4 py-2 bg-white/90 backdrop-blur flex items-center justify-between gap-2 text-sm sm:text-base"
              >
                <span className="hover:underline">{electronicsProduct.name}</span>
                <span className="text-xs font-semibold bg-gray-300 text-black px-2 py-1 rounded-full whitespace-nowrap">
                  ₹{electronicsProduct.price}
                </span>
              </button>
            </div>

            {/* cloths and sports */}
            <div className="cloths-sports grid grid-rows-[auto_auto] gap-4 md:h-120 h-auto">
              {/* sport item */}
              <div className="sport flex flex-col md:flex-row items-center justify-around overflow-hidden border-2 border-white rounded-md hover:border-blue-700 bg-[#171717] p-4">
                <Image
                  width={200}
                  height={200}
                  alt={sportProduct.name}
                  src={sportProduct.image}
                  className="object-cover hover:scale-110 transition-all transform duration-300"
                />
                <button
                  onClick={() => addToCart(sportProduct)}
                  className="w-full sm:w-auto shadow-md font-medium bg-white/90 backdrop-blur  text-gray-800 rounded-full px-4 py-2 flex items-center justify-between gap-2 text-sm sm:text-base"
                >
                  <span className="hover:underline">{sportProduct.name}</span>
                  <span className="text-xs font-semibold bg-gray-300 text-black px-2 py-1 rounded-full whitespace-nowrap">
                    ₹{sportProduct.price}
                  </span>
                </button>
              </div>

              {/* cloth item */}
              <div className="cloth flex flex-col md:flex-row items-center justify-around overflow-hidden border-2 border-white rounded-md hover:border-blue-700 bg-[#171717] p-4">
                <Image
                  width={200}
                  height={400}
                  alt={clothProduct.name}
                  src={clothProduct.image}
                  className="object-cover hover:scale-110 transition-all transform duration-300"
                />
                <button
                  onClick={() => addToCart(clothProduct)}
                  className="w-full sm:w-auto shadow-md font-medium bg-white/90 backdrop-blur  text-gray-800 rounded-full px-4 py-2 flex items-center justify-between gap-2 text-sm sm:text-base"
                >
                  <span className="hover:underline">{clothProduct.name}</span>
                  <span className="text-xs font-semibold bg-gray-300 text-black px-2 py-1 rounded-full whitespace-nowrap">
                    ₹{clothProduct.price}
                  </span>
                </button>
              </div>
            </div>
          </div>
          {/* slider */}
          <div className="slider mt-8">
            <HeroSlider />
          </div>
        </div>
      </main>
  );
}
