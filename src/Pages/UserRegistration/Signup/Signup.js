import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Contexts/AuthProvider";
import useTitle from "../../../Hooks/useTitle";

const Signup = () => {
  useTitle("Sign Up");
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const { createUser } = useContext(AuthContext);

  const [signUpError, setSignUpError] = useState("");

  const handleSignup = (data) => {
    console.log(data);
    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.error(error);
        setSignUpError(error.message);
      });
  };

  return (
    <div>
      <div className="flex justify-center items-center bg-primary">
        <div className="w-96 bg-secondary rounded-3xl p-10 my-16">
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
                    message: "Password must be alteast 8 characters longer!",
                  },
                  pattern: {
                    value:
                      /(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z].*[a-z]).{6}/,
                    message:
                      "Your password must have at least 2 capital letters, 2 small letter, 2 digits, and 1 special character!",
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
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text text-accent">
                  Choose type of account
                </span>
              </label>
              <select className="select select-success text-secondary w-full mb-6">
                <option className="text-secondary">Seller</option>
                <option className="text-secondary">Buyer</option>
                <option className="text-secondary">Admin</option>
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
