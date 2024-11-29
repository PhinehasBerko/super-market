import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";

type IProps = {
  showButton?: boolean;
  link?: string;
  className?: string;
};

const LinkButton = ({ showButton, link, className }: IProps) => {
  const newClassName = twMerge(
    "bg-darkText hover:bg-darkText/70 text-whiteText gap-2 px-6 py-3 rounded-full flex items-center duration-200",
    className
  );
  return (
    <Link to={link ? link : "/product"} className={newClassName}>
      {showButton && <FaArrowLeft />} Start Shopping
    </Link>
  );
};

export default LinkButton;
