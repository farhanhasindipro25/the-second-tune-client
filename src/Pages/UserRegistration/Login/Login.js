import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Contexts/AuthProvider";
import useTitle from "../../../Hooks/useTitle";

const Login = () => {
  useTitle("Login");
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const navigate = useNavigate();

  const [loginError, setLoginError] = useState("");
  const { signIn, providerLogin } = useContext(AuthContext);

  const googleProvider = new GoogleAuthProvider();

  const handleGoogleSignIn = () => {
    providerLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success("Logged in successfully!");
        navigate("/");
      })
      .catch((error) => console.error(error));
  };

  const handleLogin = (data) => {
    console.log(data);
    setLoginError("");
    signIn(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success("Logged in successfully!");
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
        setLoginError(error.message);
      });
  };

  return (
    <div className="flex justify-center items-center bg-primary">
      <div className="w-96 bg-secondary rounded-3xl p-10 my-20">
        <h2 className="text-4xl text-center my-6 text-white">Login</h2>
        <form
          className="container mx-auto"
          onSubmit={handleSubmit(handleLogin)}
        >
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
                  message: "Password must be alteast 6 characters longer!",
                },
              })}
              className="input input-bordered input-primary text-secondary"
              placeholder="Your Password"
            />
            {errors.password && (
              <p className="text-red-400 ml-1 mt-3" role="alert">
                {errors.password?.message}
              </p>
            )}

            <label className="label">
              <span className="label-text text-white">Forgot Password?</span>
            </label>
          </div>
          <input
            className="btn btn-success w-full"
            value="Login"
            type="submit"
          />
          {loginError === "Firebase: Error (auth/user-not-found)." && (
            <p className="text-error text-center mt-4">
              Invalid Email. User not found!
            </p>
          )}
          {loginError === "Firebase: Error (auth/wrong-password)." && (
            <p className="text-error text-center mt-4">Wrong Password</p>
          )}
        </form>
        <p className="text-center mt-6 text-white">
          Don't have an account?{" "}
          <Link to="/signup" className="text-success">
            Sign up.
          </Link>
        </p>
        <div className="divider text-white">OR</div>
        <button
          className="btn btn-outline btn-success w-full"
          onClick={handleGoogleSignIn}
        >
          Login with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
