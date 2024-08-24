"use client";

import React, { useState } from "react";
import laptopImage from "../../public/assets/laptopss.png";
import phonesImages from "../../public/assets/phoness.png";
import smartWatches from "../../public/assets/smartWatches.png";

const slides = [
  {
    id: 1,
    title: "Laptops/PC's",
    offer: "Exclusive offer - GET 20% OFF",
    description:
      "Expanding the offering is the choice between various electronic devices bringing the total new look. Black-tone stainless steel case with a black theme. Scratch-free sapphire crystal.",
    price: "$25000",
    image: laptopImage.src,
    alt: "LaptopImage",
  },
  {
    id: 2,
    title: "Smart Phones",
    offer: "Exclusive offer - GET 10% OFF",
    description:
      "Expanding the offering is the choice between various electronic devices bringing the total new look. Black-tone stainless steel case with a black theme. Scratch-free sapphire crystal.",
    price: "$35000",
    image: phonesImages.src,
    alt: "PhonesImage",
  },
  {
    id: 3,
    title: "Smart Watches",
    offer: "Exclusive offer - GET 30% OFF",
    description:
      "Expanding the offering is the choice between various electronic devices bringing the total new look. Black-tone stainless steel case with a black theme. Scratch-free sapphire crystal.",
    price: "$2000",
    image: smartWatches.src,
    alt: "WatchesImage",
  },
];

const HomeBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative overflow-hidden">
      <div className="flex items-center justify-between">
        <button
          className="absolute left-0 z-10 p-4 bg-black bg-opacity-50 text-white"
          onClick={prevSlide}
        >
          &#10094;
        </button>
        <div className="flex-1">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`transform transition-transform duration-500 ease-in-out   ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
              style={{
                display: index === currentSlide ? "block" : "none",
                transition: "all .5s",
                transitionTimingFunction: "cubic-bezier(0.25, 0.1, 0.25, 1)",
              }}
            >
              <div className="bg-gradient-to-r from-black via-[#384269] to-black mb-8">
                <div className="mx-auto p-24 flex flex-col gap-2 md:flex-row items-center justify-evenly">
                  <div className="mb-8 md:mb-1 text-center md:text-left">
                    <h3 className="text-2xl md:text-5xl font-bold text-white mb-4">
                      {slide.title}
                    </h3>
                    <p className="text-textColor mt-6 mb-7 font-serif font-bold">
                      {slide.offer}
                    </p>
                    <p className="w-full md:w-2/3 max-w-full text-white mb-2">
                      {slide.description}
                    </p>
                    <p>
                      Starting @{" "}
                      <span className="text-2xl ml-5 md:text-3xl text-textColor font-thin">
                        {slide.price}
                      </span>
                    </p>
                  </div>
                  <div className="w-full md:w-1/2 lg:w-3/5 relative">
                    <img
                      src={slide.image}
                      alt={slide.alt}
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button
          className="absolute right-0 z-10 p-4 bg-black bg-opacity-50 text-white"
          onClick={nextSlide}
        >
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default HomeBanner;
