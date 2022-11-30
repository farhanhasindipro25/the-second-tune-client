import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../../Contexts/AuthProvider";
import useTitle from "../../../Hooks/useTitle";
import ConfirmationModal from "../../Shared/ConfirmationModal/ConfirmationModal";
import Loader from "../../Shared/Loader/Loader";

const MyProducts = () => {
  useTitle("My Products");
  const { user } = useContext(AuthContext);
  const [deleteAddedProduct, setDeleteAddedProduct] = useState(null);
  const {
    data: products = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["products", user?.email],
    queryFn: async () => {
      try {
        const res = await fetch(
          `http://localhost:5000/myProducts?email=${user?.email}`
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

  const handleAdvertiseProduct = (id) => {
    const isProductAdvertised = products.find((product) => id === product._id);
    console.log(isProductAdvertised);

    fetch(`http://localhost:5000/myProducts/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ ad: "ADVERTISED" }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          toast.success(`Product advertised successfully!`);
          refetch();
        }
      })
      .catch((error) => console.error(error));
  };

  const handleDeleteAddedProduct = (product) => {
    fetch(`http://localhost:5000/products/${product._id}`, {
      method: "DELETE",
      // headers:{}
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        toast.success(
          `${product.productName} has been removed from your added products.`
        );
        refetch();
      });
  };

  const closeModal = () => {
    setDeleteAddedProduct(null);
  };
  return (
    <div>
      <h2 className="text-success text-3xl font-semibold my-12 flex md:justify-center sm:justify-center justify-center">
        MY PRODUCTS
      </h2>
      {products.length === 0 ? (
        <p className="text-success text-xl font-semibold my-12 flex md:justify-center sm:justify-center justify-center">
          You have not added any products yet
        </p>
      ) : (
        <div className="overflow-x-auto w-full mx-2">
          <table className="table w-full rounded-xl mb-10">
            <thead>
              <tr>
                <th></th>
                <th>Product Image</th>
                <th>Product Name</th>
                <th>Product Category</th>
                <th>Selling Price (BDT)</th>
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
                  <td className="bg-secondary">{product.productCategory}</td>
                  <td className="bg-secondary">{product.sellingPrice}</td>
                  <th className="bg-secondary">
                    <span className="badge badge-success badge-sm font-semibold p-3">
                      AVAILABLE
                    </span>
                    <span className="badge badge-warning badge-sm font-semibold p-3">
                      SOLD
                    </span>
                  </th>
                  <th className="bg-secondary">
                    <div className="flex flex-col gap-3">
                      {product.ad === "ADVERTISED" ? (
                        <span className="bg-accent btn-outline btn-xs text-secondary rounded-lg flex justify-center items-center hover:bg-accent hover:text-secondary">
                          {product.ad}
                        </span>
                      ) : (
                        <button
                          className="btn btn-accent btn-outline btn-xs"
                          onClick={() => handleAdvertiseProduct(product._id)}
                        >
                          ADVERTISE
                        </button>
                      )}
                      <label
                        htmlFor="confirmationModal"
                        className="btn btn-error btn-outline btn-xs"
                        onClick={() => setDeleteAddedProduct(product)}
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
      )}
      {deleteAddedProduct && (
        <ConfirmationModal
          title={`Are you sure you want to remove your AddedProduct for ${deleteAddedProduct.productName}?`}
          message={`This won't be recoverable in the future after you delete.`}
          modalAction={handleDeleteAddedProduct}
          modalData={deleteAddedProduct}
          modalActionBtnName="DELETE"
          closeModal={closeModal}
        ></ConfirmationModal>
      )}
    </div>
  );
};

export default MyProducts;
