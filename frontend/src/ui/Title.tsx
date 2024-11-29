import React from "react";
import { twMerge } from "tailwind-merge";

type IProps = {
  text: string;
  className?: string;
};
const Title = ({ text, className }: IProps) => {
  const newClassName = twMerge(
    " sm:font-bold sm:text-sm md:text-xl sm:leading-1 lg:text-4xl",
    className
  );
  return <div className={newClassName}>{text}</div>;
};

export default Title;
