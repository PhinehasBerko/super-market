import React from "react";
import Container from "./Container";
import { homeBanner } from "../assets";
import LinkButton from "./LinkButton";

const HomeBanner = () => {
  return (
    <Container className="relative py-5 overflow-hidden">
      <div className="relative">
        <img
          src={homeBanner}
          alt="homeBanner"
          className="rounded-md w-full h-full"
        />
        <div className="bg-darkText/30 w-full h-full absolute top-0 left-0 rounded-md" />
      </div>
      <div className="absolute inset-0 justify-center flex flex-col px-20 bg-cover">
        <h2 className="font-bold text-lg md:text-4xl lg:text-6xl text-whiteText">
          Mi Air Purifier
        </h2>
        <p className="text-base text-white/40 max-w-[250px] leading-6">
          This is the Best place to get all your tech Devices
        </p>
        <LinkButton className="w-44 bg-whiteText text-darkText hover:bg-darkText hover:text-whiteText duration-200 mt-4 z-50" />
      </div>
    </Container>
  );
};

export default HomeBanner;
