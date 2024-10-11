import React from "react";
import Image from "next/image";

const CartItemCard = ({ item }) => {
  return (
    <div className="card bg-base-100 shadow-xl rounded-xl">
      <div className="card-body flex flex-col md:flex-row items-center">
        {/* Product Image */}
        <div className="w-full md:w-1/3 mb-4 md:mb-0">
          <Image
            src={item.imageUrl}
            alt={item.name}
            width={150}
            height={150}
            className="rounded-xl object-cover"
          />
        </div>

        {/* Product Info */}
        <div className="w-full md:w-2/3 md:pl-4">
          <h2 className="text-xl font-bold">{item.name}</h2>
          <p className="text-sm text-gray-500">{item.variant}</p>
          <p className="text-lg font-semibold text-accent">
            {item.price.toFixed(2)}
          </p>

          {/* Quantity Selector */}
          <div className="mt-4">
            <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItemCard;
