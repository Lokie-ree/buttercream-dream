import React from "react";

const CartItemImage = ({ item }) => {
  return (
    <figure className="w-full rounded-box overflow-hidden">
      <img
        src={item.imageUrl || "/placeholder.svg?height=400&width=400"}
        alt={item.name}
        className="object-cover w-full h-52 md:h-64 lg:h-72"
      />
    </figure>
  );
};

export default CartItemImage;
