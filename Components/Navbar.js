"use client"
import React from 'react'
import Link from 'next/link'
import { useState } from 'react'
import { useCart } from '@/app/context/cartcontext'
import { toast } from 'react-toastify'
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'

const input = [
  {
    id: "1",
    name: "Clothes",
  },
  {
    id: '2',
    name: 'electronics',
  },
  {
    id: '3',
    name: 'sports',
  }
]



const Navbar = () => {

  const [menuopen, setmenuopen] = useState(false)

  const [openall, setopenall] = useState(false)

  const [search, setsearch] = useState('')

  const [opencart, setopencart] = useState(false)

  const { cartItems, removeFromCart } = useCart();

  const order = () => {
    toast.success("Thanks this is a demo website", {
      position: "top-right",
      autoClose: 2000,
    });
  };

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);



  const filterItems = input.filter((item) =>
    search ? item.name.toLowerCase().includes(search.toLowerCase()) : true
  )


  const click = () => {
    setmenuopen(!menuopen)

  }

  const closemenu = () => {
    setmenuopen(false)
  }

  const clickall = () => {
    setopenall(!openall)
  }

  const closeall = () => {
    setopenall(false)
  }


  return (
    <nav className='bg-white text-black p-4 relative'>
      <div className='w-auto px-2 sm:px-4 lg:px-6'>
        <div className="justify-around flex flex-row">
          {/* mobile-toggle */}
          <div className="mobile md:hidden">
            <div className="items-start">
              <button onClick={click} className='flex items-center justify-center py-2'>
                <img width={32} height={32} alt={menuopen ? "close" : "open"} src={menuopen ? "arrow.png" : "open.png"}></img>
              </button>
            </div>
          </div>
          {/* mobile-naviagtion */}
          <div className={`${menuopen ? "flex" : "hidden"} flex flex-col gap-2 bg-[#bfbfbf]/75 backdrop-blur-md p-4 mt-8 transition-all rounded-md md:hidden absolute left-4 right-4 top-[64px] z-50`}>
            <div className="block">
              <div className="block relative">
                <input
                  onChange={(e) => setsearch(e.target.value)}
                  value={search}
                  className='bg-[#1b1b1b] p-2 px-8 w-full border-2 border-black text-white rounded-sm'
                  type="text"
                  placeholder='search items'
                />
                <img src="/search.svg" alt="search" className='absolute right-3 top-3 w-5 h-5' />

                {/* Search Results Dropdown (Mobile) */}
                {search && filterItems.length > 0 && (
                  <div className="bg-white text-black border border-black rounded shadow-md z-50 mt-2 w-full">
                    {filterItems.map((item) => (
                      <Link
                        key={item.id}
                        href={`/${item.name.toLowerCase()}`}
                        className="block px-4 py-2 hover:bg-gray-200"
                        onClick={() => {
                          setsearch('');
                          closemenu();
                        }}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}

                {/* No results */}
                {search && filterItems.length === 0 && (
                  <div className="bg-white text-black border border-black rounded shadow-md z-50 mt-2 px-4 py-2">
                    No items found
                  </div>
                )}
              </div>
            </div>
            <Link onClick={closemenu} href="/" className='block relative'>Home</Link>
            <a onClick={(e) => { clickall(); closemenu(); }} className='block relative'>All</a>
            <Link onClick={closemenu} href="/clothes" className='block relative'>Clothes</Link>
            <Link onClick={closemenu} href="/electronics" className='block relative'>Electronics</Link>
          </div>
          {/* all naviagation */}
          <div className={`${openall ? 'flex' : 'hidden'} flex flex-col gap-2 items-center justify-center w-1/2s bg-[#bfbfbf]/75 backdrop-blur-md p-4 mt-8 transition-all rounded-md absolute left-4 right-4 top-[64px] z-50`}>
            <Link onClick={closeall} href="/" className='block relative'>Home</Link>
            <Link onClick={closeall} href="/sports" className='block relative'>Sports</Link>
            <Link onClick={closeall} href="/clothes" className='block relative'>Clothes</Link>
            <Link onClick={closeall} href="/electronics" className='block relative'>Electronics</Link>
          </div>
          {/* logo */}
          <div className="flex items-center gap-2">
            <div className="logo flex items-center gap-2">
              <Link className="bg-black text-white p-2 border-2 border-green-400 rounded-lg" href="/">
                V-S
              </Link>
            </div>
            <span className="text-xl font-semibold ml-2">VS-store</span>
          </div>
          {/* menu  */}
          <div className="items-center flex">
            <div className="menu hidden md:flex md:flex-row gap-4">
              <Link className='relative group' href="/">Home <span
                className="absolute left-0 -bottom-0.5 h-0.5 w-full bg-black transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100 origin-left"
              ></span></Link>
              <a className='relative group' onClick={(e) => { clickall(); closemenu(); }}>All <span
                className="absolute left-0 -bottom-0.5 h-0.5 w-full bg-black transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100 origin-left"
              ></span></a>
              <Link className='relative group' href="/clothes">Clothes <span
                className="absolute left-0 -bottom-0.5 h-0.5 w-full bg-black transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100 origin-left"
              ></span></Link>
              <Link className='relative group' href="/electronics">Electronics <span
                className="absolute left-0 -bottom-0.5 h-0.5 w-full bg-black transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100 origin-left"
              ></span></Link>
            </div>
          </div>
          {/* search-bar */}
          {/* search-bar */}
          <div className="items-center flex relative">
            <div className="search hidden lg:flex flex-col relative">
              <input
                onChange={(e) => setsearch(e.target.value)}
                value={search}
                className='bg-[#1b1b1b] p-2 px-8 border-2 border-black text-white rounded-sm'
                type="text"
                placeholder='search items'
              />
              <img src="/search.svg" alt="search" className='absolute right-3 top-3 w-5 h-5' />

              {/* Search Results Dropdown */}
              {search && filterItems.length > 0 && (
                <div className="absolute top-full mt-1 bg-white text-black border border-black rounded shadow-md z-50 w-full">
                  {filterItems.map((item) => (
                    <Link
                      key={item.id}
                      href={`/${item.name.toLowerCase()}`}
                      className="block px-4 py-2 hover:bg-gray-200"
                      onClick={() => setsearch('')}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}

              {/* Optional: No result */}
              {search && filterItems.length === 0 && (
                <div className="absolute top-full mt-1 bg-white text-black border border-black rounded shadow-md z-50 w-full px-4 py-2">
                  No items found
                </div>
              )}
            </div>
          </div>

          {/* cart */}
          <div className="relative flex items-center justify-center">
            <button onClick={() => setopencart(true)} className='cart cursor-pointer flex bg-white border-2 border-black rounded-lg'>
              <img className='w-10 h-10 p-2' src="/cart.png" alt="cart" />
            </button>
            {/* drop dowm */}
            {opencart && (
              <div
                onClick={() => setopencart(false)}
                className="fixed inset-0 bg-black opacity-50 z-[999]"
              />
            )}
            {/* Sliding Cart Drawer */}
            {/* Sliding Cart Drawer */}
            <div
              className={`fixed top-0 right-0 h-full w-80 bg-[rgba(0,0,0,0.5)] backdrop-blur-md text-white shadow-lg z-[1000] transform transition-transform duration-300 ease-in-out ${opencart ? "translate-x-0" : "translate-x-full"
                }`}
            >
              <div className="p-4 flex justify-between items-center border-b">
                <h2 className="text-lg font-bold">Your Cart</h2>
                <button onClick={() => setopencart(false)} className="text-gray-400 text-xl">✕</button>
              </div>

              <div className="p-4 overflow-y-scroll h-full">
                {cartItems.length === 0 ? (
                  <p>Your cart is empty.</p>
                ) : (
                  <ul className="space-y-4">
                    {cartItems.map((item) => (
                      <li key={item.id} className="flex justify-between items-center">
                        <div>
                          <p>{item.name}</p>
                          <p className="text-sm text-gray-600">${item.price}</p>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-red-600"
                        >
                          ✕
                        </button>
                      </li>
                    ))}
                    <div className="mt-4 border-t pt-4">
                      <p className="text-md font-semibold">Total: ${totalPrice.toFixed(2)}</p>
                    </div>

                    <button
                      onClick={order}
                      className="bg-white hover:cursor-pointer text-black rounded-md justify-center items-center px-2 py-1"
                    >
                      Place Order
                    </button>
                  </ul>
                )}
              </div>
            </div>
          </div>
          <div className='login relative flex flex-row items-center justify-center gap-2 w-fit'>
            <SignedOut>
              <SignInButton>
                <button className='bg-black rounded-md border-2 border-gray-400 text-white py-1 px-2 hover:ease-in hover:scale-95'>Sign in</button>
                </SignInButton>
              <SignUpButton>
                <button className='bg-black rounded-md border-2 border-gray-400 text-white py-1 px-2 hover:ease-in hover:scale-95'>Sign up</button>
              </SignUpButton>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
