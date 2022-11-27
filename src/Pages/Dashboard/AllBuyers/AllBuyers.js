import React from "react";
import useTitle from "../../../Hooks/useTitle";

const AllBuyers = () => {
  useTitle("All Buyers");

  return (
    <div>
      <h2 className="text-success text-3xl font-semibold my-12 flex md:justify-center sm:justify-center justify-center">
        All BUYERS
      </h2>
      <div className="overflow-x-auto w-full mx-2">
        <table className="table w-full rounded-xl mb-10">
          <thead>
            <tr>
              <th>Buyer Name</th>
              <th>Buyer Email</th>
              <th>Total Products Purchased</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="bg-secondary">
                <div className="flex items-center space-x-3">
                  <div>
                    <div className="font-bold text-accent">Hart Hagerty</div>
                  </div>
                </div>
              </td>
              <td className="bg-secondary">Zemlak, Daniel and Leannon</td>
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
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllBuyers;
