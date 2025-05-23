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
        <div className="w-full h-[400px] md:h-[600px] relative">
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
                        <div className="flex justify-center items-center w-full h-[400px] md:h-[600px]">
                            <div className="relative flex justify-center items-center w-[250px] md:w-[400px] h-[300px] md:h-[400px] border-2 border-gray-700 rounded-md bg-[#1b1b1b] overflow-hidden">
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
    )
}

export default HeroSlider
