import React from "react";

const AddProducts = () => {
  return (
    <div>
      <h2 className="text-success text-3xl font-semibold mt-6 flex md:justify-center sm:justify-center justify-center">
        ADD PRODUCTS
      </h2>
      <form className="mt-10 pb-10 bg-secondary ml-4 p-5 rounded-xl">
        <div className="flex flex-col gap-2 my-4">
          <label htmlFor="ProductName">Product Name</label>
          <input
            type="text"
            name="productName"
            placeholder="Enter Product Name"
            className="input input-bordered input-success w-full text-secondary"
          />
        </div>
        <div className="flex flex-col gap-2 my-4">
          <label htmlFor="ProductCategory">Product Category</label>
          <select className="select select-success text-secondary w-full">
            <option className="text-secondary">Guitars</option>
            <option className="text-secondary">Amplifiers</option>
            <option className="text-secondary">Processors</option>
            <option className="text-secondary">Pedals</option>
            <option className="text-secondary">Keyboards</option>
            <option className="text-secondary">Drums</option>
          </select>
        </div>
        <div className="flex flex-col gap-2 my-4">
          <label htmlFor="ProductCondition">Product Condition</label>
          <select className="select select-success text-secondary w-full">
            <option className="text-secondary">Excellent</option>
            <option className="text-secondary">Good</option>
            <option className="text-secondary">Fair</option>
          </select>
        </div>
        <div className="flex flex-col gap-2 my-4">
          <label htmlFor="SellingPrice">Selling Price</label>
          <input
            type="number"
            name="sellingPrice"
            placeholder="Enter Selling Price"
            className="input input-bordered input-success w-full text-secondary"
          />
        </div>
        <div className="flex flex-col gap-2 my-4">
          <label htmlFor="BuyingPrice">Buying Price</label>
          <input
            type="number"
            name="buyingPrice"
            placeholder="Enter Buying Price"
            className="input input-bordered input-success w-full text-secondary"
          />
        </div>
        <div className="flex flex-col gap-2 my-4">
          <label htmlFor="timeUsed">Time Used</label>
          <input
            type="text"
            name="timeUsed"
            placeholder="Enter Time Used (days/weeks/months/years)"
            className="input input-bordered input-success w-full text-secondary"
          />
        </div>
        <div className="flex flex-col gap-2 my-4">
          <label htmlFor="ProductName">Phone Number</label>
          <input
            type="number"
            name="phoneNumber"
            placeholder="Enter Phone Number"
            className="input input-bordered input-success w-full text-secondary"
          />
        </div>
        <div className="flex flex-col gap-2 my-4">
          <label htmlFor="ProductName">Location</label>
          <input
            type="text"
            name="location"
            placeholder="Enter Location"
            className="input input-bordered input-success w-full text-secondary"
          />
        </div>
        <div className="flex flex-col gap-2 my-4">
          <label htmlFor="ProductDescription">Product Description</label>
          <textarea
            className="textarea textarea-success text-secondary"
            placeholder="Product Description"
          ></textarea>
        </div>
        <button className="btn btn-success w-full">ADD PRODUCT</button>
      </form>
    </div>
  );
};

export default AddProducts;
