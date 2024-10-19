import React from "react";
import HeroHeading from "./HeroHeading";
import HeroDescription from "./HeroDescription";
import HeroCTA from "./HeroCTA";
import HeroImage from "./HeroImage";

const Hero = () => {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row gap-12 md:gap-6">
        {/* Text Section */}
        <div className="flex flex-col w-full md:w-1/2">
          <HeroHeading />
          <HeroDescription />
          <div className="flex flex-row items-center gap-2">
            <HeroCTA />
          </div>
        </div>
        {/* Image Section */}
        <HeroImage />
      </div>
    </div>
  );
};

export default Hero;
