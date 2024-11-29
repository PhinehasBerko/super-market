import React from "react";
import Container from "./Container";
import Title from "./Title";
import { Link } from "react-router-dom";
import {
  brandFive,
  brandFour,
  brandOne,
  brandThree,
  brandTwo,
  discountImgOne,
  discountImgTwo,
} from "../assets";

const DiscountedBanner = () => {
  const popularSearchItems = [
    { title: "Smart Watches", link: "smartWatches" },
    { title: "Headphone", link: "headphones" },
    { title: "Cameras", link: "camerasAndPhotos" },
    { title: "Audio", link: "tvAndAudio" },
    { title: "Laptop & Computers", link: "computersAndLaptop" },
    { title: "Cell Phone", link: "cellPhones" },
  ];
  return (
    <Container>
      <Title text="Popular Search" />
      <div className="h-[2px] bg-gray-300 mt-4 shadow-lg border" />
      <div className="mt-7 flex flex-wrap gap-4 items-center">
        {popularSearchItems?.map((item) => (
          <Link
            key={item.title}
            to={`/category/${item?.link}`}
            className="rounded-full px-8 py-3 border border-gray-300 font-medium capitalize duration-200 mx-3 hover:bg-black hover:text-whiteText items-center"
          >
            {item.title}
          </Link>
        ))}
      </div>
      <div className="w-full py-5 md:py-0 my-12 bg-[#f6f6f6] rounded-lg flex items-center justify-between overflow-hidden">
        <img
          src={discountImgOne}
          alt="discountImgOne"
          className=" hidden lg:inline-flex h-36"
        />
        <div className="flex flex-col flex-1 items-center">
          <div className="flex items-center justify-center gap-x-3 text-xl md:text-4xl  font-bold">
            <h2>Sony Headpone</h2>
            <Link
              to={`/product`}
              className="border-red-600 border rounded-full py-3 px-2 text-red-500 text-lg"
            >
              Discount 20%
            </Link>
          </div>
          <p className="text-sm font-semibold text-gray-600">
            You're out to play or stepping out to make
          </p>
        </div>
        <img
          src={discountImgTwo}
          className="hidden lg:inline-flex h-36"
          alt="discountImgTwo"
        />
      </div>
      <div className="mt-7">
        <p className="font-bold text-2xl">Brands We Distribute</p>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 mt-7">
          <div className="border   border-gray-300 flex items-center justify-center px-6 py-2 cursor-pointer group">
            <img
              src={brandOne}
              alt="brandOne"
              className="w-36 h-auto group-hover:opacity-50 duration-300"
            />
          </div>
          <div className="border  border-gray-300 flex items-center justify-center px-6 py-2 cursor-pointer group">
            <img
              src={brandTwo}
              alt="brandTwo"
              className="w-36 h-auto group-hover:opacity-50 duration-300"
            />
          </div>
          <div className="border  border-gray-300 flex items-center justify-center px-6 py-2 cursor-pointer group">
            <img
              src={brandThree}
              alt="brandThree"
              className="w-36 h-auto group-hover:opacity-50 duration-300"
            />
          </div>
          <div className="border  border-gray-300 flex items-center justify-center px-6 py-2 cursor-pointer group">
            <img
              src={brandFour}
              alt="brandFour"
              className="w-36 h-auto group-hover:opacity-50 duration-300"
            />
          </div>
          <div className="border  border-gray-300 flex items-center justify-center px-6 py-2 cursor-pointer group">
            <img
              src={brandFive}
              alt="brandFive"
              className="w-36 h-auto group-hover:opacity-50 duration-300"
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default DiscountedBanner;
