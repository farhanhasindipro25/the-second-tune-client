import React from "react";
import Loader from "../../Shared/Loader/Loader";

const ProductCards = ({ product, isLoading }) => {
  const {
    productName,
    productPhoto,
    productCondition,
    sellingPrice,
    buyingPrice,
    timeUsed,
    location,
    phoneNumber,
    productDescription,
    // categoryId,
    postingDate,
    sellerName,
  } = product;

  if (isLoading) {
    return <Loader></Loader>;
  }
  return (
    <div>
      <div className="card card-compact bg-secondary shadow-xl">
        <figure>
          <img src={productPhoto} alt="" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{productName}</h2>
          <p>
            Product Condition <span>{productCondition}</span>
          </p>
          <p>
            Selling Price <span>{sellingPrice} BDT</span>
          </p>
          <p>
            Buying Price <span>{buyingPrice} BDT</span>
          </p>
          <p>
            Time Used <span>{timeUsed}</span>
          </p>
          <p>
            Location <span>{location}</span>
          </p>
          <p>
            Phone Number <span>{phoneNumber}</span>
          </p>
          <p>
            Description <span>{productDescription}</span>
          </p>
          <p>
            Posted in <span>{postingDate}</span>
          </p>
          <p>
            Posted by <span>{sellerName}</span>
          </p>
          <div className="card-actions justify-center my-6">
            <button className="btn btn-accent">Add to Wishlist</button>
            <button className="btn btn-success">Book Now</button>
            <button className="btn btn-error">Report</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCards;
