import React, { useContext } from "react";
import { AuthContext } from "../../../Contexts/AuthProvider";
import useTitle from "../../../Hooks/useTitle";

const Dashboard = () => {
  useTitle("Dashboard");
  const { user } = useContext(AuthContext);

  return (
    <div>
      <h2 className="text-success text-3xl font-semibold text-center flex justify-center mt-16">
        Welcome to your dashboard, {user.displayName || user.name}.
      </h2>
      <div className="flex justify-center items-center gap-3 mt-16 flex-wrap">
        <div className="bg-secondary border-accent border py-0 px-5">
          <iframe
            src="https://giphy.com/embed/xUA7b8YlVHZbfKundK"
            width="250"
            height="250"
            title="Welcome to dashboard"
          ></iframe>
        </div>
        <div className="bg-secondary border-accent border py-0 px-5">
          <iframe
            src="https://giphy.com/embed/3o85xx69HG11jP4QIo"
            width="250"
            height="250"
            allowFullScreen
            title="Welcome to dashboard"
          ></iframe>
        </div>
        <div className="bg-secondary border-accent border py-0 px-5">
          <iframe
            src="https://giphy.com/embed/eTCp5uFml20SI"
            width="250"
            height="250"
            allowFullScreen
            title="Welcome to dashboard"
          ></iframe>
        </div>
        <div className="bg-secondary border-accent border py-0 px-5">
          <iframe
            src="https://giphy.com/embed/Eb63LPCiBNwRy"
            width="250"
            height="250"
            allowFullScreen
            title="Welcome to dashboard"
          ></iframe>
        </div>
        <div className="bg-secondary border-accent border py-0 px-5">
          <iframe
            src="https://giphy.com/embed/3o6ZtpxSZbQRRnwCKQ"
            width="250"
            height="250"
            allowFullScreen
            title="Welcome to dashboard"
          ></iframe>
        </div>
        <div className="bg-secondary border-accent border py-0 px-5">
          <iframe
            src="https://giphy.com/embed/3orif97kZpzRgTdRCM"
            width="250"
            height="250"
            allowFullScreen
            title="Welcome to dashboard"
          ></iframe>
        </div>
        <div className="bg-secondary border-accent border py-0 px-5">
          <iframe
            src="https://giphy.com/embed/3og0IPBdowkBBNtKTK"
            width="250"
            height="250"
            allowFullScreen
            title="Welcome to dashboard"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
