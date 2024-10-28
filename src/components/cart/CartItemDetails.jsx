import Link from "next/link";

const CartItemDetails = ({ item }) => {
  return (
    <div>
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
    </div>
  );
};

export default CartItemDetails;
