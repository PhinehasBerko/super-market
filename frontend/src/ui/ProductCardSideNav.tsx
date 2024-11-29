import React from "react";
import { FaRegEye, FaRegStar } from "react-icons/fa";
import { LuArrowRightLeft } from "react-icons/lu";

const ProductCardSideNav = () => {
  return (
    <div className="absolute top-1 right-1 flex flex-col gap-1 transition translate-x-12 group-hover:translate-x-0 duration-300">
      <span className="w-11 h-11 inline-flex text-black text-lg items-center justify-center rounded-full hover:text-white hover:bg-black duration-200 ">
        <FaRegStar />
      </span>
      <span className="w-11 h-11 inline-flex text-black text-lg items-center justify-center rounded-full hover:text-white hover:bg-black duration-200 ">
        <LuArrowRightLeft />
      </span>
      <span className="w-11 h-11 inline-flex text-black text-lg items-center justify-center rounded-full hover:text-white hover:bg-black duration-200 ">
        <FaRegEye />
      </span>
    </div>
  );
};

export default ProductCardSideNav;
