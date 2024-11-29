import React, { useState } from "react";
import { MdOutlineStarOutline } from "react-icons/md";
import { IProductProps } from "../types";
import AddToCartBtn from "./AddToCartBtn";
import {
  Button,
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import FormattedPrice from "./FormattedPrice";
import ProductCardSideNav from "./ProductCardSideNav";
import { useNavigate } from "react-router-dom";

interface IProps {
  item: IProductProps;
  setSearchText?: any;
}
const ProductCard = ({ item, setSearchText }: IProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigator = useNavigate();
  const open = () => {
    setIsOpen(true);
  };
  const close = () => {
    setIsOpen(false);
  };
  const handleProduct = () => {
    navigator(`/product/${item?._id}`);
    setSearchText && setSearchText("");
  };
  const percentage =
    ((item?.regularPrice - item?.discountedPrice) / item?.regularPrice) * 100;
  return (
    <div className="border rounded-lg bg-gray-100 p-2 hover:border-black duration-200 overflow-hidden cursor-pointer">
      <div className="w-full h-60 relative p-2 group">
        <span
          onClick={open}
          className="absolute bg-black text-skyText left-0 right-0 w-16 rounded-md p-1  font-semibold text-xs text-center inline-block z-10 cursor-pointer"
        >
          save {percentage.toFixed(0)}%
        </span>
        <img
          src={item?.images[0]}
          alt="product image"
          className="w-full h-full rounded-md object-cover group-hover:scale-110"
          onClick={handleProduct}
        />
        <ProductCardSideNav />
      </div>
      <div className="flex flex-col gap-2 px-2 pb-2">
        <h3 className="uppercase text-xs font-semibold text-lightText">
          {item?.overView}
        </h3>
        <h2 className="text-lg font-bold line-clamp-2">{item?.name}</h2>
        <div className="flex text-base text-lightText items-center">
          <MdOutlineStarOutline />
          <MdOutlineStarOutline />
          <MdOutlineStarOutline />
          <MdOutlineStarOutline />
          <MdOutlineStarOutline />
        </div>
        <AddToCartBtn />
      </div>
      <Transition appear show={isOpen}>
        <Dialog
          as="div"
          className="relative z-10 focus:outline-none"
          onClose={close}
        >
          <div className="fixed inset-0 z-10 w-screen overflow-auto">
            <div className="flex min-h-full items-center justify-center p-4 ">
              <TransitionChild
                enter="ease-out duration-300"
                enterFrom="opacity-0 transform-[scale(95%)]"
                enterTo="opacity-100 transform-[scale(100%)]"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 transform-[scale(100%)]"
                leaveTo="opacity-0 transform-[scale(95%)]"
              >
                <DialogPanel className="w-full max-w-md rounded-xl backdrop-blur-2xl bg-black z-50 p-6 ">
                  <DialogTitle
                    as="h3"
                    className="text-base/7 font-medium text-whiteText"
                  >
                    Hurry Up!
                  </DialogTitle>
                  <p className="mt-2 text-sm/6 text-whiteText/50 ">
                    You are going to save{" "}
                    <span className="text-skyText">
                      <FormattedPrice
                        amount={item?.regularPrice - item?.discountedPrice}
                      />{" "}
                    </span>
                    from this product.
                  </p>
                  <p className="text-sm/6 text-white/50">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Voluptas ipsa odit ea voluptates iure assumenda consectetur?
                    Aliquam, dolorum.
                  </p>
                  <div className="mt-4">
                    <Button
                      onClick={close}
                      className="inline-flex items-center gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10"
                    >
                      Got it,Thanks!
                    </Button>
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default ProductCard;
