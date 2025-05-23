"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { useCart } from '../context/cartcontext';

const products = [
  {
    id: "9",
    name: "Football",
    image: "/football.png",
    price: 1200,
    category: "Football",
  },
  {
    id: "10",
    name: "Studs",
    image: "/studs.png",
    price: 2700,
    category: "Football",
  },
  {
    id: "11",
    name: "Bat",
    image: "/bat.png",
    price: 1990,
    category: "Cricket",
  },
  {
    id: "12",
    name: "Cone",
    image: "/cone.png",
    price: 1300,
    category: "Cones",
  }
];

const ProductDisplay = ({ name, price, image, onAdd }) => (
  <div className="relative bg-[#1b1b1b] border-2 border-white hover:border-blue-600 rounded-md overflow-hidden">
    <div className="w-full aspect-[3/4] relative">
      <Image src={image} alt={name} fill className="object-scale-down px-10 object-center transition-transform duration-300 hover:scale-110" />
    </div>
    <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-white/90 backdrop-blur px-4 py-2 rounded-full shadow-md">
      <button onClick={onAdd} className="text-sm font-medium text-gray-800 hover:underline">Buy Now</button>
      <span className="text-xs font-semibold bg-gray-300 text-black px-2 py-1 rounded-full">₹{price}</span>
    </div>
  </div>
);

const Page = () => {

  const { addToCart } = useCart();


  const [maxPrice, setMaxPrice] = useState(null);
  const [category, setCategory] = useState(null);

  const filteredProducts = products.filter(product => {
    const matchesPrice = maxPrice ? product.price <= maxPrice : true;
    const matchesCategory = category ? product.category === category : true;
    return matchesPrice && matchesCategory;
  });

  return (
    <main className='min-h-screen px-4 py-6'>
      <div className="flex flex-row gap-6">
        {/* Category Filter */}
        <section className='md:w-[120px] w-auto shrink-0 space-y-4'>
          <div className="category">
            <h3 className="font-semibold mb-1">Category</h3>
            <ul className='pl-2 space-y-1'>
              <li><button onClick={() => setCategory('Football')} className='ont-normal text-sm cursor-pointer hover:underline'>Football</button></li>
              <li><button onClick={() => setCategory('Cones')} className='ont-normal text-sm cursor-pointer hover:underline'>Cones</button></li>
              <li><button onClick={() => setCategory('Cricket')} className='ont-normal text-sm cursor-pointer hover:underline'>Cricket</button></li>
              <li><button onClick={() => setCategory(null)} className='ont-normal text-sm cursor-pointer hover:underline'>All</button></li>
            </ul>
          </div>

          {/* Price Filter */}
          <div className="price">
            <h3 className="font-semibold mb-1">Max Price</h3>
            <ul className='pl-2 space-y-1'>
              <li><button onClick={() => setMaxPrice(1500)} className='ont-normal text-sm cursor-pointer hover:underline'>Below ₹1500</button></li>
              <li><button onClick={() => setMaxPrice(2000)} className='ont-normal text-sm cursor-pointer hover:underline'>Below ₹2000</button></li>
              <li><button onClick={() => setMaxPrice(null)} className='ont-normal text-sm cursor-pointer hover:underline'>All Prices</button></li>
            </ul>
          </div>
        </section>

        {/* divider  */}
        <div className="bg-black md:bg-white w-0.5" />


        {/* Product Display */}
        <section className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 w-full'>
          {filteredProducts.map(product => (
            <ProductDisplay
              key={product.id}
              name={product.name}
              image={product.image}
              price={product.price}
              onAdd={() => addToCart({
                id: product.id,
                name: product.name,
                image: product.image,
                price: product.price,
                quantity: 1,
              })
              }
            />
          ))}
        </section>
      </div>
    </main>
  );
};

export default Page;
