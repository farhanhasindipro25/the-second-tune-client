import React from "react";

const NotFoundRoute = () => {
  return (
    <div>
      <div className="bg-secondary flex items-center justify-center flex-col h-screen">
        <iframe
          src="https://giphy.com/embed/SDUiharA58JhGCwDqP"
          width="280"
          height="280"
          className="giphy-embed rounded-full"
          allowFullScreen
          title="Route Not Found"
        ></iframe>
        <h4 className="text-center fw-semibold mt-4 text-white">
          Sorry, that address could not be found.
        </h4>
      </div>
    </div>
  );
};

export default NotFoundRoute;
