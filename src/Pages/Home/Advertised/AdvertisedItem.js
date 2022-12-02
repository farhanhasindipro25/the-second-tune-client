import { useQuery } from "@tanstack/react-query";
import React from "react";
import { FaCheck } from "react-icons/fa";
import Loader from "../../Shared/Loader/Loader";
// import { Link } from "react-router-dom";

const AdvertisedItem = ({ product }) => {
  const { data: users = [], isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      try {
        const res = await fetch(
          "https://b612-used-products-resale.vercel.app/users"
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
  const {
    productName,
    productPhoto,
    productCondition,
    sellingPrice,
    buyingPrice,
    timeUsed,
    productCategory,
    sellerName,
  } = product;

  const isSellerVerified = users.find((user) => user.name === sellerName);
  return (
    <div className="card card-compact bg-secondary shadow-xl">
      <figure>
        <img src={productPhoto} alt="" />
      </figure>
      <div className="card-body">
        <h2 className="mx-auto font-semibold text-xl">{productName}</h2>
        <div className="mx-auto font-medium text-md flex gap-1">
          Seller:{" "}
          <span className="text-success flex items-center gap-1">
            <div className="flex font-semibold">{sellerName}</div>
            <div>
              {isSellerVerified?.status === "VERIFIED" && (
                <FaCheck className="bg-success text-accent w-4 h-4 p-1 rounded-full"></FaCheck>
              )}
            </div>
          </span>
        </div>
        <div className="badge badge-error badge-sm mx-auto">ADVERTISEMENT</div>

        <div className="mt-8 ml-10">
          <div className="badge badge-warning badge-md mb-3 mx-auto font-semibold">
            {productCategory}
          </div>
          <h2 className="font-medium">
            Product Condition:{" "}
            <span className="font-semibold text-success">
              {productCondition}
            </span>
          </h2>
          <h2 className="font-medium">
            Selling Price:{" "}
            <span className="font-semibold text-success">
              {sellingPrice} BDT
            </span>
          </h2>
          <h2 className="font-medium">
            Buying Price:{" "}
            <span className="font-semibold text-success">
              {buyingPrice} BDT
            </span>
          </h2>
          <h2 className="font-medium">
            Time Used:{" "}
            <span className="font-semibold text-success">{timeUsed}</span>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default AdvertisedItem;
