import React from "react";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../Shared/Loader/Loader";
import ProductCards from "./ProductCards";
import { useLoaderData } from "react-router-dom";

const ProductsPerCategory = () => {
  const categoryInformation = useLoaderData();
  console.log(categoryInformation);
  const { _id } = categoryInformation;
  const { data: products = [], isLoading } = useQuery({
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
    </div>
  );
};

export default ProductsPerCategory;
