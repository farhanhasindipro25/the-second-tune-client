import React from "react";
import useTitle from "../../../Hooks/useTitle";

const Wishlist = () => {
  useTitle("Wishlist");

  return (
    <div>
      <h2 className="text-success text-3xl font-semibold my-12 flex md:justify-center sm:justify-center justify-center">
        WISHLIST
      </h2>
      <div className="overflow-x-auto w-full mx-2">
        <table className="table w-full rounded-xl mb-10">
          <thead>
            <tr>
              <th>Product Image</th>
              <th>Product Name</th>
              <th>Selling Price</th>
              <th>Seller's Phone Number</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="bg-secondary">
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src="https://placeimg.com/192/192/people"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </div>
              </td>
              <td className="bg-secondary">Zemlak, Daniel and Leannon</td>
              <td className="bg-secondary">Purple</td>
              <td className="bg-secondary">Purple</td>
              <th className="bg-secondary">
                <button className="btn btn-accent btn-outline btn-xs">
                  MAKE PAYMENT
                </button>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Wishlist;
