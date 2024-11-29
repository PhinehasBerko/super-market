import React from "react";
import { HiArrowLeft } from "react-icons/hi2";

const CustomLeftArrow = ({ onClick }: any) => {
  return (
    <button
      onClick={onClick}
      className="absolute flex left-0 top-5 m-auto w-10 h-10 rounded-full border-[1px]  items-center justify-center bg-gray-100 hover:bg-gray-950 hover:text-white duration-200 "
      aria-label="Next"
    >
      <HiArrowLeft className="text-base" />
    </button>
  );
};

export default CustomLeftArrow;
