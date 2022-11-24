import React from "react";

const HeroSection = () => {
  return (
    <div>
      <div className="hero bg-primary py-36">
        <div className="hero-content flex-col lg:flex-row-reverse gap-36">
          <img
            src="https://media.istockphoto.com/id/1279654034/photo/studio-microphone-and-pop-shield-on-mic-in-the-empty-recording-studio-with-copy-space.jpg?s=612x612&w=0&k=20&c=hoYDQnNkbwHr4fXKz1eRyxTAXwGZeNvBEKBLqpX-DLg="
            className="max-w-xl rounded-lg shadow-2xl"
            alt=""
          />
          <div>
            <h1 className="text-5xl font-bold">
              Welcome to <br /> <span>THE SECOND TUNE</span>
            </h1>
            <p className="py-6">
              The best place for second-hand musical accessories!
            </p>
            <button className="btn btn-accent">START EXPLORING</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
