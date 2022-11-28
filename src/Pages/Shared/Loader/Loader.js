import React from "react";
import { ScaleLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="bg-primary min-h-screen flex justify-center flex-col gap-4 items-center">
      <h2 className="text-success font-medium">
        Hang tight, you are almost there!
      </h2>
      <ScaleLoader color="#00C49A" height="50px" width="5px" />
    </div>
  );
};

export default Loader;
