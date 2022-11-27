import React from "react";
import useTitle from "../../../Hooks/useTitle";

const MyBuyers = () => {
  useTitle("My Buyers");
  return (
    <div>
      <h2 className="text-success text-3xl font-semibold my-12 flex md:justify-center sm:justify-center justify-center">
        MY BUYERS
      </h2>
      <div className="overflow-x-auto w-full mx-2">
        <table className="table w-full rounded-xl mb-10">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Purchased Item Image</th>
              <th>Purchased Item Name</th>
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
              <td className="bg-secondary">Purple</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyBuyers;
