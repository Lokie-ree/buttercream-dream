"use client";

import React, { useState } from "react";
import galleryImages from "data/galleryImages";
import Image from "next/image";
import { IoChevronBackCircle, IoChevronForwardCircle } from "react-icons/io5";

const GallerySection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalImages = galleryImages.length;

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + totalImages) % totalImages);
  };

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % totalImages);
  };

  return (
    <section className="card card-compact w-full bg-base-100 shadow-xl rounded-xl">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-accent text-center mt-2 mb-2 md:mb-6">
        Gallery
      </h2>
      <div className="card-body">
        <div className="carousel relative rounded-box shadow-xl">
          <div className="carousel-item w-full">
            <Image
              src={galleryImages[currentIndex].src}
              alt={galleryImages[currentIndex].alt}
              width={600}
              height={600}
              className="w-full object-cover rounded-box"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 300px"
            />
          </div>
          {/* Navigation Buttons */}
          <button
            className="absolute left-0 top-1/2 transform -translate-y-1/2 btn btn-circle btn-primary btn-sm opacity-75 hover:opacity-100 transition-all duration-300"
            onClick={prevSlide}
            aria-label="Previous Slide"
          >
            <IoChevronBackCircle size={24} />
          </button>
          <button
            className="absolute right-0 top-1/2 transform -translate-y-1/2 btn btn-circle btn-primary btn-sm opacity-75 hover:opacity-100 transition-all duration-300"
            onClick={nextSlide}
            aria-label="Next Slide"
          >
            <IoChevronForwardCircle size={24} />
          </button>
        </div>
        <div className="flex justify-center">
          {galleryImages.map((_, index) => (
            <button
              key={index}
              className={`mx-1 mt-1 md:mx-2 md:mt-3 w-4 h-4 md:w-7 md:h-7 rounded-box ${
                index === currentIndex ? "bg-accent" : "bg-neutral"
              }`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
