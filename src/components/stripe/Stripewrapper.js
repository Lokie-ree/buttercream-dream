import { Elements } from "@stripe/react-stripe-js";
import getStripe from "@/lib/stripe";

const stripePromise = getStripe();

const StripeWrapper = ({ children }) => {
  return <Elements stripe={stripePromise}>{children}</Elements>;
};

export default StripeWrapper;
