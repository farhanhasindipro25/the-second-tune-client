import React, { useContext } from "react";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../../Contexts/AuthProvider";

const BookingModal = ({
  selectedProduct,
  getBookingDate,
  setSelectedProduct,
}) => {
  const { user } = useContext(AuthContext);

  const handleBookProduct = (event) => {
    event.preventDefault();
    const form = event.target;
    const buyerName = form.buyerName.value;
    const buyerEmail = form.buyerEmail.value;
    const productName = form.productName.value;
    const sellingPrice = form.sellingPrice.value;
    const buyerPhone = form.buyerPhoneNumber.value;
    const buyerLocation = form.buyerLocation.value;

    const booking = {
      buyerName: buyerName,
      buyerEmail: buyerEmail,
      productName: productName,
      sellingPrice: sellingPrice,
      buyerPhone: buyerPhone,
      buyerLocation: buyerLocation,
    };

    fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          setSelectedProduct(null);
          toast.success(`Your booking for ${productName} is confirmed.`);
        }
      });
  };
  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative bg-primary">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{selectedProduct.productName}</h3>
          <form className="mt-10" onSubmit={handleBookProduct}>
            <input
              type="text"
              disabled
              name="buyerName"
              value={user.name || user.displayName}
              className="input input-bordered input-primary w-full my-2"
            />

            <input
              type="text"
              name="buyerEmail"
              defaultValue={user?.email}
              disabled
              placeholder="Email Address"
              className="input input-bordered input-primary w-full my-2"
            />
            <input
              type="text"
              name="productName"
              placeholder="Product Name"
              defaultValue={selectedProduct.productName}
              disabled
              className="input input-bordered input-primary w-full my-2"
            />
            <input
              type="text"
              name="sellingPrice"
              placeholder="Selling Price"
              defaultValue={selectedProduct.sellingPrice}
              disabled
              className="input input-bordered input-primary w-full my-2"
            />
            <input
              type="text"
              name="bookingDate"
              placeholder="Booking Date"
              defaultValue={getBookingDate()}
              disabled
              className="input input-bordered input-primary w-full my-2"
            />
            <input
              type="number"
              name="buyerPhoneNumber"
              placeholder="Your Phone Number"
              className="input input-bordered input-primary w-full my-2 text-secondary"
            />
            <input
              type="text"
              name="buyerLocation"
              placeholder="Your Location"
              className="input input-bordered input-primary w-full my-2 text-secondary"
            />
            <div className="flex justify-center">
              <button className="btn btn-success text-secondary font-semibold w-full mt-2">
                CONFIRM BOOKING
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
