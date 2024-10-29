import React from "react";

const CartItemImage = ({ item }) => {
  return (
    <figure className="w-full overflow-hidden">
      <img
        src={item.imageUrl || "/placeholder.svg?height=400&width=400"}
        alt={item.name}
        className="object-cover w-full h-52 sm:h-64 md:h-72 lg:h-80"
      />
    </figure>
  );
};

export default CartItemImage;
