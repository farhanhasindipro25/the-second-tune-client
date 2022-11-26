import React from "react";

const HomeCategoryCard = ({ category }) => {
  const { categoryName, categoryImage } = category;
  return (
    <div>
      <div className="card shadow-xl image-full h-full">
        <figure>
          <img src={categoryImage} alt="" />
        </figure>
        <div className="card-body">
          <button className="btn lg:text-5xl md:text-5xl sm:text-3xl text-3xl lg:mt-32 md:mt-80 sm:mt-32 mt-32">
            {categoryName}
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeCategoryCard;
