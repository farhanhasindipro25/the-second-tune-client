import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import useTitle from "../../../Hooks/useTitle";
import ConfirmationModal from "../../Shared/ConfirmationModal/ConfirmationModal";
import Loader from "../../Shared/Loader/Loader";

const AllSellers = () => {
  useTitle("All Sellers");
  const [deleteSeller, setDeleteSeller] = useState(null);
  const {
    data: sellers = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["sellers"],
    queryFn: async () => {
      try {
        const res = await fetch("http://localhost:5000/users/seller", {
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

  const handleVerifySeller = (id) => {
    fetch(`http://localhost:5000/users/seller/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify({ status: "VERIFIED" }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          toast.success(`Verified successfully!`);
          refetch();
        }
      })
      .catch((error) => console.error(error));
  };

  const handleDeleteSeller = (seller) => {
    fetch(`http://localhost:5000/users/seller/${seller._id}`, {
      method: "DELETE",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        toast.success(`${seller.name} has been removed as a seller.`);
        refetch();
      });
  };

  const closeModal = () => {
    setDeleteSeller(null);
  };
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
              <th className="text-center">Seller Name</th>
              <th className="text-center">Seller Email</th>
              <th className="text-center">Total Products Posted</th>
              <th className="text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {sellers.map((seller, i) => (
              <tr key={seller._id}>
                <td className="bg-secondary">{i + 1}</td>
                <td className="bg-secondary">
                  <div className="flex items-center justify-center space-x-3">
                    <div>
                      <div className="font-bold text-accent">{seller.name}</div>
                    </div>
                  </div>
                </td>
                <td className="bg-secondary text-center">{seller.email}</td>
                <td className="bg-secondary text-center">Purple</td>
                <th className="bg-secondary">
                  <div className="flex flex-col gap-2">
                    {seller.status ? (
                      <span className="bg-accent btn-outline btn-xs text-secondary rounded-lg flex justify-center items-center hover:bg-accent hover:text-secondary">
                        {seller.status}
                      </span>
                    ) : (
                      <button
                        className="btn btn-accent btn-outline btn-xs"
                        onClick={() => handleVerifySeller(seller._id)}
                      >
                        VERIFY
                      </button>
                    )}

                    <button className="btn btn-success btn-outline btn-xs">
                      MAKE ADMIN
                    </button>
                    <label
                      htmlFor="confirmationModal"
                      className="btn btn-error btn-outline btn-xs"
                      onClick={() => setDeleteSeller(seller)}
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
      {deleteSeller && (
        <ConfirmationModal
          title={`Are you sure you want to remove ${deleteSeller.name} as a seller?`}
          message={`This won't be recoverable in the future after you delete.`}
          modalAction={handleDeleteSeller}
          modalData={deleteSeller}
          modalActionBtnName="DELETE"
          closeModal={closeModal}
        ></ConfirmationModal>
      )}
    </div>
  );
};

export default AllSellers;
