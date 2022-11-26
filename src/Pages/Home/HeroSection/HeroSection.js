import React from "react";

const HeroSection = () => {
  return (
    <div>
      <div className="hero bg-primary lg:min-h-screen lg:py-36">
        <div className="hero-content flex-col lg:flex-row-reverse lg:gap-36">
          <img
            src="https://media.istockphoto.com/id/1279654034/photo/studio-microphone-and-pop-shield-on-mic-in-the-empty-recording-studio-with-copy-space.jpg?s=612x612&w=0&k=20&c=hoYDQnNkbwHr4fXKz1eRyxTAXwGZeNvBEKBLqpX-DLg="
            className="rounded-lg shadow-2xl"
            alt=""
          />
          <div className="">
            <h1 className="text-5xl font-bold lg:text-start md:text-center sm:text-center text-center">
              Welcome to <br /> <span>THE SECOND TUNE</span>
            </h1>
            <p className="py-6 lg:text-start md:text-center sm:text-center text-center">
              The best place for second-hand musical accessories!
            </p>
            <button className="btn btn-success btn-outline md:flex lg:mx-0 md:mx-auto sm:flex sm:mx-auto flex mx-auto">
              START EXPLORING
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
