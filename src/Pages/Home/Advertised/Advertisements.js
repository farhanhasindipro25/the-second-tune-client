import { useQuery } from "@tanstack/react-query";
// import React, { useContext } from "react";
// import { AuthContext } from "../../../Contexts/AuthProvider";
import Loader from "../../Shared/Loader/Loader";
import AdvertisedItem from "./AdvertisedItem";

const Advertisements = () => {
  //   const { user } = useContext(AuthContext);
  const { data: products = [], isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      try {
        const res = await fetch("http://localhost:5000/products");
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
    <div className="bg-primary pt-28 pb-56">
      <h2 className="text-3xl text-center font-semibold text-success mb-16">
        CHECK OUT WHAT'S TRENDING
      </h2>
      <div className="grid lg:grid-cols-3 md:grid-cols-1 gap-10 md:container md:mx-auto sm:mx-6 mx-6 pb-24">
        {products.map((category) => (
          <AdvertisedItem
            key={category._id}
            category={category}
          ></AdvertisedItem>
        ))}
      </div>
    </div>
  );
};

export default Advertisements;
