import React from "react";
import banner1 from "../../../assets/carousel/banner1.jpg";
import banner2 from "../../../assets/carousel/banner2.jpg";
import banner3 from "../../../assets/carousel/banner3.jpg";
import banner4 from "../../../assets/carousel/banner4.jpg";

const Carousel = () => {
  return (
    <div className="bg-primary pt-28 pb-32">
      <h2 className="text-3xl text-center font-bold text-success mb-6">
        SHOWER YOUR INNER TUNES THROUGH
      </h2>
      <p className="text-center text-accent text-md font-normal w-1/2 mx-auto">
        Let us take a stand to spread our inner symphony on and through to
        everyone we connect, or play music with. Let's embrace this beautiful,
        delicate entity. Let's make it beautiful.
      </p>
      <div className="container mx-auto mt-14">
        <div className="carousel w-full rounded-3xl">
          <div id="slide1" className="carousel-item relative w-full">
            <img src={banner3} className="w-full" alt="" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide4" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <img src={banner1} className="w-full" alt="" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <img src={banner2} className="w-full" alt="" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide4" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide4" className="carousel-item relative w-full">
            <img src={banner4} className="w-full" alt="" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide3" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide1" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
