import React, { useContext } from "react";
import { AuthContext } from "../../../Contexts/AuthProvider";
import useTitle from "../../../Hooks/useTitle";

const Dashboard = () => {
  useTitle("Dashboard");
  const { user } = useContext(AuthContext);

  return (
    <div>
      <div className="flex justify-center items-center mt-28">
        <iframe
          src="https://giphy.com/embed/xUA7b8YlVHZbfKundK"
          width="250"
          height="250"
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
