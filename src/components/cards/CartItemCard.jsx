import React, { useContext } from "react";
import Image from "next/image";
import { CartContext } from "../context/CartContext";
import QuantitySelector from "../ui/QuantitySelector";
import { IoTrashOutline } from "react-icons/io5";

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
            className="rounded-box shadow-xl object-cover"
          />
        </div>

        {/* Product Info */}
        <div className="w-full md:w-2/3 md:pl-4">
          <h2 className="text-xl font-bold">{item.name}</h2>
          <p className="text-sm text-gray-500">{item.variant.variantName}</p>
          <p className="text-lg font-semibold text-accent">
            ${(item.price * item.quantity).toFixed(2)}
          </p>

          {/* Quantity Selector */}
          <div className="mt-4 flex items-center border border-black">
            <label
              htmlFor={`quantity-${item.id}`}
              className="mr-2 text-sm text-gray-600"
            ></label>
            <QuantitySelector
              quantity={item.quantity}
              onQuantityChange={handleQuantityChange}
              className="w-20 h-4 text-sm text-center"
            />
            <button onClick={handleRemoveItem} className="btn btn-sm btn-ghost">
              <IoTrashOutline
                size={22}
                className="text-accent hover:text-error"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItemCard;
