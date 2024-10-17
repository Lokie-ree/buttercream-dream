import React, { useState, useRef, useEffect } from "react";
import { IoTrashOutline } from "react-icons/io5";
import QuantitySelector from "../ui/QuantitySelector";
import ConfirmModal from "../ui/ConfirmModal";
import Image from "next/image";

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
    <div className="mb-4 border-b pb-2">
      {/* Flexbox container for medium devices and larger */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        {/* Image column */}
        {showImage && (
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <Image
              src={item.imageUrl}
              alt={item.name}
              width={150}
              height={150}
              className="w-full md:w-1/3 rounded-box shadow-md"
              objectFit="cover"
            />
          </div>
        )}

        {/* Product info, quantity selector, and trash icon in second column */}
        <div className="w-full md:w-2/3 flex flex-col justify-between">
          <div className="flex flex-col">
            <p className="font-semibold truncate">{item.name}</p>
            {item.variant?.variantName && (
              <p className="text-sm text-gray-500">
                {item.variant.variantName}
              </p>
            )}
            <p className="text-sm font-semibold">
              ${(item.price * item.quantity).toFixed(2)}
            </p>
          </div>

          {/* Quantity selector and trash icon */}
          <div className="flex justify-between items-center mt-2">
            <QuantitySelector
              quantity={item.quantity}
              onQuantityChange={(newQuantity) =>
                updateItemQuantity(item.id, newQuantity)
              }
              className="w-20 h-8 text-sm text-center"
            />
            <button
              onClick={handleRemoveClick}
              className="btn btn-xs btn-ghost ml-4"
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
