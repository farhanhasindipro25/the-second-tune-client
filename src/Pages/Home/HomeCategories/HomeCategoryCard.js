import React from "react";

const HomeCategoryCard = ({ category }) => {
  const { categoryName, categoryImage } = category;
  return (
    <div>
      <div className="card shadow-xl image-full h-full">
        <figure>
          <img src={categoryImage} alt="Shoes" />
        </figure>
        <div className="card-body">
          <button className="btn text-5xl mt-32">{categoryName}</button>
        </div>
      </div>
    </div>
  );
};

export default HomeCategoryCard;
