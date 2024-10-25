import React, { useState, useRef, useEffect } from "react";
import { IoTrashOutline } from "react-icons/io5";
import QuantitySelector from "../ui/QuantitySelector";
import ConfirmModal from "../ui/ConfirmModal";
import Image from "next/image";
import Link from "next/link";

const CartItem = ({ item, updateItemQuantity, removeItem, showImage }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef(null);

  useEffect(() => {
    if (isModalOpen && modalRef.current) {
      modalRef.current.showModal();
    }
  }, [isModalOpen]);

  const handleRemoveClick = () => {
    setIsModalOpen(true);
  };

  const handleConfirmRemoval = () => {
    removeItem(item.id);
    setIsModalOpen(false);
    if (modalRef.current) {
      modalRef.current.close();
    }
  };

  const handleCancelRemoval = () => {
    setIsModalOpen(false);
    if (modalRef.current) {
      modalRef.current.close();
    }
  };

  return (
    <div className="card md:flex-row max-w-none bg-base-100 rounded-xl shadow-xl flex flex-col overflow-hidden">
      {/* First div for Image */}
      {showImage && (
        <div className="w-full md:w-1/3 h-52 md:h-auto">
          <Link href={`/shop/${item.slug}`} passHref>
            <Image
              src={item.imageUrl || "/placeholder.svg?height=400&width=400"}
              alt={item.name}
              width={400}
              height={400}
              className="object-cover w-full h-full" // Ensure full width and height
            />
          </Link>
        </div>
      )}

      {/* Second div for product details and actions */}
      <div className="flex flex-col justify-between px-4 w-full md:w-2/3 py-1">
        <Link href={`/shop/${item.slug}`} passHref>
          <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-primary">
            {item.name}
          </h2>
        </Link>
        {item.variant?.variantName && (
          <p className="text-sm md:text-base lg:text-lg text-secondary">
            {item.variant.variantName}
          </p>
        )}
        <p className="text-md md:text-lg lg:text-xl font-semibold text-accent">
          ${(item.price * item.quantity).toFixed(2)}
        </p>

        {/* Quantity Selector and Remove Button */}
        <div className="flex items-center justify-between mt-2 gap-2">
          <QuantitySelector
            quantity={item.quantity}
            onQuantityChange={(newQuantity) =>
              updateItemQuantity(item.id, newQuantity)
            }
            className="w-full md:w-1/2" // Adjust width for mobile and larger screens
          />
          <button
            onClick={handleRemoveClick}
            className="btn btn-xs btn-ghost"
            aria-label="Remove Item"
          >
            <IoTrashOutline
              size={22}
              className="text-accent hover:text-error"
            />
          </button>
        </div>
      </div>

      {/* Confirm Modal */}
      <ConfirmModal
        id={`confirm_modal_${item.id}`}
        ref={modalRef}
        message={`Are you sure you want to remove ${item.name} from your cart?`}
        onConfirm={handleConfirmRemoval}
        onCancel={handleCancelRemoval}
      />
    </div>
  );
};

export default CartItem;
