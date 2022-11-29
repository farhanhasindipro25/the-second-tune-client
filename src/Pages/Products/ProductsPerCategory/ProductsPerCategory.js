import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../Shared/Loader/Loader";
import ProductCards from "./ProductCards";
import { useLoaderData } from "react-router-dom";
import BookingModal from "../BookingModal/BookingModal";

const ProductsPerCategory = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const categoryInformation = useLoaderData();
  //   console.log(categoryInformation);
  const getBookingDate = () => {
    const todaysDate = new Date();
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const month = todaysDate.getMonth();
    const year = todaysDate.getFullYear();
    const date = todaysDate.getDate();

    const bookingDate = date + " " + months[month] + " " + year;
    return bookingDate;
  };
  const { _id } = categoryInformation;
  const {
    data: products = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      try {
        const res = await fetch(
          `http://localhost:5000/products?categoryId=${_id}`,
          {
            // headers: {},
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
  return (
    <div className="bg-primary py-20">
      {products.length > 0 ? (
        <div className="grid lg:grid-cols-3 md:grid-cols-1 gap-10 md:container md:mx-auto sm:mx-6 mx-6 pb-24">
          {products.map((product) => (
            <ProductCards
              key={product._id}
              product={product}
              isLoading={isLoading}
              setSelectedProduct={setSelectedProduct}
            ></ProductCards>
          ))}
        </div>
      ) : (
        <div className="min-h-screen flex justify-center items-center">
          <h2 className="text-3xl font-bold text-success">
            No products available in this category
          </h2>
        </div>
      )}
      {selectedProduct && (
        <BookingModal
          selectedProduct={selectedProduct}
          setSelectedProduct={setSelectedProduct}
          getBookingDate={getBookingDate}
          refetch={refetch}
        ></BookingModal>
      )}
    </div>
  );
};

export default ProductsPerCategory;
