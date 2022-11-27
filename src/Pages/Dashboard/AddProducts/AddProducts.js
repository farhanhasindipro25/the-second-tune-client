import React from "react";
import useTitle from "../../../Hooks/useTitle";

const AddProducts = () => {
  useTitle("Add Products");
  return (
    <div className="mx-4">
      <h2 className="text-success text-3xl font-semibold mt-6 flex md:justify-center sm:justify-center justify-center">
        ADD PRODUCTS
      </h2>
      <form className="mt-10 mb-10 bg-secondary p-5 rounded-xl">
        <div className="flex gap-2 my-6">
          <div className="w-3/4">
            <label className="font-semibold" htmlFor="ProductName">
              Product Name
            </label>
            <input
              type="text"
              name="productName"
              placeholder="Enter Product Name"
              className="input input-bordered input-success w-full text-secondary"
            />
          </div>
          <div className="w-1/4">
            <label className="font-semibold" htmlFor="ProductName">
              Product Photo
            </label>
            <input
              type="file"
              className="file-input file-input-bordered file-input-success text-secondary font-medium w-full"
            />
          </div>
        </div>
        <div className="flex gap-2 my-6">
          <div className="w-1/2">
            <label className="font-semibold" htmlFor="ProductCategory">
              Product Category
            </label>
            <select className="select select-success text-secondary w-full">
              <option className="text-secondary">Guitars</option>
              <option className="text-secondary">Amplifiers</option>
              <option className="text-secondary">Processors</option>
              <option className="text-secondary">Pedals</option>
              <option className="text-secondary">Keyboards</option>
              <option className="text-secondary">Drums</option>
            </select>
          </div>
          <div className="w-1/2">
            <label className="font-semibold" htmlFor="ProductCondition">
              Product Condition
            </label>
            <select className="select select-success text-secondary w-full">
              <option className="text-secondary">Excellent</option>
              <option className="text-secondary">Good</option>
              <option className="text-secondary">Fair</option>
            </select>
          </div>
        </div>
        <div className="flex gap-2 my-6">
          <div className="w-1/2">
            <label className="font-semibold" htmlFor="SellingPrice">
              Selling Price
            </label>
            <input
              type="number"
              name="sellingPrice"
              placeholder="Enter Selling Price"
              className="input input-bordered input-success w-full text-secondary"
            />
          </div>
          <div className="w-1/2">
            <label className="font-semibold" htmlFor="BuyingPrice">
              Buying Price
            </label>
            <input
              type="number"
              name="buyingPrice"
              placeholder="Enter Buying Price"
              className="input input-bordered input-success w-full text-secondary"
            />
          </div>
        </div>
        <div className="flex gap-2 my-6">
          <div className="w-1/3">
            <label className="font-semibold" htmlFor="timeUsed">
              Time Used
            </label>
            <input
              type="text"
              name="timeUsed"
              placeholder="Enter Time Used (days/weeks/months/years)"
              className="input input-bordered input-success w-full text-secondary"
            />
          </div>
          <div className="w-1/3">
            <label className="font-semibold" htmlFor="ProductName">
              Phone Number
            </label>
            <input
              type="number"
              name="phoneNumber"
              placeholder="Enter Phone Number"
              className="input input-bordered input-success w-full text-secondary"
            />
          </div>
          <div className="w-1/3">
            <label className="font-semibold" htmlFor="ProductName">
              Location
            </label>
            <input
              type="text"
              name="location"
              placeholder="Enter Location"
              className="input input-bordered input-success w-full text-secondary"
            />
          </div>
        </div>
        <div className="flex flex-col">
          <label className="font-semibold" htmlFor="ProductDescription">
            Product Description
          </label>
          <textarea
            className="textarea textarea-success text-secondary"
            placeholder="Product Description"
          ></textarea>
        </div>
        <button className="btn btn-success w-full my-6">ADD PRODUCT</button>
      </form>
    </div>
  );
};

export default AddProducts;
