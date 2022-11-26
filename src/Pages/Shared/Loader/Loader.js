import React from "react";
import { ScaleLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="bg-primary min-h-screen flex justify-center items-center">
      <ScaleLoader color="#00C49A" height="70px" width="5px" />
    </div>
  );
};

export default Loader;
