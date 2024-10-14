import React, { useContext } from "react";
import Image from "next/image";
import { CartContext } from "../context/CartContext";
import QuantitySelector from "../ui/QuantitySelector";

const CartItemCard = ({ item }) => {
  const { updateItemQuantity, removeItemFromCart } = useContext(CartContext);
  console.log("Cart Context:", updateItemQuantity, removeItemFromCart);

  const handleQuantityChange = (newQuantity) => {
    updateItemQuantity(item.id, newQuantity);
  };

  const handleRemoveItem = () => {
    removeItemFromCart(item.id);
  };

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
          <p className="text-sm text-gray-500">{item.variant.variantName}</p>
          <p className="text-lg font-semibold text-accent">
            ${item.price.toFixed(2)}
          </p>

          {/* Quantity Selector */}
          <div className="mt-4 flex items-center">
            <label
              htmlFor={`quantity-${item.id}`}
              className="mr-2 text-sm text-gray-600"
            >
              Quantity:
            </label>
            <QuantitySelector
              quantity={item.quantity}
              onQuantityChange={handleQuantityChange}
            />
          </div>

          {/* Remove Item Button */}
          <div className="mt-4">
            <button onClick={handleRemoveItem} className="btn btn-sm btn-error">
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItemCard;
