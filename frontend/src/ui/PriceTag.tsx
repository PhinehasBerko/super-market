import React from "react";
import FormattedPrice from "./FormattedPrice";
import { twMerge } from "tailwind-merge";

interface IProps {
  regularPrice?: number;
  discountedPrice?: number;
  className?: string;
}
const PriceTag = ({ regularPrice, discountedPrice, className }: IProps) => {
  return (
    <div className={twMerge(`flex items-center gap-2`, className)}>
      <p className="line-through text-gray-500 font-medium">
        <FormattedPrice amount={regularPrice} />
      </p>
      <p className="text-skyText font-medium">
        <FormattedPrice amount={discountedPrice} />
      </p>
    </div>
  );
};

export default PriceTag;
