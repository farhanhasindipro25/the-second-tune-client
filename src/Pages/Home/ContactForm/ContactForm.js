import React from "react";

const ContactForm = () => {
  return (
    <div className="bg-primary">
      <div className="container mx-auto">
        <h2 className="text-success text-center text-3xl font-semibold pt-20">
          GET IN TOUCH
        </h2>
        <div className="pt-14 flex justify-center">
          <input
            type="text"
            placeholder="Subject"
            className="input input-bordered input-success text-secondary w-1/2"
          />
        </div>
        <div className="pt-4 flex justify-center">
          <input
            type="email"
            placeholder="Your Email ID"
            className="input input-bordered input-success text-secondary w-1/2"
          />
        </div>
        <div className="pt-4 flex justify-center">
          <textarea
            className="textarea textarea-success text-secondary w-1/2"
            placeholder="Message"
          ></textarea>
        </div>
        <div className="flex justify-center mt-4 pb-14">
          <button className="btn btn-success">SUBMIT</button>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
