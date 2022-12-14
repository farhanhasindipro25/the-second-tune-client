import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Contexts/AuthProvider";
import useTitle from "../../../Hooks/useTitle";
import useToken from "../../../Hooks/useToken";

const Signup = () => {
  useTitle("Sign Up");
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const navigate = useNavigate();
  const { createUser, updateUser } = useContext(AuthContext);
  const [createdUserEmail, setCreatedUserEmail] = useState("");
  const [signUpError, setSignUpError] = useState("");
  const [token] = useToken(createdUserEmail);

  if (token) {
    navigate("/");
  }

  const handleSignup = (data) => {
    console.log(data);
    setSignUpError("");
    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success("User account created successfully!");
        const userInfo = {
          displayName: data.name,
        };
        console.log(userInfo);
        updateUser(userInfo)
          .then(() => {
            saveUserToDB(data.name, data.email, data.role);
          })
          .catch((error) => console.error(error));
      })
      .catch((error) => {
        console.error(error);
        setSignUpError(error.message);
      });
  };

  const saveUserToDB = (name, email, role) => {
    const user = { name, email, role };
    fetch("https://b612-used-products-resale.vercel.app/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log("Saving user...", data);
        setCreatedUserEmail(email);
      });
  };

  return (
    <div>
      <div className="flex justify-center items-center bg-primary">
        <div className="w-96 bg-secondary rounded-3xl p-10 my-16 sm:mx-2 mx-2">
          <h2 className="text-4xl text-center my-6 text-white">Sign Up</h2>
          <form
            className="container mx-auto"
            onSubmit={handleSubmit(handleSignup)}
          >
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-white">Name</span>
              </label>
              <input
                type="text"
                {...register("name", { required: "Name is required" })}
                className="input input-bordered input-primary text-secondary"
                placeholder="Your Full Name"
              />
              {errors.name && (
                <p className="text-red-400 ml-1 mt-3" role="alert">
                  {errors.name?.message}
                </p>
              )}
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-white">Email</span>
              </label>
              <input
                type="text"
                {...register("email", { required: "Email is required" })}
                className="input input-bordered input-primary text-secondary"
                placeholder="Your Email ID"
              />
              {errors.email && (
                <p className="text-red-400 ml-1 mt-3" role="alert">
                  {errors.email?.message}
                </p>
              )}
              {signUpError ===
                "Firebase: Error (auth/email-already-in-use)." && (
                <p className="text-error text-center mt-4">
                  This email is already in use.
                </p>
              )}
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-white">Password</span>
              </label>
              <input
                type="password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be alteast 6 characters longer!",
                  },
                  pattern: {
                    value:
                      /(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z].*[a-z]).{6}/,
                    message:
                      "Your password must have at least 2 capital letters, 2 small letters, 2 digits, and 1 special character!",
                  },
                })}
                className="input input-bordered input-primary mb-3 text-secondary"
                placeholder="Your Password"
              />
              {errors.password && (
                <p className="text-red-400 ml-1" role="alert">
                  {errors.password?.message}
                </p>
              )}
              <div className="mt-6 py-3 rounded-lg bg-primary">
                <h2 className="text-xs text-center font-semibold">
                  Password Criteria
                </h2>
                <ul className="my-4">
                  <li className="flex gap-4 my-1">
                    <input
                      type="radio"
                      name="rule1"
                      className="radio radio-primary ml-8 w-4 h-4"
                      checked
                      disabled
                    />
                    <p className="text-xs">Must have two capital letters</p>
                  </li>
                  <li className="flex gap-4 my-1">
                    <input
                      type="radio"
                      name="rule2"
                      className="radio radio-primary ml-8 w-4 h-4"
                      checked
                      disabled
                    />
                    <p className="text-xs">Must have two small letters</p>
                  </li>
                  <li className="flex gap-4 my-1">
                    <input
                      type="radio"
                      name="rule3"
                      className="radio radio-primary ml-8 w-4 h-4"
                      checked
                      disabled
                    />
                    <p className="text-xs">Must have two digits</p>
                  </li>
                  <li className="flex gap-4 my-1">
                    <input
                      type="radio"
                      name="rule4"
                      className="radio radio-primary ml-8 w-4 h-4"
                      checked
                      disabled
                    />
                    <p className="text-xs">Must have one special character</p>
                  </li>
                  <li className="flex gap-4 my-1">
                    <input
                      type="radio"
                      name="rule5"
                      className="radio radio-primary ml-8 w-4 h-4"
                      checked
                      disabled
                    />
                    <p className="text-xs">Must be of at least 6 in length</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-accent">
                  Choose type of account
                </span>
              </label>
              <select
                {...register("role", {
                  required: "Account type is required",
                })}
                name="role"
                className="select select-success text-secondary w-full mb-6"
              >
                <option className="text-secondary">Seller</option>
                <option className="text-secondary">Buyer</option>
              </select>
            </div>
            <input
              className="btn btn-success w-full"
              value="Sign Up"
              type="submit"
            />
            {signUpError === "Firebase: Error (auth/user-not-found)." && (
              <p className="text-red-400 text-center mt-4">
                Invalid Email. User not found!
              </p>
            )}
            {signUpError === "Firebase: Error (auth/wrong-password)." && (
              <p className="text-red-400 text-center mt-4">Wrong Password</p>
            )}
          </form>
          <p className="text-center mt-6 text-white">
            Already have an account?{" "}
            <Link to="/login" className="text-success">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
