import React from "react";
import { twMerge } from "tailwind-merge";

interface IProps {
  children: React.ReactNode;
  className?: string;
}
const Container = ({ children, className }: IProps) => {
  const newClassName = twMerge(
    "max-w-screen-xl mx-auto py-8 px-12 lg:px-8  items-center ",
    className
  );
  return <div className={newClassName}>{children}</div>;
};

export default Container;
