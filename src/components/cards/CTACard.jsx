import React from "react";
import Link from "next/link";

const CTACard = () => {
  return (
    <section className="w-full mx-auto bg-base-100 rounded-lg">
      <div className="card card-compact shadow-xl rounded-xl bg-base-100 w-full">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-accent text-center mb-2">
          Get in Touch!
        </h2>
        <div className="card-body">
          <p className="text-lg md:text-xl mb-2 text-secondary">
            I'd love to hear from you! Reach out to discuss your cake ideas,
            place an order, or just say hello.
          </p>
          <div className="card-actions justify-center">
            <Link href="#">
              <button className="btn btn-primary text-base-100 hover:bg-neutral hover:text-primary w-full md:w-auto">
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
