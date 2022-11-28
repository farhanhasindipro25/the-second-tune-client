import { useQuery } from "@tanstack/react-query";
import React from "react";
import useTitle from "../../../Hooks/useTitle";

const MyProducts = () => {
  useTitle("My Products");

  const {
    data: products = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      try {
        const res = await fetch("http://localhost:5000/products", {
          // headers: {},
        });
        const data = await res.json();
        return data;
      } catch (error) {
        console.error(error);
      }
    },
  });
  return (
    <div>
      <h2 className="text-success text-3xl font-semibold my-12 flex md:justify-center sm:justify-center justify-center">
        MY PRODUCTS {products.length}
      </h2>
      <div className="overflow-x-auto w-full mx-2">
        <table className="table w-full rounded-xl mb-10">
          <thead>
            <tr>
              <th></th>
              <th>Product Image</th>
              <th>Product Name</th>
              <th>Selling Price</th>
              <th>SALES STATUS</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, i) => (
              <tr key={product._id}>
                <td className="bg-secondary">{i + 1}</td>
                <td className="bg-secondary">
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={product.productPhoto} alt="" />
                      </div>
                    </div>
                  </div>
                </td>
                <td className="bg-secondary">{product.productName}</td>
                <td className="bg-secondary">{product.sellingPrice}</td>
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
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyProducts;
