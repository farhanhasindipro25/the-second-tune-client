import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import useTitle from "../../../Hooks/useTitle";

const CheckoutForm = ({ selectedBooking }) => {
  useTitle("Payment");
  const { sellingPrice, buyerEmail, buyerName, productName, _id, productId } =
    selectedBooking;
  const [clientSecret, setClientSecret] = useState("");
  const [cardError, setCardError] = useState("");
  const [successfullPayment, setSuccessfullPayment] = useState("");
  const [transactionID, setTransactionID] = useState("");
  const [processingPayment, setProcessingPayment] = useState(false);
  const stripe = useStripe();
  const elements = useElements();

  useEffect(() => {
    fetch(
      "https://b612-used-products-resale.vercel.app/create-payment-intent",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify({ sellingPrice }),
      }
    )
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [sellingPrice]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log(error);
      setCardError(error.message);
    } else {
      setCardError("");
    }
    setSuccessfullPayment("");
    setProcessingPayment(true);
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: buyerName,
            email: buyerEmail,
          },
        },
      });

    if (confirmError) {
      setCardError(confirmError.message);
      return;
    }
    if (paymentIntent.status === "succeeded") {
      console.log("Card Info", card);
      const payment = {
        sellingPrice,
        transactionId: paymentIntent,
        buyerEmail,
        bookingId: _id,
        productId: productId,
      };
      fetch("https://b612-used-products-resale.vercel.app/payments", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify(payment),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.insertedId) {
            setSuccessfullPayment(
              `Your have successfully purchased ${productName}!`
            );
            setTransactionID(paymentIntent.id);
            toast.success(`Your payment for ${productName} is successful!`);
          }
        });
    }
    setProcessingPayment(false);

    console.log("Intent", paymentIntent);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#00C49A",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#EF3E36",
              },
            },
          }}
        />
        <button
          type="submit"
          className="btn btn-sm btn-success mt-6 w-full"
          disabled={!stripe || !clientSecret || processingPayment}
        >
          CONFIRM PAYMENT
        </button>
      </form>
      <p className="text-error text-center mt-4">{cardError}</p>
      {successfullPayment && transactionID && (
        <div>
          <div className="alert alert-primary">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-current flex-shrink-0 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="text-accent font-semibold">
                {successfullPayment}
              </span>
            </div>
          </div>
          <div className="alert alert-primary mt-4">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-current flex-shrink-0 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="text-success font-semibold">
                <span className="font-bold mr-2 text-accent">
                  TRANSACTION ID:
                </span>
                {transactionID}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CheckoutForm;
