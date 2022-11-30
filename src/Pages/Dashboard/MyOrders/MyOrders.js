import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../../Contexts/AuthProvider";
import useTitle from "../../../Hooks/useTitle";
import ConfirmationModal from "../../Shared/ConfirmationModal/ConfirmationModal";
import Loader from "../../Shared/Loader/Loader";

const MyOrders = () => {
  useTitle("My Orders");
  const { user } = useContext(AuthContext);
  const [deleteBooking, setDeleteBooking] = useState(null);
  const url = `http://localhost:5000/bookings?email=${user?.email}`;

  const {
    data: bookings = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["bookings", user?.email],
    queryFn: async () => {
      try {
        const res = await fetch(url, {
          headers: {
            authorization: `bearer ${localStorage.getItem("accessToken")}`,
          },
        });
        const data = await res.json();
        return data;
      } catch (error) {
        console.error(error);
      }
    },
  });

  if (isLoading) {
    return <Loader></Loader>;
  }

  const handleDeleteBooking = (booking) => {
    fetch(`http://localhost:5000/bookings/${booking._id}`, {
      method: "DELETE",
      // headers:{}
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        toast.success(
          `${booking.productName} has been removed from your bookings.`
        );
        refetch();
      });
  };

  const closeModal = () => {
    setDeleteBooking(null);
  };
  return (
    <div>
      <h2 className="text-success text-3xl font-semibold my-12 flex md:justify-center sm:justify-center justify-center">
        MY ORDERS
      </h2>
      {bookings.length === 0 ? (
        <p className="text-success text-xl font-semibold my-12 flex md:justify-center sm:justify-center justify-center">
          You have not booked any products yet
        </p>
      ) : (
        <div className="overflow-x-auto w-full mx-2">
          <table className="table w-full rounded-xl mb-10">
            <thead>
              <tr>
                <th></th>
                <th className="text-center">Product Image</th>
                <th className="text-center">Product Name</th>
                <th className="text-center">Selling Price</th>
                <th className="text-center">Booking Date</th>
                <th className="text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {bookings?.map((booking, i) => (
                <tr key={bookings._id}>
                  <td className="bg-secondary text-center">{i + 1}</td>
                  <td className="bg-secondary">
                    <div className="flex items-center justify-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img src={booking.productPhoto} alt="" />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="bg-secondary text-center">
                    {booking.productName}
                  </td>
                  <td className="bg-secondary text-center">
                    {booking.sellingPrice}
                  </td>
                  <td className="bg-secondary text-center">
                    {booking.bookingDate}
                  </td>
                  <th className="bg-secondary">
                    <div className="flex flex-col gap-2">
                      <button className="btn btn-accent btn-outline btn-xs">
                        MAKE PAYMENT
                      </button>
                      <label
                        htmlFor="confirmationModal"
                        className="btn btn-error btn-outline btn-xs"
                        onClick={() => setDeleteBooking(booking)}
                      >
                        REMOVE BOOKING
                      </label>
                    </div>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {deleteBooking && (
        <ConfirmationModal
          title={`Are you sure you want to remove your booking for ${deleteBooking.productName}?`}
          message={`This won't be recoverable in the future after you delete.`}
          modalAction={handleDeleteBooking}
          modalData={deleteBooking}
          modalActionBtnName="DELETE"
          closeModal={closeModal}
        ></ConfirmationModal>
      )}
    </div>
  );
};

export default MyOrders;
