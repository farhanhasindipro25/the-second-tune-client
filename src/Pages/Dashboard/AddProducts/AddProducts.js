import React, { useContext } from "react";
import useTitle from "../../../Hooks/useTitle";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Contexts/AuthProvider";

const AddProducts = () => {
  const categoryInfo = useLoaderData();
  useTitle("Add Products");
  const imageHostKey = process.env.REACT_APP_imgbb_key;

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const { user } = useContext(AuthContext);

  const navigate = useNavigate();
  const getPostingDate = () => {
    const todaysDate = new Date();
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const month = todaysDate.getMonth();
    const year = todaysDate.getFullYear();
    const date = todaysDate.getDate();

    const postingDate = date + " " + months[month] + " " + year;
    return postingDate;
  };

  const handleAddProduct = (data) => {
    const categoryId = categoryInfo.find(
      (category) => category.categoryName === data.productCategory
    );
    const formData = new FormData();
    // console.log(data);
    const image = data.productPhoto[0];
    // console.log(image);
    formData.append("image", image);
    // console.log(formData);
    const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        if (imgData.success) {
          console.log(imgData.data.url);
          const product = {
            productName: data.productName,
            productPhoto: imgData.data.url,
            productCategory: data.productCategory,
            productCondition: data.productCondition,
            sellingPrice: data.sellingPrice,
            buyingPrice: data.buyingPrice,
            timeUsed: data.timeUsed,
            phoneNumber: data.phoneNumber,
            location: data.location,
            productDescription: data.productDescription,
            sellerName: user.name || user.displayName,
            postingDate: getPostingDate(),
            categoryId: categoryId._id,
            sellerEmail: user?.email,
          };

          console.log(product);
          // Saving product information to Database
          fetch("http://localhost:5000/products", {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(product),
          })
            .then((res) => res.json())
            .then((result) => {
              console.log(result);
              toast.success(`${data.productName} has been added successfully.`);
              navigate("/dashboard/myproducts");
            });
        }
      });
  };

  return (
    <div className="mx-4">
      <h2 className="text-success text-3xl font-bold mt-12 flex md:justify-center sm:justify-center justify-center">
        ADD PRODUCTS
      </h2>
      <form
        className="mt-10 mb-10 bg-secondary p-5 rounded-xl"
        onSubmit={handleSubmit(handleAddProduct)}
      >
        <div className="flex gap-2 my-6">
          <div className="w-3/4">
            <label className="font-semibold" htmlFor="ProductName">
              Product Name
            </label>
            <input
              type="text"
              {...register("productName", {
                required: "Product Name is required",
              })}
              name="productName"
              placeholder="Enter Product Name"
              className="input input-bordered input-success w-full text-secondary"
            />
            {errors.productName && (
              <p className="text-red-400 ml-1 mt-3" role="alert">
                {errors.productName?.message}
              </p>
            )}
          </div>
          <div className="w-1/4">
            <label className="font-semibold" htmlFor="ProductName">
              Product Photo
            </label>
            <input
              type="file"
              {...register("productPhoto", {
                required: "Product Photo is required",
              })}
              className="file-input file-input-bordered file-input-success text-secondary font-medium w-full"
            />
            {errors.productPhoto && (
              <p className="text-red-400 ml-1 mt-3" role="alert">
                {errors.productPhoto?.message}
              </p>
            )}
          </div>
        </div>
        <div className="flex gap-2 my-6">
          <div className="w-1/2">
            <label className="font-semibold" htmlFor="ProductCategory">
              Product Category
            </label>
            <select
              name="productCategory"
              {...register("productCategory", {
                required: "Product Category is required",
              })}
              className="select select-success text-secondary w-full"
            >
              {categoryInfo.map((category) => (
                <React.Fragment key={category._id}>
                  <option className="text-secondary">
                    {category.categoryName}
                  </option>
                </React.Fragment>
              ))}
            </select>
            {errors.productCategory && (
              <p className="text-red-400 ml-1 mt-3" role="alert">
                {errors.productCategory?.message}
              </p>
            )}
          </div>
          <div className="w-1/2">
            <label className="font-semibold" htmlFor="sellingPrice">
              Product Condition
            </label>
            <select
              {...register("productCondition", {
                required: "Product Condition is required",
              })}
              name="productCondition"
              className="select select-success text-secondary w-full"
            >
              <option className="text-secondary">Excellent</option>
              <option className="text-secondary">Good</option>
              <option className="text-secondary">Fair</option>
            </select>
            {errors.productCondition && (
              <p className="text-red-400 ml-1 mt-3" role="alert">
                {errors.productCondition?.message}
              </p>
            )}
          </div>
        </div>
        <div className="flex gap-2 my-6">
          <div className="w-1/2">
            <label className="font-semibold" htmlFor="SellingPrice">
              Selling Price
            </label>
            <input
              type="number"
              {...register("sellingPrice", {
                required: "Selling Price is required",
              })}
              name="sellingPrice"
              placeholder="Enter Selling Price"
              className="input input-bordered input-success w-full text-secondary"
            />
            {errors.sellingPrice && (
              <p className="text-red-400 ml-1 mt-3" role="alert">
                {errors.sellingPrice?.message}
              </p>
            )}
          </div>
          <div className="w-1/2">
            <label className="font-semibold" htmlFor="BuyingPrice">
              Buying Price
            </label>
            <input
              type="number"
              {...register("buyingPrice", {
                required: "Buying Price is required",
              })}
              name="buyingPrice"
              placeholder="Enter Buying Price"
              className="input input-bordered input-success w-full text-secondary"
            />
            {errors.buyingPrice && (
              <p className="text-red-400 ml-1 mt-3" role="alert">
                {errors.buyingPrice?.message}
              </p>
            )}
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
              {...register("timeUsed", {
                required: "Time Used is required",
              })}
              placeholder="Enter Time Used (days/weeks/months/years)"
              className="input input-bordered input-success w-full text-secondary"
            />
            {errors.timeUsed && (
              <p className="text-red-400 ml-1 mt-3" role="alert">
                {errors.timeUsed?.message}
              </p>
            )}
          </div>
          <div className="w-1/3">
            <label className="font-semibold" htmlFor="ProductName">
              Phone Number
            </label>
            <input
              type="number"
              {...register("phoneNumber", {
                required: "Phone Number is required",
              })}
              name="phoneNumber"
              placeholder="Enter Phone Number"
              className="input input-bordered input-success w-full text-secondary"
            />
            {errors.phoneNumber && (
              <p className="text-red-400 ml-1 mt-3" role="alert">
                {errors.phoneNumber?.message}
              </p>
            )}
          </div>
          <div className="w-1/3">
            <label className="font-semibold" htmlFor="ProductName">
              Location
            </label>
            <input
              type="text"
              name="location"
              {...register("location", {
                required: "Location is required",
              })}
              placeholder="Enter Location"
              className="input input-bordered input-success w-full text-secondary"
            />
            {errors.location && (
              <p className="text-red-400 ml-1 mt-3" role="alert">
                {errors.location?.message}
              </p>
            )}
          </div>
        </div>
        <div className="flex flex-col">
          <label className="font-semibold" htmlFor="ProductDescription">
            Product Description
          </label>
          <textarea
            name="productDescription"
            {...register("productDescription", {
              required: "Product Description is required",
            })}
            className="textarea textarea-success text-secondary"
            placeholder="Product Description"
          ></textarea>
          {errors.productDescription && (
            <p className="text-red-400 ml-1 mt-3" role="alert">
              {errors.productDescription?.message}
            </p>
          )}
        </div>
        <button className="btn btn-success w-full my-6">ADD PRODUCT</button>
      </form>
    </div>
  );
};

export default AddProducts;
