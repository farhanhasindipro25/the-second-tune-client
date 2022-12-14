import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import useTitle from "../../../Hooks/useTitle";
import Loader from "../../Shared/Loader/Loader";
import { FaCheck } from "react-icons/fa";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Contexts/AuthProvider";

const ProductCards = ({ product, isLoading, setSelectedProduct }) => {
  useTitle("Products");
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const { data: users = [] } = useQuery({
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
    location,
    phoneNumber,
    productDescription,
    productCategory,
    postingDate,
    sellerName,
  } = product;

  const isSellerVerified = users.find((user) => user.name === sellerName);
  //   console.log("Verified", sellerVerified.status);

  const handleAddWishlist = (product) => {
    const wished = {
      product,
      buyerEmail: user?.email,
    };
    const url = "https://b612-used-products-resale.vercel.app/wishlist";
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(wished),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log("Wished", result);
        console.log(wished);
        toast.success(`${product.productName} added to wishlist!`);
        navigate("/dashboard/wishlist");
      });
  };

  return (
    <div>
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
          <div className="mx-auto font-medium text-md">
            Posted in{" "}
            <span className="font-semibold text-success">{postingDate}</span>
          </div>

          <div className="mt-8 ml-10">
            <h2 className="font-medium">
              Product Category:{" "}
              <span className="font-semibold text-success">
                {productCategory}
              </span>
            </h2>
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
            <h2 className="font-medium">
              Location{" "}
              <span className="font-semibold text-success">{location}</span>
            </h2>
            <h2 className="font-medium">
              Phone Number{" "}
              <span className="font-semibold text-success">{phoneNumber}</span>
            </h2>
            <h2 className="font-medium mt-6">
              Description{" "}
              <span className="font-semibold text-success">
                {productDescription}
              </span>
            </h2>
          </div>

          <div className="card-actions justify-center items-center gap-4 my-6">
            <button
              className="btn btn-accent btn-outline btn-sm"
              onClick={() => handleAddWishlist(product)}
            >
              Add to Wishlist
            </button>

            <label
              htmlFor="booking-modal"
              className="btn btn-success btn-sm font-semibold"
              onClick={() => setSelectedProduct(product)}
            >
              BOOK NOW
            </label>

            {/* <button className="btn btn-error btn-sm">Report</button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCards;
