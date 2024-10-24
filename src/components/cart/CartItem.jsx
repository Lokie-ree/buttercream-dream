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
    <div className="p-2">
      {/* Flexbox container for medium devices and larger */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-center md:gap-8">
        {/* Image column */}
        {showImage && (
          <div className="w-full md:max-w-lg md:w-1/2 mb-4 md:mb-0">
            <Link href={`/shop/${item.slug}`} passHref>
              <Image
                src={item.imageUrl}
                alt={item.name}
                width={150}
                height={150}
                className="w-full rounded-box shadow-md"
                objectFit="cover"
              />
            </Link>
          </div>
        )}

        {/* Product info, quantity selector, and trash icon in second column */}
        <div className="w-full md:w-1/2 flex flex-col">
          <div className="flex flex-col md:gap-2">
            <Link href={`/shop/${item.slug}`} passHref>
              <h2 className="text-md md:text-xl lg:text-4xl md:py-1 font-bold text-primary truncate">
                {item.name}
              </h2>
            </Link>
            {item.variant?.variantName && (
              <p className="text-sm md:text-lg lg:text-2xl md:mb-1 text-primary font-semibold">
                {item.variant.variantName}
              </p>
            )}
            <p className="text-sm md:text-xl lg:text-2xl md:mb-1 font-semibold text-accent">
              ${(item.price * item.quantity).toFixed(2)}
            </p>
          </div>

          {/* Quantity selector and trash icon */}
          <div className="flex md:gap-6 items-center mt-2">
            <QuantitySelector
              quantity={item.quantity}
              onQuantityChange={(newQuantity) =>
                updateItemQuantity(item.id, newQuantity)
              }
              className="w-full h-8 text-sm text-center"
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
      </div>

      {/* Confirm Modal */}
      <ConfirmModal
        id={`confirm_modal_${item.id}`}
        ref={modalRef}
        message={`Are you sure you want to remove ${item.name} from your cart?`}
        onConfirm={handleConfirmRemoval}
        onCancel={handleCancelRemoval} // This will handle ESC and other close events
      />
    </div>
  );
};

export default CartItem;
