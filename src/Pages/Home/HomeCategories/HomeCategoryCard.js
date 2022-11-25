import React from "react";

const HomeCategoryCard = ({ category }) => {
  const { categoryName, categoryImage } = category;
  return (
    <div>
      <div className="card shadow-xl image-full lg:h-full">
        <figure>
          <img src={categoryImage} className="rounded-xl" alt="Shoes" />
        </figure>
        <div className="card-body pt-36">
          <h2 className="card-title text-5xl btn">{categoryName}</h2>
          {/* <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default HomeCategoryCard;
