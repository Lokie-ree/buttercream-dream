import { IoTrashOutline } from "react-icons/io5";
import QuantitySelector from "../ui/QuantitySelector";

const CartItemActions = ({ item, updateItemQuantity, handleRemoveClick }) => {
  return (
    <div className="flex items-center mt-2">
      <QuantitySelector
        quantity={item.quantity}
        onQuantityChange={(newQuantity) =>
          updateItemQuantity(item.id, newQuantity)
        }
        className="w-full md:w-auto"
      />
      <button
        onClick={handleRemoveClick}
        className="btn btn-xs btn-ghost"
        aria-label="Remove Item"
      >
        <IoTrashOutline size={22} className="text-accent hover:text-error" />
      </button>
    </div>
  );
};

export default CartItemActions;
