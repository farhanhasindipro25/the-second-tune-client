import React from "react";
import useTitle from "../../../Hooks/useTitle";

const MyProducts = () => {
  useTitle("My Products");
  return (
    <div>
      <h2 className="text-success text-3xl font-semibold my-12 flex md:justify-center sm:justify-center justify-center">
        MY PRODUCTS
      </h2>
      <div className="overflow-x-auto w-full mx-2">
        <table className="table w-full rounded-xl mb-10">
          <thead>
            <tr>
              <th>Product Image</th>
              <th>Product Name</th>
              <th>Selling Price</th>
              <th>SALES STATUS</th>
              <th>ACTIONS</th>
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
              <th className="bg-secondary">
                <span className="badge badge-success badge-sm font-medium p-3">
                  AVAILABLE
                </span>
                <span className="badge badge-error badge-sm font-medium p-3">
                  SOLD
                </span>
              </th>
              <th className="bg-secondary">
                <div className="flex flex-col gap-3">
                  <button className="btn btn-accent btn-outline btn-xs">
                    ADVERTISE
                  </button>
                  <button className="btn btn-error btn-outline btn-xs">
                    DELETE
                  </button>
                </div>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyProducts;
