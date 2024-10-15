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
    <section className="my-4">
      <div className="card bg-base-100 w-full shadow-xl">
        <div className="card-body">
          <h2 className="text-xl sm:text-3xl md:text-5xl font-bold text-accent mb-4">
            Gallery
          </h2>
          <div className="carousel relative rounded-box shadow-xl">
            <div className="carousel-item w-full">
              <Image
                src={galleryImages[currentIndex].src}
                alt={galleryImages[currentIndex].alt}
                width={600}
                height={600}
                className="w-full object-cover rounded-box"
              />
            </div>
            {/* Navigation Buttons */}
            <button
              className="absolute left-0 top-1/2 transform -translate-y-1/2 btn btn-circle btn-primary btn-sm opacity-75 hover:opacity-100"
              onClick={prevSlide}
              aria-label="Previous Slide"
            >
              <IoChevronBackCircle size={24} />
            </button>
            <button
              className="absolute right-0 top-1/2 transform -translate-y-1/2 btn btn-circle btn-primary btn-sm opacity-75 hover:opacity-100"
              onClick={nextSlide}
              aria-label="Next Slide"
            >
              <IoChevronForwardCircle size={24} />
            </button>
          </div>
          <div className="flex justify-center mt-4">
            {galleryImages.map((_, index) => (
              <button
                key={index}
                className={`mx-1 w-3 h-3 rounded-full ${
                  index === currentIndex ? "bg-accent" : "bg-neutral"
                }`}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to slide ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
