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
    <div className="card card-compact w-full bg-base-100 rounded-xl group relative overflow-hidden">
      <div className="flex flex-col md:flex-row w-full p-4 md:p-6">
        {/* Image Column */}
        {showImage && (
          <figure className="w-full md:w-1/3 rounded-xl overflow-hidden">
            <Link href={`/shop/${item.slug}`} passHref>
              <Image
                src={item.imageUrl || "placeholder.svg?height=400&width=400"}
                alt={item.name}
                width={150}
                height={150}
                className="object-cover w-full h-52 md:h-auto rounded-box"
              />
            </Link>
          </figure>
        )}

        {/* Product Info and Actions */}
        <div className="w-full md:w-2/3 flex flex-col justify-between p-4 md:p-6">
          <div>
            <Link href={`/shop/${item.slug}`} passHref>
              <h2 className="text-lg font-bold text-primary">{item.name}</h2>
            </Link>
            {item.variant?.variantName && (
              <p className="text-sm text-secondary">
                {item.variant.variantName}
              </p>
            )}
            <p className="text-md font-semibold text-accent">
              ${(item.price * item.quantity).toFixed(2)}
            </p>
          </div>

          {/* Quantity Selector and Remove Button */}
          <div className="flex items-center justify-between mt-4 gap-2">
            <QuantitySelector
              quantity={item.quantity}
              onQuantityChange={(newQuantity) =>
                updateItemQuantity(item.id, newQuantity)
              }
              className="w-full"
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
        onCancel={handleCancelRemoval}
      />
    </div>
  );
};

export default CartItem;
