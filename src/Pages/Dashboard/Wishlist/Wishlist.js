import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../../../Contexts/AuthProvider";
import useTitle from "../../../Hooks/useTitle";
import Loader from "../../Shared/Loader/Loader";

const Wishlist = () => {
  useTitle("Wishlist");

  const { user } = useContext(AuthContext);
  const { data: wishlist = [], isLoading } = useQuery({
    queryKey: ["wishlist", user?.email],
    queryFn: async () => {
      try {
        const res = await fetch(
          `http://localhost:5000/wishlist?email=${user?.email}`
        );
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

  console.log(wishlist);

  return (
    <div>
      <h2 className="text-success text-3xl font-semibold my-12 flex md:justify-center sm:justify-center justify-center">
        WISHLIST
      </h2>
      {wishlist.length === 0 ? (
        <p className="text-success text-xl font-semibold my-12 flex md:justify-center sm:justify-center justify-center">
          You have not added any products to your wishlist.
        </p>
      ) : (
        <div className="overflow-x-auto w-full mx-2">
          <table className="table w-full rounded-xl mb-10">
            <thead>
              <tr>
                <th></th>
                <th>Product Image</th>
                <th>Product Name</th>
                <th>Selling Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {wishlist.map((item, i) => (
                <tr key={item._id}>
                  <td className="bg-secondary">{i + 1}</td>
                  <td className="bg-secondary">
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img src={item.product.productPhoto} alt="" />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="bg-secondary text-accent">
                    {item.product.productName}
                  </td>
                  <td className="bg-secondary">{item.product.sellingPrice}</td>
                  <th className="bg-secondary">
                    <button className="btn btn-accent btn-outline btn-xs">
                      MAKE PAYMENT
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Wishlist;
