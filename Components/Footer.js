import React from 'react'
import Link from 'next/link'

const Footer = () => {
    return (
        <div>
            <div className='bg-white h-[1] w-full'></div>
            <div className="nav md:pl-20 pl-10 py-8 bg-black">
                <div className="flex items-center gap-2">
                    <div className="logo flex items-center gap-2">
                        <Link className="bg-black text-white p-2 border-2 border-green-400 rounded-lg" href="/">
                            V-S
                        </Link>
                    </div>
                    <span className="text-xl font-semibold ml-2 text-white">VS-store</span>
                </div>
                <span className='flex pl-20 space-y-2 text-sm text-gray-400'>
                    <ol className='flex flex-col gap-2'>
                        <Link href="/" className='w-fit'>Home</Link>
                        <Link href="/about" className='w-fit'>About</Link>
                        <Link href="/terms&condition" className='w-fit'>Terms & Conditions</Link>
                        <Link href="/shipping&returnpolicy" className='w-fit'>Shipping & Return Policy</Link>
                        <Link href="/privacy&policy" className='w-fit'>Privacy Policy</Link>
                        <Link href="/faq" className='w-fit'>FAQ</Link>
                    </ol>
                </span>
            </div>
            <div className='bg-[#1b1b1b] text-white relative w-full'>
                <ol className=' flex flex-row items-center justify-around p-4 py-6 text-sm md:text-lg font-medium'>
                    <li>2025 © All Rights Reserved.</li>
                    <li>Built with <span className='text-green-500'>♡</span> by Veeru Shukla</li>
                </ol>
            </div>
        </div>
    )
}

export default Footer
