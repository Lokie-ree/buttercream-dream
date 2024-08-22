import React from "react";
import Link from "next/link";
import Image from "next/image";
import { IoIosPhonePortrait } from "react-icons/io";
import { GiCakeSlice } from "react-icons/gi";

const Hero = () => {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row gap-12 lg:gap-0 position:relative display:block">
        <div className="flex flex-col w-full lg:w-1/2">
          <h1 className="text-5xl font-bold text-primary">
            Baked to Perfection
          </h1>
          <h2 className="text-2xl font-bold mt-2">
            Deliciously Crafted for Every Celebration
          </h2>
          <p className="font-thin mt-4 mb-6">
            At{" "}
            <span className="font-bold text-accent">
              I Dream of Buttercream
            </span>
            , we believe every celebration deserves a cake as unique as the
            occasion. Our handcrafted creations blend the finest ingredients
            with artistic flair, ensuring that every bite is a sweet escape into
            a world of flavor and joy.
            <br />
            <br /> "Join us in our passion for baking, where tradition meets
            innovation, and every cake tells a story. Discover the perfect
            centerpiece for your next celebration and let your taste buds dream
            a little sweeter."
          </p>
          <div className="flex flex-row items-center gap-2">
            <Link href="/contact" className="btn btn-neutral">
              <IoIosPhonePortrait className="text-xl" />
              Contact Me
            </Link>
            <Link href="/cakes" className="btn btn-neutral">
              <GiCakeSlice className="text-xl" />
              See My Cakes
            </Link>
          </div>
        </div>
        <div className="w-full lg:w-1/2 relative">
          <Image
            className="mask mask-squircle rounded-lg shadow-2xl hover:animate-pulse"
            src="/assets/images/logo_512x512.png"
            alt="Business Logo & Contact"
            layout="responsive"
            width={512} // Set the width of the image
            height={512} // Set the height of the image
            objectFit="contain" // Ensures the image is contained within the box
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
