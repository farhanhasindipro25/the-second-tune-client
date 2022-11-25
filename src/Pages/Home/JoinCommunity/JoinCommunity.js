import React from "react";

const JoinCommunity = () => {
  return (
    <div className="bg-success">
      <h2 className="text-secondary text-3xl font-bold text-center pt-12">
        Join our community
      </h2>
      <p className="text-center text-secondary mt-3">
        We will send you all the information in your email.
      </p>
      <div className="container mx-auto mt-6 pb-12 flex justify-center gap-4">
        <input
          type="email"
          placeholder="Your Email Address"
          className="input input-bordered text-secondary input-secondary w-9/12"
        />
        <button className="btn btn-secondary">SUBMIT</button>
      </div>
    </div>
  );
};

export default JoinCommunity;
