"use client"
import React from 'react';
import Image from 'next/image';
import { useState } from 'react';
import { useCart } from '../context/cartcontext';

const products = [
  { id: 1, name:'Black-T-shirt', image: '/tshirt.avif', price: 499, category: 'T-Shirts' },
  { id: 2, name:'Blue-shirt', image: '/shirt.png', price: 1899, category: 'Shirts' },
  { id: 3, name:'Red-short', image: '/short1.png', price: 700, category: 'Shorts' },
  { id: 4, name:'Trouser', image: '/trowser1.png', price: 2500, category: 'Trousers' },
];

const FilterSection = ({ title, items, onSelectFilter }) => (
  <div>
    <h3 className="font-semibold mb-1">{title}</h3>
    <ul className="pl-2 space-y-1">
      {items.map((item, idx) => (
        <li
          key={idx}
          className="font-normal text-sm cursor-pointer hover:underline"
          onClick={() => onSelectFilter(item)} // On filter click
        >
          {item}
        </li>
      ))}
    </ul>
  </div>
);

const ProductCard = ({ image, price, onAdd }) => (
  <div className="relative bg-[#1b1b1b] border-2 border-white hover:border-blue-600 rounded-md overflow-hidden">
    <div className="w-full aspect-[3/4] relative">
      <Image
        src={image}
        alt="product"
        fill
        className="object-cover transition-transform duration-300 hover:scale-110"
      />
    </div>
    <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-white/90 backdrop-blur px-4 py-2 rounded-full shadow-md">
      <button onClick={onAdd} className="text-sm font-medium text-gray-800 hover:underline">Buy Now</button>
      <span className="text-xs font-semibold bg-gray-300 text-black px-2 py-1 rounded-full">₹{price}</span>
    </div>
  </div>
);

export default function Page() {

  // cart
  const { addToCart } = useCart();

  // State for selected filters
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedPriceRange, setSelectedPriceRange] = useState(null);

  // Function to select a category filter
  const handleCategoryFilter = (category) => {
    setSelectedCategory(category);
  };

  // Function to select a price range filter
  const handlePriceFilter = (range) => {
    setSelectedPriceRange(range);
  };

  // Filter products based on selected filters
  const filteredProducts = products.filter((product) => {
    let categoryMatch = true;
    let priceMatch = true;

    // Filter by category
    if (selectedCategory) {
      categoryMatch = product.category === selectedCategory;
    }

    // Filter by price range
    if (selectedPriceRange) {
      if (selectedPriceRange === 'Under ₹500') {
        priceMatch = product.price < 500;
      } else if (selectedPriceRange === '₹500 - ₹1000') {
        priceMatch = product.price >= 500 && product.price <= 1000;
      } else if (selectedPriceRange === '₹1000 - ₹2000') {
        priceMatch = product.price > 1000 && product.price <= 2000;
      } else if (selectedPriceRange === '₹2000 - ₹3000') {
        priceMatch = product.price > 2000 && product.price <= 3000;
      }
    }

    return categoryMatch && priceMatch;
  });

  return (
    <main className="min-h-screen px-4 py-6">
      {/* Flex to keep sidebar and content side by side */}
      <div className="flex flex-row gap-6 overflow-hidden">
        {/* Sidebar - fixed width */}
        <aside className="md:w-[120px] w-auto shrink-0 space-y-4">
          <FilterSection
            title="Category"
            items={['T-Shirts', 'Shirts', 'Shorts', 'Trousers']}
            onSelectFilter={handleCategoryFilter}
          />
          <FilterSection
            title="Price"
            items={['Under ₹500', '₹500 - ₹1000', '₹1000 - ₹2000', '₹2000 - ₹3000']}
            onSelectFilter={handlePriceFilter}
          />
        </aside>

        {/* Divider */}
        <div className="md:bg-white bg-black w-0.5"></div>

        {/* Product Grid */}
        <section className="flex-1 min-w-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredProducts.map((p) => (
            <ProductCard key={p.id}
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
          ))}
        </section>
      </div>
    </main>
  );
}
