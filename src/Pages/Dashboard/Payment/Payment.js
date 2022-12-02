import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useLoaderData, useNavigation } from "react-router-dom";
import Loader from "../../Shared/Loader/Loader";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);
const Payment = () => {
  const selectedBooking = useLoaderData();
  console.log(selectedBooking);
  const { productPhoto, productName, sellingPrice } = selectedBooking;

  const navigation = useNavigation();
  if (navigation.state === "loading") {
    return <Loader></Loader>;
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <h2 className="text-success text-3xl font-bold my-12 flex md:justify-center sm:justify-center justify-center">
        PAYMENT
      </h2>
      <div className="flex justify-center">
        <div className="card w-3/5 shadow-xl image-full">
          <figure>
            <img src={productPhoto} alt="Shoes" />
          </figure>
        </div>
      </div>
      <h2 className="text-accent text-xl font-semibold my-6 flex md:justify-center sm:justify-center justify-center">
        You need to pay{" "}
        <span className="mx-2 text-success"> {sellingPrice} BDT</span> for
        purchasing <span className="ml-2 text-success">{productName}</span>
      </h2>
      <div className="w-3/4 bg-secondary rounded-xl p-10">
        <Elements stripe={stripePromise}>
          <CheckoutForm selectedBooking={selectedBooking} />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
