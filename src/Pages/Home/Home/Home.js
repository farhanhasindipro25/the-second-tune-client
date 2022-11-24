import React from "react";
import useTitle from "../../../Hooks/useTitle";
import HeroSection from "../HeroSection/HeroSection";
import HomeCategories from "../HomeCategories/HomeCategories";

const Home = () => {
  useTitle("Home");
  return (
    <div>
      <HeroSection></HeroSection>
      {/* <Advertisements></Advertisements> */}
      <HomeCategories></HomeCategories>
    </div>
  );
};

export default Home;
