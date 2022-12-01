import React from "react";
// import { Link } from "react-router-dom";

const AdvertisedItem = () => {
  return (
    <div>
      <div className="card shadow-xl image-full h-full">
        <figure>
          <img src="" alt="" />
        </figure>
        <div className="card-body">
          <button className="btn lg:text-5xl md:text-5xl sm:text-3xl text-3xl lg:mt-32 md:mt-80 sm:mt-32 mt-32">
            {/* <Link to={`/categories/${_id}`}>{categoryName}</Link> */}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdvertisedItem;
