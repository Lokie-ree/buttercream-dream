import React from "react";
import Image from "next/image";
import Link from "next/link";

const CTACard = () => {
  return (
    <section className="my-6">
      <div className="card bg-base-100 w-full md:w-1/2 mx-auto shadow-xl">
        <h2 className="text-xl sm:text-3xl md:text-5xl font-bold text-accent mb-6">
          Get in Touch with Me!
        </h2>
        <figure>
          <Image
            src="/assets/brand_logo_240x240.jpg"
            alt="I Dream of Buttercream logo"
            width={240}
            height={240}
            className="rounded-box w-full object-cover"
          />
        </figure>
        <div className="card-body">
          <div className="card-actions justify-center">
            <Link href="#">
              <button className="btn btn-accent text-base-100 w-full">
                Contact Me
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTACard;
