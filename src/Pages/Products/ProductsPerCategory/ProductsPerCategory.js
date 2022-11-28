import React from 'react';
import { useQuery } from "@tanstack/react-query";

const ProductsPerCategory = () => {
    const { data: products = [], isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/products");
      const data = await res.json();
      return data;
    },
  });
    return (
        <div>
            
        </div>
    );
};

export default ProductsPerCategory;