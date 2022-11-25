import React from "react";
import useTitle from "../../../Hooks/useTitle";
import HeroSection from "../HeroSection/HeroSection";
import HomeCategories from "../HomeCategories/HomeCategories";
import JoinCommunity from "../JoinCommunity/JoinCommunity";
import WorkingProcess from "../WorkingProcess/WorkingProcess";

const Home = () => {
  useTitle("Home");
  return (
    <div>
      <HeroSection></HeroSection>
      {/* <Advertisements></Advertisements> */}
      <HomeCategories></HomeCategories>
      <WorkingProcess></WorkingProcess>
      <JoinCommunity></JoinCommunity>
    </div>
  );
};

export default Home;
