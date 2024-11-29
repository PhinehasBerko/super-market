import React from "react";
import { twMerge } from "tailwind-merge";
import { IProductProps } from "../types";

const AddToCartBtn = ({
  className,
  title,
}: // product,
{
  className?: string;
  title?: string;
  product?: IProductProps;
}) => {
  const newClassName = twMerge(
    "uppercase text-xs font-semibold cursor-pointer bg-[#f7f7f7] py-3 rounded-full hover:bg-black hover:text-whiteText hover:scale-105 duration-200 transition-transform",
    className
  );
  return (
    <button className={newClassName}>{title ? title : "Add to Cart"}</button>
  );
};

export default AddToCartBtn;
