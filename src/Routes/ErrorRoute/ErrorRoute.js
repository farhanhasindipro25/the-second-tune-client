import React, { useContext } from "react";
import { toast } from "react-hot-toast";
import { useNavigate, useRouteError } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider";

const ErrorRoute = () => {
  const error = useRouteError();
  const { logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success("Logged out successfully!");
        navigate("/");
      })
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <div className="bg-secondary flex items-center justify-center flex-col h-screen">
        <iframe
          src="https://giphy.com/embed/nVTa8D8zJUc2A"
          width="480"
          height="480"
          className="giphy-embed rounded-full"
          allowFullScreen
          title="Route Not Found"
        ></iframe>
        <h4 className="text-center text-4xl text-error font-semibold mt-6 ">
          {error.statusText || error.message}
        </h4>
        <h4 className="text-center text-xl text-accent font-medium mt-6 ">
          Try{" "}
          <span className="text-success" onClick={handleLogOut}>
            logging out
          </span>{" "}
          and signing in again
        </h4>
      </div>
    </div>
  );
};

export default ErrorRoute;
