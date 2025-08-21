"use client";
import React from 'react'
import Image from 'next/image'
// About.tsx
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function AboutSection() {
  return (
    <section className=" text-white py-20 px-6 md:px-16 flex flex-col md:flex-row items-center gap-12">
      {/* Left Section - Text */}
      <div className="md:w-1/2">
        <h3 className="uppercase text-sm tracking-widest text-gray-400">
          More About Me
        </h3>
        <h1 className="text-4xl md:text-5xl font-bold mt-3 leading-snug">
          I'm <span className="text-secondary-500">Athea Bayog</span>, a creative{" "}
          <span className="bg-gradient-to-r from-primary-400 to-secondary-500 bg-clip-text text-transparent italic">
            developer
          </span>
        </h1>

        <p className="mt-6 text-gray-300 leading-relaxed">
          I'm <span className="font-medium text-white">Athea</span>, a
          passionate frontend developer focused on creating dynamic web
          experiences. From design to code, I enjoy solving complex problems
          with clean and efficient solutions. My expertise spans{" "}
          <span className="text-secondary-400">React</span>,{" "}
          <span className="text-secondary-400">Next.js</span>, and{" "}
          <span className="text-secondary-400">TailwindCSS</span>, and I’m always
          eager to learn more.
        </p>

        <p className="mt-4 text-gray-300 leading-relaxed">
          When I’m not immersed in work, I explore new ideas, design creative
          UIs, or spend time at the gym. Life’s about balance, and I embrace
          every part of it.
        </p>

        <p className="mt-6 text-gray-400 italic">
          "I wake up each day eager to make a difference."
        </p>

        {/* Social icons (example placeholders) */}
        <div className="flex gap-4 mt-6 text-gray-400 text-xl">
          <a href="#" className="hover:text-secondary-500">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="#" className="hover:text-secondary-500">
            <i className="fab fa-github"></i>
          </a>
          <a href="#" className="hover:text-secondary-500">
            <i className="fab fa-twitter"></i>
          </a>
        </div>
      </div>

      {/* Right Section - Image Slider */}
      <div className="md:w-1/2 w-full max-w-md">
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop={true}
          className="rounded-3xl shadow-lg overflow-hidden"
        >
          <SwiperSlide>
            <Image
              src="/assets/images/profile.png"
              alt="I Lift"
              className="w-full h-80 object-cover"
              width={300}
                        height={300}
            />
            <p className="text-center mt-3 text-gray-300">I Lift</p>
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/assets/images/profile.png"
              alt="Nature Explorer"
              className="w-full h-80 object-cover"
              width={300}
                        height={300}
            />
            <p className="text-center mt-3 text-gray-300">Nature Explorer</p>
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/assets/images/profile.png"
              alt="Coding Life"
              className="w-full h-80 object-cover"
              width={300}
                        height={300}
            />
            <p className="text-center mt-3 text-gray-300">Coding Life</p>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}

