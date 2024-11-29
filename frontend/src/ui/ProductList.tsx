import React from "react";
import Container from "./Container";
import Title from "./Title";
import { Link } from "react-router-dom";
import { PaginatedItems } from "./Pagination";

const ProductList = () => {
  return (
    <Container>
      <div>
        <div className="flex justify-between text-center">
          <Title text="Top Selling Products" />
          <Link to={`/product`} className="relative group overflow-hidden">
            View All Products{" "}
            <span className="w-full absolute h-[1px] left-0 bottom-3 transition-transform -translate-x-[105%] bg-gray-500 group-hover:translate-x-0 duration-200" />
          </Link>
        </div>
        <div className="w-full h-[1px] bg-gray-300 mt-3" />
      </div>
    </Container>
  );
};

export default ProductList;
