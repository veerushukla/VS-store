import React from 'react'
import Link from 'next/link'

const page = () => {
    return (
        <main className='min-h-screen'>
            <div className="about flex justify-center items-center md:py-20 py-10">
                <h1 className='md:text-6xl text-3xl'>About!</h1>
            </div>
            <p className="bg-yellow-200 text-black text-center p-2 text-xl font-medium mx-5">
                Hello! I am happy to see you here. This is just a demo website, Thank you!
            </p>
            <section className='work flex flex-col py-4'>
                <h3 className='text-2xl text-center mb-4'>
                    This is an example of an e-commerce site I created it using the Next.js
                </h3>
                {/* features */}
                <div className="support flex flex-col justify-center items-center">
                    <h3 className='text-center'>Support real-world e-commerce site features:</h3>
                    <ol className=' flex flex-col list-disc'>
                        <li>Serach</li>
                        <li>Filter</li>
                        <li>Add to Cart</li>
                        <li>And more!</li>
                    </ol>
                </div>
            </section>
            <p className='text-center mt-4'>
                If you want to contact me, check my portfolio&nbsp;&nbsp;-&nbsp;&nbsp;
                <Link
                    className='underline text-green-400 text-xl hover:scale-110 transition-all duration-300 transform inline-block'
                    target='_blank'
                    rel='noopener noreferrer'
                    href='https://veerushukla-portfolio.vercel.app/'
                >
                    Veeru Shukla
                </Link>
            </p>

        </main>
    )
}

export default page
