'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { useCart } from '../context/cartcontext';

// product data with categories
const products = [
  { id: '5', name: 'Asus', image: "/tuf.png", price: 78000, category: 'Laptop' },
  { id: '6', name: 'rog', image: "/rog.png", price: 115000, category: 'Laptop' },
  { id: '7', name: 'iPhone', image: "/mobile.png", price: 34000, category: 'Mobile' },
  { id: '8', name: 'mobile', image: "/mobile2.webp", price: 64000, category: 'Mobile' },
];

// card component
const Productcard = ({ name, image, price, onAdd }) => (
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

// main page
const Page = () => {

  const { addToCart } = useCart();

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [maxPrice, setMaxPrice] = useState(null);

  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory ? product.category === selectedCategory : true;
    const matchesPrice = maxPrice ? product.price <= maxPrice : true;
    return matchesCategory && matchesPrice;
  });

  return (
    <main className='min-h-screen px-4 py-6'>
      <div className="flex flex-row gap-6">
        {/* sidebar */}
        <section className='md:w-[120px] w-auto shrink-0 space-y-4'>
          <div>
            <h3 className='font-semibold mb-1'>Category</h3>
            <ul className="pl-2 space-y-1">
              <li><button onClick={() => setSelectedCategory('Laptop')} className="font-normal text-sm cursor-pointer hover:underline">Laptop</button></li>
              <li><button onClick={() => setSelectedCategory('Mobile')} className="font-normal text-sm cursor-pointer hover:underline">Mobile</button></li>
              <li><button onClick={() => setSelectedCategory(null)} className="font-normal text-sm cursor-pointer hover:underline">All</button></li>
            </ul>
          </div>

          <div>
            <h3 className='font-semibold mb-1'>Price (Max)</h3>
            <ul className="pl-2 space-y-1">
              <li><button onClick={() => setMaxPrice(35000)} className="font-normal text-sm cursor-pointer hover:underline">Under ₹35,000</button></li>
              <li><button onClick={() => setMaxPrice(65000)} className="font-normal text-sm cursor-pointer hover:underline">₹60,000</button></li>
              <li><button onClick={() => setMaxPrice(100000)} className="font-normal text-sm cursor-pointer hover:underline">₹1,00,000</button></li>
              <li><button onClick={() => setMaxPrice(140000)} className="font-normal text-sm cursor-pointer hover:underline">₹1,40,000</button></li>
              <li><button onClick={() => setMaxPrice(null)} className="font-normal text-sm cursor-pointer hover:underline">All Prices</button></li>
            </ul>
          </div>
        </section>

        {/* divider  */}
        <div className="md:bg-white bg-black w-0.5"></div>

        {/* product section */}
        <section className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 w-full'>
          {filteredProducts.length > 0 ? (
            filteredProducts.map((p) => (
              <Productcard
                key={p.id}
                name={p.name}
                image={p.image}
                price={p.price}
                onAdd={() => addToCart({
                  id: p.id,
                  name: p.name,
                  image: p.image,
                  price: p.price,
                  quantity: 1,
                })
                }
              />
            ))
          ) : (
            <p className="text-white">No products found.</p>
          )}
        </section>
      </div>
    </main>
  );
}

export default Page;
