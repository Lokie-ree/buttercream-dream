import React from "react";
import Image from "next/image";

const HeroImage = () => {
  return (
    <div className="w-full md:w-1/3 relative flex justify-center pb-6">
      <Image
        className="mask mask-squircle rounded-lg shadow-xl"
        src="/assets/brand_logo_512x512.jpg"
        alt="Artistic logo of the business"
        width={512}
        height={512}
        layout="responsive"
      />
    </div>
  );
};

export default HeroImage;
