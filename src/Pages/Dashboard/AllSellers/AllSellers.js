import { useQuery } from "@tanstack/react-query";
import React from "react";
import useTitle from "../../../Hooks/useTitle";
import Loader from "../../Shared/Loader/Loader";

const AllSellers = () => {
  useTitle("All Sellers");

  const { data: sellers = [], isLoading } = useQuery({
    queryKey: ["sellers"],
    queryFn: async () => {
      try {
        const res = await fetch("http://localhost:5000/users/seller", {
          // headers: {},
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

  return (
    <div>
      <h2 className="text-success text-3xl font-semibold my-12 flex md:justify-center sm:justify-center justify-center">
        ALL SELLERS
      </h2>
      <div className="overflow-x-auto w-full mx-2">
        <table className="table w-full rounded-xl mb-10">
          <thead>
            <tr>
              <th></th>
              <th>Seller Name</th>
              <th>Seller Email</th>
              <th>Total Products Posted</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {sellers.map((seller, i) => (
              <tr key={seller._id}>
                <td className="bg-secondary">{i + 1}</td>
                <td className="bg-secondary">
                  <div className="flex items-center space-x-3">
                    <div>
                      <div className="font-bold text-accent">{seller.name}</div>
                    </div>
                  </div>
                </td>
                <td className="bg-secondary">{seller.email}</td>
                <td className="bg-secondary">Purple</td>
                <th className="bg-secondary">
                  <div className="flex flex-col gap-2">
                    <button className="btn btn-accent btn-outline btn-xs">
                      VERIFY
                    </button>
                    <button className="btn btn-success btn-outline btn-xs">
                      MAKE ADMIN
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

export default AllSellers;
