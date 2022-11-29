import React from "react";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../Shared/Loader/Loader";
import ProductCards from "./ProductCards";

const ProductsPerproduct = () => {
  const {
    data: products = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      try {
        const res = await fetch("http://localhost:5000/products", {
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
    <div className="bg-primary py-20">
      <div className="grid lg:grid-cols-3 md:grid-cols-1 gap-10 md:container md:mx-auto sm:mx-6 mx-6 pb-24">
        {products.map((product) => (
          <ProductCards
            key={product._id}
            product={product}
            isLoading={isLoading}
          ></ProductCards>
        ))}
      </div>
    </div>
  );
};

export default ProductsPerproduct;
