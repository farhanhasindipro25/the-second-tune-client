import { useQuery } from "@tanstack/react-query";
import React from "react";
import useTitle from "../../../Hooks/useTitle";
import Loader from "../../Shared/Loader/Loader";
import CategoryItem from "./CategoryItem";

const Categories = () => {
  useTitle("All Products");
  const { data: categories = [], isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await fetch(
        "https://b612-used-products-resale.vercel.app/categories"
      );
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return <Loader></Loader>;
  }

  return (
    <div className="bg-primary py-20">
      <div className="grid lg:grid-cols-3 md:grid-cols-1 gap-10 md:container md:mx-auto sm:mx-6 mx-6 pb-24">
        {categories.map((category) => (
          <CategoryItem
            key={category._id}
            category={category}
            isLoading={isLoading}
          ></CategoryItem>
        ))}
      </div>
    </div>
  );
};

export default Categories;
