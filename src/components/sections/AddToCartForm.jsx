import React, { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import QuantitySelector from "../ui/QuantitySelector";
import VariantSelector from "../ui/VariantSelector";
import toast from "react-hot-toast";

const AddToCartForm = ({ product, selectedVariant, onVariantChange }) => {
  const [quantity, setQuantity] = useState(1);
  const { addItemToCart } = useContext(CartContext);

  const handleQuantityChange = (newQuantity) => {
    setQuantity(newQuantity);
  };

  const handleAddToCart = () => {
    const variantId = selectedVariant.variantName || "default";
    toast.success(`${product.name} successfully added to cart!`);

    const itemToAdd = {
      id: `${product.id}-${variantId}`,
      name: product.name,
      price: selectedVariant.price || product.basePrice,
      imageUrl: product.imageUrl,
      variant: selectedVariant,
      quantity,
      productId: product.id,
      variants: product.variants,
    };
    addItemToCart(itemToAdd);
  };

  return (
    <div className="w-full">
      {/* Variant Selector */}
      {product.variants?.length > 0 && (
        <div className="mb-3">
          <label
            htmlFor="variant"
            className="block mb-2 text-md md:text-lg text-primary font-semibold"
          >
            Size
          </label>
          <VariantSelector
            variants={product.variants}
            selectedVariant={selectedVariant}
            onVariantChange={onVariantChange}
          />
        </div>
      )}

      {/* Quantity Selector */}
      <div className="mb-5">
        <label
          htmlFor="quantity"
          className="block mb-2 text-md md:text-lg text-primary font-semibold"
        >
          Quantity
        </label>
        <QuantitySelector
          quantity={quantity}
          onQuantityChange={handleQuantityChange}
        />
      </div>

      {/* Add to Cart Buttons */}
      <button
        onClick={handleAddToCart}
        className="btn btn-accent w-full text-base-100 hover:bg-neutral-focus transition durations-300 mb-6"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default AddToCartForm;
