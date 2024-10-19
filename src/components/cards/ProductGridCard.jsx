import Link from "next/link";

const ProductGridCard = ({ product }) => {
  if (!product) {
    return null; // or return a placeholder card
  }

  const lowestPrice =
    product.variants && product.variants.length > 0
      ? Math.min(...product.variants.map((v) => v.price || 0))
      : product.basePrice || 0;

  const isInStock =
    product.variants && product.variants.length > 0
      ? product.variants.some((v) => v.inStock)
      : false;

  return (
    <Link href={`/shop/${product.slug?.current || product._id}`}>
      <div className="card card-compact w-full bg-base-100 shadow-xl rounded-xl group relative overflow-hidden transition ease-in-out duration-300 hover:-translate-y-1 hover:scale-105">
        <figure className="rounded-t-xl overflow-hidden">
          <img
            src={product.imageUrl || "placeholder.svg?height=400&width=400"}
            alt={product.name}
            className="object-cover w-full h-52"
          />
        </figure>
        {/* Price Overlay */}
        <div className="absolute top-0 left-0 w-full h-8 flex justify-center items-center bg-accent bg-opacity-70 sm:opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <p className="text-base-100 text-lg md:text-xl lg:text-2xl font-bold">
            Starting @ ${lowestPrice.toFixed(2)}
          </p>
        </div>
        <div className="card-body bg-base-100 flex flex-col justify-center rounded-b-xl">
          <h2 className="card-title text-base text-primary justify-center">
            {product.name || "Unnamed Product"}
          </h2>
          <button className="btn btn-block bg-accent text-base-100 hover:text-accent hover:bg-neutral">
            Details
          </button>
        </div>
        {!isInStock && (
          <div className="absolute inset-0 bg-base-100 bg-opacity-70 flex items-center justify-center">
            <p className="text-accent text-xl font-bold">Out of Stock</p>
          </div>
        )}
      </div>
    </Link>
  );
};

export default ProductGridCard;
