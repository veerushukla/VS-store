"use client"
import React from 'react'

import CustomTypewriter from '@/Components/CustomTypewriter'

const page = () => {
    return (
        <main className='min-h-screen bg-black'>
            <section className='heading flex md:py-20 py-10 items-center justify-center'>
                <h1 className='md:text-6xl text-3xl text-center'>FAQ</h1>
            </section>
            {/* condition */}
            <section className="flex items-center justify-center p-10">
                <CustomTypewriter
                    text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero blanditiis temporibus fugit incidunt eos a laboriosam harum laborum dicta consequuntur delectus, omnis nesciunt mollitia, quis quo quia nam sunt perferendis hic alias quaerat reprehenderit sit ad assumenda. Magnam porro animi officiis fuga, delectus necessitatibus at cum aperiam! Ducimus laborum dicta tempore mollitia quos. Dicta impedit, vel reprehenderit ullam, deleniti a animi, veritatis iure odit esse suscipit aut unde! Libero tempore ut odit, sed maiores nulla delectus obcaecati fugiat repellendus pariatur dolore atque dicta?"
                    speed={40}
                    cursor={true}
                    cursorStyle="|"
                />
            </section>
        </main>
    )
}

export default page
