import Link from "next/link";

export default function CancelPage() {
  <div className="container mx-auto min-h-screen p-6 text-center">
    <h1 className="text-4xl font-bold text-red-600 mb-6">Payment Canceled</h1>
    <p className="text-lg mb-4">
      It looks like you canceled your payment. If this was a mistake, you can
      return to your cart and try again.
    </p>
    <Link href="/cart">
      <button className="btn btn-accent text-base-100 hover:bg-neutral hover:text-primary">
        Return to Cart
      </button>
    </Link>
  </div>;
}
