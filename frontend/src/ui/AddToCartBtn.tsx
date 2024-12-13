import React, { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import { IProductProps } from "../types";
import { store } from "../lib/store";
import toast from "react-hot-toast";
import { FaMinus, FaPlus } from "react-icons/fa";

const AddToCartBtn = ({
  className,
  title,
  product,
}: {
  className?: string;
  title?: string;
  product?: IProductProps;
}) => {
  const [existingProduct, setExistingProduct] = useState<IProductProps | null>(
    null
  );

  const { addToCart, cartProduct, decreaseQuantity } = store();

  const newClassName = twMerge(
    "uppercase text-xs font-semibold cursor-pointer bg-[#f7f7f7] py-3 rounded-full hover:bg-black hover:text-whiteText hover:scale-105 duration-200 transition-transform",
    className
  );

  console.log("cartProduct:", cartProduct);

  const handleAddCart = () => {
    if (product) {
      addToCart(product);
      toast.success(`${product?.name.substring(0, 10)} added successfully`);
    } else {
      toast.error("Product is undefined");
    }
  };
  useEffect(() => {
    const availableItem = cartProduct.find(
      (item) => item?._id === product?._id
    );
    setExistingProduct(availableItem || null);
  }, [cartProduct, product?._id]);

  const handleAddToCart = () => {
    if (product) {
      addToCart(product);
      toast.success(`${product?.name.substring(0, 10)} added successfully`);
    } else {
      toast.error("You can not decrease less than 1");
    }
  };
  const handleDeleteProduct = () => {
    if (existingProduct) {
      if (existingProduct?.quantity > 1) {
        decreaseQuantity(existingProduct?._id);
        toast.success(
          `${product?.name.substring(0, 10)} decrease successfully`
        );
      } else {
        toast.error("You can not decrease less than 1");
      }
    } //else{
    //   toast.error("You can not decrease less than 1")
    // }
  };
  return (
    <>
      {existingProduct ? (
        <div className="flex self-center items-center justify-center gap-5">
          <button
            onClick={handleDeleteProduct}
            className="bg-[#f7f7f7] text-black p-2 border-[1px] border-gray-200 hover:border-skyText rounded-full text-sm hover:bg-white duration-200 cursor-pointer"
          >
            <FaMinus />
          </button>
          <p>{existingProduct?.quantity}</p>
          <button
            onClick={handleAddToCart}
            className="bg-[#f7f7f7] text-black p-2 border-[1px] border-gray-200 hover:border-skyText rounded-full text-sm hover:bg-white duration-200 cursor-pointer"
          >
            <FaPlus />
          </button>
        </div>
      ) : (
        <button onClick={handleAddCart} className={newClassName}>
          {title ? title : "Add to Cart"}
        </button>
      )}
    </>
  );
};

export default AddToCartBtn;
