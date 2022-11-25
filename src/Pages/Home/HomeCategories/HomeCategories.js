import React, { useEffect, useState } from "react";
import HomeCategoryCard from "./HomeCategoryCard";

const HomeCategories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("productCategories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div className="bg-primary">
      <div>
        <h2 class="text-accent text-center text-3xl font-semibold pb-20">
          PRODUCT CATEGORIES
        </h2>
        <div className="grid lg:grid-cols-3 md:grid-cols-1 gap-24 container mx-auto pb-24">
          {categories.map((category) => (
            <HomeCategoryCard
              key={category._id}
              category={category}
            ></HomeCategoryCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeCategories;
