import { useQuery } from "@tanstack/react-query";
import React from "react";
import useTitle from "../../../Hooks/useTitle";
import Loader from "../../Shared/Loader/Loader";

const AllBuyers = () => {
  useTitle("All Buyers");

  const { data: buyers = [], isLoading } = useQuery({
    queryKey: ["buyers"],
    queryFn: async () => {
      try {
        const res = await fetch("http://localhost:5000/users/buyer", {
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
        All BUYERS
      </h2>
      <div className="overflow-x-auto w-full mx-2">
        <table className="table w-full rounded-xl mb-10">
          <thead>
            <tr>
              <th></th>
              <th>Buyer Name</th>
              <th>Buyer Email</th>
              <th>Total Products Purchased</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {buyers.map((buyer,i) => (
              <tr>
                <td className="bg-secondary">{i+1}</td>
                <td className="bg-secondary">
                  <div className="flex items-center space-x-3">
                    <div>
                      <div className="font-bold text-accent">{buyer.name}</div>
                    </div>
                  </div>
                </td>
                <td className="bg-secondary">{buyer.email}</td>
                <td className="bg-secondary">Purple</td>
                <th className="bg-secondary">
                  <div className="flex flex-col gap-2">
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

export default AllBuyers;
