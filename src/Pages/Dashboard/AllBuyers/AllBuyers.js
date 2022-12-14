import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import useTitle from "../../../Hooks/useTitle";
import ConfirmationModal from "../../Shared/ConfirmationModal/ConfirmationModal";
import Loader from "../../Shared/Loader/Loader";

const AllBuyers = () => {
  useTitle("All Buyers");
  const [deleteBuyer, setDeleteBuyer] = useState(null);
  const {
    data: buyers = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["buyers"],
    queryFn: async () => {
      try {
        const res = await fetch(
          "https://b612-used-products-resale.vercel.app/users/buyer",
          {
            headers: {
              authorization: `bearer ${localStorage.getItem("accessToken")}`,
            },
          }
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

  const handleDeleteBuyer = (buyer) => {
    fetch(
      `https://b612-used-products-resale.vercel.app/users/buyer/${buyer._id}`,
      {
        method: "DELETE",
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        toast.success(`${buyer.name} has been removed as a buyer.`);
        refetch();
      });
  };

  const closeModal = () => {
    setDeleteBuyer(null);
  };

  return (
    <div>
      <h2 className="text-success text-3xl font-bold my-12 flex md:justify-center sm:justify-center justify-center">
        All BUYERS
      </h2>
      <div className="overflow-x-auto w-full mx-2">
        <table className="table w-full rounded-xl mb-10">
          <thead>
            <tr>
              <th></th>
              <th className="text-center">Buyer Name</th>
              <th className="text-center">Buyer Email</th>
              <th className="text-center">ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {buyers.map((buyer, i) => (
              <tr key={buyer._id}>
                <td className="bg-secondary text-center">{i + 1}</td>
                <td className="bg-secondary">
                  <div className="flex items-center justify-center space-x-3">
                    <div>
                      <div className="font-bold text-accent">{buyer.name}</div>
                    </div>
                  </div>
                </td>
                <td className="bg-secondary text-center">{buyer.email}</td>
                <th className="bg-secondary text-center">
                  <div className="flex flex-col gap-2">
                    <button className="btn btn-success btn-outline btn-xs">
                      MAKE ADMIN
                    </button>
                    <label
                      htmlFor="confirmationModal"
                      className="btn btn-error btn-outline btn-xs"
                      onClick={() => setDeleteBuyer(buyer)}
                    >
                      DELETE
                    </label>
                  </div>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {deleteBuyer && (
        <ConfirmationModal
          title={`Are you sure you want to remove ${deleteBuyer.name} as a buyer?`}
          message={`This won't be recoverable in the future after you delete.`}
          modalAction={handleDeleteBuyer}
          modalData={deleteBuyer}
          modalActionBtnName="DELETE"
          closeModal={closeModal}
        ></ConfirmationModal>
      )}
    </div>
  );
};

export default AllBuyers;
