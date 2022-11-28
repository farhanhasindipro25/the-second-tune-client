import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useLoaderData } from "react-router-dom";

const ProductsPerCategory = () => {
  //   const { data: products = [], isLoading } = useQuery({
  //     queryKey: ["products"],
  //     queryFn: async () => {
  //       const res = await fetch(`http://localhost:5000/category/${id}`);
  //       const data = await res.json();
  //       return data;
  //     },
  //   });
  const productCategory = useLoaderData();
  console.log(productCategory);
  return <div></div>;
};

export default ProductsPerCategory;
