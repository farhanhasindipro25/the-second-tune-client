import React from "react";
import useTitle from "../../../Hooks/useTitle";

const Dashboard = () => {
  useTitle("Dashboard");
  // const { user, updateUser } = useContext(AuthContext);
  // const { userInfo } = updateUser;
  // console.log(userInfo);

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
        {/* Welcome to your dashboard, {user.displayName || user.name} */}
      </h2>
    </div>
  );
};

export default Dashboard;
