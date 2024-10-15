import React from "react";

const GalleryCarousel = () => {
  return (
    <>
      <h2 className="text-center text-accent font-bold text-xl md:text-3xl">
        My Fantastic Creations
      </h2>
      <div className="carousel rounded-box w-full">
        <div className="carousel-item w-full">
          <img
            src="../../../assets/frozen_birthday_cake.jpg"
            className="w-full"
            alt="Frozen Birthday Cake"
          />
        </div>
        <div className="carousel-item w-full">
          <img
            src="../../../assets/mini_cake.jpg"
            className="w-full"
            alt="Mini Sundae Cake"
          />
        </div>
        <div className="carousel-item w-full">
          <img
            src="../../../assets/minnie_cupcakes.jpg"
            className="w-full"
            alt="Minnie Cupcakes"
          />
        </div>
        <div className="carousel-item w-full">
          <img
            src="../../../assets/monsterhigh_cupcakes.jpg"
            className="w-full"
            alt="Monster High Cupcakes"
          />
        </div>
        <div className="carousel-item w-full">
          <img
            src="../../../assets/ninjaturtles_cupcakes.jpg"
            className="w-full"
            alt="Ninja Turtle Cupcakes"
          />
        </div>
        <div className="carousel-item w-full">
          <img
            src="../../../assets/pink_cookies.jpg"
            className="w-full"
            alt="Pink Cookies"
          />
        </div>
      </div>
    </>
  );
};

export default GalleryCarousel;
