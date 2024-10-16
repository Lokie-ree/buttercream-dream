import React from "react";
import Image from "next/image";

const ProductImage = ({ imageUrl, name }) => {
  return (
    <figure className="w-full">
      <Image
        src={imageUrl}
        alt={name}
        width={500}
        height={500}
        className="w-full h-full rounded-box shadow-xl object-cover"
        priority
      />
    </figure>
  );
};

export default ProductImage;
