import React, { useContext } from "react";
import { AuthContext } from "../../../Contexts/AuthProvider";
import useTitle from "../../../Hooks/useTitle";

const Dashboard = () => {
  useTitle("Dashboard");
  const { user } = useContext(AuthContext);

  return (
    <div>
      <div className="flex justify-center items-center mt-16">
        <iframe
          src="https://giphy.com/embed/xUA7b8YlVHZbfKundK"
          width="400"
          height="400"
          className="rounded-full"
          title="Welcome to dashboard"
        ></iframe>
      </div>
      <h2 className="text-success text-3xl font-semibold flex justify-center">
        Welcome to your dashboard, {user.displayName || user.name}
      </h2>
    </div>
  );
};

export default Dashboard;
