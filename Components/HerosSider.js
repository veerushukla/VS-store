'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import Image from 'next/image'

const slides = [
    {
        src: '/studs.png',
        label: 'Shop Football Shoes',
        url: '/sports'
    },
    {
        src: '/acer.png',
        label: 'Explore Acer Deals',
        url: '/electronics'
    },
    {
        src: '/shirt.png',
        label: 'New T-Shirt Collection',
        url: '/clothes'
    }
]

const HeroSlider = () => {
    return (
        <div className="w-full relative">
            <div className="max-w-5xl mx-auto px-4 pb-4 text-center">
                <p className="text-xs uppercase tracking-widest text-black/60">Featured</p>
                <h2 className="mt-2 text-2xl md:text-3xl font-semibold text-black">Weekly highlights</h2>
                <p className="mt-2 text-sm md:text-base text-black/70">
                    Curated picks across sports, electronics, and apparel. Explore the best deals of the week.
                </p>
            </div>
            <div className="w-full h-[360px] md:h-[520px] relative">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={30}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 5000 }}
                loop
                className="h-full"
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div className="flex justify-center items-center w-full h-[360px] md:h-[520px]">
                            <div className="relative flex justify-center items-center w-[220px] md:w-[340px] h-[260px] md:h-[340px] border border-gray-700/60 rounded-lg bg-[#1b1b1b] overflow-hidden shadow-sm">
                                <Image
                                    src={slide.src}
                                    alt={slide.label}
                                    fill
                                    className="object-contain transition-transform duration-300 hover:scale-105"
                                    priority={index === 0}
                                />
                                <a
                                    href={slide.url}
                                    className="absolute bottom-4 px-4 py-2 bg-white text-black rounded-full text-sm font-semibold shadow hover:bg-gray-200 transition"
                                >
                                    {slide.label}
                                </a>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            </div>
        </div>
    )
}

export default HeroSlider
