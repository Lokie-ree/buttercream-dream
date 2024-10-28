import React, { useState, useRef, useEffect } from "react";
import CartItemDetails from "./CartItemDetails";
import CartItemActions from "./CartItemActions";
import CartItemImage from "./CartItemImage";
import ConfirmModal from "../ui/ConfirmModal";

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
    <div className="card card-compact w-full md:card-side max-w-xl mx-auto bg-base-100 gap-4 shadow-lg md:flex md:items-center md:justify-between">
      {showImage && <CartItemImage item={item} />}
      <div className="card-body bg-base-100 flex flex-col justify-center rounded-b-xl">
        <CartItemDetails item={item} />
        <CartItemActions
          item={item}
          updateItemQuantity={updateItemQuantity}
          handleRemoveClick={handleRemoveClick}
        />
      </div>
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
